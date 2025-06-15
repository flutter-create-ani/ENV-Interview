import React from 'react';

function HeroLandingSection() {
  return (
    <div className="flex flex-col justify-center items-center h-screen px-4 sm:px-8 bg-gradient-to-br  relative">
      {/* Badge */}
      <div className="mb-6 sm:mb-8 flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white rounded-full shadow-sm border border-gray-200 text-center">
        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-green-500 to-teal-500 rounded flex items-center justify-center">
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>
        </div>
        <span className="text-gray-700 font-medium text-xs sm:text-sm">AI Interview Assistant + CRM for Green Careers</span>
      </div>

      {/* Main Heading */}
      <div className="text-center max-w-[90%] sm:max-w-3xl md:max-w-4xl mb-4 sm:mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug sm:leading-tight mb-2 sm:mb-4">
          Ace Your Next Interview in{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
            30 Days*
          </span>
        </h1>
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug sm:leading-tight">
          with Env Interview’s AI + CRM Platform
        </h2>
      </div>

      {/* Subtitle */}
      <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center max-w-[90%] sm:max-w-2xl md:max-w-3xl mb-8 sm:mb-12">
        Env Interview combines smart job tracking, AI-powered prep, and built-in CRM to help you organize outreach, practice confidently, and land climate-positive roles faster.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center w-full sm:w-auto px-4 sm:px-0">
        <button className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] text-sm sm:text-base">
          Start with Env Interview
        </button>

        <button className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-700 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-md hover:shadow-lg border border-gray-200 transition-all duration-200 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base">
          <div className="w-4 h-4 sm:w-5 sm:h-5">
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
          </div>
          Sign Up with Google
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-16 sm:top-20 right-10 sm:right-20 w-12 sm:w-20 h-12 sm:h-20 bg-gradient-to-r from-green-300 to-emerald-500 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-20 sm:bottom-32 left-10 sm:left-16 w-10 sm:w-16 h-10 sm:h-16 bg-gradient-to-r from-lime-300 to-green-400 rounded-full opacity-20 blur-lg"></div>
      <div className="absolute top-1/2 right-4 sm:right-8 w-8 sm:w-12 h-8 sm:h-12 bg-gradient-to-r from-sky-400 to-green-500 rounded-full opacity-20 blur-lg"></div>
    </div>
  );
}

export default HeroLandingSection;
