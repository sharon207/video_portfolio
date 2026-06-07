import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "LoanWise AI",
      description: "Stacking Ensemble Model for loan prediction using XGBoost, Random Forest, and SVM. Implemented SHAP for model explainability.",
      tech: ["Python", "Machine Learning", "XGBoost", "SHAP"],
      link: "https://github.com/sharon207",
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "EduTrack",
      description: "Full-stack education management system with student tracking, analytics dashboard, and real-time notifications.",
      tech: ["Vue.js", "Node.js", "MongoDB", "Chart.js"],
      link: "https://github.com/sharon207",
      color: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      title: "AI Driven Exam Evaluation System",
      description: "NLP-based system for intelligent document analysis and automated exam paper evaluation using advanced ML models.",
      tech: ["Python", "NLP", "Machine Learning", "TensorFlow"],
      link: "https://github.com/sharon207/ai-driven-exam-evaluation-system",
      color: "from-red-500 to-orange-600"
    }
  ];

  return (
    <section id="projects" className="bg-white py-20 px-6 md:px-12 w-full font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Showcasing my expertise in AI/ML, Full Stack Development, and NLP solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl bg-gray-50 p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-gray-950">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-bold group-hover:bg-gray-300 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Link */}
                <div className="flex items-center gap-2 text-gray-700 group-hover:text-gray-900 font-bold text-sm">
                  View on GitHub
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Want to see more projects?
          </p>
          <a
            href="https://github.com/sharon207"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#ff2a2a] text-white px-8 py-4 rounded-full font-black text-lg hover:bg-red-700 transition-colors"
          >
            Visit My GitHub Profile
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
