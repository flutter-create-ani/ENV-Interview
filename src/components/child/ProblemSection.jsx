import React, { useEffect, useRef, useState } from 'react';
import { Users, AlertCircle, BookOpen, TrendingDown, Globe, Clock, BrainCircuit, Code2, HelpCircle, TimerReset, Meh } from 'lucide-react';

const ProblemsSection = () => {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const problems = [
    { icon: Users, title: "Lack of Confidence in Interviews", iconBg: "bg-orange-100", iconColor: "text-orange-500" },
    { icon: AlertCircle, title: "Fear of Unexpected Questions", iconBg: "bg-purple-100", iconColor: "text-purple-500" },
    { icon: BookOpen, title: "Lack of Experience and Preparation", iconBg: "bg-purple-100", iconColor: "text-purple-500" },
    { icon: TrendingDown, title: "Low Interview Success Rate", iconBg: "bg-yellow-100", iconColor: "text-yellow-500" },
    { icon: Globe, title: "Language Barriers", iconBg: "bg-green-100", iconColor: "text-green-500" },
    { icon: Clock, title: "Slow Job Search Process", iconBg: "bg-blue-100", iconColor: "text-blue-500" },

    // Custom user challenges
    { icon: BrainCircuit, title: "Freezing During Problem Solving", iconBg: "bg-red-100", iconColor: "text-red-500" },
    { icon: Code2, title: "Struggling with DSA under Pressure", iconBg: "bg-indigo-100", iconColor: "text-indigo-500" },
    { icon: HelpCircle, title: "Feeling Lost Despite Preparation", iconBg: "bg-pink-100", iconColor: "text-pink-500" },
    { icon: TimerReset, title: "Time Management in Interviews", iconBg: "bg-teal-100", iconColor: "text-teal-500" },
    { icon: Meh, title: "ECE Background – Imposter Syndrome", iconBg: "bg-gray-200", iconColor: "text-gray-600" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
        if (isHovered || !scrollRef.current) return;
      if (!isHovered && scrollRef.current) {
        scrollRef.current.scrollLeft += 1;
      }
    }, 15);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">What Problems Does ENV Interview Solve?</h2>
      </div>

      <div
        ref={scrollRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex overflow-x-auto gap-6 no-scrollbar px-2 sm:px-6"
        style={{ scrollBehavior: 'smooth' }}
      >
        {problems.map((problem, index) => {
          const Icon = problem.icon;
          return (
            <div
              key={index}
              className="flex-shrink-0 h-auto my-5 w-72 bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-transform duration-300 border border-gray-100"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${problem.iconBg} flex items-center justify-center`}>
                <Icon className={`w-8 h-8 ${problem.iconColor}`} />
              </div>
              <h3 className="text-xs font-semibold text-gray-900">{problem.title}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProblemsSection;
