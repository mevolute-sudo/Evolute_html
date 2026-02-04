import { Link } from 'react-router-dom';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: '🎯',
      title: 'ROI-Focused Strategy',
      description: 'Every campaign, every creative asset, every strategy is designed with one goal: maximizing your return on investment. We don\'t chase vanity metrics—we focus on the numbers that actually impact your bottom line.',
      highlight: 'Average 300% ROI for our clients',
    },
    {
      icon: '📊',
      title: 'Data-Driven Marketing',
      description: 'Beautiful campaigns that don\'t convert are just expensive art. We blend creative excellence with rigorous data analysis to create campaigns that look stunning and perform exceptionally well across all metrics.',
      highlight: 'Real-time analytics & optimization',
    },
    {
      icon: '💎',
      title: 'Transparent Reporting',
      description: 'No smoke and mirrors, no confusing jargon. You\'ll receive clear, comprehensive reports that show exactly what we\'re doing, why we\'re doing it, and the results we\'re delivering. Full visibility, always.',
      highlight: 'Weekly performance dashboards',
    },
    {
      icon: '🏢',
      title: 'SME & Business Specialization',
      description: 'We understand the unique challenges faced by SMEs and entrepreneurs. Limited budgets, tight timelines, and high stakes. We\'re experts at maximizing impact with smart, efficient strategies tailored for growing businesses.',
      highlight: 'Specialized in SME growth strategies',
    },
    {
      icon: '🎨',
      title: 'Creative + Performance Balance',
      description: 'The best results come from balancing creative brilliance with performance optimization. Our team combines award-winning creative talent with analytical experts to deliver campaigns that captivate and convert.',
      highlight: 'Award-winning creative team',
    },
    {
      icon: '🤝',
      title: 'Partnership Approach',
      description: 'We\'re not just a vendor—we\'re an extension of your team. We invest deeply in understanding your business, your goals, and your challenges. Your success is our success, and we\'re committed to being your long-term growth partner.',
      highlight: '98% client retention rate',
    },
    {
      icon: '⚡',
      title: 'Agile & Responsive',
      description: 'The digital landscape moves fast, and so do we. We stay ahead of trends, adapt quickly to changes, and continuously optimize campaigns to ensure you always maintain a competitive edge in your market.',
      highlight: 'Same-day response guarantee',
    },
    {
      icon: '🔒',
      title: 'Proven Track Record',
      description: 'With hundreds of successful campaigns and satisfied clients, we\'ve consistently delivered results that exceed expectations. Our portfolio speaks for itself—real businesses achieving real growth through our strategies.',
      highlight: '500+ successful campaigns launched',
    },
    {
      icon: '🌟',
      title: 'Full-Service Excellence',
      description: 'From strategy to execution, creative to analytics, we handle everything. No need to coordinate multiple agencies or vendors. One partner, one vision, seamless execution across all your marketing needs.',
      highlight: 'Complete end-to-end solutions',
    },
    {
      icon: '💡',
      title: 'Strategic Innovation',
      description: 'We don\'t rely on cookie-cutter templates or outdated playbooks. Every strategy is custom-built for your unique business, audience, and goals. Fresh thinking, innovative approaches, exceptional results.',
      highlight: 'Custom strategies for every client',
    },
    {
      icon: '🎓',
      title: 'Industry Expertise',
      description: 'Our team brings years of experience across diverse industries and business models. We understand what works, what doesn\'t, and how to adapt proven strategies to your specific market and audience.',
      highlight: '15+ years combined experience',
    },
    {
      icon: '🚀',
      title: 'Scalable Solutions',
      description: 'Whether you\'re just starting out or ready to scale aggressively, our strategies grow with you. We build sustainable systems and processes that support your growth journey at every stage.',
      highlight: 'Built for sustainable scaling',
    },
  ];

  return (
    <div className="min-h-screen bg-dark pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-b from-darker to-dark" data-testid="why-choose-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">Evolute Marketing</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mb-8"></div>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              When you partner with us, you're choosing a team obsessed with your success, committed to transparency, and proven to deliver exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Reasons Grid */}
      <section className="py-20 bg-dark" data-testid="reasons-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-darker to-dark border border-gold/20 rounded-3xl p-8 hover:border-gold/60 transition-all duration-500 hover:shadow-gold-glow hover:-translate-y-2"
                data-testid={`reason-card-${index}`}
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {reason.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gold transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {reason.description}
                </p>
                <div className="border-t border-gold/20 pt-4">
                  <p className="text-gold font-semibold text-sm">
                    {reason.highlight}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Edge */}
      <section className="py-20 bg-gradient-to-b from-dark to-darker" data-testid="competitive-edge">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Competitive Edge
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto"></div>
          </div>
          <div className="bg-gradient-to-br from-dark to-darker border border-gold/20 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gold mb-4">What Sets Us Apart</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-gold mr-3 mt-1">→</span>
                    <span>Obsessive focus on measurable business outcomes, not just marketing metrics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3 mt-1">→</span>
                    <span>Deep SME expertise—we understand your challenges because we've solved them hundreds of times</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3 mt-1">→</span>
                    <span>Transparent pricing with no hidden fees or surprise charges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3 mt-1">→</span>
                    <span>Dedicated account team that knows your business inside and out</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gold mb-4">Our Promise to You</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-gold mr-3 mt-1">→</span>
                    <span>Honest communication—we'll tell you what you need to hear, not just what you want to hear</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3 mt-1">→</span>
                    <span>Continuous optimization to improve results month over month</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3 mt-1">→</span>
                    <span>Proactive strategy recommendations based on market trends and opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3 mt-1">→</span>
                    <span>Full ownership and accountability for the results we deliver</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success */}
      <section className="py-20 bg-darker" data-testid="client-success">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Client Success Stories
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Real businesses, real results, real growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                metric: '450%',
                label: 'Revenue Increase',
                description: 'E-commerce client in 6 months',
              },
              {
                metric: '10,000+',
                label: 'Qualified Leads',
                description: 'Generated for B2B SaaS client',
              },
              {
                metric: '85%',
                label: 'Cost Reduction',
                description: 'In customer acquisition cost',
              },
            ].map((success, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-dark to-darker border border-gold/20 rounded-2xl p-8 text-center hover:border-gold/60 transition-all duration-300"
                data-testid={`success-stat-${index}`}
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent mb-3">
                  {success.metric}
                </div>
                <div className="text-white font-semibold mb-2">{success.label}</div>
                <div className="text-gray-400 text-sm">{success.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-gold/10 via-gold-light/10 to-gold/10 border-y border-gold/20" data-testid="why-choose-cta">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Experience the Evolute Difference
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Join hundreds of satisfied clients who have transformed their businesses with our expert guidance.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-5 bg-gradient-to-r from-gold to-gold-light text-black text-lg font-bold rounded-full hover:shadow-gold-glow transition-all duration-300 hover:scale-105"
            data-testid="why-choose-contact-button"
          >
            Start Your Success Story
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
