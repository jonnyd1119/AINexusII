import { Star } from 'lucide-react';

type Testimonial = {
  rating: number;
  quote: string;
  author: string;
  position: string;
};

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      rating: 5,
      quote: "AI Nexus transformed our customer service operations. The AI chatbot they implemented handles 70% of our inquiries automatically, allowing our team to focus on more complex cases.",
      author: "Sarah Johnson",
      position: "Customer Service Director, RetailCo"
    },
    {
      rating: 5,
      quote: "The predictive analytics solution from AI Nexus has been a game-changer for our inventory management. We've reduced stockouts by 35% while decreasing overall inventory costs.",
      author: "Michael Chen",
      position: "Operations Manager, LogisticsPro"
    },
    {
      rating: 5,
      quote: "Working with AI Nexus has been incredibly smooth. Their team took the time to understand our unique challenges and delivered a solution that exceeded our expectations.",
      author: "Jennifer Martinez",
      position: "Marketing Director, GrowthMedia"
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-subtitle">Hear from businesses that have transformed with our AI solutions.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl shadow-lg p-8">
              <div className="text-primary mb-4 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
