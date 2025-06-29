import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

const InterviewDemoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [transcriptText, setTranscriptText] = useState('');
  const [responseText, setResponseText] = useState('');

  const interviewSteps = [
    {
      question: "Why do you want to work as a software engineer at our company?",
      timestamp: "00:02:58",
      response: "I admire your innovative tech solutions and collaborative culture. My skills in software development and passion for creating efficient code align perfectly with your company's mission, and I'm eager to contribute to your team's success.",
      nextTimestamp: "00:03:11"
    },
    {
      question: "Can you describe your software development process?",
      timestamp: "00:03:11", 
      response: "I gather requirements, design architecture, develop, test, iterate based on feedback, and ensure high-quality deliverables through reviews and testing, while also optimizing performance, maintaining documentation, collaborating with stakeholders",
      nextTimestamp: "00:03:45"
    },
    {
      question: "What's your experience with modern JavaScript frameworks?",
      timestamp: "00:03:45",
      response: "I have extensive experience with React, Vue, and Angular. I've built scalable applications using React hooks, state management with Redux, and implemented responsive designs with modern CSS frameworks.",
      nextTimestamp: "00:04:20"
    }
  ];

  const typeText = (text, setter, speed = 50) => {
    let i = 0;
    setter('');
    const interval = setInterval(() => {
      if (i < text.length) {
        setter(prev => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return interval;
  };

  useEffect(() => {
    let questionInterval, responseInterval;
    
    if (isPlaying) {
      const step = interviewSteps[currentStep];
      questionInterval = typeText(step.question, setTranscriptText, 80);
      setTimeout(() => {
        responseInterval = typeText(step.response, setResponseText, 30);
      }, step.question.length * 80 + 500);
    }

    return () => {
      if (questionInterval) clearInterval(questionInterval);
      if (responseInterval) clearInterval(responseInterval);
    };
  }, [isPlaying, currentStep]);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStep(0);
    setTranscriptText('');
    setResponseText('');
  };

  const handleNext = () => {
    if (currentStep < interviewSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(0);
    }
    setTranscriptText('');
    setResponseText('');
  };

  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-900">
            How It Works
          </h2>
          <p className="text-lg text-gray-600">
            Get a glimpse of how our AI-driven mock interviews simulate real interactions
          </p>
        </div>

        <div className="relative w-full max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-gray-100 border border-gray-200">
          <div className="flex h-[600px]">
            <div className="flex-1 p-8 flex flex-col bg-white">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-orange-200">
                  <div className="w-full h-full flex items-center justify-center text-2xl">👨‍💼</div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">Interviewer</h3>
                  <p className="font-medium text-gray-700">Your AI Interviewer</p>
                </div>
                <div className="ml-auto">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-500 text-white">
                    <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                    Transcribing
                  </span>
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <div className="space-y-4">
                  <div className="text-sm text-gray-500">
                    {interviewSteps[currentStep]?.timestamp}
                  </div>
                  <div className="text-lg font-medium leading-relaxed text-gray-900">
                    {transcriptText}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-px bg-gray-200"></div>

            <div className="flex-1 p-8 bg-gray-50">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    Aniket 
                  </h3>
                  <p className="text-sm mt-1 text-gray-600">
                    Real Candidate who wants to ace the interview
                  </p>
                </div>
                {/* <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-4 h-4 flex items-center justify-center">✨</span>
                  AI Generating
                </div> */}
              </div>

              <div className="space-y-6">
                <div className="text-sm text-gray-500">
                  {interviewSteps[currentStep]?.timestamp}
                </div>

                <div className="bg-white backdrop-blur-xl rounded-xl p-6 border border-white/20">
                  <div className="text-base leading-relaxed text-gray-900">
                    {responseText}
                  </div>
                </div>

                <div className="text-sm text-gray-500">
                  {interviewSteps[currentStep]?.nextTimestamp}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/90">
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={handlePlay}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white hover:opacity-90"
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>
              <button
                onClick={handleReset}
                className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-300 text-gray-600 hover:bg-gray-50"
              >
                <RotateCcw size={16} />
              </button>
              <button
                onClick={handleNext}
                className="px-4 py-2 rounded-lg text-sm font-medium bg-green-100 text-green-700 hover:opacity-90"
              >
                Next Question
              </button>
              <div className="flex items-center gap-2 ml-4">
                {interviewSteps.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${index === currentStep ? 'bg-green-500' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-gray-500">
          * Demo shows a real-time AI interviewer transcribing and generating smart responses
        </div>
      </div>
    </section>
  );
};

export default InterviewDemoSection;
