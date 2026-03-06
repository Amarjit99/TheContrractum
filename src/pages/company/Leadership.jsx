import React from "react";
import leadershipHero from "../../assets/leadership.webp";

export default function Leadership() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-light">
            {/* Hero Section with Background Image */}
            <div className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img 
                        src={leadershipHero} 
                        alt="Leadership Background" 
                        className="w-full h-full object-cover brightness-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary-dark/70 to-primary/80"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-6xl font-black mb-6 drop-shadow-2xl animate-fade-in">
                            Meet Our Leadership
                        </h1>
                        <p className="text-2xl text-blue-50 max-w-4xl mx-auto leading-relaxed font-light">
                            The visionaries and strategists guiding The Contrractum towards a smarter, more connected future
                        </p>
                        <div className="mt-8 flex justify-center gap-4">
                            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                                <p className="text-sm font-semibold">🎯 Visionary Leadership</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                                <p className="text-sm font-semibold">🚀 Strategic Excellence</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                {/* Leadership Categories */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Founders & Directors Card */}
                    <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-xl p-8 border-2 border-primary/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                                👑
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">Founders & Directors</h2>
                                <p className="text-primary font-semibold">The Visionaries</p>
                            </div>
                        </div>
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                            Our founders have pioneered innovation and established the core values that drive our organization forward.
                        </p>
                        <a href="#/company/leadership/founders" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors font-semibold shadow-lg hover:shadow-xl">
                            Meet Our Founders
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>

                    {/* Management Team Card */}
                    <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-xl p-8 border-2 border-purple-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                                🎯
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">Management Team</h2>
                                <p className="text-purple-600 font-semibold">The Strategists</p>
                            </div>
                        </div>
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                            Our executive team brings decades of experience in technology, business operations, and strategic growth.
                        </p>
                        <a href="#/company/leadership/management" className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold shadow-lg hover:shadow-xl">
                            View Management Team
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Leadership Principles */}
                <div className="bg-white rounded-2xl shadow-xl p-10 border-2 border-primary/10">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Leadership Principles</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                                💡
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation First</h3>
                            <p className="text-gray-600">
                                Leading through cutting-edge technology and creative problem-solving
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                                🤝
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">People-Centric</h3>
                            <p className="text-gray-600">
                                Empowering our team and prioritizing customer success
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                                🎯
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Results Driven</h3>
                            <p className="text-gray-600">
                                Delivering measurable impact and sustainable growth
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
