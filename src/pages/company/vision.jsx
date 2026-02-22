import React from "react";

export default function Vision() {
    const visionPillars = [
        {
            icon: "🌍",
            title: "Global Impact",
            desc: "Extending our services across continents to empower organizations worldwide",
            details: "We aim to reach 100+ countries and serve 10,000+ organizations globally by 2030"
        },
        {
            icon: "💡",
            title: "Innovation",
            desc: "Pioneering next-generation solutions through continuous research & development",
            details: "Investing 20% of revenue in R&D for breakthrough technologies and methodologies"
        },
        {
            icon: "🤝",
            title: "Strategic Partnerships",
            desc: "Building strong collaborations with industry leaders and technology innovators",
            details: "Creating ecosystem partnerships to deliver integrated, best-in-class solutions"
        },
        {
            icon: "📈",
            title: "Sustainable Growth",
            desc: "Achieving consistent, profitable growth while maintaining our core values",
            details: "Targeting 30% annual growth with strong profitability and stakeholder value"
        },
    ];

    const futureFocus = [
        {
            area: "Digital Transformation",
            icon: "🔄",
            goals: [
                "Enable enterprises to embrace Industry 4.0",
                "Lead cloud adoption and migration strategies",
                "Drive IoT and real-time analytics adoption"
            ],
            color: "from-blue-500 to-blue-600"
        },
        {
            area: "AI & Machine Learning",
            icon: "🤖",
            goals: [
                "Make AI accessible to organizations of all sizes",
                "Develop industry-specific AI solutions",
                "Build responsible and ethical AI systems"
            ],
            color: "from-purple-500 to-purple-600"
        },
        {
            area: "Sustainability & ESG",
            icon: "🌱",
            goals: [
                "Help organizations achieve carbon neutrality",
                "Promote sustainable business practices",
                "Champion environmental responsibility"
            ],
            color: "from-green-500 to-green-600"
        },
        {
            area: "Customer Excellence",
            icon: "⭐",
            goals: [
                "Deliver exceptional customer experiences",
                "Build long-term strategic partnerships",
                "Consistently exceed expectations"
            ],
            color: "from-amber-500 to-amber-600"
        },
    ];

    const values = [
        {
            value: "Excellence",
            description: "Pursuing the highest standards in everything we do",
            icon: "🏆",
            color: "from-yellow-100 to-yellow-50"
        },
        {
            value: "Integrity",
            description: "Acting with honesty, transparency, and ethical principles",
            icon: "🎯",
            color: "from-blue-100 to-blue-50"
        },
        {
            value: "Innovation",
            description: "Embracing change and driving continuous improvement",
            icon: "💫",
            color: "from-purple-100 to-purple-50"
        },
        {
            value: "Collaboration",
            description: "Working together to achieve extraordinary results",
            icon: "🤝",
            color: "from-pink-100 to-pink-50"
        },
        {
            value: "Customer Focus",
            description: "Putting our customers at the center of our decisions",
            icon: "👥",
            color: "from-green-100 to-green-50"
        },
        {
            value: "Responsibility",
            description: "Making positive impact on society and environment",
            icon: "🌍",
            color: "from-teal-100 to-teal-50"
        },
    ];

    const roadmap = [
        {
            year: "2025",
            milestone: "Expand to 50+ Countries",
            achievements: [
                "Open 10 new regional offices",
                "Establish innovation hubs in 5 continents",
                "Launch AI-powered service suite"
            ]
        },
        {
            year: "2026",
            milestone: "Market Leadership Position",
            achievements: [
                "Become top-3 in digital transformation services",
                "Launch proprietary AI platform",
                "Achieve 5,000+ enterprise clients"
            ]
        },
        {
            year: "2027",
            milestone: "Sustainability Champion",
            achievements: [
                "Achieve carbon-neutral operations",
                "Help 500+ organizations become sustainable",
                "Build ESG-focused service offerings"
            ]
        },
        {
            year: "2028",
            milestone: "Global Industry Leader",
            achievements: [
                "Operate in 75+ countries globally",
                "Serve 10,000+ enterprise clients",
                "Become employer of choice in tech industry"
            ]
        },
    ];

    const stats = [
        { metric: "75+", label: "Countries We Serve" },
        { metric: "10K+", label: "Enterprise Clients" },
        { metric: "$5B+", label: "Client Value Created" },
        { metric: "25K+", label: "Skilled Professionals" },
    ];

    return (
        <div className="bg-white">
            {/* ===== Hero Section ===== */}
            <div className="relative min-h-[600px] bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 overflow-hidden pt-20">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-10 w-56 h-56 bg-purple-400 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-10 w-72 h-72 bg-indigo-400 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-blue-400 rounded-full blur-3xl"></div>
                </div>

                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-purple-300 text-lg font-semibold mb-4 uppercase tracking-widest">Our Direction</p>
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">Vision</span> for Tomorrow
                            </h1>
                            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                                To be the world's most trusted technology partner, transforming businesses and empowering organizations to achieve their boldest aspirations.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="px-8 py-4 bg-gradient-to-r from-purple-400 to-indigo-400 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 active:scale-95 transition-all duration-300">
                                    Discover Our Journey
                                </button>
                                <button className="px-8 py-4 border-2 border-purple-300 text-purple-300 font-bold rounded-lg hover:bg-purple-400/10 hover:scale-105 active:scale-95 transition-all duration-300">
                                    Our Impact
                                </button>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                            <img 
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80" 
                                alt="Company Vision" 
                                className="w-full h-auto rounded-2xl shadow-2xl group-hover:shadow-3xl group-hover:scale-105 transition-all duration-500 relative z-10"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== Vision Statement ===== */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 to-blue-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Our Vision Statement
                        </h2>
                        <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl border-2 border-purple-200 shadow-lg hover:shadow-2xl hover:border-purple-400 transition-all duration-500 cursor-pointer group">
                            <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 leading-relaxed group-hover:scale-105 transition-all duration-300">
                                "To empower organizations worldwide with innovative technology solutions, strategic partnerships, and expert guidance that drive transformation, create lasting value, and shape the future of industries."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== Vision Pillars ===== */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Four Pillars of Our Vision
                        </h2>
                        <p className="text-xl text-gray-600">The foundation of our strategic direction</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {visionPillars.map((pillar, idx) => (
                            <div key={idx} className="group relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 group-hover:from-purple-500/20 group-hover:to-indigo-500/20 transition-all duration-500 rounded-2xl"></div>
                                <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 transition-all duration-500 cursor-pointer">
                                    <div className="text-6xl mb-6 group-hover:scale-125 group-hover:rotate-12 inline-block transition-all duration-300">
                                        {pillar.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                                        {pillar.title}
                                    </h3>
                                    <p className="text-gray-700 mb-4 group-hover:text-gray-800">
                                        {pillar.desc}
                                    </p>
                                    <div className="pt-4 border-t-2 border-gray-200 group-hover:border-purple-300 transition-colors">
                                        <p className="text-sm text-gray-600 group-hover:text-purple-600 font-semibold transition-colors">
                                            📌 {pillar.details}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== Core Values ===== */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Our Core Values
                        </h2>
                        <p className="text-xl text-gray-600">Principles that guide our decisions and actions</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {values.map((val, idx) => (
                            <div key={idx} className={`group bg-gradient-to-br ${val.color} rounded-xl p-8 border-2 border-gray-200 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 transition-all duration-500 cursor-pointer relative overflow-hidden`}>
                                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-all duration-500"></div>
                                <div className="relative z-10">
                                    <p className="text-5xl mb-4 group-hover:scale-125 group-hover:rotate-12 inline-block transition-all duration-300">
                                        {val.icon}
                                    </p>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors">
                                        {val.value}
                                    </h3>
                                    <p className="text-gray-700 group-hover:text-gray-800 leading-relaxed">
                                        {val.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== Future Focus Areas ===== */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Future Focus Areas
                        </h2>
                        <p className="text-xl text-gray-600">Where we're investing for tomorrow's opportunities</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {futureFocus.map((focus, idx) => (
                            <div key={idx} className={`group bg-gradient-to-br ${focus.color} rounded-2xl p-8 text-white shadow-lg hover:shadow-2xl hover:shadow-${focus.color.split('-')[1]}-500/50 hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden relative`}>
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-all duration-500"></div>
                                <div className="relative z-10">
                                    <p className="text-5xl mb-4 group-hover:scale-125 group-hover:rotate-12 inline-block transition-all duration-300">
                                        {focus.icon}
                                    </p>
                                    <h3 className="text-2xl font-bold mb-6">
                                        {focus.area}
                                    </h3>
                                    <ul className="space-y-3">
                                        {focus.goals.map((goal, i) => (
                                            <li key={i} className="flex items-start gap-3 group-hover:translate-x-2 transition-all duration-300">
                                                <span className="text-xl">→</span>
                                                <span className="text-white/95 group-hover:text-white">{goal}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== Vision Roadmap ===== */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-50 to-purple-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Our Strategic Roadmap
                        </h2>
                        <p className="text-xl text-gray-600">Milestones on our journey to 2028 and beyond</p>
                    </div>

                    <div className="space-y-8">
                        {roadmap.map((item, idx) => (
                            <div key={idx} className="group relative">
                                <div className="flex flex-col md:flex-row gap-8">
                                    <div className="flex-none">
                                        <div className="w-32 h-32 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 cursor-pointer">
                                            <div className="text-center">
                                                <p className="text-4xl font-bold">{item.year}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-1 bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 group-hover:-translate-y-2">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-purple-600 transition-colors">
                                            🎯 {item.milestone}
                                        </h3>
                                        <div className="grid md:grid-cols-3 gap-4">
                                            {item.achievements.map((achievement, i) => (
                                                <div key={i} className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg group-hover:bg-purple-100 transition-all duration-300">
                                                    <span className="text-purple-600 font-bold text-xl group-hover:scale-150 transition-all duration-300">✓</span>
                                                    <span className="text-gray-700 group-hover:text-gray-900">{achievement}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== Impact Metrics ===== */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Our Global Impact
                        </h2>
                        <p className="text-xl text-gray-600">Driving change across industries and continents</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="group text-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-xl border-2 border-gray-200 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 cursor-pointer transform hover:-translate-y-2">
                                <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 group-hover:scale-110 transition-all duration-300 mb-3">
                                    {stat.metric}
                                </p>
                                <p className="text-gray-700 font-semibold group-hover:text-gray-900">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== Vision Commitment ===== */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-white mb-8">
                        Our Commitment to You
                    </h2>
                    <p className="text-xl text-purple-100 mb-12 leading-relaxed">
                        We are committed to building an organization that not only achieves business success but also makes a meaningful positive impact on society, the environment, and the communities we serve. Our vision is aspirational yet grounded in measurable, achievable goals that drive us every single day.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mt-12">
                        {[
                            { text: "Innovation", emoji: "💡" },
                            { text: "Responsibility", emoji: "🌍" },
                            { text: "Excellence", emoji: "⭐" }
                        ].map((item, idx) => (
                            <div key={idx} className="group p-6 bg-white/10 backdrop-blur-md rounded-xl border-2 border-white/20 hover:border-purple-300 hover:bg-white/20 transition-all duration-500 cursor-pointer">
                                <p className="text-5xl mb-3 group-hover:scale-125 group-hover:rotate-12 inline-block transition-all duration-300">
                                    {item.emoji}
                                </p>
                                <p className="text-white font-bold text-lg group-hover:text-purple-200 transition-colors">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== Final CTA ===== */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-indigo-600">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Be Part of Our Vision
                    </h2>
                    <p className="text-xl text-purple-100 mb-10">
                        Join us in shaping the future of technology and business transformation. Together, we can achieve extraordinary things.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-10 py-4 bg-white text-purple-600 font-bold rounded-lg hover:shadow-2xl hover:shadow-white/50 hover:scale-105 active:scale-95 transition-all duration-300">
                            Explore Opportunities
                        </button>
                        <button className="px-10 py-4 border-3 border-white text-white font-bold rounded-lg hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300">
                            Learn More
                        </button>
                    </div>

                    <div className="mt-12 pt-8 border-t border-purple-400/30 flex flex-col md:flex-row justify-center gap-8">
                        <div className="text-center">
                            <p className="text-3xl font-bold text-white">2028</p>
                            <p className="text-purple-100">Target Year</p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl font-bold text-white">75+</p>
                            <p className="text-purple-100">Countries</p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl font-bold text-white">10K+</p>
                            <p className="text-purple-100">Enterprise Clients</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}