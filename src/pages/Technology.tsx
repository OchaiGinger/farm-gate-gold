import React from 'react';
import { ArrowLeft, Satellite, Brain, Wifi, Smartphone, Thermometer, Package, Microscope, Clock, BarChart3, Shield, Zap, Globe, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';

const Technology = () => {
  const mainFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms predict harvest yields, optimize storage conditions, and forecast market demand with 95% accuracy.",
      category: "Artificial Intelligence",
      stats: "95% Accuracy"
    },
    {
      icon: Satellite,
      title: "Satellite Monitoring",
      description: "Real-time satellite imagery tracks crop health, weather patterns, and soil conditions across vast agricultural areas.",
      category: "Remote Sensing",
      stats: "24/7 Monitoring"
    },
    {
      icon: Wifi,
      title: "IoT Sensor Networks",
      description: "Smart sensors continuously monitor temperature, humidity, soil moisture, and air quality for optimal growing conditions.",
      category: "Internet of Things",
      stats: "1000+ Sensors"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Platform",
      description: "User-friendly mobile app designed for farmers with offline capabilities and intuitive interfaces in local languages.",
      category: "Mobile Technology",
      stats: "99.9% Uptime"
    }
  ];

  const postHarvestSolutions = [
    {
      icon: Thermometer,
      title: "Climate-Controlled Storage",
      description: "Smart storage facilities with automated temperature and humidity control to preserve crop quality and extend shelf life.",
      benefit: "Reduces losses by 80%"
    },
    {
      icon: Package,
      title: "Intelligent Packaging",
      description: "Advanced packaging solutions with freshness indicators and optimal preservation materials for different crop types.",
      benefit: "Extends freshness by 3x"
    },
    {
      icon: Microscope,
      title: "AI Quality Assessment",
      description: "Computer vision technology instantly grades crop quality, detects defects, and ensures consistency in product standards.",
      benefit: "100% Quality Assurance"
    },
    {
      icon: Clock,
      title: "Optimal Timing Algorithms",
      description: "Predictive algorithms determine the perfect harvesting, storage, and delivery timing for maximum profit and quality.",
      benefit: "30% Better Timing"
    }
  ];

  const platformCapabilities = [
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Forecast market trends, price fluctuations, and demand patterns to maximize farmer profits.",
      color: "bg-agtech-green/10 text-agtech-green"
    },
    {
      icon: Shield,
      title: "Blockchain Security",
      description: "Immutable transaction records and supply chain transparency with enterprise-grade security.",
      color: "bg-agtech-gold/10 text-agtech-gold"
    },
    {
      icon: Zap,
      title: "Real-Time Processing",
      description: "Lightning-fast data processing and instant notifications for time-critical decisions.",
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      icon: Globe,
      title: "Global Connectivity",
      description: "Connect Nigerian farmers to international markets with seamless cross-border transactions.",
      color: "bg-purple-500/10 text-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-agtech-green to-agtech-green-light text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="max-w-4xl">
            <Badge className="bg-white/20 text-white border-white/30 mb-6">
              Advanced Technology Stack
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Technology That <span className="text-agtech-gold">Transforms</span> Agriculture
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Discover the cutting-edge innovations powering Nigeria's agricultural revolution. From AI-driven insights to IoT sensors, we're building the future of farming.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-agtech-green hover:bg-white/90">
                Explore Solutions
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">Core Technologies</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Powered by Innovation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform combines multiple cutting-edge technologies to deliver unprecedented results for Nigerian farmers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-agtech-green/20">
                  <CardHeader className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="w-16 h-16 bg-agtech-green/10 rounded-xl flex items-center justify-center group-hover:bg-agtech-green/20 transition-colors">
                        <IconComponent className="w-8 h-8 text-agtech-green" />
                      </div>
                      <Badge variant="secondary">{feature.stats}</Badge>
                    </div>
                    <div>
                      <Badge className="mb-3 text-xs">{feature.category}</Badge>
                      <CardTitle className="text-2xl">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Post-Harvest Solutions */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">Post-Harvest Innovation</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Eliminate Crop Losses Forever
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced post-harvest technologies that preserve quality, extend shelf life, and maximize value for every harvest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {postHarvestSolutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                  <CardHeader className="space-y-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-agtech-gold to-agtech-gold-light rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-xl">{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-sm leading-relaxed">
                      {solution.description}
                    </CardDescription>
                    <Badge className="bg-agtech-green/10 text-agtech-green">
                      {solution.benefit}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">Platform Features</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Built for Scale & Security
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enterprise-grade capabilities designed to handle Nigeria's entire agricultural ecosystem with uncompromising reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platformCapabilities.map((capability, index) => {
              const IconComponent = capability.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/20">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto ${capability.color} group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-lg">{capability.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {capability.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-gradient-to-br from-agtech-green to-agtech-green-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-white/20 text-white border-white/30 mb-6">
                Technical Excellence
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Built with Industry-Leading Standards
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Our technology stack is designed for reliability, scalability, and security. Every component is tested, optimized, and built to handle Nigeria's unique agricultural challenges.
              </p>
              <Button size="lg" className="bg-white text-agtech-green hover:bg-white/90">
                View Technical Documentation
              </Button>
            </div>
            
            <div className="space-y-6">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">System Uptime</h3>
                    <Badge className="bg-green-500 text-white">99.9%</Badge>
                  </div>
                  <p className="text-white/80 text-sm">Guaranteed availability with redundant infrastructure</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Data Processing</h3>
                    <Badge className="bg-blue-500 text-white">Real-time</Badge>
                  </div>
                  <p className="text-white/80 text-sm">Lightning-fast analytics and instant notifications</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Security Standards</h3>
                    <Badge className="bg-yellow-500 text-white">Bank-Grade</Badge>
                  </div>
                  <p className="text-white/80 text-sm">End-to-end encryption and blockchain security</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of Nigerian farmers already using our technology to increase profits and reduce losses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;