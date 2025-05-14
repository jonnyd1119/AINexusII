export default function About() {
  return (
    <section id="about" className="section bg-background">
      <div className="container mx-auto">
        <h2 className="section-title">About AI Nexus</h2>
        <p className="section-subtitle">Empowering businesses through intelligent automation solutions.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* About image */}
          <div className="rounded-xl overflow-hidden shadow-lg shadow-primary/20">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=450&q=80" 
              alt="AI Nexus team collaboration" 
              className="w-full h-auto"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
            <p className="mb-6 text-white/80">
              At AI Nexus, we're passionate about helping businesses leverage artificial intelligence to maximize efficiency, productivity, and growth. Our mission is to demystify AI technology and make it accessible to businesses of all sizes.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 text-primary">Our Approach</h3>
            <p className="mb-6 text-white/80">
              We don't just implement AI—we create custom solutions tailored to your specific business challenges. Our team combines deep technical expertise with practical business acumen to deliver solutions that drive real results.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center dark-card p-4">
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <p className="text-white/70">Clients Served</p>
              </div>
              <div className="text-center dark-card p-4">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <p className="text-white/70">Client Satisfaction</p>
              </div>
              <div className="text-center dark-card p-4">
                <div className="text-4xl font-bold text-primary mb-2">250+</div>
                <p className="text-white/70">Projects Completed</p>
              </div>
              <div className="text-center dark-card p-4">
                <div className="text-4xl font-bold text-primary mb-2">40%</div>
                <p className="text-white/70">Average Efficiency Gain</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
