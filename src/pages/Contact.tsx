import React from 'react';
import Navbar from '@/components/Navbar';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  const benefits = [
    "6-month premium platform access",
    "₦100,000 income guarantee or money back",
    "Complete farm setup & training",
    "First premium buyer connection",
    "24/7 technical support",
    "AI-powered harvest optimization"
  ];

  const steps = [
    {
      step: "1",
      title: "Call Now",
      description: "Speak with our AgTech specialists and get instant guidance on your farm's potential."
    },
    {
      step: "2", 
      title: "Farm Assessment",
      description: "Our team conducts a comprehensive analysis of your farm and creates a custom success plan."
    },
    {
      step: "3",
      title: "Launch Success",
      description: "Start earning more with direct buyer connections and smart harvest management."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-in-up">
              Your Farm's <span className="gradient-text">Prosperity</span> Starts With One Decision
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in-up delay-200">
              Join thousands of Nigerian farmers who have transformed their agricultural business with HarvestingGuard
            </p>
          </div>
        </div>
      </section>

      {/* Free Launch Package */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="glass-card p-8 fade-in-up">
              <CardHeader className="text-center pb-8">
                <div className="inline-block bg-agtech-gold text-earth-brown px-6 py-2 rounded-full font-bold text-lg mb-4">
                  FREE Launch Package
                </div>
                <CardTitle className="text-3xl md:text-4xl font-bold">
                  Everything You Need to <span className="text-agtech-green">Succeed</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-agtech-green flex-shrink-0" />
                      <span className="text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-muted-foreground mb-2">Total Value: ₦500,000</div>
                  <div className="text-4xl font-bold text-agtech-green mb-6">FREE for Early Adopters</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 fade-in-up">
              Your Success Journey in <span className="text-agtech-green">3 Simple Steps</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className={`feature-card text-center p-8 fade-in-up delay-${(index + 1) * 100}`}>
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-agtech-green text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Button 
              size="lg" 
              className="cta-button text-earth-brown font-bold text-2xl px-12 py-6 mb-8 fade-in-up"
              onClick={() => window.location.href = 'tel:+2348148327506'}
            >
              <Phone className="mr-3 h-6 w-6" />
              Call 08148327506 Now
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="feature-card text-center p-8 fade-in-up">
              <CardContent className="pt-6">
                <Phone className="w-12 h-12 text-agtech-green mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Phone Support</h3>
                <p className="text-muted-foreground mb-4">Speak directly with our AgTech specialists</p>
                <p className="font-semibold">08148327506</p>
              </CardContent>
            </Card>

            <Card className="feature-card text-center p-8 fade-in-up delay-200">
              <CardContent className="pt-6">
                <Clock className="w-12 h-12 text-agtech-green mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Business Hours</h3>
                <p className="text-muted-foreground mb-4">We're here when you need us</p>
                <p className="font-semibold">Mon-Sat: 8AM - 8PM WAT</p>
              </CardContent>
            </Card>

            <Card className="feature-card text-center p-8 fade-in-up delay-300">
              <CardContent className="pt-6">
                <MapPin className="w-12 h-12 text-agtech-green mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Live Demo Available</h3>
                <p className="text-muted-foreground mb-4">See the platform in action</p>
                <p className="font-semibold">Schedule your demo today</p>
              </CardContent>
            </Card>
          </div>

          {/* Testimonial */}
          <div className="mt-20 text-center">
            <Card className="glass-card max-w-4xl mx-auto p-8 fade-in-up">
              <CardContent>
                <blockquote className="text-2xl md:text-3xl font-medium italic text-center mb-6">
                  "Within 3 months of joining HarvestingGuard, my farm income increased by 180%. 
                  The direct buyer connections alone saved me from the exploitation of middlemen."
                </blockquote>
                <div className="text-lg font-semibold text-agtech-green">
                  - Chief Emeka Ogbonna, Cassava Farmer, Imo State
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;