import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 bg-white z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-4">
          <a href="#" className="text-2xl font-bold text-primary" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
            <span className="text-primary font-bold text-xl">AI Nexus</span>
          </a>
          <div className="hidden md:flex space-x-8">
            <a 
              href="#about" 
              className="text-dark hover:text-primary transition-colors"
              onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
            >
              About
            </a>
            <a 
              href="#services" 
              className="text-dark hover:text-primary transition-colors"
              onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
            >
              Services
            </a>
            <a 
              href="#how-it-works" 
              className="text-dark hover:text-primary transition-colors"
              onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works'); }}
            >
              How It Works
            </a>
            <a 
              href="#faq" 
              className="text-dark hover:text-primary transition-colors"
              onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}
            >
              FAQ
            </a>
            <a 
              href="https://calendly.com/jon-ainexus/15-minute-meeting-ai-automation-solution-overview" 
              target="_blank" 
              className="text-primary font-semibold hover:text-secondary transition-colors"
              rel="noopener noreferrer"
            >
              Work With Us
            </a>
          </div>
          <button 
            className="md:hidden text-dark focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden bg-white shadow-inner transition-all duration-300 ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a 
            href="#about" 
            className="text-dark hover:text-primary transition-colors py-2"
            onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
          >
            About
          </a>
          <a 
            href="#services" 
            className="text-dark hover:text-primary transition-colors py-2"
            onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
          >
            Services
          </a>
          <a 
            href="#how-it-works" 
            className="text-dark hover:text-primary transition-colors py-2"
            onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works'); }}
          >
            How It Works
          </a>
          <a 
            href="#faq" 
            className="text-dark hover:text-primary transition-colors py-2"
            onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}
          >
            FAQ
          </a>
          <a 
            href="https://calendly.com/jon-ainexus/15-minute-meeting-ai-automation-solution-overview"
            target="_blank" 
            className="text-primary font-semibold hover:text-secondary transition-colors py-2"
            rel="noopener noreferrer"
          >
            Work With Us
          </a>
        </div>
      </div>
    </header>
  );
}
