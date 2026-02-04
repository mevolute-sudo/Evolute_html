const About = () => {
  return (
    <div className="min-h-screen bg-dark pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-b from-darker to-dark" data-testid="about-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">Evolute Marketing</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mb-8"></div>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Where strategic thinking meets creative excellence to deliver marketing solutions that drive real business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-dark" data-testid="company-story">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-dark to-darker border border-gold/20 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Our Story</h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Evolute Marketing was born from a simple yet powerful belief: every business, regardless of size, deserves access to world-class digital marketing expertise. Founded by passionate marketers who witnessed firsthand the challenges faced by SMEs and entrepreneurs in navigating the complex digital landscape, we set out to bridge that gap.
              </p>
              <p>
                What started as a mission to help small businesses compete in the digital age has evolved into a full-service premium marketing agency. We've grown alongside our clients, learning, adapting, and innovating at every step. Our journey has been defined by one constant: an unwavering commitment to delivering measurable results that transform businesses.
              </p>
              <p>
                Today, Evolute Marketing stands as a trusted partner to hundreds of forward-thinking businesses. We combine data-driven strategies with creative brilliance to craft campaigns that don't just look good—they perform exceptionally. Every campaign we launch, every strategy we develop, and every creative asset we produce is designed with one goal in mind: to help your business evolve and thrive.
              </p>
              <p>
                Our name, "Evolute," represents our philosophy perfectly. Just as an evolute is a curve that develops from another, we help businesses develop and evolve into their best versions. We don't believe in cookie-cutter solutions or one-size-fits-all approaches. Instead, we take the time to understand your unique challenges, goals, and audience to create bespoke strategies that deliver exceptional ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gradient-to-b from-dark to-darker" data-testid="mission-vision-values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-gradient-to-br from-darker to-dark border border-gold/20 rounded-3xl p-8 hover:border-gold/60 transition-all duration-300">
              <div className="text-4xl mb-6">🎯</div>
              <h3 className="text-2xl font-bold text-gold mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To empower businesses with innovative digital marketing solutions that drive growth, build lasting brands, and create meaningful connections with their audiences. We exist to turn ambitious visions into measurable success stories.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-darker to-dark border border-gold/20 rounded-3xl p-8 hover:border-gold/60 transition-all duration-300">
              <div className="text-4xl mb-6">🔮</div>
              <h3 className="text-2xl font-bold text-gold mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To be the most trusted digital marketing partner for ambitious businesses worldwide, recognized for our strategic brilliance, creative excellence, and unwavering commitment to delivering exceptional results that transform businesses.
              </p>
            </div>

            {/* Values */}
            <div className="bg-gradient-to-br from-darker to-dark border border-gold/20 rounded-3xl p-8 hover:border-gold/60 transition-all duration-300">
              <div className="text-4xl mb-6">⭐</div>
              <h3 className="text-2xl font-bold text-gold mb-4">Our Values</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-gold mr-2">→</span>
                  <span>Results-driven excellence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">→</span>
                  <span>Transparent communication</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">→</span>
                  <span>Creative innovation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">→</span>
                  <span>Client-first approach</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Note */}
      <section className="py-20 bg-darker" data-testid="founder-note">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">A Message from Our Founder</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto"></div>
          </div>
          <div className="bg-gradient-to-br from-dark to-darker border-l-4 border-gold rounded-2xl p-8 md:p-12">
            <p className="text-gray-300 leading-relaxed mb-6 italic">
              "When we started Evolute Marketing, we had a clear vision: to democratize access to premium digital marketing expertise. Having worked with businesses of all sizes, I witnessed the frustration of talented entrepreneurs who had incredible products but struggled to get their message heard in the crowded digital space."
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              "What sets us apart isn't just our expertise or our results—it's our genuine commitment to your success. We don't just work for you; we work with you as an extension of your team. Your wins are our wins, and your growth is what drives us every single day."
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              "In today's digital landscape, having a beautiful website or running ads isn't enough. You need a strategic partner who understands the nuances of your industry, the psychology of your audience, and the metrics that matter. That's exactly what we provide—strategic brilliance backed by creative excellence and data-driven insights."
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              "Thank you for considering Evolute Marketing. Whether you're just starting out or looking to scale to new heights, we're here to help you evolve into the brand you're meant to be."
            </p>
            <div className="border-t border-gold/20 pt-6">
              <p className="text-gold font-semibold text-lg">With gratitude,</p>
              <p className="text-white font-bold text-xl mt-2">The Evolute Marketing Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Agency Mindset */}
      <section className="py-20 bg-gradient-to-b from-darker to-dark" data-testid="agency-mindset">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Mindset & Philosophy</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Growth-Obsessed',
                description: 'We are relentlessly focused on growing your business. Every strategy, campaign, and creative asset is designed with one goal: measurable, sustainable growth that transforms your bottom line.',
              },
              {
                title: 'Data Meets Creativity',
                description: 'Beautiful campaigns that don\'t convert are just expensive art. We blend creative brilliance with data-driven insights to create campaigns that look stunning and perform exceptionally.',
              },
              {
                title: 'Transparent & Honest',
                description: 'No jargon, no smoke and mirrors. We believe in clear, honest communication. You\'ll always know what we\'re doing, why we\'re doing it, and exactly what results you\'re getting.',
              },
              {
                title: 'Partnership Approach',
                description: 'We don\'t believe in vendor relationships. We become an extension of your team, deeply invested in your success. Your challenges become our challenges, and your victories become our victories.',
              },
              {
                title: 'Continuous Innovation',
                description: 'The digital landscape evolves rapidly, and so do we. We stay ahead of trends, test new strategies, and continuously optimize to ensure you always have a competitive edge.',
              },
              {
                title: 'ROI-First Thinking',
                description: 'Every dollar you invest should work hard for you. We\'re obsessed with maximizing your return on investment and proving our value through measurable results, not vanity metrics.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-dark to-darker border border-gold/20 rounded-2xl p-8 hover:border-gold/60 transition-all duration-300 hover:shadow-gold-glow"
                data-testid={`mindset-card-${index}`}
              >
                <h3 className="text-xl font-bold text-gold mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
