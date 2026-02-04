import { Link } from 'react-router-dom';

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" data-testid="hero-section">
        <div className="absolute inset-0 bg-gradient-radial from-gold/5 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-white mb-2">Transform Your Brand</span>
              <span className="block bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
                With Premium Digital Marketing
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Data-driven strategies, creative excellence, and measurable results for ambitious businesses ready to dominate their market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-gold to-gold-light text-black font-semibold rounded-full hover:shadow-gold-glow transition-all duration-300 hover:scale-105"
                data-testid="hero-cta-button"
              >
                Get Started Today
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border-2 border-gold text-gold font-semibold rounded-full hover:bg-gold/10 transition-all duration-300"
                data-testid="hero-services-button"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-20 bg-gradient-to-b from-dark to-darker" data-testid="about-snapshot">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Who We Are
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Evolute Marketing is a premium digital marketing agency specializing in helping SMEs and ambitious businesses achieve extraordinary growth through strategic digital solutions.
            </p>
            <Link
              to="/about"
              className="inline-block text-gold font-semibold hover:text-gold-light transition-colors duration-300"
              data-testid="learn-more-about-link"
            >
              Learn More About Us →
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-darker" data-testid="services-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Digital Marketing',
                description: 'Comprehensive digital strategies that drive growth and maximize ROI for your business.',
                icon: '📊',
              },
              {
                title: 'Social Media Marketing',
                description: 'Build engaged communities and amplify your brand voice across all social platforms.',
                icon: '📱',
              },
              {
                title: 'Performance Ads',
                description: 'Data-driven paid advertising campaigns that deliver measurable results and conversions.',
                icon: '🎯',
              },
              {
                title: 'Website Design & Development',
                description: 'Stunning, high-converting websites built with cutting-edge technology and user experience.',
                icon: '💻',
              },
              {
                title: 'Branding & Creative',
                description: 'Distinctive brand identities and creative campaigns that make you unforgettable.',
                icon: '🎨',
              },
              {
                title: 'Lead Generation',
                description: 'Strategic campaigns designed to attract, nurture, and convert high-quality leads.',
                icon: '🚀',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-dark to-darker border border-gold/20 rounded-2xl p-8 hover:border-gold/60 transition-all duration-500 hover:shadow-gold-glow hover:-translate-y-2"
                data-testid={`service-card-${index}`}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block px-8 py-4 bg-gradient-to-r from-gold to-gold-light text-black font-semibold rounded-full hover:shadow-gold-glow transition-all duration-300 hover:scale-105"
              data-testid="view-all-services-button"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-darker to-dark" data-testid="process-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Our Process
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              A proven methodology that transforms your vision into measurable results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery & Strategy',
                description: 'Deep dive into your business, audience, and goals to craft a winning strategy.',
              },
              {
                step: '02',
                title: 'Creative Development',
                description: 'Design compelling campaigns and assets that resonate with your target audience.',
              },
              {
                step: '03',
                title: 'Execution & Launch',
                description: 'Flawless implementation across all channels with precision and attention to detail.',
              },
              {
                step: '04',
                title: 'Optimize & Scale',
                description: 'Continuous monitoring, optimization, and scaling to maximize your ROI.',
              },
            ].map((step, index) => (
              <div key={index} className="relative" data-testid={`process-step-${index}`}>
                <div className="bg-gradient-to-br from-dark to-darker border border-gold/20 rounded-2xl p-6 h-full hover:border-gold/60 transition-all duration-300">
                  <div className="text-6xl font-bold text-gold/20 mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-gold/30 text-2xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Trust Section */}
      <section className="py-20 bg-dark" data-testid="trust-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Trusted by Forward-Thinking Businesses
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mb-8"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
              Join hundreds of SMEs and entrepreneurs who have transformed their digital presence and achieved remarkable growth with our expert guidance.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { number: '500+', label: 'Clients Served' },
                { number: '1000+', label: 'Campaigns Launched' },
                { number: '300%', label: 'Average ROI' },
                { number: '98%', label: 'Client Satisfaction' },
              ].map((stat, index) => (
                <div key={index} className="text-center" data-testid={`stat-${index}`}>
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-gold/10 via-gold-light/10 to-gold/10 border-y border-gold/20" data-testid="cta-banner">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Let's discuss how we can help you achieve your digital marketing goals and drive exponential growth.
          </p>
          <Link
            to="/contact"
            onClick={scrollToTop}
            className="inline-block px-10 py-5 bg-gradient-to-r from-gold to-gold-light text-black text-lg font-bold rounded-full hover:shadow-gold-glow transition-all duration-300 hover:scale-105"
            data-testid="cta-contact-button"
          >
            Schedule a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
