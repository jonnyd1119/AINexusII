import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQ() {
  const [expandedFaq, setExpandedFaq] = useState<number>(-1);

  const faqs: FAQItem[] = [
    {
      question: "What types of businesses can benefit from AI solutions?",
      answer: "Businesses of all sizes and across industries can benefit from AI solutions. Whether you're in retail, healthcare, financial services, manufacturing, or professional services, AI can be tailored to address your specific challenges. The key is identifying the right use cases that will deliver the most value for your organization."
    },
    {
      question: "How long does it take to implement an AI solution?",
      answer: "Implementation timelines vary based on the complexity of your needs and the scope of the project. Simple automation solutions can be deployed in as little as 4-6 weeks, while more complex enterprise implementations may take 3-6 months. We follow an agile methodology that allows us to deliver value in phases, so you'll see results quickly even on larger projects."
    },
    {
      question: "Do I need technical expertise to use your AI solutions?",
      answer: "No, our solutions are designed to be user-friendly and accessible to non-technical users. We provide comprehensive training and support to ensure your team can effectively use and manage the AI tools we implement. Our goal is to make AI technology accessible and valuable to everyone in your organization, regardless of technical background."
    },
    {
      question: "What kind of ROI can I expect from AI implementation?",
      answer: "ROI varies by solution and industry, but our clients typically see returns within 6-12 months of implementation. Common benefits include cost reduction through automation (20-40%), increased sales through better targeting (15-30%), improved customer satisfaction, and reduced error rates. During our initial assessment, we'll help quantify the potential ROI for your specific use cases."
    },
    {
      question: "How do you ensure data security and privacy?",
      answer: "Security and privacy are top priorities in all our implementations. We follow industry best practices for data protection, including encryption, access controls, and secure development processes. Our solutions comply with relevant regulations such as GDPR, HIPAA, and CCPA as needed. We'll work with your IT and security teams to ensure all implementations meet or exceed your organization's security requirements."
    }
  ];

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? -1 : index);
  };

  return (
    <section id="faq" className="section bg-accent">
      <div className="container mx-auto">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">Get answers to common questions about our AI solutions.</p>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border border-border rounded-lg overflow-hidden">
              <button 
                className="w-full flex justify-between items-center p-5 bg-card hover:bg-card/80 transition-colors text-left"
                onClick={() => toggleFaq(index)}
                aria-expanded={expandedFaq === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-white">{faq.question}</span>
                <ChevronDown 
                  className={`transition-transform text-white ${expandedFaq === index ? 'rotate-180' : ''}`} 
                />
              </button>
              <div 
                id={`faq-answer-${index}`}
                className={`bg-card/80 px-5 pb-5 transition-all duration-300 ${expandedFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
              >
                <p className="text-white/80">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
