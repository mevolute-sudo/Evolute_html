import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

const Services = () => {
  const services = servicesData;

  return (
    <div className="min-h-screen bg-dark pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-b from-darker to-dark" data-testid="services-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">Services</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mb-8"></div>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Premium digital marketing solutions designed to drive growth, build brands, and deliver exceptional ROI for ambitious businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-dark" data-testid="services-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 items-center`}
                data-testid={`service-detail-${index}`}
              >
                {/* Icon/Visual */}
                <div className="lg:w-1/3">
                  <div className="bg-gradient-to-br from-darker to-dark border border-gold/20 rounded-3xl p-12 text-center hover:border-gold/60 transition-all duration-300 hover:shadow-gold-glow">
                    <div className="text-8xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-gold">{service.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-2/3">
                  <div className="bg-gradient-to-br from-darker to-dark border border-gold/20 rounded-3xl p-8 md:p-10">
                    <p className="text-lg text-gray-300 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-xl font-bold text-white mb-4">What You Get:</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start text-gray-300">
                            <span className="text-gold mr-3 mt-1 flex-shrink-0">✓</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t border-gold/20 pt-6">
                      <h4 className="text-lg font-bold text-gold mb-3">The Outcome:</h4>
                      <p className="text-gray-300 leading-relaxed">{service.outcome}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold/10 via-gold-light/10 to-gold/10 border-y border-gold/20" data-testid="services-cta">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Elevate Your Marketing?
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Let's discuss which services will help you achieve your business goals and drive exceptional growth.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-5 bg-gradient-to-r from-gold to-gold-light text-black text-lg font-bold rounded-full hover:shadow-gold-glow transition-all duration-300 hover:scale-105"
            data-testid="services-contact-button"
          >
            Get a Custom Strategy
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
