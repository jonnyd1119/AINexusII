export default function CTA() {
  return (
    <section className="section bg-gradient-to-r from-primary/80 to-secondary/80 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Schedule a free 15-minute consultation to discuss how our AI solutions can help your business grow.
        </p>
        <a 
          href="https://calendly.com/jon-ainexus/15-minute-meeting-ai-automation-solution-overview" 
          target="_blank" 
          className="inline-block bg-white text-primary font-semibold text-lg py-4 px-8 rounded-lg hover:bg-gray-100 shadow-lg hover:shadow-white/20 transition duration-300"
          rel="noopener noreferrer"
        >
          Schedule Your Free Consultation
        </a>
      </div>
    </section>
  );
}
