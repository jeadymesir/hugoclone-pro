import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import logoRpbg from '@/assets/logo-rpbg.png';

const servicesLinks = [
  { name: 'Managed IT Services & Cybersecurity', path: '/services/managed-it' },
  { name: 'Internet Services', path: '/services/internet' },
  { name: 'Strategic Consultancy', path: '/services/consultancy' },
  { name: 'Software & Hardware Solutions', path: '/services/software-hardware' },
  { name: 'Managed Business Services', path: '/services/business' },
  { name: 'Tailor-Made Trainings', path: '/services/trainings' },
];

const aboutLinks = [
  { name: 'About RPBG', path: '/about' },
  { name: 'Leadership Team', path: '/about/leadership' },
  { name: 'Client Testimonials', path: '/about/testimonials' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-sm py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="relative z-10">
            <img 
              src={logoRpbg} 
              alt="RPBG - Rosheuvel & Partners Business Group" 
              className="h-20 md:h-24 w-auto"
            />
          </Link>

          {/* Desktop Navigation - Hugo style */}
          <div className="hidden lg:flex items-center gap-10">
            <Link to="/" className="hugo-nav-link">
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="hugo-nav-item relative group">
              <button className="hugo-nav-link flex items-center gap-1">
                Services
                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="hugo-dropdown p-4">
                {servicesLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-foreground/80 hover:bg-primary/5 hover:text-primary transition-all group/item"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                  </Link>
                ))}
              </div>
            </div>

            {/* About Dropdown */}
            <div className="hugo-nav-item relative group">
              <button className="hugo-nav-link flex items-center gap-1">
                About Us
                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="hugo-dropdown p-4">
                {aboutLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-foreground/80 hover:bg-primary/5 hover:text-primary transition-all group/item"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/contact" className="hugo-nav-link">
              Contact
            </Link>
          </div>

          {/* CTA Button - Hugo style */}
          <Link to="/contact" className="hidden lg:flex hugo-cta text-sm">
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 hugo-arrow" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? 'max-h-[600px] opacity-100 mt-6' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-card rounded-2xl shadow-xl p-6 space-y-4">
            <Link to="/" className="block py-3 text-lg font-medium hover:text-primary transition-colors">
              Home
            </Link>

            <div>
              <button
                onClick={() => setOpenDropdown(openDropdown === 'services' ? null : 'services')}
                className="flex items-center justify-between w-full py-3 text-lg font-medium"
              >
                Services
                <ChevronDown className={`w-5 h-5 transition-transform ${openDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openDropdown === 'services' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-4 space-y-2 pt-2">
                  {servicesLinks.map((link) => (
                    <Link key={link.path} to={link.path} className="block py-2 text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={() => setOpenDropdown(openDropdown === 'about' ? null : 'about')}
                className="flex items-center justify-between w-full py-3 text-lg font-medium"
              >
                About Us
                <ChevronDown className={`w-5 h-5 transition-transform ${openDropdown === 'about' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openDropdown === 'about' ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-4 space-y-2 pt-2">
                  {aboutLinks.map((link) => (
                    <Link key={link.path} to={link.path} className="block py-2 text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/contact" className="block py-3 text-lg font-medium hover:text-primary transition-colors">
              Contact
            </Link>

            <Link to="/contact" className="hugo-cta w-full justify-center mt-4">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
