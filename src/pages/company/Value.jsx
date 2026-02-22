import React from "react";

export default function Values() {
    const coreValues = [
        {
            id: 1,
            icon: "🎯",
            title: "Excellence",
            color: "from-blue-500 to-blue-600",
            description: "We pursue the highest standards in everything we do - from innovation to customer service.",
            details: [
                "Continuous improvement mindset",
                "Quality-first approach",
                "Attention to detail",
                "Best-in-class solutions",
                "Performance excellence"
            ],
            impact: "Drive superior results and customer satisfaction"
        },
        {
            id: 2,
            icon: "💎",
            title: "Integrity",
            color: "from-purple-500 to-purple-600",
            description: "We operate with transparency, honesty, and unwavering ethical principles in all dealings.",
            details: [
                "Transparent communication",
                "Ethical decision-making",
                "Accountability",
                "Honest partnerships",
                "Trustworthy relationships"
            ],
            impact: "Build lasting trust with all stakeholders"
        },
        {
            id: 3,
            icon: "💡",
            title: "Innovation",
            color: "from-green-500 to-green-600",
            description: "We embrace creativity, explore new ideas, and constantly push boundaries to drive progress.",
            details: [
                "Creative thinking",
                "Forward-looking approach",
                "Technology adoption",
                "Experimentation culture",
                "Continuous learning"
            ],
            impact: "Create breakthrough solutions and competitive advantage"
        },
        {
            id: 4,
            icon: "🤝",
            title: "Collaboration",
            color: "from-pink-500 to-pink-600",
            description: "We believe in the power of teamwork, diverse perspectives, and unified purpose.",
            details: [
                "Cross-functional teamwork",
                "Shared ownership",
                "Open communication",
                "Diverse perspectives",
                "Collective success"
            ],
            impact: "Achieve extraordinary results together"
        },
        {
            id: 5,
            icon: "👥",
            title: "Customer Focus",
            color: "from-orange-500 to-orange-600",
            description: "We put customers at the center of our decisions, consistently exceeding their expectations.",
            details: [
                "Customer-centric design",
                "Responsive support",
                "Value delivery",
                "Feedback incorporation",
                "Long-term partnerships"
            ],
            impact: "Build loyal customer relationships"
        },
        {
            id: 6,
            icon: "🌍",
            title: "Responsibility",
            color: "from-teal-500 to-teal-600",
            description: "We take accountability for our impact on society, environment, and sustainable future.",
            details: [
                "Environmental stewardship",
                "Social responsibility",
                "Ethical practices",
                "Community engagement",
                "Sustainable operations"
            ],
            impact: "Create positive impact for generations"
        },
    ];

    const valuesPillars = [
        {
            category: "Professional Excellence",
            icon: "⭐",
            values: ["Expertise", "Quality", "Results-Driven", "Performance Focus"],
            description: "We deliver exceptional quality and measurable outcomes in everything we undertake"
        },
        {
            category: "Human Values",
            icon: "❤️",
            values: ["Respect", "Empowerment", "Inclusivity", "Development"],
            description: "We value people, foster growth, and create an inclusive, empowering workplace"
        },
        {
            category: "Organizational Values",
            icon: "🏢",
            values: ["Transparency", "Accountability", "Collaboration", "Innovation"],
            description: "We operate with integrity, work together, and drive continuous improvement"
        },
        {
            category: "Social Impact",
            icon: "🌱",
            values: ["Sustainability", "Ethics", "Community Care", "Long-term Thinking"],
            description: "We commit to sustainable practices and positive impact on society and environment"
        },
    ];

    const whenWeUphold = [
        {
            situation: "Facing Pressure for Quick Results",
            value: "Integrity",
            action: "We maintain ethical standards and quality even under pressure",
            outcome: "Build sustainable, trustworthy solutions"
        },
        {
            situation: "Solving Complex Problems",
            value: "Collaboration",
            action: "We bring diverse teams together to find innovative solutions",
            outcome: "Create breakthrough results through collective wisdom"
        },
        {
            situation: "Encountering New Opportunities",
            value: "Innovation",
            action: "We explore creative approaches and embrace calculated risks",
            outcome: "Drive industry-leading solutions and competitive advantage"
        },
        {
            situation: "Interacting with Customers",
            value: "Customer Focus",
            action: "We listen, understand, and exceed expectations consistently",
            outcome: "Build lasting partnerships and loyalty"
        },
        {
            situation: "Making Strategic Decisions",
            value: "Responsibility",
            action: "We consider long-term impact on all stakeholders",
            outcome: "Create sustainable value for communities and environment"
        },
        {
            situation: "Setting Goals and Standards",
            value: "Excellence",
            action: "We pursue the highest standards and continuous improvement",
            outcome: "Deliver superior results and industry recognition"
        },
    ];

    const valuesBehaviors = [
        {
            behavior: "Speak Up with Ideas",
            alignment: ["Innovation", "Collaboration"],
            description: "Encourage creative thinking and diverse perspectives"
        },
        {
            behavior: "Admit Mistakes Openly",
            alignment: ["Integrity", "Responsibility"],
            description: "Take accountability and learn from experiences"
        },
        {
            behavior: "Support Colleagues",
            alignment: ["Collaboration", "Customer Focus"],
            description: "Help others succeed and foster teamwork"
        },
        {
            behavior: "Question & Challenge",
            alignment: ["Excellence", "Innovation"],
            description: "Drive improvement through constructive questioning"
        },
        {
            behavior: "Respect Differences",
            alignment: ["Collaboration", "Responsibility"],
            description: "Value diverse backgrounds and perspectives"
        },
        {
            behavior: "Go Extra Mile for Customers",
            alignment: ["Excellence", "Customer Focus"],
            description: "Exceed expectations and build lasting relationships"
        },
    ];

    const testimonials = [
        {
            role: "Chief Executive Officer",
            quote: "Our values aren't just words on a wall - they're embedded in every decision, every project, and every interaction with our stakeholders.",
            name: "Sarah Chen",
            company: "Leadership Team"
        },
        {
            role: "VP of Engineering",
            quote: "Excellence and innovation go hand-in-hand at our company. Our teams feel empowered to create breakthrough solutions because we trust and support each other.",
            name: "Marcus Rodriguez",
            company: "Technology Division"
        },
        {
            role: "Client Partnership Director",
            quote: "Customer focus isn't just a value - it's our competitive advantage. Every project is driven by what's best for our clients' long-term success.",
            name: "Priya Patel",
            company: "Client Success"
        },
    ];

    const commitments = [
        "Act with integrity in all our business dealings and decisions",
        "Invest in continuous learning and professional development",
        "Create an inclusive and diverse workplace culture",
        "Protect the environment and operate sustainably",
        "Support community initiatives and social causes",
        "Deliver excellence in quality and customer service",
        "Encourage innovation and creative thinking",
        "Maintain work-life balance and employee wellbeing"
    ];

    return (
        <div className="bg-white">
            {/* ===== Hero Section ===== */}
            <div className="relative min-h-[600px] bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden pt-20">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-10 w-56 h-56 bg-purple-400 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-10 w-72 h-72 bg-pink-400 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-indigo-400 rounded-full blur-3xl"></div>
                </div>

                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-purple-300 text-lg font-semibold mb-4 uppercase tracking-widest">Our Foundation</p>
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">Values</span> Matter
                            </h1>
                            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                                Six core values guide every decision we make and define who we are as an organization. They shape our culture, drive our actions, and inspire our teams.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="px-8 py-4 bg-gradient-to-r from-pink-400 to-purple-400 text-purple-900 font-bold rounded-lg hover:shadow-2xl hover:shadow-pink-500/50 hover:scale-105 active:scale-95 transition-all duration-300">
                                    Discover Our Values
                                </button>
                                <button className="px-8 py-4 border-2 border-pink-300 text-pink-300 font-bold rounded-lg hover:bg-pink-400/10 hover:scale-105 active:scale-95 transition-all duration-300">
                                    Culture & Impact
                                </button>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                            <img 
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80" 
                                alt="Our Values" 
                                className="w-full h-auto rounded-2xl shadow-2xl group-hover:shadow-3xl group-hover:scale-105 transition-all duration-500 relative z-10"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== Six Core Values ===== */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold text-gray-900 mb-4">
                            Six Core Values
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            These values form the foundation of our organization and guide our daily decisions, interactions, and strategic direction.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {coreValues.map((val) => (
                            <div key={val.id} className={`group bg-gradient-to-br ${val.color} rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-translate-y-3 relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-all duration-500"></div>
                                <div className="relative z-10">
                                    <p className="text-6xl mb-4 group-hover:scale-125 group-hover:rotate-12 inline-block transition-all duration-300">
                                        {val.icon}
                                    </p>
                                    <h3 className="text-3xl font-bold mb-3 group-hover:text-white transition-colors">
                                        {val.title}
                                    </h3>
                                    <p className="text-white/90 mb-6 group-hover:text-white transition-colors leading-relaxed">
                                        {val.description}
                                    </p>
                                    <div className="space-y-2 mb-6 pb-6 border-b border-white/20">
                                        {val.details.map((detail, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-white/80 group-hover:text-white transition-colors">
                                                <span className="w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-all duration-300"></span>
                                                {detail}
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-sm font-semibold text-white/90 group-hover:text-white">
                                        ✨ {val.impact}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== Values Pillars ===== */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Four Pillars of Our Values
                        </h2>
                        <p className="text-xl text-gray-600">How our values span across dimensions</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {valuesPillars.map((pillar, idx) => (
                            <div key={idx} className="group bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 border-2 border-gray-200 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 cursor-pointer transform hover:-translate-y-2">
                                <div className="flex items-start gap-4 mb-4">
                                    <p className="text-5xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                                        {pillar.icon}
                                    </p>
                                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                                        {pillar.category}
                                    </h3>
                                </div>
                                <p className="text-gray-700 mb-6 group-hover:text-gray-800 transition-colors">
                                    {pillar.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {pillar.values.map((v, i) => (
                                        <span key={i} className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                                            {v}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== When We Uphold Values ===== */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-50 to-purple-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            When We Uphold Our Values
                        </h2>
                        <p className="text-xl text-gray-600">Real-world examples of values in action</p>
                    </div>

                    <div className="space-y-6">
                        {whenWeUphold.map((item, idx) => (
                            <div key={idx} className="group">
                                <div className="flex flex-col md:flex-row gap-6 p-8 bg-white rounded-xl border-2 border-gray-200 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 cursor-pointer transform hover:-translate-y-1">
                                    <div className="flex-none">
                                        <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center font-bold text-white text-sm text-center shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                                            {(idx + 1)}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                                            {item.situation}
                                        </h3>
                                        <div className="p-4 bg-purple-50 rounded-lg mb-4">
                                            <p className="text-sm font-semibold text-purple-700 mb-2">Core Value: {item.value}</p>
                                            <p className="text-gray-700">{item.action}</p>
                                        </div>
                                        <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                                            <span className="font-bold text-green-600">Outcome:</span> {item.outcome}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== Values-Aligned Behaviors ===== */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Behaviors That Embody Our Values
                        </h2>
                        <p className="text-xl text-gray-600">How we live our values every day</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {valuesBehaviors.map((behav, idx) => (
                            <div key={idx} className="group bg-gradient-to-br from-white to-gray-50 rounded-lg p-6 border-2 border-gray-200 hover:border-purple-400 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-500 cursor-pointer transform hover:-translate-y-2">
                                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                                    {behav.behavior}
                                </h3>
                                <p className="text-sm text-gray-600 mb-4 group-hover:text-gray-700 transition-colors">
                                    {behav.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {behav.alignment.map((val, i) => (
                                        <span key={i} className="text-xs px-3 py-1 bg-purple-100 text-purple-700 rounded-full font-medium group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                                            {val}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== Leadership Testimonials ===== */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-gray-800">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Leadership on Values
                        </h2>
                        <p className="text-xl text-gray-300">Voices from across our organization</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((test, idx) => (
                            <div key={idx} className="group bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl p-8 border-2 border-gray-600 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-2 transition-all duration-500 cursor-pointer">
                                <div className="mb-6">
                                    <p className="text-5xl text-purple-300 mb-4">"</p>
                                    <p className="text-white text-lg group-hover:text-gray-100 transition-colors leading-relaxed">
                                        {test.quote}
                                    </p>
                                </div>
                                <div className="pt-6 border-t border-gray-500 group-hover:border-purple-400 transition-colors">
                                    <p className="font-bold text-white group-hover:text-purple-300 transition-colors">
                                        {test.name}
                                    </p>
                                    <p className="text-gray-400 text-sm group-hover:text-purple-200 transition-colors">
                                        {test.role} • {test.company}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== Our Commitments ===== */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Our Commitments
                        </h2>
                        <p className="text-xl text-gray-600">Promises we make to uphold our values</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {commitments.map((commitment, idx) => (
                            <div key={idx} className="group flex items-start gap-4 p-6 bg-gradient-to-br from-white to-purple-50 rounded-lg border-2 border-gray-200 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer transform hover:-translate-y-1">
                                <div className="flex-none">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center font-bold text-white text-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                                        ✓
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <p className="text-gray-700 font-semibold group-hover:text-gray-900 transition-colors leading-relaxed">
                                        {commitment}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== Values Impact Statistics ===== */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 to-indigo-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Impact Through Values
                        </h2>
                        <p className="text-xl text-gray-600">Real outcomes from living our values</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { metric: "98%", label: "Employee Trust Score", detail: "Employees trust leadership" },
                            { metric: "95%", label: "Engagement Rate", detail: "Team actively engaged" },
                            { metric: "4.9/5", label: "Culture Rating", detail: "Glassdoor employee reviews" },
                            { metric: "1000+", label: "Volunteer Hours", detail: "Community service annually" },
                        ].map((stat, idx) => (
                            <div key={idx} className="group text-center p-8 bg-white rounded-xl border-2 border-gray-200 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 cursor-pointer transform hover:-translate-y-2">
                                <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 group-hover:scale-110 transition-all duration-300 mb-3">
                                    {stat.metric}
                                </p>
                                <p className="text-gray-900 font-semibold mb-2 group-hover:text-purple-600 transition-colors">
                                    {stat.label}
                                </p>
                                <p className="text-gray-600 text-sm group-hover:text-gray-700">
                                    {stat.detail}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== Every Team Member Matters ===== */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                            <img 
                                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80" 
                                alt="Team Members" 
                                className="w-full h-auto rounded-2xl shadow-2xl group-hover:shadow-3xl group-hover:scale-105 transition-all duration-500 relative z-10"
                            />
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Every Team Member Matters
                            </h2>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                Our values thrive because every team member - from interns to executives - actively lives them. We believe each person is responsible for upholding these principles.
                            </p>
                            <div className="space-y-4 mb-8">
                                {[
                                    "We create a culture where values aren't top-down, but lived bottom-up",
                                    "Every employee has a voice in shaping how we embody our values",
                                    "We celebrate and recognize those who exemplify our values",
                                    "We support continuous learning and growth rooted in our values"
                                ].map((point, idx) => (
                                    <div key={idx} className="group flex items-start gap-3 p-4 rounded-lg hover:bg-purple-50 transition-all duration-300 cursor-pointer">
                                        <span className="text-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">✨</span>
                                        <span className="text-gray-700 font-medium group-hover:text-gray-900">{point}</span>
                                    </div>
                                ))}
                            </div>
                            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 active:scale-95 transition-all duration-300">
                                Join Our Team
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== Final CTA ===== */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Live Our Values With Us
                    </h2>
                    <p className="text-xl text-purple-100 mb-10 leading-relaxed">
                        Our values define who we are and everything we do. Join an organization where integrity, excellence, innovation, and collaboration aren't just words - they're lived every day.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <button className="px-10 py-4 bg-white text-purple-600 font-bold rounded-lg hover:shadow-2xl hover:shadow-white/50 hover:scale-105 active:scale-95 transition-all duration-300">
                            Explore Careers
                        </button>
                        <button className="px-10 py-4 border-3 border-white text-white font-bold rounded-lg hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300">
                            Get to Know Us
                        </button>
                    </div>

                    <div className="mt-12 pt-8 border-t border-purple-400/30 flex flex-col md:flex-row justify-center gap-8">
                        <div className="text-center group">
                            <p className="text-3xl font-bold text-white group-hover:scale-110 transition-all duration-300">6</p>
                            <p className="text-purple-100 font-semibold group-hover:text-white transition-colors">Core Values</p>
                        </div>
                        <div className="text-center group">
                            <p className="text-3xl font-bold text-white group-hover:scale-110 transition-all duration-300">98%</p>
                            <p className="text-purple-100 font-semibold group-hover:text-white transition-colors">Employee Trust</p>
                        </div>
                        <div className="text-center group">
                            <p className="text-3xl font-bold text-white group-hover:scale-110 transition-all duration-300">100%</p>
                            <p className="text-purple-100 font-semibold group-hover:text-white transition-colors">Culture Commitment</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}