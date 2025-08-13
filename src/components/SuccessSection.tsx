import React from 'react';
import { Users, TrendingUp, Award, Target } from 'lucide-react';

const SuccessSection = () => {
  const testimonials = [
    {
      name: "Mama Blessing",
      location: "Vegetable Farmer, Plateau State",
      quote: "HarvestingGuard connected me directly to 15 restaurants in Jos and Abuja. No more middlemen taking 70% of my profits. I built a new house and sent my daughter to university with the extra income. This platform changed my family's entire future.",
      impact: "Income increased by 320%"
    },
    {
      name: "Alhaji Musa Yakubu",
      location: "Rice Farmer, Kebbi State",
      quote: "The AI predictions told me exactly when to harvest my rice for maximum quality. Smart contracts guaranteed payment before I even delivered. I've expanded my farm from 50 to 200 hectares because I can finally trust the market connection.",
      impact: "Farm expanded 4x in 18 months"
    },
    {
      name: "Mrs. Grace Adebayo",
      location: "Poultry & Vegetable Farmer, Ogun State",
      quote: "Real-time market data helped me switch from tomatoes to peppers at the perfect time. The logistics coordination delivered my produce to Lagos markets in 6 hours instead of 3 days. Fresh produce, premium prices, guaranteed sales.",
      impact: "Profit margins increased 180%"
    }
  ];

  const stats = [
    {
      icon: Users,
      number: "2,000+",
      label: "Active Farmers",
      color: "text-agtech-green"
    },
    {
      icon: TrendingUp,
      number: "₦50B+",
      label: "Farmer Income Generated",
      color: "text-agtech-gold"
    },
    {
      icon: Award,
      number: "70%",
      label: "Average Income Increase",
      color: "text-agtech-green"
    },
    {
      icon: Target,
      number: "95%",
      label: "Farmer Retention Rate",
      color: "text-agtech-gold"
    }
  ];

  return (
    <section id="success" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-agtech-green">
            Success Stories That Inspire
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real farmers, real results, real transformation across Nigeria.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className={`text-center fade-in-up delay-${(index + 1) * 100}`}>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-agtech-green/10 rounded-full flex items-center justify-center">
                    <IconComponent className={`w-8 h-8 ${stat.color}`} />
                  </div>
                </div>
                <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-agtech-green fade-in-up delay-${(index + 1) * 200}`}
            >
              <div className="mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-agtech-green rounded-full text-white font-bold text-lg mb-4">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h4 className="text-xl font-bold text-agtech-green mb-1">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground mb-4">{testimonial.location}</p>
                <div className="text-sm font-semibold text-agtech-gold bg-agtech-gold/10 px-3 py-1 rounded-full inline-block">
                  {testimonial.impact}
                </div>
              </div>
              
              <blockquote className="text-muted-foreground leading-relaxed italic">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in-up delay-600">
          <div className="bg-gradient-hero text-white rounded-lg p-12">
            <h3 className="text-3xl font-bold mb-4">Join These Success Stories</h3>
            <p className="text-xl mb-6 opacity-90">
              Every day we help more farmers transform their lives. Your success story could be next.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="cta-button text-earth-brown font-bold text-lg px-8 py-4 rounded-lg"
            >
              Start Your Transformation Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;