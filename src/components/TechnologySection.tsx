import React from 'react';
import { Thermometer, Package, Microscope, Clock, Satellite, Bot, BarChart3, Smartphone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TechnologySection = () => {
  const postHarvestFeatures = [
    {
      icon: Thermometer,
      title: "Climate-Controlled Storage",
      description: "Smart storage systems maintain optimal temperature and humidity for maximum crop preservation."
    },
    {
      icon: Package,
      title: "Intelligent Packaging",
      description: "Automated packaging solutions that extend shelf life and maintain quality during transport."
    },
    {
      icon: Microscope,
      title: "AI Quality Assessment",
      description: "Computer vision technology instantly grades produce quality and predicts shelf life."
    },
    {
      icon: Clock,
      title: "Optimal Timing Algorithms",
      description: "Predictive models determine the perfect timing for harvest, storage, and delivery."
    }
  ];

  const technologyFeatures = [
    {
      icon: Satellite,
      title: "Satellite Monitoring",
      description: "Real-time crop monitoring using satellite imagery and weather data analysis."
    },
    {
      icon: Bot,
      title: "IoT Sensor Networks",
      description: "Smart sensors track soil moisture, temperature, and crop health across your entire farm."
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Advanced algorithms predict market trends, weather patterns, and optimal farming decisions."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Platform",
      description: "Access all features from your smartphone - no expensive equipment required."
    }
  ];

  const FeatureGrid = ({ features, title }: { features: any[], title: string }) => (
    <div className="mb-20">
      <div className="text-center mb-12 fade-in-up">
        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-agtech-green">{title}</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
    </div>
  );

  return (
    <section id="technology" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Post-Harvest Loss Elimination */}
        <FeatureGrid features={postHarvestFeatures} title="Post-Harvest Loss Elimination" />

        {/* Cassava Success Story */}
        <div className="bg-agtech-green/5 border border-agtech-green/20 rounded-lg p-8 mb-20 fade-in-up">
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-agtech-green rounded-full flex items-center justify-center text-white font-bold text-xl">
              CF
            </div>
            <div>
              <h4 className="text-xl font-bold text-agtech-green mb-2">Cassava Farmer Impact</h4>
              <p className="text-muted-foreground mb-4">
                "Climate-controlled storage and AI timing reduced my cassava waste from 45% to 12%. 
                The smart packaging system extended shelf life by 3 weeks, allowing me to reach distant 
                markets. My annual income increased by ₦2.3 million in the first year alone."
              </p>
              <div className="text-sm text-agtech-green font-semibold">
                — Chief Adanna Okechukwu, Cassava Farmer, Abia State
              </div>
            </div>
          </div>
        </div>

        {/* Technology Integration */}
        <FeatureGrid features={technologyFeatures} title="Technology Integration" />

        {/* Comfort's Story */}
        <div className="bg-agtech-gold/5 border border-agtech-gold/20 rounded-lg p-8 fade-in-up">
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-agtech-gold rounded-full flex items-center justify-center text-earth-brown font-bold text-xl">
              CA
            </div>
            <div>
              <h4 className="text-xl font-bold text-agtech-green mb-2">Smart Farming Success</h4>
              <p className="text-muted-foreground mb-4">
                "IoT sensors showed exactly when my maize needed water and nutrients. Satellite monitoring 
                caught pest problems early. The predictive analytics helped me reduce fertilizer costs by 
                40% while increasing yield by 65%. Technology made farming profitable again."
              </p>
              <div className="text-sm text-agtech-green font-semibold">
                — Comfort Adeyemi, Maize Farmer, Kaduna State
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;