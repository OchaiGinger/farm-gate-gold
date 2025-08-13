import React from 'react';
import { Brain, Smartphone, Zap, DollarSign, Target, FileText, Truck, BarChart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FeaturesSection = () => {
  const harvestFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Harvest Prediction",
      description: "Smart algorithms predict optimal harvest timing, maximizing crop quality and yield while minimizing losses."
    },
    {
      icon: Smartphone,
      title: "Real-Time Quality Monitoring",
      description: "Mobile sensors track crop conditions, moisture levels, and quality indicators throughout the growing cycle."
    },
    {
      icon: Zap,
      title: "Instant Market Matching",
      description: "Connect directly with verified buyers who need your exact crop type, quantity, and quality specifications."
    },
    {
      icon: DollarSign,
      title: "Dynamic Pricing Intelligence",
      description: "Real-time market data ensures you get the best prices based on current demand and quality metrics."
    }
  ];

  const buyerFeatures = [
    {
      icon: Target,
      title: "Verified Buyer Network",
      description: "Access premium restaurants, supermarkets, and export companies actively seeking your quality produce."
    },
    {
      icon: FileText,
      title: "Smart Contract Integration",
      description: "Automated contracts ensure fair pricing, timely payments, and quality guarantees for all transactions."
    },
    {
      icon: Truck,
      title: "Logistics Coordination",
      description: "Streamlined transportation and delivery systems connect farms directly to buyer locations."
    },
    {
      icon: BarChart,
      title: "Demand Forecasting",
      description: "Predictive analytics show future market demand, helping you plan crops buyers actually need."
    }
  ];

  const FeatureGrid = ({ features, testimonial }: { features: any[], testimonial: any }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {features.map((feature, index) => {
        const IconComponent = feature.icon;
        return (
          <Card key={index} className={`feature-card fade-in-up delay-${(index + 1) * 100}`}>
            <CardHeader>
              <div className="w-12 h-12 bg-agtech-green rounded-lg flex items-center justify-center mb-4">
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-lg text-agtech-green">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );

  return (
    <section id="features" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Smart Harvest Management */}
        <div className="mb-20">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-agtech-green">
              Smart Harvest Management
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced technology that predicts, monitors, and optimizes every aspect of your harvest cycle.
            </p>
          </div>

          <FeatureGrid features={harvestFeatures} testimonial={null} />

          {/* Farmer John's Success Story */}
          <div className="bg-agtech-green/5 border border-agtech-green/20 rounded-lg p-8 fade-in-up">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-agtech-green rounded-full flex items-center justify-center text-white font-bold text-xl">
                FJ
              </div>
              <div>
                <h4 className="text-xl font-bold text-agtech-green mb-2">Farmer John's Success</h4>
                <p className="text-muted-foreground mb-4">
                  "Before HarvestingGuard, I lost 35% of my tomato harvest to poor timing and storage. 
                  Now with AI predictions and quality monitoring, I've reduced losses to just 8% and 
                  increased my profits by 180%. The smart matching connected me directly to premium restaurants."
                </p>
                <div className="text-sm text-agtech-green font-semibold">
                  — John Okafor, Tomato Farmer, Kano State
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Direct Buyer Connections */}
        <div>
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-agtech-green">
              Direct Buyer Connections
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Skip the middlemen and connect directly with verified buyers who pay premium prices for quality produce.
            </p>
          </div>

          <FeatureGrid features={buyerFeatures} testimonial={null} />

          {/* Ada's Testimonial */}
          <div className="bg-agtech-gold/5 border border-agtech-gold/20 rounded-lg p-8 fade-in-up">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-agtech-gold rounded-full flex items-center justify-center text-earth-brown font-bold text-xl">
                AO
              </div>
              <div>
                <h4 className="text-xl font-bold text-agtech-green mb-2">Premium Buyer Success</h4>
                <p className="text-muted-foreground mb-4">
                  "As a restaurant chain buyer, HarvestingGuard transformed how we source fresh produce. 
                  Direct connections with verified farmers mean consistent quality, better prices, and 
                  supporting local agriculture. Our food costs dropped 25% while quality improved dramatically."
                </p>
                <div className="text-sm text-agtech-green font-semibold">
                  — Ada Okonkwo, Procurement Manager, Premium Restaurant Chain
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;