import foto from "../assets/foto.png";

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-12 px-6 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 md:min-h-0">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          <div className="flex-1 text-center md:text-left ml-0 sm:ml-0">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Hola, soy <span className="text-blue-600 dark:text-violet-900">Diana Alali</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6">
              Desarrolladora y QA Funcional
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
              Apasionada por construir soluciones digitales que optimicen procesos y mejoren la experiencia 
              de los usuarios. Tengo experiencia con React, TypeScript y Tailwind, y también me interesa el 
              aseguramiento de la calidad, testing y buenas prácticas de desarrollo. Busco aprender y aplicar 
              mis habilidades en proyectos que involucren desarrollo y control de calidad
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="px-6 py-3 pt-3 bg-violet-600 text-white rounded-lg hover:bg-violet-400 transition-colors font-semibold"
              >
                Contáctame
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-violet-400 dark:border-violet-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors font-semibold"
              >
                Ver Proyectos
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center mt-8 mb-8 md:mt-0 md:mb-0">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-violet-400 to-purple-800 flex items-center justify-center -mt-12">
                <img className="rounded-l-md" src={foto}></img>
              </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero