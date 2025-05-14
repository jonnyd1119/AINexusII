export default function CaseStudy() {
  return (
    <section className="section bg-white">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-primary to-secondary rounded-xl text-white overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Case study image */}
            <div className="h-full">
              <img 
                src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80" 
                alt="AI technology visualization" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-4 text-white/80">CASE STUDY</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">How We Increased Efficiency by 47% for a Financial Services Firm</h3>
              <p className="mb-6">
                Using our AI-powered workflow automation, we helped a leading financial services company reduce processing time, eliminate errors, and free up valuable resources for strategic initiatives.
              </p>
              <div>
                <a 
                  href="https://calendly.com/jon-ainexus/15-minute-meeting-ai-automation-solution-overview" 
                  target="_blank" 
                  className="inline-block bg-white text-primary font-semibold py-3 px-6 rounded-lg hover:bg-opacity-90 transition duration-300"
                  rel="noopener noreferrer"
                >
                  See How We Can Help You
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
