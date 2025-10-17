const Contact = () => {
    return (
        <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Contacto
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-8">
                ¿Tienes un proyecto en mente? ¡Hablemos!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a
                href="mailto:dianacc.alali@gmail.com"
                className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:shadow-md transition-all dark:hover:bg-gray-700 hover:scale-105"
                >
                <span className="text-3xl flex-shrink-0">📧</span>
                <div className="">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                    <p className="text-blue-600 dark:text-violet-400 text-sm md:text-base">
                    dianacc.alali@gmail.com
                    </p>
                </div>
                </a>
                <a
                href="https://www.linkedin.com/in/diana-alali-4973a7200/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:shadow-md transition-all dark:hover:bg-gray-700 hover:scale-105"
                >
                <span className="text-3xl flex-shrink-0">💼</span>
                <div className="overflow-hidden">
                    <h3 className="font-semibold text-gray-900 dark:text-white">LinkedIn</h3>
                    <p className="text-blue-600 dark:text-violet-400 break-words">Diana Alali</p>
                </div>
                </a>
                <a
                href="https://github.com/Diana2754"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:shadow-md transition-all dark:hover:bg-gray-700 hover:scale-105"
                >
                <span className="text-3xl flex-shrink-0">💻</span>
                <div className="overflow-hidden">
                    <h3 className="font-semibold text-gray-900 dark:text-white">GitHub</h3>
                    <p className="text-blue-600 dark:text-violet-400 break-words">@Diana2754</p>
                </div>
                </a>
                <a
                href="https://api.whatsapp.com/send/?phone=541123565612&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:shadow-md transition-all dark:hover:bg-gray-700 hover:scale-105"
                >
                <span className="text-3xl flex-shrink-0">📱</span>
                <div className="overflow-hidden">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Teléfono</h3>
                    <p className="text-blue-600 dark:text-violet-400 break-words">(911) 23565612</p>
                </div>
                </a>
            </div>
            </div>
        </div>
        </section>
    )
}

export default Contact