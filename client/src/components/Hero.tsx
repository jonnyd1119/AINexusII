import { ArrowRight } from 'lucide-react';

export default function Hero() {
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
    <section id="hero" className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/20 to-secondary/20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
          AI-Powered Solutions for <span className="text-primary">Business Growth</span>
        </h1>
        <p className="text-xl text-white/80 mb-10 max-w-3xl mx-auto">
          We help businesses leverage artificial intelligence to automate processes, enhance customer experiences, and drive growth through innovative solutions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="https://calendly.com/jon-ainexus/15-minute-meeting-ai-automation-solution-overview" 
            target="_blank" 
            className="btn-primary"
            rel="noopener noreferrer"
          >
            Schedule a Consultation
          </a>
          <button 
            onClick={() => scrollToSection('services')}
            className="btn-secondary flex items-center justify-center gap-2"
          >
            Explore Our Services <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        
        {/* Hero image */}
        <div className="mt-16 relative">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80" 
            alt="AI Nexus team working on AI solutions" 
            className="rounded-xl shadow-lg mx-auto max-w-full shadow-primary/20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-xl"></div>
        </div>
      </div>
    </section>
  );
}
