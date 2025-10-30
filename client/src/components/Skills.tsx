import { 
  Workflow, 
  Code2, 
  Database, 
  GitBranch, 
  Bot, 
  Network,
  Cpu,
  Phone
} from 'lucide-react';

type Skill = {
  icon: React.ReactNode;
  name: string;
};

export default function Skills() {
  const skills: Skill[] = [
    {
      icon: <Workflow className="h-8 w-8" />,
      name: "Automations"
    },
    {
      icon: <Code2 className="h-8 w-8" />,
      name: "Make"
    },
    {
      icon: <GitBranch className="h-8 w-8" />,
      name: "N8N"
    },
    {
      icon: <Network className="h-8 w-8" />,
      name: "Complex API Integration"
    },
    {
      icon: <Database className="h-8 w-8" />,
      name: "HubSpot"
    },
    {
      icon: <Database className="h-8 w-8" />,
      name: "Salesforce"
    },
    {
      icon: <Database className="h-8 w-8" />,
      name: "Zoho CRM"
    },
    {
      icon: <Database className="h-8 w-8" />,
      name: "GoHighLevel"
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      name: "Advanced Python"
    },
    {
      icon: <Bot className="h-8 w-8" />,
      name: "AI Agent Development"
    },
    {
      icon: <Phone className="h-8 w-8" />,
      name: "Voice AI Agents"
    },
    {
      icon: <Code2 className="h-8 w-8" />,
      name: "Custom Integrations"
    }
  ];

  return (
    <section id="skills" className="section bg-background">
      <div className="container mx-auto">
        <h2 className="section-title">Expert Skills & Knowledge</h2>
        <p className="section-subtitle">
          Our team brings deep expertise across automation platforms, CRMs, and AI technologies.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="dark-card p-6 flex flex-col items-center text-center transition duration-300 hover:shadow-primary/20 hover:-translate-y-1"
              data-testid={`skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="text-primary mb-3">
                {skill.icon}
              </div>
              <h3 className="text-white font-semibold">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
