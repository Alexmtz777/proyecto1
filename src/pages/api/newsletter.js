import { supabase } from '../../lib/supabase-server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { subject, content } = body;

    // Validar datos requeridos
    if (!subject || !content) {
      return new Response(JSON.stringify({ error: 'Faltan campos requeridos' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Obtener el usuario autenticado
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return new Response(JSON.stringify({ error: 'No autorizado' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Verificar que el usuario es admin
    const { data: userData } = await supabase
      .from('users')
      .select('role')
      .eq('id', user.id)
      .single();

    if (!userData || userData.role !== 'admin') {
      return new Response(JSON.stringify({ error: 'Acceso denegado' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Obtener suscriptores activos
    const { data: subscribers, error: subscribersError } = await supabase
      .from('subscriptions')
      .select('email, name')
      .eq('is_active', true);

    if (subscribersError) throw subscribersError;

    // Registrar el envío
    const { data: sendRecord, error: sendError } = await supabase
      .from('newsletter_sends')
      .insert({
        subject,
        content,
        sent_by: user.id,
        recipient_count: subscribers.length
      })
      .select()
      .single();

    if (sendError) throw sendError;

    // Aquí normalmente enviarías los emails usando un servicio como SendGrid, Mailgun, etc.
    // Por ahora, solo simulamos el envío
    console.log(`Newsletter enviado a ${subscribers.length} suscriptores`);
    console.log('Asunto:', subject);
    console.log('Contenido:', content);

    return new Response(JSON.stringify({
      message: `Newsletter enviado exitosamente a ${subscribers.length} suscriptores`,
      sendRecord
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
} 