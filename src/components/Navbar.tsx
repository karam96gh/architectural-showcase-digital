import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import logo from '@/assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'الرئيسية', labelEn: 'Home', href: '#home' },
    { label: 'من نحن', labelEn: 'About', href: '#about' },
    { label: 'الخدمات', labelEn: 'Services', href: '#services' },
    { label: 'المشاريع', labelEn: 'Projects', href: '#projects' },
    { label: 'تواصل معنا', labelEn: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-card/95 backdrop-blur-md shadow-elegant' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-2 sm:px-4 lg:px-6">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-16 sm:h-18 md:h-20' : 'h-24 sm:h-28 md:h-32'
        }`}>
          {/* Logo - Right Side */}
          <a href="#home" className="flex items-center gap-2">
            <img 
              src={logo} 
              alt="LUMAR Developments" 
              className={`w-auto object-contain transition-all duration-300 ${
                isScrolled 
                  ? 'h-16 sm:h-18 md:h-20' 
                  : 'h-20 sm:h-24 md:h-28 lg:h-32'
              }`} 
            />
          </a>

          {/* Desktop Navigation - Left Side */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="group relative text-foreground/90 hover:text-primary transition-colors duration-300"
              >
                <span className="word-like-text text-lg">{item.label}</span>
                <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border shadow-elegant">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-right px-6 py-4 text-foreground/90 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300 word-like-text text-lg"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
