export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: number;
  category: string;
  tags: string[];
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '¿Por qué necesitas un seguro de vida?',
    excerpt: 'Descubre las razones fundamentales por las que un seguro de vida es esencial para proteger a tu familia y asegurar su futuro financiero.',
    content: `
      <p>Un seguro de vida es una de las decisiones financieras más importantes que puedes tomar. No se trata solo de protegerte a ti mismo, sino de asegurar el futuro de las personas que más te importan.</p>
      
      <h3>¿Qué cubre un seguro de vida?</h3>
      <ul>
        <li>Gastos funerarios</li>
        <li>Deudas pendientes</li>
        <li>Educación de los hijos</li>
        <li>Mantenimiento del nivel de vida familiar</li>
      </ul>
      
      <p>La realidad es que nadie está exento de imprevistos. Un seguro de vida te da la tranquilidad de saber que tu familia estará protegida económicamente, sin importar lo que pase.</p>
    `,
    author: 'Alejandro Martinez',
    publishDate: '2024-01-15',
    readTime: 5,
    category: 'Seguros de Vida',
    tags: ['seguro de vida', 'protección familiar', 'planificación financiera'],
    image: '/blog/seguro-vida.jpg'
  },
  {
    id: '2',
    title: 'Guía completa para elegir el mejor seguro de auto',
    excerpt: 'Aprende a comparar y seleccionar el seguro de auto que mejor se adapte a tus necesidades y presupuesto.',
    content: `
      <p>Elegir el seguro de auto adecuado puede ser abrumador con tantas opciones disponibles. Te ayudo a entender los factores clave para tomar la mejor decisión.</p>
      
      <h3>Tipos de cobertura</h3>
      <ul>
        <li><strong>Responsabilidad Civil:</strong> Cubre daños a terceros</li>
        <li><strong>Cobertura Amplia:</strong> Incluye daños a tu vehículo</li>
        <li><strong>Cobertura Total:</strong> La protección más completa</li>
      </ul>
      
      <p>Recuerda que el precio no es lo único que importa. La calidad del servicio y la rapidez en la atención son igualmente importantes.</p>
    `,
    author: 'Alejandro Martinez',
    publishDate: '2024-01-10',
    readTime: 7,
    category: 'Seguros de Auto',
    tags: ['seguro de auto', 'comparación', 'cobertura'],
    image: '/blog/seguro-auto.jpg'
  },
  {
    id: '3',
    title: 'Seguros para emprendedores: Protege tu negocio',
    excerpt: 'Descubre los seguros esenciales que todo emprendedor debe considerar para proteger su inversión y continuidad del negocio.',
    content: `
      <p>Como emprendedor, tu negocio es tu mayor inversión. Protegerlo con los seguros adecuados es fundamental para su crecimiento y sostenibilidad.</p>
      
      <h3>Seguros básicos para emprendedores</h3>
      <ul>
        <li><strong>Seguro de Responsabilidad Civil:</strong> Protege contra demandas</li>
        <li><strong>Seguro de Propiedad:</strong> Cubre equipos e instalaciones</li>
        <li><strong>Seguro de Interrupción de Negocio:</strong> Mantiene el flujo de efectivo</li>
      </ul>
      
      <p>Un buen asesor de seguros puede ayudarte a identificar los riesgos específicos de tu industria y diseñar una estrategia de protección personalizada.</p>
    `,
    author: 'Alejandro Martinez',
    publishDate: '2024-01-05',
    readTime: 6,
    category: 'Seguros Empresariales',
    tags: ['emprendedores', 'negocios', 'protección empresarial'],
    image: '/blog/seguro-empresarial.jpg'
  },
  {
    id: '4',
    title: 'Cómo ahorrar dinero en tus seguros sin perder cobertura',
    excerpt: 'Consejos prácticos para optimizar el costo de tus seguros manteniendo la protección que necesitas.',
    content: `
      <p>Muchas personas piensan que ahorrar en seguros significa reducir la cobertura, pero hay formas inteligentes de optimizar costos sin comprometer la protección.</p>
      
      <h3>Estrategias de ahorro</h3>
      <ul>
        <li>Compara múltiples cotizaciones</li>
        <li>Considera deducibles más altos</li>
        <li>Agrupa tus pólizas</li>
        <li>Mantén un buen historial crediticio</li>
      </ul>
      
      <p>La clave está en encontrar el equilibrio perfecto entre costo y cobertura. Un asesor profesional puede ayudarte a identificar oportunidades de ahorro específicas para tu situación.</p>
    `,
    author: 'Alejandro Martinez',
    publishDate: '2024-01-01',
    readTime: 4,
    category: 'Ahorro',
    tags: ['ahorro', 'optimización', 'costos'],
    image: '/blog/ahorro-seguros.jpg'
  }
];

export const categories = [
  'Todos',
  'Seguros de Vida',
  'Seguros de Auto',
  'Seguros Empresariales',
  'Ahorro'
]; 