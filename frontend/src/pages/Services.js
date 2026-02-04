import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Digital Marketing',
      icon: '📊',
      description: 'Comprehensive digital marketing strategies that transform your online presence and drive measurable business growth.',
      benefits: [
        'Full-funnel marketing strategies',
        'Multi-channel campaign management',
        'Advanced analytics and reporting',
        'Conversion rate optimization',
        'Customer journey mapping',
      ],
      outcome: 'Achieve a cohesive, high-performing digital presence that attracts, engages, and converts your ideal customers at every touchpoint.',
    },
    {
      title: 'Social Media Marketing',
      icon: '📱',
      description: 'Build engaged communities and amplify your brand voice across all major social platforms with data-driven content strategies.',
      benefits: [
        'Platform-specific content strategies',
        'Community management and engagement',
        'Influencer partnership coordination',
        'Social listening and reputation management',
        'Viral content creation',
      ],
      outcome: 'Develop a loyal, engaged following that amplifies your message, drives organic reach, and creates authentic brand advocates.',
    },
    {
      title: 'Performance Ads',
      icon: '🎯',
      description: 'Precision-targeted paid advertising campaigns across Google, Meta, LinkedIn, and more that deliver exceptional ROI.',
      benefits: [
        'Advanced audience targeting',
        'A/B testing and optimization',
        'Retargeting campaigns',
        'Budget optimization',
        'Real-time performance tracking',
      ],
      outcome: 'Generate high-quality leads and sales at optimal cost-per-acquisition while scaling your campaigns profitably.',
    },
    {
      title: 'Website Design & Development',
      icon: '💻',
      description: 'Stunning, high-converting websites built with cutting-edge technology, optimized for user experience and business goals.',
      benefits: [
        'Custom responsive design',
        'Mobile-first development',
        'SEO optimization',
        'Lightning-fast loading speeds',
        'Conversion-focused architecture',
      ],
      outcome: 'Own a website that not only looks premium but converts visitors into customers and serves as your 24/7 sales machine.',
    },
    {
      title: 'Branding & Creative',
      icon: '🎨',
      description: 'Distinctive brand identities and creative campaigns that make your business unforgettable and emotionally resonant.',
      benefits: [
        'Brand strategy and positioning',
        'Logo and visual identity design',
        'Brand guidelines development',
        'Marketing collateral creation',
        'Campaign creative production',
      ],
      outcome: 'Establish a powerful, cohesive brand identity that commands attention, builds trust, and differentiates you from competitors.',
    },
    {
      title: 'Lead Generation',
      icon: '🚀',
      description: 'Strategic multi-channel campaigns designed to attract, capture, and nurture high-quality leads that convert into customers.',
      benefits: [
        'Landing page optimization',
        'Lead magnet development',
        'Email marketing automation',
        'Lead scoring and qualification',
        'CRM integration',
      ],
      outcome: 'Build a consistent pipeline of qualified leads that fuel your sales team and drive predictable revenue growth.',
    },
  ];

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
