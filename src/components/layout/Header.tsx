import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

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
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;
  const isActiveSection = (paths: { path: string }[]) => 
    paths.some(link => location.pathname.startsWith(link.path));

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-card/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex flex-col items-center">
              <span className="font-heading text-3xl font-bold text-primary">
                30<span className="text-sm align-top">years</span>
              </span>
              <span className="text-[10px] text-primary tracking-wider uppercase">
                Rosheuvel & Partners
              </span>
              <span className="text-[9px] text-muted-foreground tracking-wider uppercase">
                Business Group
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className={`font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary border-b-2 border-primary pb-1' : 'text-foreground'
              }`}
            >
              HOME
            </Link>

            {/* Services Dropdown */}
            <div className="nav-item relative group">
              <button
                className={`flex items-center gap-1 font-medium transition-colors hover:text-primary ${
                  isActiveSection(servicesLinks) ? 'text-primary' : 'text-foreground'
                }`}
              >
                SERVICES
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="nav-dropdown py-2">
                {servicesLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-2.5 text-sm transition-colors hover:bg-primary/5 hover:text-primary ${
                      isActive(link.path) ? 'text-primary bg-primary/5' : 'text-foreground'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* About Dropdown */}
            <div className="nav-item relative group">
              <button
                className={`flex items-center gap-1 font-medium transition-colors hover:text-primary ${
                  isActiveSection(aboutLinks) ? 'text-primary' : 'text-foreground'
                }`}
              >
                ABOUT US
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="nav-dropdown py-2">
                {aboutLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-2.5 text-sm transition-colors hover:bg-primary/5 hover:text-primary ${
                      isActive(link.path) ? 'text-primary bg-primary/5' : 'text-foreground'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              className={`font-medium transition-colors hover:text-primary ${
                isActive('/contact') ? 'text-primary border-b-2 border-primary pb-1' : 'text-foreground'
              }`}
            >
              CONTACT RPBG
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-card rounded-xl shadow-lg p-4 space-y-2">
            <Link
              to="/"
              className={`block py-3 px-4 rounded-lg transition-colors ${
                isActive('/') ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
              }`}
            >
              HOME
            </Link>

            {/* Mobile Services */}
            <div>
              <button
                onClick={() => setOpenDropdown(openDropdown === 'services' ? null : 'services')}
                className="flex items-center justify-between w-full py-3 px-4 rounded-lg hover:bg-muted transition-colors"
              >
                SERVICES
                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-200 ${openDropdown === 'services' ? 'max-h-96' : 'max-h-0'}`}>
                <div className="pl-4 space-y-1 mt-1">
                  {servicesLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`block py-2 px-4 text-sm rounded-lg transition-colors ${
                        isActive(link.path) ? 'bg-primary/10 text-primary' : 'hover:bg-muted'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile About */}
            <div>
              <button
                onClick={() => setOpenDropdown(openDropdown === 'about' ? null : 'about')}
                className="flex items-center justify-between w-full py-3 px-4 rounded-lg hover:bg-muted transition-colors"
              >
                ABOUT US
                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'about' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-200 ${openDropdown === 'about' ? 'max-h-48' : 'max-h-0'}`}>
                <div className="pl-4 space-y-1 mt-1">
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`block py-2 px-4 text-sm rounded-lg transition-colors ${
                        isActive(link.path) ? 'bg-primary/10 text-primary' : 'hover:bg-muted'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              className={`block py-3 px-4 rounded-lg transition-colors ${
                isActive('/contact') ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
              }`}
            >
              CONTACT RPBG
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
