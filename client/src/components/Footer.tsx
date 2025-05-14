import { Mail, Phone, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
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
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold mb-4">AI Nexus</div>
            <p className="mb-6 text-gray-400">
              Empowering businesses through intelligent AI solutions that drive growth and efficiency.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#about" 
                  className="text-gray-400 hover:text-secondary transition-colors"
                  onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-gray-400 hover:text-secondary transition-colors"
                  onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#how-it-works" 
                  className="text-gray-400 hover:text-secondary transition-colors"
                  onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works'); }}
                >
                  How It Works
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  className="text-gray-400 hover:text-secondary transition-colors"
                  onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mt-1 mr-2 text-secondary" />
                <a 
                  href="mailto:info@ainexus.agency" 
                  className="text-gray-400 hover:text-secondary transition-colors"
                >
                  info@ainexus.agency
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mt-1 mr-2 text-secondary" />
                <a 
                  href="tel:+11234567890" 
                  className="text-gray-400 hover:text-secondary transition-colors"
                >
                  +1 (123) 456-7890
                </a>
              </li>
              <li>
                <a 
                  href="https://calendly.com/jon-ainexus/15-minute-meeting-ai-automation-solution-overview" 
                  target="_blank" 
                  className="text-secondary hover:text-white transition-colors"
                  rel="noopener noreferrer"
                >
                  Schedule a Call
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} AI Nexus Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
