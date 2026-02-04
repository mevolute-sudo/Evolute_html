import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent mb-4">
              Evolute Marketing
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner for premium digital marketing solutions. We help businesses evolve and thrive in the digital landscape.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <Link to="/" className="text-gray-300 hover:text-gold text-sm block transition-colors duration-300">
                Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-gold text-sm block transition-colors duration-300">
                About Us
              </Link>
              <Link to="/services" className="text-gray-300 hover:text-gold text-sm block transition-colors duration-300">
                Services
              </Link>
              <Link to="/why-choose-us" className="text-gray-300 hover:text-gold text-sm block transition-colors duration-300">
                Why Choose Us
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-gold text-sm block transition-colors duration-300">
                Contact
              </Link>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-gold font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start">
                <span className="text-gold mr-2">📞</span>
                <a href="tel:+919978019876" className="hover:text-gold transition-colors duration-300">
                  +91 99780 19876
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">✉️</span>
                <a href="mailto:info@evolutemarketing.com" className="hover:text-gold transition-colors duration-300">
                  info@evolutemarketing.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gold/20 pt-6">
          <p className="text-center text-gray-400 text-sm">
            Copyright © {currentYear} Evolute Marketing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
