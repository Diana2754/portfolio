
const Experience = () => {
  const experiences = [
    {
      title: 'Developer Front-end & QA',
      company: 'SwaplyAr',
      location: 'Argentina',
      period: 'Julio 2025 - Septiembre 2025',
      description: [
        'Desarrollo de plataforma web enfocada en conversión de divisas compatible con billeteras digitales',
        'Desarrollo y mantenimiento de interfaces responsivas usando NextJS, TypeScript y Tailwind CSS',
        'Colaboración estrecha con el equipo de diseño para entregar UI pixel-perfect alineada con mockups de Figma',
        'Gestión y consultas de bases de datos relacionales usando PostgreSQL',
        'Revisión de calidad y pruebas funcionales para asegurar un producto confiable'
      ],
      link: 'https://www.swaplyar.com/es/inicio',
    },
    {
      title: 'Developer Front-end & QA',
      company: 'Awaq ONGD',
      location: 'España',
      period: 'Noviembre 2024 - Julio 2025',
      description: [
        'Desarrollo de sitio web informativo para el 2° Congreso Internacional de Organizaciones Ambientales',
        'Diseño y desarrollo de sitio web enfocado en donaciones para el Festival Internacional de Títeres',
        'Mantenimiento de sitio web y actualizaciones regulares de contenido',
        'Implementación de diseño web, optimización de rendimiento, gestión de frameworks y librerías',
        'Aplicación de buenas prácticas de testing y control de calidad durante el desarrollo'
      ],
      link: 'https://congreso.somosawaq.org/',
    },
  ]

  return (
    <section id="experience" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Experiencia
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-violet-400">
                    {exp.company} - {exp.location}
                  </p>
                </div>
                <span className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 text-blue-600 dark:text-violet-400">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {exp.link && (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-violet-400 hover:underline"
                >
                  Ver proyecto →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience