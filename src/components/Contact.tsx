import { useState, type ChangeEvent, type FormEvent } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import emailjs from '@emailjs/browser'


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      await emailjs.send(
        'service_1tvd10d',      // replace this
        'template_ebf3akf',     // replace this
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'Gm0tnQFTzXmVtnOyE'       // replace this
      )

      alert('Message sent successfully!')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('EmailJS Error:', error)
      alert('Failed to send message. Please try again.')
    }

    setLoading(false)
  }

  return (
    <section id="contact" className="section-container bg-gray-50">
      <h2 className="section-title">Get In Touch</h2>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* LEFT SIDE */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Let's Connect
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary-100 rounded-lg">
                  <FaEnvelope className="text-primary-600 text-xl" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <a
                    href="mailto:09johnflame@gmail.com"
                    className="text-primary-600 hover:underline"
                  >
                    09johnflame@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary-100 rounded-lg">
                  <FaPhone className="text-primary-600 text-xl" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <a
                    href="tel:+639501086814"
                    className="text-primary-600 hover:underline"
                  >
                    +639501086814
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary-100 rounded-lg">
                  <FaMapMarkerAlt className="text-primary-600 text-xl" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Location</p>
                  <p className="text-gray-600">Butuan City, Philippines</p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="card">
            <div className="space-y-6">
              
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Your message..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              />

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>

            </div>
          </form>

        </div>
      </div>
    </section>
  )
}

export default Contact