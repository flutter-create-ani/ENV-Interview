import React from 'react'
import CardSwap, { Card } from './child/HeroSection'
import HeroLandingSection from './child/HeroLandingSection'
import { FiMessageCircle } from 'react-icons/fi';
import { MessageCircle, Users, Code, Database, CheckCircle, GitBranch, Play } from 'lucide-react';

function HomePageLayer() {
  return (
    <div className='flex flex-row  min-h-screen '>
      <div className='w-full flex-1 ml-10'>
        <HeroLandingSection />

      </div>
      <div className='hidden sm:block h-[35rem] flex-1 relative'>
        <CardSwap
          cardDistance={60}
          verticalDistance={80}
          delay={5000}
          pauseOnHover={false}
        >
          <Card>
            <h3 className="text-white p-6 flex items-center justify-start border-b border-white">
              <MessageCircle className="w-6 h-6 mr-3" />
              Real-time Interaction
            </h3>

            <div className="p-6">
              <div className="relative rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 aspect-video">
                {/* Interactive Dashboard Mockup */}
                <div className="absolute inset-0 p-4">
                  {/* Video Call Interface */}
                  <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg h-full relative overflow-hidden">
                    {/* Main video area */}
                    <div className="absolute inset-4 bg-gray-800 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        {/* Person avatar */}
                        <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mx-auto mb-3 flex items-center justify-center shadow-lg">
                          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                            <div className="w-6 h-6 bg-white/40 rounded-full"></div>
                          </div>
                        </div>
                        <div className="text-white text-sm font-medium">Interactive Session</div>
                        <div className="text-gray-300 text-xs mt-1">Live Interview</div>
                      </div>
                    </div>

                    {/* Interview Score */}
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                      <div className="text-center">
                        <div className="text-xl font-bold text-green-600 mb-1">93</div>
                        <div className="text-xs text-gray-600 font-medium">Score</div>
                      </div>
                    </div>

                    {/* Live Stats */}
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                      <div className="text-center">
                        <div className="text-lg font-bold text-emerald-600 mb-1">586</div>
                        <div className="text-xs text-gray-600 font-medium">Live</div>
                      </div>
                    </div>

                    {/* Live indicator */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
                      <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                        <div className="w-1.5 h-1.5 bg-white rounded-full mr-1 animate-pulse"></div>
                        LIVE
                      </div>
                    </div>

                    {/* Control Bar */}
                    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gray-800/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center space-x-2">
                        <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                        <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
                        <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </Card>
          <Card>
            <h3 className="text-white p-6 flex items-center justify-start border-b border-white ">
              <Users className="w-6 h-6 mr-3" />
              CRM Interaction
            </h3>

            <div className="p-6">
              <div className="relative rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-blue-500 via-cyan-500 to-indigo-600 aspect-video">
                <div className="absolute inset-0 p-4">
                  <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg h-full relative overflow-hidden">
                    {/* CRM Dashboard */}
                    <div className="absolute inset-4 bg-gray-800 rounded-lg p-4">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-white text-sm font-medium">Customer Dashboard</div>
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        </div>
                      </div>

                      {/* Customer Cards */}
                      <div className="grid grid-cols-2 gap-2 mb-3">
                        <div className="bg-gray-700 rounded p-2">
                          <div className="w-6 h-6 bg-blue-400 rounded-full mb-1"></div>
                          <div className="text-white text-xs font-medium">John Smith</div>
                          <div className="text-gray-300 text-xs">Active Lead</div>
                        </div>
                        <div className="bg-gray-700 rounded p-2">
                          <div className="w-6 h-6 bg-green-400 rounded-full mb-1"></div>
                          <div className="text-white text-xs font-medium">Sarah Davis</div>
                          <div className="text-gray-300 text-xs">Prospect</div>
                        </div>
                      </div>

                      {/* Activity Feed */}
                      <div className="space-y-1">
                        <div className="bg-gray-700/50 rounded px-2 py-1">
                          <div className="text-white text-xs">📞 Call scheduled - 2:00 PM</div>
                        </div>
                        <div className="bg-gray-700/50 rounded px-2 py-1">
                          <div className="text-white text-xs">📧 Email sent - Follow up</div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Stats */}
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                      <div className="text-center">
                        <div className="text-xl font-bold text-blue-600 mb-1">247</div>
                        <div className="text-xs text-gray-600 font-medium">Active Leads</div>
                      </div>
                    </div>

                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                      <div className="text-center">
                        <div className="text-lg font-bold text-cyan-600 mb-1">89%</div>
                        <div className="text-xs text-gray-600 font-medium">Conversion</div>
                      </div>
                    </div>

                    {/* Status indicator */}
                    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                        <Database className="w-3 h-3 mr-1" />
                        CRM SYNC
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <Card>
            <h3 className="text-white p-6 flex items-center justify-start border-b border-white">
              <Code className="w-6 h-6 mr-3" />
              Real-time Coding Check
            </h3>

            <div className="p-6">
              <div className="relative rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-purple-500 via-violet-500 to-indigo-600 aspect-video">
                <div className="absolute inset-0 p-4">
                  <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg h-full relative overflow-hidden">
                    {/* Code Editor Interface */}
                    <div className="absolute inset-4 bg-gray-900 rounded-lg p-3">
                      {/* Editor Header */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <div className="text-gray-400 text-xs ml-2">solution.py</div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Play className="w-3 h-3 text-green-400" />
                          <div className="text-green-400 text-xs">Running</div>
                        </div>
                      </div>

                      {/* Code Lines */}
                      <div className="space-y-1 mb-3">
                        <div className="flex items-center space-x-2">
                          <div className="text-gray-500 text-xs w-4">1</div>
                          <div className="text-blue-400 text-xs">def</div>
                          <div className="text-yellow-300 text-xs">solve(arr):</div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="text-gray-500 text-xs w-4">2</div>
                          <div className="text-gray-400 text-xs ml-4">return</div>
                          <div className="text-green-300 text-xs">sum(arr)</div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="text-gray-500 text-xs w-4">3</div>
                          <div className="text-gray-400 text-xs"></div>
                        </div>
                      </div>

                      {/* Test Results */}
                      <div className="bg-gray-800 rounded p-2">
                        <div className="flex items-center space-x-2 mb-1">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          <div className="text-green-400 text-xs">Test 1: Passed</div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          <div className="text-green-400 text-xs">Test 2: Passed</div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Stats */}
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                      <div className="text-center">
                        <div className="text-xl font-bold text-purple-600 mb-1">2/2</div>
                        <div className="text-xs text-gray-600 font-medium">Tests Pass</div>
                      </div>
                    </div>

                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                      <div className="text-center">
                        <div className="text-lg font-bold text-violet-600 mb-1">0.2s</div>
                        <div className="text-xs text-gray-600 font-medium">Runtime</div>
                      </div>
                    </div>

                    {/* Live indicator */}
                    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                        <GitBranch className="w-3 h-3 mr-1" />
                        LIVE COMPILE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </CardSwap>
      </div>
    </div>
  )
}

export default HomePageLayer