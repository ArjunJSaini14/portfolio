import { motion } from 'framer-motion';

const projects = [
  {
    title: "BankLens",
    tech: ["React", "Node.js", "Express.js", "PostgreSQL", "Anthropic API"],
    description: "Building AI-powered bank statement analyzer using React and Claude API supporting 10+ documents, reducing review by 80%. Implementing secure file upload using Multer and PostgreSQL with session-based access control for  authenticated users.",
    github: "https://github.com/ArjunJSaini14/BankLens/tree/main/banklens",
    live: null,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Solitaire",
    tech: ["Java"],
    description: "Developed a fully functional Klondike Solitaire game (Basic Klondike, Whitehead) with complete game logic, move validation, and win condition detection while implementing efficient card movement algorithms and maintaining 90%+ code reusability between variants.",
    live: null,
    color: "from-purple-500 to-blue-500"
  },
  {
    title: "Diagnosis Prediction",
    tech: ["Python", "Scikit-learn", "Pandas"],
    description: "Developed and deployed a machine learning pipeline to predict heart disease diagnosis using the Cleveland Heart Disease database, implementing linear regression and random forest models while performing data cleaning and missing value handling, achieving 85% accuracy.",
    github: "https://github.com/ArjunJSaini14/diagnosis-prediction",
    live: null,
    color: "from-cyan-500 to-teal-500"
  },
];

function Projects() {
  return (
    <section id="projects" className="flex flex-col justify-center items-start px-4 max-w-5xl mx-auto mt-55">
      
      <motion.div 
        className="flex items-center w-full mb-8"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="pr-3 text-4xl font-semibold whitespace-nowrap text-blue-300">&gt; projects</h2>
        <div className="grow border-t-[0.5px] border-gray-300 translate-y-2"></div>
      </motion.div>

      <div className="grid grid-cols-3 gap-6 w-full">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="rounded-2xl bg-gray-800 hover:bg-gray-750 hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Colored top bar */}
            <div className={`h-1 w-full bg-linear-to-r ${project.color}`} />

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-blue-300 text-xl font-semibold mb-3">{project.title}</h3>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs bg-gray-700 text-blue-300 px-2 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>

              <p className="text-sm text-gray-400 leading-relaxed flex-1">{project.description}</p>

              {/* Links */}
              <div className="flex gap-3 mt-5">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer"
                    className="text-xs border border-blue-300 text-blue-300 px-3 py-1 rounded-full hover:bg-blue-300 hover:text-gray-900 transition-colors duration-200">
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer"
                    className="text-xs border border-gray-500 text-gray-400 px-3 py-1 rounded-full hover:bg-gray-500 hover:text-white transition-colors duration-200">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;