import React from "react";

export default function Management() {
    const managementTeam = [
        {
            id: 1,
            name: "Rajesh Kumar",
            title: "Chief Executive Officer",
            department: "Executive Leadership",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
            expertise: ["Strategic Leadership", "Business Development", "Global Operations"],
            reportsTo: "Board of Directors",
            yearsExperience: 25
        },
        {
            id: 2,
            name: "Priya Sharma",
            title: "Chief Technology Officer",
            department: "Technology",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
            expertise: ["Cloud Architecture", "AI & ML", "Innovation"],
            reportsTo: "CEO",
            yearsExperience: 20
        },
        {
            id: 3,
            name: "Arjun Patel",
            title: "Chief Operating Officer",
            department: "Operations",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
            expertise: ["Process Optimization", "Team Management", "Risk Management"],
            reportsTo: "CEO",
            yearsExperience: 18
        },
        {
            id: 4,
            name: "Vikram Singh",
            title: "Director of Innovation & R&D",
            department: "Research & Development",
            image: "https://images.unsplash.com/photo-1502101872923-d48509bff386?auto=format&fit=crop&w=400&q=80",
            expertise: ["Research Strategy", "Patent Development", "Innovation Labs"],
            reportsTo: "CTO",
            yearsExperience: 18
        },
        {
            id: 5,
            name: "Neha Gupta",
            title: "Director of Client Success",
            department: "Client Relations",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
            expertise: ["Client Management", "Account Strategy", "Satisfaction"],
            reportsTo: "CEO",
            yearsExperience: 16
        },
        {
            id: 6,
            name: "Rohan Desai",
            title: "Director of Global Expansion",
            department: "Business Development",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
            expertise: ["Market Expansion", "Strategic Planning", "Regional Growth"],
            reportsTo: "CEO",
            yearsExperience: 15
        },
    ];

    const managementLevels = [
        {
            level: "Executive Team",
            icon: "👑",
            color: "from-red-500 to-pink-600",
            description: "C-suite executives driving strategic vision and overall company direction",
            members: 3,
            responsibilities: [
                "Strategic planning and vision setting",
                "Board and investor relations",
                "Major capital allocation decisions",
                "Organization-wide policy setting"
            ]
        },
        {
            level: "Senior Management",
            icon: "🎯",
            color: "from-blue-500 to-blue-600",
            description: "Directors and VP-level leaders managing key business functions",
            members: 6,
            responsibilities: [
                "Department/Function leadership",
                "Quarterly planning and execution",
                "Team development and hiring",
                "Cross-functional collaboration"
            ]
        },
        {
            level: "Middle Management",
            icon: "📊",
            color: "from-green-500 to-green-600",
            description: "Managers overseeing teams and day-to-day operations",
            members: 45,
            responsibilities: [
                "Team supervision and mentoring",
                "Project management and delivery",
                "Performance management",
                "Resource allocation"
            ]
        },
        {
            level: "Team Leadership",
            icon: "👥",
            color: "from-purple-500 to-purple-600",
            description: "Team leads and senior professionals guiding individual contributors",
            members: 150,
            responsibilities: [
                "Day-to-day team operations",
                "Quality assurance and standards",
                "Employee development",
                "Knowledge transfer and training"
            ]
        },
    ];

    const managementPrinciples = [
        {
            principle: "Empowerment",
            description: "We empower our managers to make decisions and take ownership of their teams' success",
            icon: "💪"
        },
        {
            principle: "Transparency",
            description: "We maintain open communication channels and transparent decision-making processes",
            icon: "🔍"
        },
        {
            principle: "Accountability",
            description: "Every manager is accountable for their team's performance and development",
            icon: "✓"
        },
        {
            principle: "Growth",
            description: "We invest in continuous learning and development for all managers",
            icon: "📈"
        },
        {
            principle: "Collaboration",
            description: "We encourage cross-functional teamwork and collaborative problem-solving",
            icon: "🤝"
        },
        {
            principle: "Excellence",
            description: "We pursue excellence in management practices and organizational performance",
            icon: "⭐"
        },
    ];

    const managementFunctions = [
        {
            area: "Strategic Planning",
            icon: "🗺️",
            color: "from-indigo-500 to-indigo-600",
            activities: [
                "Annual goal setting and OKRs",
                "Market analysis and competitive positioning",
                "Resource planning and allocation",
                "Risk assessment and mitigation"
            ]
        },
        {
            area: "Talent Management",
            icon: "👨‍💼",
            color: "from-pink-500 to-pink-600",
            activities: [
                "Recruitment and hiring",
                "Performance management",
                "Succession planning",
                "Employee development programs"
            ]
        },
        {
            area: "Operations & Execution",
            icon: "⚙️",
            color: "from-cyan-500 to-cyan-600",
            activities: [
                "Process optimization",
                "Project management",
                "Quality assurance",
                "Cost management"
            ]
        },
        {
            area: "Stakeholder Relations",
            icon: "🤝",
            color: "from-amber-500 to-amber-600",
            activities: [
                "Client relationship management",
                "Vendor management",
                "Board communications",
                "Employee engagement"
            ]
        },
    ];

    const organizationStructure = [
        {
            title: "Decision-Making Authority",
            icon: "⚖️",
            details: [
                "Strategic decisions: Board & C-Suite",
                "Operational decisions: Directors & Managers",
                "Tactical decisions: Team Leads & Individual Contributors",
                "Empowered teams at all levels for their domains"
            ]
        },
        {
            title: "Communication Flow",
            icon: "📢",
            details: [
                "Top-down: Vision, strategy, and policies",
                "Bottom-up: Feedback, ideas, and concerns",
                "Lateral: Cross-functional collaboration",
                "Regular all-hands meetings and town halls"
            ]
        },
        {
            title: "Performance Management",
            icon: "📊",
            details: [
                "Quarterly reviews and feedback",
                "Annual performance evaluations",
                "360-degree feedback programs",
                "Continuous coaching and mentoring"
            ]
        },
        {
            title: "Development & Growth",
            icon: "🌱",
            details: [
                "Leadership development programs",
                "Technical skill enhancement",
                "Mentorship and coaching",
                "Succession planning initiatives"
            ]
        },
    ];

    const managementTools = [
        "Performance Management Systems",
        "Project Management Tools",
        "Data Analytics & BI",
        "Communication Platforms",
        "Learning Management Systems",
        "Survey & Feedback Tools",
        "Financial Management Systems",
        "HR Information Systems"
    ];

    return (
        <div className="bg-white">
            {/* ===== Hero Section ===== */}
            <div className="relative min-h-[600px] bg-gradient-to-br from-gray-900 via-slate-900 to-stone-900 overflow-hidden pt-20">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-10 w-56 h-56 bg-blue-400 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-10 w-72 h-72 bg-slate-400 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gray-400 rounded-full blur-3xl"></div>
                </div>

                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-blue-300 text-lg font-semibold mb-4 uppercase tracking-widest">Organization</p>
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">Management</span> Structure
                            </h1>
                            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                                How we organize, lead, and empower teams across the organization to drive excellence and achieve our mission.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="px-8 py-4 bg-gradient-to-r from-blue-400 to-cyan-400 text-slate-900 font-bold rounded-lg hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 active:scale-95 transition-all duration-300">
                                    Explore Management
                                </button>
                                <button className="px-8 py-4 border-2 border-blue-300 text-blue-300 font-bold rounded-lg hover:bg-blue-400/10 hover:scale-105 active:scale-95 transition-all duration-300">
                                    Learn More
                                </button>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80"
                                alt="Management Team"
                                className="w-full h-auto rounded-2xl shadow-2xl group-hover:shadow-3xl group-hover:scale-105 transition-all duration-500 relative z-10"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== Management Hierarchy ===== */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-50 to-blue-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold text-gray-900 mb-4">
                            Management Hierarchy
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            How we organize our leadership structure to drive accountability, collaboration, and growth.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {managementLevels.map((level, idx) => (
                            <div key={idx} className={`group bg-gradient-to-br ${level.color} rounded-xl p-8 text-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-translate-y-2 relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-all duration-500"></div>
                                <div className="relative z-10">
                                    <p className="text-6xl mb-4 group-hover:scale-125 group-hover:rotate-12 inline-block transition-all duration-300">
                                        {level.icon}
                                    </p>
                                    <h3 className="text-2xl font-bold mb-2">
                                        {level.level}
                                    </h3>
                                    <p className="text-white/90 mb-4 text-sm">
                                        {level.description}
                                    </p>
                                    <div className="py-4 border-t border-white/20">
                                        <p className="text-3xl font-bold mb-1">{level.members}</p>
                                        <p className="text-white/80 text-xs">Members in this level</p>
                                    </div>
                                    <div className="mt-4 space-y-2">
                                        {level.responsibilities.map((resp, i) => (
                                            <div key={i} className="flex items-start gap-2 text-xs text-white/90 group-hover:text-white transition-colors">
                                                <span className="text-lg">▸</span>
                                                <span>{resp}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== Management Team Grid ===== */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold text-gray-900 mb-4">
                            Executive Management Team
                        </h2>
                        <p className="text-xl text-gray-600">Our experienced leaders guiding the organization</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {managementTeam.map((member) => (
                            <div key={member.id} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 border-2 border-gray-200 hover:border-blue-400 transition-all duration-500 cursor-pointer transform hover:-translate-y-3">
                                <div className="relative overflow-hidden h-72">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent group-hover:from-blue-600/70 transition-all duration-500"></div>
                                </div>

                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                        {member.name}
                                    </h3>
                                    <p className="text-blue-600 font-semibold mb-1">
                                        {member.title}
                                    </p>
                                    <p className="text-sm text-gray-500 mb-4">
                                        {member.department}
                                    </p>

                                    <div className="space-y-3 text-sm mb-6">
                                        <div>
                                            <p className="font-semibold text-gray-900">Experience</p>
                                            <p className="text-gray-700">{member.yearsExperience}+ years</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">Reports To</p>
                                            <p className="text-gray-700">{member.reportsTo}</p>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="font-semibold text-gray-900 mb-2">Expertise</p>
                                        <div className="flex flex-wrap gap-2">
                                            {member.expertise.map((exp, i) => (
                                                <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                                    {exp}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== Management Functions ===== */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold text-gray-900 mb-4">
                            Key Management Functions
                        </h2>
                        <p className="text-xl text-gray-600">Core areas of management responsibility and activity</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {managementFunctions.map((func, idx) => (
                            <div key={idx} className={`group bg-gradient-to-br ${func.color} rounded-xl p-8 text-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2`}>
                                <div className="flex items-start gap-4 mb-6">
                                    <p className="text-5xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                                        {func.icon}
                                    </p>
                                    <h3 className="text-3xl font-bold">
                                        {func.area}
                                    </h3>
                                </div>
                                <div className="space-y-3">
                                    {func.activities.map((activity, i) => (
                                        <div key={i} className="flex items-start gap-3 text-white/90 group-hover:text-white transition-colors">
                                            <span className="text-xl">→</span>
                                            <span>{activity}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== Management Principles ===== */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold text-gray-900 mb-4">
                            Management Principles
                        </h2>
                        <p className="text-xl text-gray-600">Core values guiding our management approach</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {managementPrinciples.map((principle, idx) => (
                            <div key={idx} className="group bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 border-2 border-gray-200 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 cursor-pointer transform hover:-translate-y-2">
                                <p className="text-6xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                                    {principle.icon}
                                </p>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {principle.principle}
                                </h3>
                                <p className="text-gray-700 group-hover:text-gray-800 transition-colors leading-relaxed">
                                    {principle.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== Organization Structure Details ===== */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-50 to-blue-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold text-gray-900 mb-4">
                            How We Operate
                        </h2>
                        <p className="text-xl text-gray-600">Key operational aspects of our management system</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {organizationStructure.map((struct, idx) => (
                            <div key={idx} className="group bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:-translate-y-2">
                                <div className="flex items-start gap-4 mb-6">
                                    <p className="text-5xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                                        {struct.icon}
                                    </p>
                                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                        {struct.title}
                                    </h3>
                                </div>
                                <div className="space-y-3">
                                    {struct.details.map((detail, i) => (
                                        <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 group-hover:bg-blue-50 transition-colors">
                                            <span className="text-blue-600 font-bold flex-none">•</span>
                                            <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{detail}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== Management Tools & Systems ===== */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold text-gray-900 mb-4">
                            Management Tools & Systems
                        </h2>
                        <p className="text-xl text-gray-600">Technology enabling effective management and operations</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {managementTools.map((tool, idx) => (
                            <div key={idx} className="group p-6 bg-gradient-to-br from-white to-blue-50 rounded-lg border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer transform hover:-translate-y-2 text-center">
                                <p className="text-4xl mb-3 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                                    🛠️
                                </p>
                                <p className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                    {tool}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== Management Effectiveness Metrics ===== */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-slate-900">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Management Effectiveness
                        </h2>
                        <p className="text-xl text-gray-300">How we measure and improve management performance</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { metric: "95%", label: "Team Engagement", detail: "Average team satisfaction rate" },
                            { metric: "90%", label: "Goal Achievement", detail: "Quarterly OKR completion" },
                            { metric: "30%", label: "YoY Growth", detail: "Organizational expansion" },
                            { metric: "1000+", label: "Managers Trained", detail: "Leadership development graduates" },
                        ].map((stat, idx) => (
                            <div key={idx} className="group text-center p-8 bg-gradient-to-br from-slate-800 to-gray-800 rounded-xl border-2 border-blue-600 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 cursor-pointer transform hover:-translate-y-2">
                                <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 group-hover:scale-110 transition-all duration-300 mb-3">
                                    {stat.metric}
                                </p>
                                <p className="text-white font-semibold mb-2 group-hover:text-blue-200 transition-colors">
                                    {stat.label}
                                </p>
                                <p className="text-gray-300 text-sm group-hover:text-white transition-colors">
                                    {stat.detail}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== Career Paths ===== */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Management Career Paths
                        </h2>
                        <p className="text-xl text-gray-600">How to grow into leadership roles</p>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                path: "Individual Contributor → Team Lead",
                                timeline: "3-5 years",
                                focus: "Technical excellence, mentoring, and communication"
                            },
                            {
                                path: "Team Lead → Manager",
                                timeline: "2-3 years",
                                focus: "People management, strategic thinking, and execution"
                            },
                            {
                                path: "Manager → Senior Manager",
                                timeline: "3-4 years",
                                focus: "Department leadership, cross-functional collaboration, innovation"
                            },
                            {
                                path: "Senior Manager → Director",
                                timeline: "2-3 years",
                                focus: "Function-wide strategy, organizational development, governance"
                            },
                        ].map((path, idx) => (
                            <div key={idx} className="group flex gap-8 items-center p-8 bg-gradient-to-r from-white to-blue-50 rounded-xl border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer transform hover:-translate-y-1">
                                <div className="flex-none w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center font-bold text-white text-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                                    {idx + 1}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                                        {path.path}
                                    </h3>
                                    <p className="text-gray-700 group-hover:text-gray-800 transition-colors mb-2">
                                        {path.focus}
                                    </p>
                                    <p className="text-sm text-blue-600 font-semibold">
                                        Timeline: {path.timeline}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== Final CTA ===== */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-cyan-600 to-slate-600">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Join Our Management Team
                    </h2>
                    <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                        We're looking for talented managers and leaders to help us grow and excel. Build your career in a culture of empowerment and excellence.
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
                            <p className="text-4xl font-bold text-white group-hover:scale-110 transition-all duration-300">204</p>
                            <p className="text-blue-100 font-semibold group-hover:text-white transition-colors">Managers & Leaders</p>
                        </div>
                        <div className="text-center group">
                            <p className="text-4xl font-bold text-white group-hover:scale-110 transition-all duration-300">4</p>
                            <p className="text-blue-100 font-semibold group-hover:text-white transition-colors">Management Levels</p>
                        </div>
                        <div className="text-center group">
                            <p className="text-4xl font-bold text-white group-hover:scale-110 transition-all duration-300">95%</p>
                            <p className="text-blue-100 font-semibold group-hover:text-white transition-colors">Team Engagement</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}