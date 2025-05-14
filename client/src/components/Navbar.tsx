import { useState, useEffect } from 'react';

export default function Navbar() {
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
    <header className={`fixed top-0 left-0 right-0 bg-background z-50 transition-all duration-300 ${isScrolled ? 'shadow-md shadow-primary/20' : ''}`}>
      <div className="container mx-auto px-4">
        <nav className="flex flex-wrap justify-between items-center py-4">
          <a href="#" className="text-2xl font-bold text-primary mr-6" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
            <span className="text-primary font-bold text-xl">AI Nexus</span>
          </a>
          <div className="flex flex-wrap items-center justify-end">
            <a 
              href="#about" 
              className="text-white hover:text-primary transition-colors px-3 py-2 text-sm sm:text-base"
              onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
            >
              About
            </a>
            <a 
              href="#services" 
              className="text-white hover:text-primary transition-colors px-3 py-2 text-sm sm:text-base"
              onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
            >
              Services
            </a>
            <a 
              href="#how-it-works" 
              className="text-white hover:text-primary transition-colors px-3 py-2 text-sm sm:text-base"
              onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works'); }}
            >
              How It Works
            </a>
            <a 
              href="#faq" 
              className="text-white hover:text-primary transition-colors px-3 py-2 text-sm sm:text-base"
              onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}
            >
              FAQ
            </a>
            <a 
              href="https://calendly.com/jon-ainexus/15-minute-meeting-ai-automation-solution-overview" 
              target="_blank" 
              className="text-secondary font-semibold hover:text-primary transition-colors px-3 py-2 text-sm sm:text-base"
              rel="noopener noreferrer"
            >
              Work With Us
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
