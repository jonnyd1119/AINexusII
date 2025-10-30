import { 
  Brain, 
  MessageSquare, 
  BarChart, 
  Cog, 
  Megaphone, 
  Code
} from 'lucide-react';

type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
};

export default function Services() {
  const services: Service[] = [
    {
      icon: <Brain className="h-10 w-10" />,
      title: "AI Strategy Consulting",
      description: "We develop custom AI strategies aligned with your business goals, identifying key opportunities for implementation and growth.",
      features: [
        "AI Readiness Assessment",
        "Technology Selection",
        "Implementation Roadmap"
      ]
    },
    {
      icon: <MessageSquare className="h-10 w-10" />,
      title: "Conversational AI Solutions",
      description: "We build intelligent chatbots and virtual assistants that engage customers, answer questions, and handle routine tasks automatically.",
      features: [
        "Customer Service Automation",
        "Lead Generation Bots",
        "Multi-platform Integration"
      ]
    },
    {
      icon: <BarChart className="h-10 w-10" />,
      title: "Predictive Analytics",
      description: "Leverage your data to forecast trends, identify opportunities, and make data-driven decisions with confidence.",
      features: [
        "Sales Forecasting",
        "Customer Behavior Analysis",
        "Risk Assessment"
      ]
    },
    {
      icon: <Cog className="h-10 w-10" />,
      title: "Administration Task Automation",
      description: "Streamline operations and reduce costs by automating repetitive tasks with intelligent workflows.",
      features: [
        "Workflow Optimization",
        "Document Processing",
        "Complex API integrations with CRM's"
      ]
    },
    {
      icon: <Megaphone className="h-10 w-10" />,
      title: "AI-Powered Marketing",
      description: "Target the right customers with personalized campaigns that deliver measurable results.",
      features: [
        "Content Generation",
        "Campaign Optimization",
        "Customer Segmentation"
      ]
    },
    {
      icon: <Code className="h-10 w-10" />,
      title: "Custom AI Development",
      description: "Tailored AI solutions designed to address your specific business challenges and requirements.",
      features: [
        "Machine Learning Models",
        "Computer Vision Solutions",
        "Natural Language Processing"
      ]
    }
  ];

  return (
    <section id="services" className="section bg-accent">
      <div className="container mx-auto">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">Comprehensive AI solutions to transform your business operations.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="dark-card p-8 transition duration-300 hover:shadow-primary/20 hover:-translate-y-1"
            >
              <div className="text-primary mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-white/80 mb-4">
                {service.description}
              </p>
              <ul className="text-white/70 space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
