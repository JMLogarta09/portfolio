const About = () => {
  return (
    <section id="about" className="section-container bg-white">
      <h2 className="section-title">About Me</h2>
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="w-full h-64 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl shadow-xl"></div>
          </div>
          <div className="space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate full-stack developer with a love for creating
              innovative web solutions. With expertise in modern JavaScript
              frameworks and a keen eye for design, I bring ideas to life
              through clean, efficient code.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My journey in web development started with a curiosity about how
              websites work, and it has evolved into a career focused on
              building user-centric applications that make a difference.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-semibold">
                Problem Solver
              </div>
              <div className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-semibold">
                Team Player
              </div>
              <div className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-semibold">
                Continuous Learner
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
