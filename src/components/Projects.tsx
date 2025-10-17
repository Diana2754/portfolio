const Projects = () => {
  const projects = [
    {
    title: 'Congreso Internacional de Organizaciones Ambientales',
    company: 'Awaq ONGD',
    period: 'Mayo 2025 - Julio 2025',
    description: [
      'Desarrollo de la página web oficial del Congreso Internacional de Organizaciones Ambientales 2025',
      'Diseño y maquetación de secciones informativas sobre ponencias, expositores y actividades',
      'Optimización de la experiencia de usuario con componentes interactivos desarrollados en React',
      'Integración de recursos multimedia y contenidos sostenibles para reforzar la comunicación del evento',
      'Coordinación con el equipo de comunicación para mantener consistencia en branding y mensajes clave'
  ],
    tags: ['React', 'JavaScript', 'CSS'],
    url: 'https://congreso.somosawaq.org/',      
    repo: '', 
},
    {
      title: 'Encuentro Internacional sobre la Biodiversidad',
      company: 'Awaq ONGD',
      period: 'Enero 2025 - Marzo 2025',
      description: [
        'Desarrollo de sitio web para el Festival Internacional de Títeres 2025',
        'Diseño de plataforma para recaudación de fondos y promoción de eventos',
        'Construcción de interfaz interactiva y responsiva usando React, JavaScript y CSS',
        'Implementación de componentes dinámicos para mejorar la experiencia de usuario',
        'Colaboración con el equipo de diseño y comunicación para mantener coherencia visual y optimizar la usabilidad del sitio',
        'Ejecución de pruebas manuales funcionales y de usabilidad para garantizar correcta navegación en distintas plataformas'
      ],
      tags: ['React', 'JavaScript', 'CSS'],
      url: 'https://encuentrodetiteres.somosawaq.org/',      
      repo: 'https://github.com/Diana2754/EncuentroInternacional2025',  
    },
    {
      title: 'Grow - E-commerce Platform',
      company: 'Fundación Pescar',
      period: 'Julio 2024 - Diciembre 2024',
      description: [
        'Desarrollo de plataforma de e-commerce simulada inspirada en Mercado Libre',
        'Enfoque en comercialización de productos y servicios para PyMEs y emprendedores',
        'Diseño de interfaz accesible, eficiente y funcional para mejorar visibilidad de productos',
        'Mejora del alcance y posicionamiento de usuarios en el mercado digital',
      ],
      tags: ['React', 'TypeScript', 'Tailwind', 'E-commerce'],
      url: 'https://grow-rust.vercel.app/',      
      repo: 'https://github.com/Diana2754/Grow',
    },
    {
      title: 'Tic Tac Toe',
      company: 'Proyecto Personal',
      period: 'Agosto 2024',
      description: [
        'Desarrollo de un juego interactivo de tres en línea utilizando React',
        'Implementación de la lógica de turnos, detección de ganador y reinicio de partida',
        'Diseño responsivo y experiencia de usuario fluida con CSS y componentes reutilizables',
        'Enfoque en la organización del estado y buenas prácticas de estructura de componentes',
        'Realización de pruebas manuales de flujo de juego, validación de estados y verificación de rendimiento para asegurar una experiencia sin errores'
  ],
      tags: ['React', 'JavaScript', 'CSS', 'Gaming'],
      url: 'https://creative-tapioca-894a32.netlify.app/',      
      repo: 'https://github.com/Diana2754/Tic-Tac-Toe',
}
  ]

  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Proyectos
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow flex flex-col"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-blue-600 dark:text-violet-400 mb-2">
                {project.company}
              </p>
              <span className="text-sm text-gray-600 dark:text-gray-400 mb-4 block">
                {project.period}
              </span>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4 flex-grow">
                {project.description.map((item, i) => (
                  <li key={i} className="flex items-start text-sm">
                    <span className="mr-2 text-violet-600 dark:text-violet-400">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-100 dark:bg-violet-900 text-blue-800 dark:text-violet-200 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 justify-end mt-auto pt-2 border-t border-gray-200 dark:border-gray-700">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Abrir proyecto ${project.title} en nueva pestaña`}
                    className="text-blue-600 dark:text-violet-400 hover:underline font-medium"
                  >
                    Ver proyecto 
                  </a>
                )}

                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver código de ${project.title} en GitHub`}
                    className="text-blue-600 dark:text-violet-400 hover:underline font-medium"
                  >
                    Ver código 
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects