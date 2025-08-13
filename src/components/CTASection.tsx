import React from 'react';
import { Phone, CheckCircle, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  const benefits = [
    "6-month premium platform access (₦150,000 value)",
    "₦100,000 minimum income guarantee in first year",
    "Complete farm assessment & technology setup",
    "Personal training & 24/7 support",
    "First verified buyer connection within 30 days"
  ];

  const steps = [
    {
      number: "1",
      title: "Call Now",
      description: "Speak with our agricultural technology specialist"
    },
    {
      number: "2", 
      title: "Farm Assessment",
      description: "Free on-site evaluation of your farm's potential"
    },
    {
      number: "3",
      title: "Launch Success",
      description: "Go live with guaranteed buyer connections"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-hero text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Your Farm's Prosperity Starts With{' '}
            <span className="text-agtech-gold">One Decision</span>
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto">
            Join the agricultural revolution transforming Nigerian farming. 
            Start earning premium prices for your crops today.
          </p>
        </div>

        {/* Launch Package */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 mb-12 fade-in-up delay-200">
          <h3 className="text-3xl font-bold text-agtech-gold mb-6 text-center">
            FREE Launch Package (Limited Time)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">What You Get:</h4>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-agtech-gold flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl font-bold text-agtech-gold mb-2">₦0</div>
                <div className="text-xl opacity-75 mb-4">Setup Cost</div>
                <div className="text-3xl font-bold mb-2">₦100K+</div>
                <div className="text-lg opacity-75">Guaranteed First Year Income</div>
              </div>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="mb-12 fade-in-up delay-300">
          <h3 className="text-3xl font-bold text-center mb-12">Three Simple Steps to Success</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-agtech-gold text-earth-brown rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h4 className="text-xl font-bold mb-3 text-agtech-gold">{step.title}</h4>
                <p className="text-lg opacity-90">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main CTA */}
        <div className="text-center mb-12 fade-in-up delay-400">
          <Button 
            size="lg"
            className="cta-button text-earth-brown font-bold text-2xl px-12 py-6 mb-6"
            onClick={() => window.open('tel:08148327506')}
          >
            <Phone className="w-6 h-6 mr-3" />
            Call 08148327506 Now
          </Button>
          <p className="text-lg opacity-75">
            Click to call instantly on mobile • Free consultation • No obligations
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in-up delay-500">
          <div className="text-center">
            <Phone className="w-8 h-8 text-agtech-gold mx-auto mb-3" />
            <h4 className="font-semibold mb-2">Phone Support</h4>
            <p className="opacity-75">08148327506</p>
            <p className="text-sm opacity-60">Available 24/7</p>
          </div>
          <div className="text-center">
            <Clock className="w-8 h-8 text-agtech-gold mx-auto mb-3" />
            <h4 className="font-semibold mb-2">Business Hours</h4>
            <p className="opacity-75">Mon-Sat: 8AM-6PM</p>
            <p className="text-sm opacity-60">Emergency support 24/7</p>
          </div>
          <div className="text-center">
            <MapPin className="w-8 h-8 text-agtech-gold mx-auto mb-3" />
            <h4 className="font-semibold mb-2">Demo Available</h4>
            <p className="opacity-75">All 36 States</p>
            <p className="text-sm opacity-60">On-site consultations</p>
          </div>
        </div>

        {/* Final Message */}
        <div className="text-center mt-16 fade-in-up delay-600">
          <div className="bg-agtech-gold/20 border border-agtech-gold/30 rounded-lg p-8 max-w-4xl mx-auto">
            <p className="text-xl font-semibold mb-4">
              "Don't let another harvest season pass watching your crops lose value. 
              The technology exists. The buyers are waiting. Your success is guaranteed."
            </p>
            <p className="text-lg opacity-75">
              — Join 2,000+ farmers already transforming their lives with HarvestingGuard
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;