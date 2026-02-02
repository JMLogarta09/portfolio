import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa'

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="section-container relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 animate-fade-in">
            Hi, I'm{' '}
            <span className="text-yellow-300">John Michael Logarta</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl mb-4 text-gray-200">
            Full Stack Developer
          </p>
          <p className="text-lg sm:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            I build beautiful, responsive, and user-friendly web applications
            using modern technologies
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="#projects"
              className="btn-primary inline-flex items-center gap-2"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="btn-secondary inline-flex items-center gap-2 bg-white text-primary-600 hover:bg-gray-100"
            >
              Get In Touch
            </a>
          </div>

          <div className="flex justify-center gap-6 mb-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-yellow-300 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-yellow-300 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-3xl hover:text-yellow-300 transition-colors"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>

          <a
            href="#about"
            className="inline-block animate-bounce text-2xl hover:text-yellow-300 transition-colors"
            aria-label="Scroll down"
          >
            <FaArrowDown />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
