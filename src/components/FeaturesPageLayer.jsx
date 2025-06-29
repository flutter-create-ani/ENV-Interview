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

const features = [
  {
    icon: Lightbulb,
    title: 'Human-Like Conversations',
    description:
      'ENV Interview simulates real interviewers with voice, interruptions, and dynamic pacing — so you never feel like you’re talking to a script.',
    color: 'var(--custom-yellow-500)',
  },
  {
    icon: Mic,
    title: 'Natural Voice Interaction',
    description:
      'Just speak your answers — ENV listens and responds naturally using SSML and TTS. No typing, just real practice.',
    color: 'var(--custom-blue-600)',
  },
  {
    icon: Zap,
    title: 'Smart Interruptions',
    description:
      'Real interviewers interrupt — so do we. ENV cuts in when you pause, ramble, or hesitate. Learn to stay sharp.',
    color: 'var(--custom-red-500)',
  },
  {
    icon: BarChart3,
    title: 'In-Depth Analysis',
    description:
      'Get detailed breakdowns of every answer — clarity, confidence, filler words, and technical content — all scored and explained.',
    color: 'var(--custom-blue-500)',
  },
  {
    icon: FileText,
    title: 'Audio + Transcript Logging',
    description:
      'Every session is saved to your ENV dashboard — listen back, read transcripts, and track your improvement.',
    color: 'var(--custom-teal-500)',
  },
  {
    icon: Clock,
    title: 'Anytime Practice',
    description:
      'ENV is available 24/7 — no scheduling, no waiting. Just hop in and start preparing like it’s the real thing.',
    color: 'var(--custom-purple-500)',
  },
  {
    icon: MessageCircle,
    title: 'Personalized Feedback',
    description:
      'ENV gives instant feedback after each answer with suggestions tailored to your delivery and content.',
    color: 'var(--custom-orange-500)',
  },
  {
    icon: CheckCircle,
    title: 'Bias-Free Interviews',
    description:
      'You’re not judged — you’re guided. ENV is here to help, not filter. Honest data. Zero ego.',
    color: 'var(--custom-green-600)',
  },
  {
    icon: BrainCog,
    title: 'Built by Engineers, for Engineers',
    description:
      'We created ENV because we struggled with interviews too. It’s everything we wish we had while preparing for product companies.',
    color: 'var(--custom-green-500)',
  },
];

const FeaturesPageLayer = () => {
  return (
    <section className="min-h-screen px-4 sm:px-8 lg:px-16 py-20 bg-custom-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-custom-gray-900 mb-4">
            Why Engineers Trust ENV Interview
          </h2>
          <p className="text-custom-gray-600 max-w-2xl mx-auto">
            ENV Interview isn't just another mock platform — it's a complete practice environment designed to challenge you like real interviews do.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-custom-gray-100 floating-card"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: feature.color + '20' }}
                >
                  <Icon className="w-6 h-6" style={{ color: feature.color }} />
                </div>
                <h3 className="text-lg font-semibold text-custom-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-custom-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesPageLayer;
