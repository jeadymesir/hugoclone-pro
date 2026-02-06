import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Mail, Phone } from 'lucide-react';
import logoWhite from '@/assets/logo-rpbg-white.png';

const footerLinks = {
  services: [
    { name: 'Managed IT', path: '/services/managed-it' },
    { name: 'Internet Services', path: '/services/internet' },
    { name: 'Consultancy', path: '/services/consultancy' },
    { name: 'Software & Hardware', path: '/services/software-hardware' },
    { name: 'Business Services', path: '/services/business' },
    { name: 'Trainings', path: '/services/trainings' },
  ],
  company: [
    { name: 'About RPBG', path: '/about' },
    { name: 'Leadership', path: '/about/leadership' },
    { name: 'Testimonials', path: '/about/testimonials' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ],
  resources: [
    { name: 'Bank Details', path: '/bank-details' },
    { name: 'Terms & Conditions', path: '/terms-conditions' },
  ],
};

export const Footer = () => {
  return (
    <footer className="hugo-footer py-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Top Section with CTA */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-16 border-b border-background/10">
          <div>
            <h3 className="font-heading text-3xl lg:text-4xl font-bold mb-2 hugo-subtitle">
              Ready    to    get    started?
            </h3>
            <p className="text-background/70">Let's build something great together.</p>
          </div>
          <Link to="/contact" className="hugo-cta bg-background text-foreground hover:bg-background/90">
            Contact Us
            <ArrowRight className="w-5 h-5 hugo-arrow" />
          </Link>
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <img src={logoWhite} alt="RPBG" className="h-20 w-auto" />
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Nearly three decades of expertise and global brand partnerships to support businesses in scaling, optimizing, and innovating.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-background/70">
                <MapPin className="w-4 h-4" />
                <span>Verlengde Gemenelandsweg 151</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-background/70">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@rpbg.net" className="hover:text-background transition-colors">info@rpbg.net</a>
              </div>
              <div className="flex items-center gap-3 text-sm text-background/70">
                <Phone className="w-4 h-4" />
                <a href="tel:+597433932" className="hover:text-background transition-colors">+597 433932</a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-heading font-semibold text-lg mb-4 mt-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Working Hours</h4>
            <div className="space-y-4 text-sm text-background/70">
              <div>
                <p className="font-medium text-background mb-1">Office</p>
                <p>MON - FRI: 8:00 - 16:30</p>
              </div>
              <div>
                <p className="font-medium text-background mb-1">Cash Register</p>
                <p>MON - FRI: 8:00 - 18:00</p>
                <p>SAT: 08:00 - 13:00</p>
                <p>SUN: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/50">
          <p>© {new Date().getFullYear()} Rosheuvel & Partners Business Group. All rights reserved.</p>
          <p>FINN: 2000004792</p>
        </div>
      </div>
    </footer>
  );
};
