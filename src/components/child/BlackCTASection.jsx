import React from 'react';
import { ArrowRight, Star, Users, Trophy } from 'lucide-react';

const BlackCtaSection = () => {
  return (
    <section className="py-16 pb-20 px-4  sm:px-8 lg:px-16 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-16 left-16 w-24 h-24 bg-green-500 rounded-full blur-2xl"></div>
        <div className="absolute bottom-16 right-16 w-32 h-32 bg-green-400 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-green-300 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-snug">
          What Are You Waiting For?
          <br />
          <span className="text-green-400">Start Acing Interviews</span>
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-sm text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Thousands have already improved their confidence and landed jobs using AI-powered practice. It’s your turn now.
        </p>

        {/* Stats
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <Stat icon={Users} value="50K+" label="Active Users" />
          <Stat icon={Star} value="4.9/5" label="User Rating" />
          <Stat icon={Trophy} value="95%" label="Success Rate" />
        </div> */}

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg text-base transition-all hover:-translate-y-1 flex items-center gap-2">
            Start Free Trial
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
        </div>

       
      </div>
    </section>
  );
};

const Stat = ({ icon: Icon, value, label }) => (
  <div className="text-center">
    <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500 bg-opacity-10 rounded-full mb-3">
      <Icon className="w-6 h-6 text-green-400" />
    </div>
    <div className="text-xl font-bold text-white">{value}</div>
    <div className="text-sm text-gray-400">{label}</div>
  </div>
);

export default BlackCtaSection;
