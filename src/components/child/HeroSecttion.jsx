import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Users, Target, CheckCircle, Play, Star, Zap, Brain, TrendingUp } from 'lucide-react';

const HeroSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    const slideInVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    const floatingVariants = {
        animate: {
            y: [-15, 15, -15],
            rotate: [-2, 2, -2],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const pulseVariants = {
        animate: {
            scale: [1, 1.05, 1],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const features = [
        { icon: Brain, text: "AI-Powered Assessment", color: "text-green-500" },
        { icon: Users, text: "Personalized Feedback", color: "text-blue-500" },
        { icon: TrendingUp, text: "Performance Analytics", color: "text-purple-500" },
        { icon: Zap, text: "Instant Results", color: "text-orange-500" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 relative overflow-hidden">
            {/* Enhanced Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-r from-green-400/20 to-green-300/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, 180, 360],
                        x: [0, 20, 0]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-green-300/15 to-blue-300/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [360, 180, 0],
                        y: [0, -30, 0]
                    }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 sm:w-64 h-32 sm:h-64 bg-green-200/10 rounded-full blur-2xl"
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <motion.div
                className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Enhanced Left Content */}
                    <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
                        <motion.div
                            className="block sm:hidden inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2  rounded-full text-sm font-semibold"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                        >
                            <Sparkles className="w-4 h-4" />
                            <span className="tracking-wide uppercase">
                                AI-Powered Interview Platform
                            </span>
                        </motion.div>


                        <motion.h1
                            className="text-4xl sm:text-5xl lg:text-6xl xl:text-5xl font-black text-gray-900 leading-tight"
                            variants={itemVariants}
                        >
                            Ace Your Next
                            <motion.span
                                className="block bg-gradient-to-r from-green-500 via-green-400 to-green-600 bg-clip-text text-transparent"
                                animate={{
                                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                AI Interview
                            </motion.span>
                            <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-600 block mt-2">
                                with Confidence
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                            variants={itemVariants}
                        >
                            Transform your interview skills with our cutting-edge AI platform. Get personalized feedback,
                            practice real scenarios, and land your dream job with confidence.
                        </motion.p>

                        <motion.div
                            className="grid grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto lg:mx-0"
                            variants={itemVariants}
                        >
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center space-x-2 sm:space-x-3 bg-white/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 shadow-sm border border-gray-100"
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <feature.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${feature.color}`} />
                                    <span className="text-xs sm:text-sm font-semibold text-gray-700">{feature.text}</span>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start"
                            variants={itemVariants}
                        >
                            <motion.button
                                className="group bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-sm sm:text-base flex items-center justify-center space-x-2 shadow-2xl hover:shadow-3xl transition-all duration-300"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                variants={pulseVariants}
                                animate="animate"
                            >
                                <span>Start Free Practice</span>
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.button>

                            <motion.button
                                className="group border-2 border-green-500 text-green-600 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-sm sm:text-base hover:bg-green-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                                <span>Watch Demo</span>
                            </motion.button>
                        </motion.div>

                        <motion.div
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-8 pt-6 text-sm text-gray-500"
                            variants={itemVariants}
                        >
                            <div className="flex items-center space-x-2">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span>No credit card required</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Star className="w-4 h-4 text-yellow-500" />
                                <span>4.9/5 rating from 10k+ users</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Enhanced Right Visual */}
                    <motion.div
                        className="relative mt-12 lg:mt-0"
                        variants={slideInVariants}
                    >
                        <motion.div
                            className="relative bg-white/90 backdrop-blur-xl rounded-3xl sm:rounded-[2rem] shadow-2xl p-4 sm:p-8 border border-gray-200/50"
                            variants={floatingVariants}
                            animate="animate"
                        >
                            {/* Enhanced Mock Interview Interface */}
                            <div className="space-y-4 sm:space-y-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <motion.div
                                            className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg"
                                            animate={{ rotate: [0, 360] }}
                                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        >
                                            <span className="text-white font-bold text-sm sm:text-lg">AI</span>
                                        </motion.div>
                                        <div>
                                            <p className="font-bold text-gray-900 text-sm sm:text-base">AI Interviewer</p>
                                            <div className="flex items-center space-x-1">
                                                <motion.div
                                                    className="w-2 h-2 bg-green-500 rounded-full"
                                                    animate={{ scale: [1, 1.2, 1] }}
                                                    transition={{ duration: 1.5, repeat: Infinity }}
                                                />
                                                <p className="text-xs sm:text-sm text-green-600 font-semibold">Active Session</p>
                                            </div>
                                        </div>
                                    </div>
                                    <motion.div
                                        className="w-3 h-3 bg-red-500 rounded-full"
                                        animate={{ opacity: [1, 0.3, 1] }}
                                        transition={{ duration: 1, repeat: Infinity }}
                                    />
                                </div>

                                <motion.div
                                    className="bg-gradient-to-r from-gray-50 to-green-50/50 rounded-2xl p-4 sm:p-6 border border-gray-100"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1, duration: 0.5 }}
                                >
                                    <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed">
                                        "Describe a time when you had to solve a complex technical problem under pressure.
                                        What was your approach?"
                                    </p>
                                    <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500">
                                        <motion.div
                                            className="w-2 h-2 bg-green-500 rounded-full"
                                            animate={{ scale: [1, 1.3, 1] }}
                                            transition={{ duration: 0.8, repeat: Infinity }}
                                        />
                                        <span>AI analyzing your response in real-time...</span>
                                    </div>
                                </motion.div>

                                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                                    {[
                                        { score: "94%", label: "Confidence", color: "green", bg: "bg-green-50" },
                                        { score: "8.7", label: "Clarity", color: "blue", bg: "bg-blue-50" },
                                        { score: "A+", label: "Overall", color: "purple", bg: "bg-purple-50" }
                                    ].map((metric, index) => (
                                        <motion.div
                                            key={index}
                                            className={`${metric.bg} rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center border border-gray-100`}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 1.5 + index * 0.2, duration: 0.5 }}
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <p className={`text-xl sm:text-2xl font-black text-${metric.color}-600`}>{metric.score}</p>
                                            <p className="text-xs text-gray-600 font-semibold">{metric.label}</p>
                                        </motion.div>
                                    ))}
                                </div>

                                <motion.div
                                    className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl sm:rounded-2xl p-3 sm:p-4"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 2.5, duration: 0.5 }}
                                >
                                    <p className="text-xs sm:text-sm font-semibold mb-1">✨ AI Feedback</p>
                                    <p className="text-xs sm:text-sm opacity-90">
                                        "Excellent structure and technical depth. Consider adding more specific metrics next time."
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Enhanced Floating Elements */}
                        <motion.div
                            className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-green-400 text-white p-3 sm:p-4 rounded-full shadow-xl"
                            animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        >
                            <Sparkles className="w-4 h-4 sm:w-6 sm:h-6" />
                        </motion.div>

                        <motion.div
                            className="absolute -bottom-6 -left-6 bg-black text-white p-3 sm:p-4 rounded-2xl shadow-xl max-w-xs"
                            animate={{ y: [-8, 8, -8], rotate: [-1, 1, -1] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <p className="text-xs sm:text-sm font-bold mb-1">🎯 Success Rate</p>
                            <p className="text-xs opacity-90">95% of users land interviews</p>
                        </motion.div>

                        <motion.div
                            className="absolute top-1/4 -left-8 bg-white p-3 rounded-full shadow-lg border-2 border-green-100"
                            animate={{ x: [-5, 5, -5], y: [-3, 3, -3] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <Target className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Enhanced Stats Section */}
                {/* <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-16 sm:mt-20 pt-12 sm:pt-20 border-t border-gray-200"
                    variants={containerVariants}
                >
                    {[
                        { number: "50K+", label: "Interviews Completed", icon: Users },
                        { number: "98%", label: "Success Rate", icon: TrendingUp },
                        { number: "1000+", label: "Companies", icon: Target },
                        { number: "24/7", label: "AI Available", icon: Zap }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-center group"
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                        >
                            <motion.div
                                className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full mb-3 sm:mb-4 group-hover:bg-green-200 transition-colors"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                            </motion.div>
                            <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2">{stat.number}</p>
                            <p className="text-xs sm:text-sm text-gray-600 font-semibold">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div> */}
            </motion.div>
        </div>
    );
};

export default HeroSection;