import React from "react";

export default function Mission() {
    const missionPillars = [
        {
            icon: "🎯",
            title: "Drive Digital Transformation",
            description: "Enable organizations to embrace digital technologies and modernize their operations for competitive advantage",
            impact: "Helping 1000+ enterprises transform annually"
        },
        {
            icon: "💡",
            title: "Deliver Innovation",
            description: "Create cutting-edge solutions that solve complex business challenges with creativity and technology",
            impact: "50+ proprietary solutions launched"
        },
        {
            icon: "👥",
            title: "Empower People",
            description: "Develop and nurture talent to build a world-class team of experts and leaders",
            impact: "25,000+ skilled professionals developed"
        },
        {
            icon: "🌍",
            title: "Create Positive Impact",
            description: "Contribute to sustainable business practices and societal progress through our work",
            impact: "$100M+ value created for communities"
        },
    ];

    const whatWeDo = [
        {
            icon: "🔨",
            title: "Custom Solutions",
            desc: "Build tailored technology solutions aligned with your unique business objectives",
            features: ["Enterprise apps", "Cloud platforms", "Data analytics", "AI integration"]
        },
        {
            icon: "📊",
            title: "Strategic Consulting",
            desc: "Provide expert guidance to navigate digital transformation and technology challenges",
            features: ["Technology roadmaps", "Digital strategy", "Process optimization", "Change management"]
        },
        {
            icon: "🚀",
            title: "Managed Services",
            desc: "Offer comprehensive support for your critical business systems and operations",
            features: ["24/7 support", "Infrastructure mgmt", "Performance monitoring", "Proactive updates"]
        },
        {
            icon: "📚",
            title: "Training & Development",
            desc: "Equip your teams with skills and knowledge for modern technologies",
            features: ["Technical training", "Leadership programs", "Certification paths", "Skill assessments"]
        },
        {
            icon: "🤝",
            title: "Partnership & Collaboration",
            desc: "Work as an extension of your team to achieve shared objectives",
            features: ["Dedicated teams", "Integrated planning", "Transparent communication", "Long-term support"]
        },
        {
            icon: "🔒",
            title: "Security & Compliance",
            desc: "Protect your assets with enterprise-grade security and regulatory compliance",
            features: ["Risk assessment", "Security audits", "Compliance training", "Incident response"]
        },
    ];

    const ourApproach = [
        {
            step: "1",
            title: "Listen & Understand",
            description: "We invest time to deeply understand your business, challenges, and aspirations before proposing solutions",
            icon: "👂"
        },
        {
            step: "2",
            title: "Strategize & Plan",
            description: "Develop a comprehensive roadmap with clear milestones, deliverables, and success metrics",
            icon: "📋"
        },
        {
            step: "3",
            title: "Execute with Excellence",
            description: "Deliver solutions with quality, innovation, and adherence to timelines and budgets",
            icon: "⚙️"
        },
        {
            step: "4",
            title: "Support & Optimize",
            description: "Provide ongoing support and continuously optimize for performance and business impact",
            icon: "📈"
        },
        {
            step: "5",
            title: "Celebrate Success",
            description: "Measure outcomes, celebrate milestones, and document lessons learned for future growth",
            icon: "🎉"
        },
    ];

    const targetMarkets = [
        {
            sector: "Financial Services",
            icon: "💰",
            focus: "Digital banking, wealth management, risk analytics",
            color: "from-green-500 to-emerald-600"
        },
        {
            sector: "Healthcare",
            icon: "🏥",
            focus: "Patient care systems, data management, compliance",
            color: "from-red-500 to-rose-600"
        },
        {
            sector: "Retail & E-commerce",
            icon: "🛍️",
            focus: "Customer experience, inventory, digital sales",
            color: "from-pink-500 to-rose-600"
        },
        {
            sector: "Manufacturing",
            icon: "🏭",
            focus: "IoT, supply chain, production optimization",
            color: "from-yellow-500 to-orange-600"
        },
        {
            sector: "Telecommunications",
            icon: "📡",
            focus: "Network infrastructure, customer platforms, analytics",
            color: "from-blue-500 to-cyan-600"
        },
        {
            sector: "Government",
            icon: "🏛️",
            focus: "Public services, citizen engagement, compliance",
            color: "from-indigo-500 to-purple-600"
        },
    ];

    const values = [
        {
            title: "Client Success",
            description: "Your success is our success. We're committed to delivering measurable results and exceeding expectations.",
            icon: "⭐"
        },
        {
            title: "Integrity",
            description: "We operate with transparency, honesty, and ethical principles in all our dealings.",
            icon: "💎"
        },
        {
            title: "Innovation",
            description: "We constantly explore new technologies and methodologies to stay ahead of the curve.",
            icon: "💫"
        },
        {
            title: "Collaboration",
            description: "We believe in the power of teamwork and partnerships to solve complex challenges.",
            icon: "🤝"
        },
    ];

    const impact = [
        {
            metric: "1000+",
            label: "Organizations Transformed",
            detail: "Enterprises modernized with our solutions"
        },
        {
            metric: "$50B+",
            label: "Client Revenue Impact",
            detail: "Direct and indirect business value created"
        },
        {
            metric: "99.9%",
            label: "Customer Satisfaction",
            detail: "Client retention and satisfaction rate"
        },
        {
            metric: "500+",
            label: "Projects Annually",
            detail: "Successfully delivered projects yearly"
        },
    ];

    const commitments = [
        "Deliver solutions on time, within budget, and exceeding expectations",
        "Maintain the highest standards of quality and security in everything we do",
        "Invest in our people to create a learning, inclusive, and innovative culture",
        "Support sustainable business practices and contribute to societal progress",
        "Provide transparent communication and build lasting partnerships with clients",
        "Continuously improve our services based on client feedback and market trends"
    ];

    return (
        <div className="bg-white">
            {/* ===== Hero Section ===== */}
            <div className="relative min-h-[600px] bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 overflow-hidden pt-20">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-10 w-56 h-56 bg-teal-400 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-10 w-72 h-72 bg-emerald-400 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-cyan-400 rounded-full blur-3xl"></div>
                </div>

                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-teal-300 text-lg font-semibold mb-4 uppercase tracking-widest">Our Purpose</p>
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">Mission</span> Matters
                            </h1>
                            <p className="text-xl text-teal-100 mb-8 leading-relaxed">
                                To transform businesses through innovative technology solutions, strategic partnerships, and exceptional service that creates lasting value and positive impact.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="px-8 py-4 bg-gradient-to-r from-teal-400 to-emerald-400 text-emerald-900 font-bold rounded-lg hover:shadow-2xl hover:shadow-teal-500/50 hover:scale-105 active:scale-95 transition-all duration-300">
                                    Start Your Journey
                                </button>
                                <button className="px-8 py-4 border-2 border-teal-300 text-teal-300 font-bold rounded-lg hover:bg-teal-400/10 hover:scale-105 active:scale-95 transition-all duration-300">
                                    Our Approach
                                </button>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-emerald-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                            <img 
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80" 
                                alt="Our Mission" 
                                className="w-full h-auto rounded-2xl shadow-2xl group-hover:shadow-3xl group-hover:scale-105 transition-all duration-500 relative z-10"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== Mission Statement ===== */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-50 to-emerald-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Our Core Mission
                        </h2>
                        <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl border-2 border-teal-200 shadow-lg hover:shadow-2xl hover:border-teal-400 hover:scale-105 transition-all duration-500 cursor-pointer group">
                            <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 leading-relaxed group-hover:scale-105 transition-all duration-300">
                                To empower organizations with transformative technology solutions, expert guidance, and dedicated partnership that drive sustainable growth, innovation, and measurable business success.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== Mission Pillars ===== */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Four Core Pillars
                        </h2>
                        <p className="text-xl text-gray-600">Building blocks of our daily mission</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {missionPillars.map((pillar, idx) => (
                            <div key={idx} className="group relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-emerald-500/10 group-hover:from-teal-500/20 group-hover:to-emerald-500/20 transition-all duration-500 rounded-2xl"></div>
                                <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-teal-400 hover:shadow-2xl hover:shadow-teal-500/20 hover:-translate-y-2 transition-all duration-500 cursor-pointer">
                                    <div className="text-6xl mb-6 group-hover:scale-125 group-hover:rotate-12 inline-block transition-all duration-300">
                                        {pillar.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                                        {pillar.title}
                                    </h3>
                                    <p className="text-gray-700 mb-4 group-hover:text-gray-800">
                                        {pillar.description}
                                    </p>
                                    <div className="pt-4 border-t-2 border-gray-200 group-hover:border-teal-300 transition-colors">
                                        <p className="text-sm text-gray-600 group-hover:text-teal-600 font-semibold transition-colors">
                                            📌 {pillar.impact}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== What We Do ===== */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            What We Do
                        </h2>
                        <p className="text-xl text-gray-600">Comprehensive services delivering mission-driven results</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {whatWeDo.map((service, idx) => (
                            <div key={idx} className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl hover:shadow-teal-500/20 hover:-translate-y-2 transition-all duration-500 border-l-4 border-transparent hover:border-teal-400 cursor-pointer relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-teal-100/0 to-emerald-100/0 group-hover:from-teal-100/10 group-hover:to-emerald-100/10 transition-all duration-500"></div>
                                <div className="relative z-10">
                                    <div className="text-5xl mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors">
                                        {service.desc}
                                    </p>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        {service.features.map((feat, i) => (
                                            <li key={i} className="flex items-center gap-2 group-hover:text-teal-600 transition-colors">
                                                <span className="w-2 h-2 bg-teal-400 rounded-full group-hover:scale-150 transition-all duration-300"></span>
                                                {feat}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== Our Approach ===== */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            How We Work
                        </h2>
                        <p className="text-xl text-gray-600">Our five-step mission-driven approach</p>
                    </div>

                    <div className="space-y-8">
                        {ourApproach.map((phase, idx) => (
                            <div key={idx} className="group relative">
                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                    <div className="flex-none">
                                        <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-teal-400 to-emerald-400 flex items-center justify-center font-bold text-white text-2xl shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                                            {phase.step}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-teal-400 hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-500 group-hover:-translate-y-2">
                                            <div className="flex items-start gap-4 mb-4">
                                                <p className="text-5xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                                                    {phase.icon}
                                                </p>
                                                <div>
                                                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                                                        {phase.title}
                                                    </h3>
                                                </div>
                                            </div>
                                            <p className="text-gray-700 group-hover:text-gray-800 transition-colors">
                                                {phase.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== Industries We Serve ===== */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-50 to-emerald-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Industries We Serve
                        </h2>
                        <p className="text-xl text-gray-600">Delivering mission-aligned solutions across sectors</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {targetMarkets.map((market, idx) => (
                            <div key={idx} className={`group bg-gradient-to-br ${market.color} rounded-xl p-6 text-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-translate-y-2 relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-all duration-500"></div>
                                <div className="relative z-10">
                                    <p className="text-5xl mb-4 group-hover:scale-125 group-hover:rotate-12 inline-block transition-all duration-300">
                                        {market.icon}
                                    </p>
                                    <h3 className="text-xl font-bold mb-2">
                                        {market.sector}
                                    </h3>
                                    <p className="text-white/90 text-sm group-hover:text-white transition-colors">
                                        {market.focus}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== Our Values ===== */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Values That Guide Us
                        </h2>
                        <p className="text-xl text-gray-600">Core principles in our mission execution</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {values.map((val, idx) => (
                            <div key={idx} className="group bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 border-2 border-gray-200 hover:border-teal-400 hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-500 cursor-pointer transform hover:-translate-y-2">
                                <div className="flex items-start gap-6">
                                    <p className="text-5xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 flex-none">
                                        {val.icon}
                                    </p>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                                            {val.title}
                                        </h3>
                                        <p className="text-gray-700 group-hover:text-gray-800 transition-colors">
                                            {val.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== Impact Metrics ===== */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Mission Impact
                        </h2>
                        <p className="text-xl text-gray-600">Measurable results from our mission-driven work</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {impact.map((item, idx) => (
                            <div key={idx} className="group bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-teal-400 hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-500 cursor-pointer transform hover:-translate-y-2 text-center">
                                <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 group-hover:scale-110 transition-all duration-300 mb-2">
                                    {item.metric}
                                </p>
                                <p className="text-gray-900 font-semibold mb-2 group-hover:text-teal-600 transition-colors">
                                    {item.label}
                                </p>
                                <p className="text-gray-600 text-sm group-hover:text-gray-700">
                                    {item.detail}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== Our Commitments ===== */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Our Commitments
                        </h2>
                        <p className="text-xl text-gray-600">Promises we make every day</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {commitments.map((commitment, idx) => (
                            <div key={idx} className="group flex items-start gap-4 p-6 bg-gradient-to-br from-white to-gray-50 rounded-lg border-2 border-gray-200 hover:border-teal-400 hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-300 cursor-pointer hover:bg-teal-50/50">
                                <div className="flex-none">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-emerald-400 flex items-center justify-center font-bold text-white group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                                        ✓
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <p className="text-gray-700 font-semibold group-hover:text-gray-900 transition-colors">
                                        {commitment}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== Client Success Stories ===== */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-gray-800">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Mission in Action
                        </h2>
                        <p className="text-xl text-gray-300">Real impact from our mission-driven partnerships</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                company: "RetailCorp Global",
                                challenge: "Modernize legacy e-commerce platform",
                                mission: "Enabled 24/7 shopping experience",
                                result: "+150% sales increase",
                                icon: "🛍️"
                            },
                            {
                                company: "HealthFirst Medical",
                                challenge: "Unified patient care systems",
                                mission: "Improved patient outcomes",
                                result: "40% faster diagnoses",
                                icon: "🏥"
                            },
                            {
                                company: "FinanceFlow Ltd",
                                challenge: "Digital banking transformation",
                                mission: "Financial inclusion for millions",
                                result: "500K+ new users",
                                icon: "💰"
                            },
                        ].map((story, idx) => (
                            <div key={idx} className="group bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl p-8 border-2 border-gray-600 hover:border-teal-400 hover:shadow-2xl hover:shadow-teal-500/30 hover:-translate-y-2 transition-all duration-500 cursor-pointer relative overflow-hidden">
                                <div className="absolute top-4 right-4 text-5xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                                    {story.icon}
                                </div>
                                <div className="relative">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
                                        {story.company}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-4">
                                        <span className="text-gray-500">Challenge:</span> {story.challenge}
                                    </p>
                                    <p className="text-teal-300 font-semibold mb-4">
                                        💡 {story.mission}
                                    </p>
                                    <div className="pt-4 border-t border-gray-500">
                                        <p className="text-teal-300 font-bold group-hover:text-teal-100 transition-colors">
                                            {story.result}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== Final CTA ===== */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Join Us in Our Mission
                    </h2>
                    <p className="text-xl text-teal-100 mb-10 leading-relaxed">
                        Partner with us to achieve meaningful digital transformation, sustainable growth, and lasting business success through our mission-driven approach.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-10 py-4 bg-white text-emerald-600 font-bold rounded-lg hover:shadow-2xl hover:shadow-white/50 hover:scale-105 active:scale-95 transition-all duration-300">
                            Begin Your Transformation
                        </button>
                        <button className="px-10 py-4 border-3 border-white text-white font-bold rounded-lg hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300">
                            Explore Solutions
                        </button>
                    </div>

                    <div className="mt-12 pt-8 border-t border-teal-400/30 flex flex-col md:flex-row justify-center gap-8">
                        <div className="text-center group">
                            <p className="text-4xl font-bold text-white group-hover:scale-110 transition-all duration-300">1000+</p>
                            <p className="text-teal-100 font-semibold group-hover:text-white transition-colors">Organizations Transformed</p>
                        </div>
                        <div className="text-center group">
                            <p className="text-4xl font-bold text-white group-hover:scale-110 transition-all duration-300">$50B+</p>
                            <p className="text-teal-100 font-semibold group-hover:text-white transition-colors">Client Value Created</p>
                        </div>
                        <div className="text-center group">
                            <p className="text-4xl font-bold text-white group-hover:scale-110 transition-all duration-300">99.9%</p>
                            <p className="text-teal-100 font-semibold group-hover:text-white transition-colors">Customer Satisfaction</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}