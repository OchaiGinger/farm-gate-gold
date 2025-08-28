import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-farmland.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-4xl fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            From Farm Gate to{' '}
            <span className="gradient-text">Market Gold</span>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-agtech-gold-light">
            Revolutionizing Nigerian Agriculture
          </h2>
          
          <p className="text-lg md:text-xl mb-8 leading-relaxed fade-in-up delay-200">
            HarvestingGuard eliminates post-harvest losses, connects farmers directly to buyers, 
            and transforms agricultural supply chains with cutting-edge technology.
          </p>

          <div className="bg-agtech-green/20 backdrop-blur-sm border border-agtech-gold/30 rounded-lg p-6 mb-8 fade-in-up delay-300">
            <h3 className="text-xl font-bold mb-4 text-agtech-gold">Stop Watching Your Harvest Rot</h3>
            <p className="text-lg leading-relaxed">
              Stop watching 40% of your harvest rot while hungry customers pay premium prices for the same crops. 
              Your farm's potential is massive—you just need the right technology to unlock it.
            </p>
          </div>

          <div className="mb-8 fade-in-up delay-400">
            <h4 className="text-lg font-semibold mb-3 text-agtech-gold">Our Vision:</h4>
            <p className="text-lg italic">
              "We're not just managing supply chains—we're feeding Nigeria's future. 
              Every farmer deserves to profit from their hard work. Every consumer deserves fresh, affordable food."
            </p>
          </div>

          <Button 
            size="lg" 
            className="cta-button text-earth-brown font-bold text-lg px-8 py-4 fade-in-up delay-500"
            onClick={() => window.location.href = '/contact'}
          >
            Transform Your Farm Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;