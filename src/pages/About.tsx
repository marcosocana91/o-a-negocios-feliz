
import React from 'react';
import Navigation from '../components/Navigation';
import FooterBanner from '../components/FooterBanner';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      <div className="flex-grow container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 uppercase tracking-widest border-b-2 border-black pb-4">
          About Us
        </h1>
        
        <div className="font-serif text-lg space-y-6">
          <p>
            "When design says..." is a tool to bridge the communication gap between designers and business stakeholders.
          </p>
          
          <p>
            In the world of product development, designers and business professionals often speak different languages. 
            What sounds like an exciting UX improvement to a designer might not resonate with stakeholders who focus on metrics and business outcomes.
          </p>
          
          <p>
            Our translator helps both sides understand each other better by converting design terminology to business language and vice versa.
          </p>
          
          <p>
            Whether you're a designer trying to make a case for your work or a business professional wanting to better understand design decisions, 
            our tool is here to help you find common ground and speak a language everyone can understand.
          </p>
        </div>
      </div>
      
      <FooterBanner />
    </div>
  );
};

export default About;
