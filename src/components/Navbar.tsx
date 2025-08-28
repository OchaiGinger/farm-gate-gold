import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home', type: 'link' },
    { href: '/technology', label: 'Technology', type: 'link' },
    { href: '/contact', label: 'Contact', type: 'link' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-background/95 backdrop-blur-xl shadow-xl border-b border-border/50' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold gradient-text">HarvestingGuard</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => 
                link.type === 'link' ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-foreground hover:text-agtech-gold transition-colors duration-300 font-medium"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-foreground hover:text-agtech-gold transition-colors duration-300 font-medium"
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button 
              className="cta-button text-earth-brown font-semibold px-6 py-2"
              onClick={() => window.location.href = 'tel:+2348148327506'}
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-agtech-gold transition-colors duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => 
              link.type === 'link' ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block px-3 py-2 text-foreground hover:text-agtech-gold transition-colors duration-300 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-foreground hover:text-agtech-gold transition-colors duration-300 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              )
            )}
            <div className="pt-2">
              <Button 
                className="cta-button text-earth-brown font-semibold w-full"
                onClick={() => window.location.href = 'tel:+2348148327506'}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call 08148327506
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;