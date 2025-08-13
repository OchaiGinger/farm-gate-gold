import React from 'react';
import ukwaImage from '@/assets/team-ukwa.jpg';
import adaezeImage from '@/assets/team-adaeze.jpg';
import kelechiImage from '@/assets/team-kelechi.jpg';
import blessingImage from '@/assets/team-blessing.jpg';
import emekaImage from '@/assets/team-emeka.jpg';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Ukwa Emmanuel James",
      role: "Founder & Chief Agricultural Officer",
      image: ukwaImage,
      description: "15+ years transforming agricultural systems across West Africa"
    },
    {
      name: "Adaeze Chioma Nwankwo",
      role: "Head of AI & Data Science",
      image: adaezeImage,
      description: "Former Google AI researcher specializing in agricultural prediction models"
    },
    {
      name: "Kelechi David Okoro",
      role: "Supply Chain Technology Director",
      image: kelechiImage,
      description: "Supply chain expert with proven track record at major logistics companies"
    },
    {
      name: "Blessing Favour Okafor",
      role: "Financial Technology Lead",
      image: blessingImage,
      description: "Fintech innovator focused on agricultural financial inclusion"
    },
    {
      name: "Emeka Michael Eze",
      role: "IoT & Sensor Systems Engineer",
      image: emekaImage,
      description: "IoT specialist developing smart agriculture monitoring solutions"
    }
  ];

  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-agtech-green">
            Meet Your AgTech Revolutionaries
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            World-class experts dedicated to transforming Nigerian agriculture through cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className={`bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 fade-in-up delay-${(index + 1) * 100}`}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-agtech-green mb-2">{member.name}</h3>
                <h4 className="text-agtech-gold font-semibold mb-3">{member.role}</h4>
                <p className="text-muted-foreground leading-relaxed">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="text-center bg-gradient-hero text-white rounded-lg p-12 fade-in-up delay-600">
          <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            "We're not just building software—we're engineering a new era of African agricultural prosperity. 
            Every line of code we write, every algorithm we develop, and every farmer we connect brings us 
            closer to a Nigeria where no harvest is wasted and every farmer thrives."
          </p>
          <div className="mt-6 text-agtech-gold font-semibold">
            — The HarvestingGuard Team
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;