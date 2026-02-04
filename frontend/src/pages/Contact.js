import { useState } from 'react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await axios.post(`${API}/contact`, formData);
      if (response.status === 200) {
        setStatus({
          type: 'success',
          message: 'Thank you for reaching out! We\'ll get back to you within 24 hours.',
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or contact us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-b from-darker to-dark" data-testid="contact-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Get In <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">Touch</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mb-8"></div>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your digital presence? Let's discuss how we can help you achieve your business goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-dark" data-testid="contact-form-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Let's Start a Conversation</h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                Whether you're looking to launch your first campaign, scale your marketing efforts, or completely transform your digital strategy—we're here to help. Fill out the form and our team will reach out to schedule a free consultation.
              </p>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start" data-testid="contact-phone">
                  <div className="bg-gradient-to-br from-gold to-gold-light rounded-full p-3 mr-4">
                    <svg
                      className="w-6 h-6 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-gold font-semibold mb-1">Phone</h3>
                    <a
                      href="tel:+919978019876"
                      className="text-gray-300 hover:text-gold transition-colors duration-300"
                    >
                      +91 99780 19876
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start" data-testid="contact-email">
                  <div className="bg-gradient-to-br from-gold to-gold-light rounded-full p-3 mr-4">
                    <svg
                      className="w-6 h-6 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-gold font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:info@evolutemarketing.com"
                      className="text-gray-300 hover:text-gold transition-colors duration-300"
                    >
                      info@evolutemarketing.com
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-gold to-gold-light rounded-full p-3 mr-4">
                    <svg
                      className="w-6 h-6 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-gold font-semibold mb-1">Response Time</h3>
                    <p className="text-gray-300">Within 24 hours on business days</p>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="mt-12 bg-gradient-to-br from-darker to-dark border border-gold/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">What Happens Next?</h3>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">1.</span>
                    <span>We'll review your inquiry and contact you within 24 hours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">2.</span>
                    <span>Schedule a free consultation to discuss your goals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">3.</span>
                    <span>Receive a custom strategy proposal tailored to your needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">4.</span>
                    <span>Start your journey to exceptional growth</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gradient-to-br from-darker to-dark border border-gold/20 rounded-3xl p-8 md:p-10">
                <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>

                {status.message && (
                  <div
                    className={`mb-6 p-4 rounded-lg ${
                      status.type === 'success'
                        ? 'bg-green-900/20 border border-green-500/50 text-green-300'
                        : 'bg-red-900/20 border border-red-500/50 text-red-300'
                    }`}
                    data-testid="form-status-message"
                  >
                    {status.message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark border border-gold/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors duration-300"
                      placeholder="John Doe"
                      data-testid="form-input-name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark border border-gold/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors duration-300"
                      placeholder="john@example.com"
                      data-testid="form-input-email"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-gray-300 font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark border border-gold/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors duration-300"
                      placeholder="+91 12345 67890"
                      data-testid="form-input-phone"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 bg-dark border border-gold/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors duration-300 resize-none"
                      placeholder="Tell us about your project and goals..."
                      data-testid="form-input-message"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-gold to-gold-light text-black font-bold rounded-full hover:shadow-gold-glow transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    data-testid="form-submit-button"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
