import React, { useEffect, useState } from 'react';

const lines = [
  '$ env-interview --boot',
  'Booting ENV Interview CLI v1.3.2...',
  'Loading AI Interview Modules...',
  'Connecting to user-mode [student/professional]...',
  '⚙️  Initializing dynamic question handler...',
  '⏳ Preparing voice engine, SSML synthesis...',
  '🧠 Setting up memory recall and feedback analyzer...',
  '📡 Connecting to ENV cloud...',
  '',
  '🚧 New feature currently under construction.',
  '🔧 Developers are working hard behind the scenes.',
  '💡 Stay tuned. This will change your interview prep forever!',
  '',
  '// ENV Interview CLI — For those who don\'t want to fail like we did.',
  '// Coming Soon... 🚀',
  '',
  '$ _'
];

const AvailableSoonTermuxFull = () => {
 

  return (
      <div className="min-h-screen font-mono flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-black border border-gray-700 rounded-lg shadow-xl p-6">
        {/* Terminal header */}
        <div className="flex items-center justify-between border-b border-gray-700 pb-2 mb-4 text-xs text-gray-300">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
            </div>
            <span className="ml-3">terminal — env-interview</span>
          </div>
          <div className="text-gray-500">80x24</div>
        </div>

        {/* Static message */}
        <div className="space-y-3">
          <p className="text-yellow-400 font-bold">$ env-interview --boot</p>
          <p className="text-cyan-400">Booting ENV Interview CLI v1.3.2...</p>
          <p className="text-blue-400">⚙️  Initializing system modules...</p>
          <p className="text-orange-400">🚧 Feature currently under construction.</p>
          <p className="text-orange-400">🔧 Our developers are working hard behind the scenes.</p>
          <p className="text-orange-400">💡 Stay tuned. This will change your interview prep forever!</p>
          <p className="text-gray-500 italic">// ENV Interview CLI — For students & professionals</p>
          <p className="text-gray-500 italic">// Coming Soon... 🚀</p>
        </div>
      </div>
    </div>
  );
};

export default AvailableSoonTermuxFull;
