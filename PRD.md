# Documento de Requisitos del Producto (PRD)

## Visión General
Construir una aplicación web moderna para escribir, gestionar y publicar blogs. La aplicación contará con un blog público, un panel de control seguro para gestionar el contenido e integraciones para monetización, correo electrónico y funciones impulsadas por IA.

---

## Objetivos
- Permitir a los usuarios (inicialmente solo a ti) escribir, editar y publicar entradas de blog.
- Habilitar la gestión sencilla de blogs a través de un panel de control seguro.
- Proporcionar una experiencia de escritura agradable con el editor TipTap.
- Soportar autenticación de usuarios y funciones de pago usando Stripe.
- Notificar a los usuarios/lectores por correo electrónico (Resend).
- Usar OpenAI para sugerencias de escritura o mejora de contenido.
- Alojar y desplegar sin problemas en Vercel.

---

## Páginas y Funcionalidades Principales

### 1. Página de Inicio (Landing Page)
- Breve introducción al blog/aplicación.
- Llamada a la acción (CTA) para registrarse/iniciar sesión.
- Lista de las últimas entradas de blog o destacadas (público).
- Diseño limpio y atractivo.

### 2. Panel de Control (Protegido)
- Requiere autenticación (Supabase Auth).
- Lista de todas las entradas de blog del autor.
- Crear una nueva entrada de blog (editor TipTap).
- Editar entradas existentes.
- Eliminar entradas.
- Cambiar la visibilidad de la entrada (publicado/borrador).
- Mostrar el estado de la entrada (publicado/borrador).
- Analíticas del blog (opcional, ej. vistas).

### 3. Blogs (Lista Pública de Blogs)
- Lista paginada o con scroll infinito de los blogs publicados.
- Filtrar/buscar por título, etiqueta o fecha.
- Cada entrada enlaza a la página individual del blog.

### 4. Página de Blog (Pública)
- Contenido completo de la entrada del blog.
- Información del autor y fecha de publicación.
- Botones para compartir (opcional).
- Entradas relacionadas (opcional).
- Suscripción a newsletter (opcional, usando Resend).

### 5. Autenticación (Inicio de Sesión/Registro)
- Inicio de sesión con correo/contraseña (Supabase).
- Enlace mágico (opcional).
- Gestión del perfil de usuario (opcional).

---

## Integraciones

- **Supabase:** Autenticación, almacenamiento de datos para usuarios y blogs.
- **Stripe:** Pagos para funciones premium (ej. newsletter de pago, contenido premium).
- **Resend:** Correos electrónicos transaccionales y de marketing (ej. notificaciones de nuevas entradas, newsletters).
- **OpenAI:** Sugerencias de escritura, corrección gramatical, generación automática de resúmenes, etc.
- **Vercel:** Alojamiento, CI/CD y gestión de entorno.
- **TipTap:** Editor de texto enriquecido para los blogs.

---

## Flujos de Usuario

### Visitar el blog (usuario anónimo)
1. Llega a la página de inicio, ve los últimos blogs.
2. Hace clic en un blog para leer la entrada completa.

### Escribir un blog (usuario autenticado)
1. Inicia sesión a través de la página de Autenticación.
2. Accede al panel de control.
3. Crea/edita una entrada de blog usando el editor TipTap.
4. Publica o guarda como borrador.

### Funciones Premium (a futuro)
1. Se suscribe a la newsletter/contenido de pago a través de Stripe.
2. Recibe notificaciones por correo electrónico (Resend).

---

## Modelo de Datos (Simplificado)

### Usuarios
- `id` (UUID)
- `email`
- `nombre`
- `estado_suscripcion` (vía Stripe)

### Blogs
- `id` (UUID)
- `id_autor` (FK a Usuarios)
- `titulo`
- `contenido` (JSON de texto enriquecido)
- `estado` (publicado/borrador)
- `fecha_creacion`
- `fecha_actualizacion`
- `fecha_publicacion`

---

## Requisitos No Funcionales

- **Rendimiento:** Cargas de página rápidas, optimizado para SEO.
- **Seguridad:** Panel de control autenticado, API segura.
- **Escalabilidad:** Preparado para múltiples usuarios (a futuro).
- **Adaptable (Responsive):** Soporte para móviles y escritorio.

---

## Hitos del Proyecto

### MVP (Producto Mínimo Viable)
- Página de inicio
- Autenticación
- Panel de control (crear, editar, listar blogs)
- Blogs públicos / página de blog
- Despliegue en Vercel

### Integraciones
- Resend para notificaciones por correo.
- OpenAI para ayudas de escritura.
- Stripe para pagos.