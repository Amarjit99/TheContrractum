import React from "react";

export default function Founder() {
    const founders = [
        {
            id: 1,
            name: "Rajesh Kumar",
            title: "Founder & Chief Executive Officer",
            role: "Visionary Leader",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
            bio: "With 25+ years of technology and business experience, Rajesh founded The Contractum to transform how organizations leverage technology for growth.",
            expertise: ["Strategic Vision", "Technology Innovation", "Business Development", "Global Expansion"],
            achievements: [
                "Led the company from startup to serving 1000+ enterprises",
                "Recognized as Industry Leader by Global Tech Magazine",
                "Speaker at 50+ international technology conferences",
                "Built a team of 25,000+ skilled professionals"
            ],
            socialLinks: { linkedin: "#", twitter: "#" }
        },
        {
            id: 2,
            name: "Priya Sharma",
            title: "Co-Founder & Chief Technology Officer",
            role: "Innovation Pioneer",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
            bio: "A technology visionary with 20+ years in software architecture and innovation, Priya drives our cutting-edge solution development.",
            expertise: ["Cloud Architecture", "AI & ML Solutions", "Cybersecurity", "DevOps Innovation"],
            achievements: [
                "Created 50+ proprietary technology solutions",
                "Patents in AI, cloud computing, and cybersecurity",
                "Led digital transformation for 500+ organizations",
                "Built world-class engineering teams across 15 countries"
            ],
            socialLinks: { linkedin: "#", twitter: "#" }
        },
        {
            id: 3,
            name: "Arjun Patel",
            title: "Co-Founder & Chief Operating Officer",
            role: "Operational Excellence",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
            bio: "Operations maestro with 18+ years of experience managing complex enterprise organizations globally.",
            expertise: ["Operational Strategy", "Business Process Optimization", "Team Leadership", "Risk Management"],
            achievements: [
                "Scaled operations across 75+ countries",
                "Achieved 99.9% customer satisfaction rating",
                "Implemented award-winning efficiency programs",
                "Managed $5B+ in client value creation"
            ],
            socialLinks: { linkedin: "#", twitter: "#" }
        },
    ];

    const directors = [
        {
            id: 1,
            name: "Dr. Vikram Singh",
            title: "Director of Innovation & R&D",
            image: "https://images.unsplash.com/photo-1502101872923-d48509bff386?auto=format&fit=crop&w=400&q=80",
            background: "PhD in Computer Science, MIT",
            focus: "Leading next-generation innovation and research initiatives",
            contribution: "40+ research publications, 15+ patents"
        },
        {
            id: 2,
            name: "Neha Gupta",
            title: "Director of Client Success",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
            background: "MBA from IIM Ahmedabad",
            focus: "Ensuring exceptional customer experiences and partnerships",
            contribution: "98% customer satisfaction, 8 industry awards"
        },
        {
            id: 3,
            name: "Rohan Desai",
            title: "Director of Global Expansion",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
            background: "Strategic Business Leader with 20+ years",
            focus: "Expanding presence across new markets and regions",
            contribution: "Established operations in 25 new countries"
        },
        {
            id: 4,
            name: "Sana Malik",
            title: "Director of People & Culture",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
            background: "HR Leader & Organization Development Expert",
            focus: "Building a world-class, inclusive workplace culture",
            contribution: "95% employee engagement, awarded Best Employer"
        },
        {
            id: 5,
            name: "Amit Chakraborty",
            title: "Director of Strategic Partnerships",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
            background: "Strategic Alliance Expert, 15+ years experience",
            focus: "Building ecosystem of industry partnerships",
            contribution: "100+ strategic partnerships established"
        },
        {
            id: 6,
            name: "Lisa Anderson",
            title: "Director of Sustainability",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
            background: "Environmental & Social Impact Leader",
            focus: "Driving ESG initiatives and sustainable practices",
            contribution: "Carbon neutral operations, 1000+ volunteer hours"
        },
    ];

    const leadershipValues = [
        {
            icon: "🎯",
            title: "Vision-Driven Leadership",
            description: "Our founders and directors guide the company with clear vision and strategic direction"
        },
        {
            icon: "💡",
            title: "Innovation & Creativity",
            description: "We encourage bold thinking and creative problem-solving at every level"
        },
        {
            icon: "👥",
            title: "People First",
            description: "We invest in our teams and believe in empowering talent to achieve greatness"
        },
        {
            icon: "🌍",
            title: "Global Responsibility",
            description: "We act as responsible corporate citizens committed to positive social impact"
        },
    ];

    const milestones = [
        {
            year: "2010",
            founder: "Rajesh Kumar",
            event: "Founded The Contractum with a vision to transform business through technology",
            achievement: "Started with 5 team members from a small office"
        },
        {
            year: "2013",
            founder: "Priya Sharma & Arjun Patel",
            event: "Priya and Arjun joined as Co-Founders, expanding to full C-suite leadership",
            achievement: "Scaled to 500+ employees, expanded to 10+ countries"
        },
        {
            year: "2016",
            founder: "Leadership Team",
            event: "Established Board of Directors with industry veterans",
            achievement: "Crossed $100M revenue milestone, industry recognition"
        },
        {
            year: "2019",
            founder: "Global Leadership",
            event: "Expanded leadership team to 6 executive directors",
            achievement: "Present in 50+ countries, serving 1000+ enterprises"
        },
        {
            year: "2023",
            founder: "Vision 2030",
            event: "Launched ambitious global expansion and innovation initiatives",
            achievement: "Operating in 75+ countries, building the future"
        },
    ];

    const boardInsights = [
        {
            metric: "280+",
            label: "Combined Years of Experience",
            detail: "Leadership team expertise across industries"
        },
        {
            metric: "50+",
            label: "Patents & Innovations",
            detail: "Proprietary technologies and solutions"
        },
        {
            metric: "100+",
            label: "Industry Awards",
            detail: "Recognition for excellence and innovation"
        },
        {
            metric: "1000+",
            label: "Global Organizations Served",
            detail: "Enterprise clients across all sectors"
        },
    ];

    return (
        <div className="bg-white">
            {/* ===== Hero Section ===== */}
            <div className="relative min-h-[600px] bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden pt-20">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-10 w-56 h-56 bg-blue-400 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-10 w-72 h-72 bg-indigo-400 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-slate-400 rounded-full blur-3xl"></div>
                </div>

                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-blue-300 text-lg font-semibold mb-4 uppercase tracking-widest">Leadership</p>
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">Founders & Directors</span>
                            </h1>
                            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                                Visionary leaders with 280+ years of combined experience driving innovation and excellence across the globe.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="px-8 py-4 bg-gradient-to-r from-blue-400 to-indigo-400 text-indigo-900 font-bold rounded-lg hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 active:scale-95 transition-all duration-300">
                                    Meet the Team
                                </button>
                                <button className="px-8 py-4 border-2 border-blue-300 text-blue-300 font-bold rounded-lg hover:bg-blue-400/10 hover:scale-105 active:scale-95 transition-all duration-300">
                                    Our Leadership
                                </button>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                            <img 
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80" 
                                alt="Leadership Team" 
                                className="w-full h-auto rounded-2xl shadow-2xl group-hover:shadow-3xl group-hover:scale-105 transition-all duration-500 relative z-10"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== Founders Section ===== */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-50 to-blue-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold text-gray-900 mb-4">
                            Meet Our Founders
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Visionary leaders who founded and built The Contractum with passion, dedication, and innovation.
                        </p>
                    </div>

                    <div className="space-y-16">
                        {founders.map((founder, idx) => (
                            <div key={founder.id} className={`group flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
                                <div className="flex-1 relative group/image">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl blur-xl group-hover/image:blur-2xl transition-all duration-500"></div>
                                    <img 
                                        src={founder.image} 
                                        alt={founder.name}
                                        className="w-full h-96 object-cover rounded-2xl shadow-2xl group-hover/image:shadow-3xl group-hover/image:scale-105 transition-all duration-500 relative z-10"
                                    />
                                </div>
                                <div className="flex-1">
                                    <div className="mb-4">
                                        <p className="text-blue-600 font-bold text-sm uppercase tracking-widest">Founder</p>
                                        <h3 className="text-4xl font-bold text-gray-900 mt-2 group-hover:text-blue-600 transition-colors">
                                            {founder.name}
                                        </h3>
                                        <p className="text-xl text-gray-600 mt-2">{founder.title}</p>
                                        <p className="text-sm text-blue-500 font-semibold mt-1">{founder.role}</p>
                                    </div>

                                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                                        {founder.bio}
                                    </p>

                                    <div className="mb-8">
                                        <h4 className="font-bold text-gray-900 mb-4">Core Expertise</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {founder.expertise.map((exp, i) => (
                                                <span key={i} className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                                    {exp}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-6 border-2 border-gray-200 group-hover:border-blue-400 group-hover:shadow-lg transition-all duration-300">
                                        <h4 className="font-bold text-gray-900 mb-4">Key Achievements</h4>
                                        <ul className="space-y-3">
                                            {founder.achievements.map((achievement, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <span className="text-blue-600 font-bold text-xl flex-none">✓</span>
                                                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== Leadership Values ===== */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            What Drives Our Leadership
                        </h2>
                        <p className="text-xl text-gray-600">Core principles that guide our operations</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {leadershipValues.map((val, idx) => (
                            <div key={idx} className="group bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 border-2 border-gray-200 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 cursor-pointer transform hover:-translate-y-2">
                                <p className="text-5xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                                    {val.icon}
                                </p>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {val.title}
                                </h3>
                                <p className="text-gray-700 group-hover:text-gray-800 transition-colors">
                                    {val.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== Directors Section ===== */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-indigo-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold text-gray-900 mb-4">
                            Board of Directors
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Distinguished industry veterans leading our strategic vision and operational excellence.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {directors.map((director) => (
                            <div key={director.id} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 border-2 border-gray-200 hover:border-blue-400 transition-all duration-500 cursor-pointer transform hover:-translate-y-3">
                                <div className="relative overflow-hidden h-64">
                                    <img 
                                        src={director.image}
                                        alt={director.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent group-hover:from-blue-600/70 transition-all duration-500"></div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                        {director.name}
                                    </h3>
                                    <p className="text-blue-600 font-semibold text-sm mb-3">
                                        {director.title}
                                    </p>
                                    
                                    <div className="space-y-3 text-sm text-gray-700 group-hover:text-gray-800 transition-colors">
                                        <div>
                                            <p className="font-semibold text-gray-900">Background</p>
                                            <p>{director.background}</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">Focus Area</p>
                                            <p>{director.focus}</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">Contribution</p>
                                            <p className="text-blue-600">{director.contribution}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== Leadership Journey ===== */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Our Leadership Journey
                        </h2>
                        <p className="text-xl text-gray-600">Milestones in building The Contractum</p>
                    </div>

                    <div className="space-y-8">
                        {milestones.map((milestone, idx) => (
                            <div key={idx} className="group flex gap-8 items-start">
                                <div className="flex-none">
                                    <div className="w-28 h-28 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-bold text-white text-3xl shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                                        {milestone.year}
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-8 border-2 border-gray-200 group-hover:border-blue-400 group-hover:shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-500">
                                        <p className="text-blue-600 font-bold text-sm mb-2">{milestone.founder}</p>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                            {milestone.event}
                                        </h3>
                                        <p className="text-gray-700 font-semibold">
                                            <span className="text-blue-600">Achievement:</span> {milestone.achievement}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== Board Insights ===== */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 to-blue-900">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Leadership By Numbers
                        </h2>
                        <p className="text-xl text-blue-100">Quantifying our collective impact</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {boardInsights.map((insight, idx) => (
                            <div key={idx} className="group text-center p-8 bg-gradient-to-br from-slate-800 to-blue-800 rounded-xl border-2 border-blue-600 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 cursor-pointer transform hover:-translate-y-2">
                                <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300 group-hover:scale-110 transition-all duration-300 mb-3">
                                    {insight.metric}
                                </p>
                                <p className="text-white font-semibold mb-2 group-hover:text-blue-200 transition-colors">
                                    {insight.label}
                                </p>
                                <p className="text-blue-100 text-sm group-hover:text-white transition-colors">
                                    {insight.detail}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== Leadership Philosophy ===== */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Our Leadership Philosophy
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Servant Leadership",
                                desc: "We believe in leading by serving our teams, customers, and communities with integrity and excellence.",
                                icon: "🙏"
                            },
                            {
                                title: "Continuous Learning",
                                desc: "We invest in ourselves and others through constant learning, growth, and development.",
                                icon: "📚"
                            },
                            {
                                title: "Purpose-Driven",
                                desc: "We lead with purpose, creating meaningful impact and sustainable value for all stakeholders.",
                                icon: "🎯"
                            },
                        ].map((philosophy, idx) => (
                            <div key={idx} className="group bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 border-2 border-gray-200 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 cursor-pointer text-center transform hover:-translate-y-2">
                                <p className="text-6xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                                    {philosophy.icon}
                                </p>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {philosophy.title}
                                </h3>
                                <p className="text-gray-700 group-hover:text-gray-800 transition-colors leading-relaxed">
                                    {philosophy.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== Final CTA ===== */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-600">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Join Our Leadership Journey
                    </h2>
                    <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                        Be part of a company led by visionary leaders committed to innovation, excellence, and creating positive global impact.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-10 py-4 bg-white text-blue-600 font-bold rounded-lg hover:shadow-2xl hover:shadow-white/50 hover:scale-105 active:scale-95 transition-all duration-300">
                            Explore Careers
                        </button>
                        <button className="px-10 py-4 border-3 border-white text-white font-bold rounded-lg hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300">
                            Learn More
                        </button>
                    </div>

                    <div className="mt-12 pt-8 border-t border-blue-400/30 flex flex-col md:flex-row justify-center gap-8">
                        <div className="text-center group">
                            <p className="text-4xl font-bold text-white group-hover:scale-110 transition-all duration-300">3</p>
                            <p className="text-blue-100 font-semibold group-hover:text-white transition-colors">Founders</p>
                        </div>
                        <div className="text-center group">
                            <p className="text-4xl font-bold text-white group-hover:scale-110 transition-all duration-300">6</p>
                            <p className="text-blue-100 font-semibold group-hover:text-white transition-colors">Directors</p>
                        </div>
                        <div className="text-center group">
                            <p className="text-4xl font-bold text-white group-hover:scale-110 transition-all duration-300">280+</p>
                            <p className="text-blue-100 font-semibold group-hover:text-white transition-colors">Years Experience</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}