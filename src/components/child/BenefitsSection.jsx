import React from 'react';
import {
  Lightbulb,
  Mic,
  Zap,
  BarChart3,
  FileText,
  Clock,
  MessageCircle,
  CheckCircle,
  BrainCog,
} from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Lightbulb,
      title: 'Feels Like a Real Interview',
      description: 'You speak, it listens. The flow is natural — like talking to a real person, not a robot.',
      color: 'var(--custom-yellow-500)',
    },
    {
      icon: Mic,
      title: 'Speak Freely, No Typing',
      description: 'Just talk. Answer questions out loud and practice the way real interviews actually happen.',
      color: 'var(--custom-blue-600)',
    },
    {
      icon: Zap,
      title: 'Handles Interruptions',
      description: 'Get interrupted, redirected, or nudged — just like in actual interviews.',
      color: 'var(--custom-red-500)',
    },
    {
      icon: BarChart3,
      title: 'Breakdown of Your Performance',
      description: 'See exactly how you did — confidence, clarity, and technical accuracy for every answer.',
      color: 'var(--custom-blue-500)',
    },
    {
      icon: FileText,
      title: 'Your Progress, Saved Automatically',
      description: 'Every session is stored and searchable — revisit what you said and how you improved.',
      color: 'var(--custom-teal-500)',
    },
    {
      icon: Clock,
      title: 'Practice When You Want',
      description: 'No need to wait. Your AI interviewer is always ready.',
      color: 'var(--custom-purple-500)',
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Why ENV Interview Feels Different
          </h2>
          <h4>We’ve been there — we built this because we failed in interviews, and we don’t want you to go through the same.</h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-xl border border-gray-100 transition-transform duration-300 hover:-translate-y-2"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: benefit.color + '1A' }}
                >
                  <Icon className="w-7 h-7" style={{ color: benefit.color }} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
