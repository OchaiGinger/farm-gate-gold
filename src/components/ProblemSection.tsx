import React from 'react';
import { TrendingDown, Users, Truck, Eye } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    {
      icon: TrendingDown,
      text: "₦3.5 trillion worth of crops wasted annually due to poor storage and logistics"
    },
    {
      icon: Users,
      text: "Exploitative middlemen capturing 60-80% of crop value while farmers struggle"
    },
    {
      icon: Truck,
      text: "No direct access to premium buyers - crops rot while markets pay high prices"
    },
    {
      icon: Eye,
      text: "Zero transparency in pricing, quality standards, and market demand"
    }
  ];

  return (
    <section className="py-20 bg-gradient-earth text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nigerian Farmers Are <span className="text-red-400">Bleeding Billions</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div 
                key={index}
                className={`flex items-start space-x-4 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 fade-in-up delay-${(index + 1) * 100}`}
              >
                <IconComponent className="w-8 h-8 text-red-400 flex-shrink-0 mt-1" />
                <p className="text-lg leading-relaxed">{problem.text}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center fade-in-up delay-500">
          <div className="inline-block bg-agtech-gold text-earth-brown px-8 py-4 rounded-lg font-bold text-xl">
            The agricultural revolution starts now.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;