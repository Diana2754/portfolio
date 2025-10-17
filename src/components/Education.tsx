
const Education = () => {
    const education = [
        {
        degree: 'Técnico en Sistemas Informáticos',
        institution: 'Universidad Tecnológica Nacional (UTN)',
        location: 'Argentina',
        period: '2024 - 2027',
        },
        {
        degree: 'Formación en Programador Full Stack',
        institution: 'VALTECH | EDUCACIÓN IT',
        location: 'Argentina',
        period: '2024 - 2025',
        },
    ]

    return (
        <section id="education" className="py-20 px-6 bg-white dark:bg-gray-800">
        <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Educación
            </h2>
            <div className="space-y-6">
            {education.map((edu, index) => (
                <div
                key={index}
                className="bg-gray-50 dark:bg-gray-900 rounded-lg shadow-lg p-6"
                >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                </h3>
                <p className="text-blue-600 dark:text-violet-400 mb-1">
                    {edu.institution}
                </p>
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                    <span>{edu.location}</span>
                    <span>{edu.period}</span>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    )
}

export default Education