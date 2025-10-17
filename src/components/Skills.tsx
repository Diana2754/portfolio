const Skills = () => {
    const skillCategories = [
    {
        category: 'Frontend',
        skills: ['React JS', 'HTML', 'CSS', 'Tailwind', 'TypeScript', 'JavaScript'],
    },
    {
        category: 'Backend',
        skills: ['C++',  'Node JS', 'PostgreSQL', 'MongoDB', '.NET'],
    },
    {
        category: 'Quality Assurance',
        skills: ['Testing', 'GitHub', 'Agile', 'Jira', 'Postman', 'QA Manual'],
    },
    ]

    const languages = [
    { name: 'Inglés', level: 'B2.1' },
    { name: 'Alemán', level: 'A1.1' },
    ]

    return (
    <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Habilidades
        </h2>
        
        {/* Technical Skills */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
            {skillCategories.map((category, index) => (
            <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                    <span
                    key={i}
                    className="px-4 py-2 bg-blue-100 dark:bg-violet-900 text-blue-800 dark:text-violet-200 rounded-lg text-sm font-medium"
                    >
                    {skill}
                    </span>
                ))}
                </div>
            </div>
            ))}
        </div>

        {/* Languages */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Idiomas
            </h2>
            <div className="flex gap-10 mx-auto w-64 md:gap-24">
            {languages.map((lang, index) => (
                <div key={index} className="flex items-center gap-2">
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {lang.name}:
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                    {lang.level}
                </span>
                </div>
            ))}
            </div>
        </div>
        </div>
    </section>
)
}

export default Skills