import { supabase } from '../../lib/supabase.js'

export async function POST({ request }) {
  try {
    const formData = await request.formData()
    const nombre = formData.get('nombre')
    const email = formData.get('email')
    const whatsapp = formData.get('whatsapp')
    const mensaje = formData.get('mensaje')
    
    // Guardar en base de datos Supabase
    const { data, error } = await supabase
      .from('leads')
      .insert([
        {
          nombre: nombre,
          email: email,
          whatsapp: whatsapp,
          mensaje: mensaje,
          fecha_creacion: new Date().toISOString()
        }
      ])
    
    if (error) {
      console.error('Error guardando en BD:', error)
      return new Response(JSON.stringify({ 
        success: false, 
        message: 'Error al guardar los datos' 
      }), { status: 500 })
    }
    
    // También enviar email (opcional)
    // Aquí puedes agregar lógica para enviar email
    
    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Datos guardados correctamente' 
    }), { status: 200 })
    
  } catch (error) {
    console.error('Error en el endpoint:', error)
    return new Response(JSON.stringify({ 
      success: false, 
      message: 'Error interno del servidor' 
    }), { status: 500 })
  }
} 