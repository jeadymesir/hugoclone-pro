import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone } from 'lucide-react';

const quickLinks = [
  { name: 'Leadership Team', path: '/about/leadership' },
  { name: 'Careers', path: '/careers' },
  { name: 'Bank Details', path: '/bank-details' },
  { name: 'General Terms & Conditions', path: '/terms' },
];

const serviceLinks = [
  { name: 'Managed IT Services', path: '/services/managed-it' },
  { name: 'Internet Services', path: '/services/internet' },
  { name: 'Strategic Consultancy', path: '/services/consultancy' },
  { name: 'Software & Hardware', path: '/services/software-hardware' },
  { name: 'Business Services', path: '/services/business' },
  { name: 'Trainings', path: '/services/trainings' },
];

export const Footer = () => {
  return (
    <footer className="bg-primary-dark text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="font-heading text-2xl font-bold">
                30<span className="text-sm align-top">years</span>
              </span>
              <span className="text-xs tracking-wider uppercase opacity-80">
                Rosheuvel & Partners
              </span>
              <span className="text-[10px] tracking-wider uppercase opacity-60">
                Business Group
              </span>
            </div>
            <div className="space-y-3 mt-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 opacity-80" />
                <span className="text-sm opacity-90">Verlengde Gemenelandsweg 151</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 opacity-80" />
                <a href="mailto:info@rpbg.net" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  info@rpbg.net
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 opacity-80" />
                <a href="tel:+597433932" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  +597 433932
                </a>
              </div>
            </div>
            <p className="text-xs opacity-60 mt-4">FINN: 2000004792</p>
          </div>

          {/* About */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">About</h4>
            <p className="text-sm opacity-80 leading-relaxed">
              Founded in 1996, as a trusted technology partner, RPBG delivers nearly three decades 
              of expertise and global brand partnerships to support businesses in scaling, 
              optimizing, and innovating.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Working Hours */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-wrap gap-8 justify-between items-center">
            <div className="space-y-1">
              <p className="text-sm font-semibold">Office Working Hours</p>
              <p className="text-xs opacity-70">MON - FRI: 8:00 - 16:30</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-semibold">Cash Register Hours</p>
              <p className="text-xs opacity-70">MON - FRI: 8:00 - 18:00 | SAT: 08:00 - 13:00 | SUN: Closed</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-primary-foreground/10 text-center">
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} Rosheuvel & Partners Business Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
