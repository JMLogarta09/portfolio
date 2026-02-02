import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce solution with user authentication, payment integration, and admin dashboard. Built with React, Node.js, and MongoDB.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://example.com',
      image: 'bg-gradient-to-br from-purple-400 to-pink-600',
    },
    {
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      github: 'https://github.com',
      demo: 'https://example.com',
      image: 'bg-gradient-to-br from-blue-400 to-cyan-600',
    },
    {
      title: 'Weather Dashboard',
      description:
        'A beautiful weather dashboard that displays current conditions, forecasts, and interactive maps. Features location-based weather data.',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'CSS3'],
      github: 'https://github.com',
      demo: 'https://example.com',
      image: 'bg-gradient-to-br from-yellow-400 to-orange-600',
    },
    {
      title: 'Social Media Analytics',
      description:
        'Analytics dashboard for social media metrics with data visualization, export functionality, and customizable reports.',
      technologies: ['Next.js', 'Python', 'PostgreSQL', 'D3.js'],
      github: 'https://github.com',
      demo: 'https://example.com',
      image: 'bg-gradient-to-br from-green-400 to-emerald-600',
    },
  ]

  return (
    <section id="projects" className="section-container bg-white">
      <h2 className="section-title">Featured Projects</h2>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card group">
              <div
                className={`${project.image} h-48 rounded-lg mb-4 flex items-center justify-center text-white text-2xl font-bold`}
              >
                {project.title}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors font-medium"
                >
                  <FaGithub /> Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors font-medium"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
