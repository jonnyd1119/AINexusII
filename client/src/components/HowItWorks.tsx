type Step = {
  number: number;
  title: string;
  description: string;
};

export default function HowItWorks() {
  const steps: Step[] = [
    {
      number: 1,
      title: "Discovery & Assessment",
      description: "We begin by understanding your business goals, challenges, and current processes. Our team conducts a thorough assessment to identify key opportunities for AI implementation that will deliver the most value."
    },
    {
      number: 2,
      title: "Strategy Development",
      description: "Based on our findings, we create a custom implementation strategy tailored to your specific needs. This includes technology selection, integration plans, and a clear roadmap for success."
    },
    {
      number: 3,
      title: "Solution Implementation",
      description: "Our experts build and deploy your custom AI solution, ensuring seamless integration with your existing systems. We follow agile methodologies to deliver quick wins while building toward long-term success."
    },
    {
      number: 4,
      title: "Training & Adoption",
      description: "We provide comprehensive training for your team to ensure successful adoption. Our goal is to empower your staff to leverage the new AI capabilities effectively in their daily work."
    },
    {
      number: 5,
      title: "Measurement & Optimization",
      description: "We continuously monitor performance and collect feedback to refine and improve your AI solution. Regular reviews ensure you're getting maximum value and ROI from your investment."
    }
  ];

  return (
    <section id="how-it-works" className="section bg-background">
      <div className="container mx-auto">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">Our streamlined process delivers results quickly and efficiently.</p>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {steps.map((step) => (
              <div 
                key={step.number} 
                className="flex flex-col md:flex-row gap-8 items-center dark-card p-8"
              >
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-white/80">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
