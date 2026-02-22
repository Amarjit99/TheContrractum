export default function HrTech() {
    const hrTechFeatures = [
        { icon: "👔", title: "Recruitment Automation", desc: "AI-powered candidate sourcing and screening" },
        { icon: "📋", title: "Applicant Tracking", desc: "Streamline hiring workflow from application to offer" },
        { icon: "👥", title: "Employee Management", desc: "Comprehensive employee records and profiles" },
        { icon: "💰", title: "Payroll Integration", desc: "Automated payroll processing and compliance" },
        { icon: "📊", title: "Performance Analytics", desc: "Real-time insights into employee performance" },
        { icon: "🎓", title: "Learning & Development", desc: "Online training and skill development programs" },
        { icon: "🏆", title: "Recognition & Rewards", desc: "Employee engagement and rewards platform" },
        { icon: "⚖️", title: "Compliance Management", desc: "Stay compliant with labor laws and regulations" },
    ];

    const hrSolutions = [
        { name: "WorkDay", features: ["Cloud-Based", "Enterprise", "Global"], highlight: true },
        { name: "BambooHR", features: ["Simple", "SMB-Focused", "Affordable"], highlight: false },
        { name: "SAP Success Factors", features: ["Powerful", "Enterprise", "Comprehensive"], highlight: false },
        { name: "Guidepoint", features: ["Modern", "User-Friendly", "Cost-Effective"], highlight: true },
    ];

    const hrServices = [
        { icon: "🔍", title: "Talent Acquisition", desc: "End-to-end recruitment solutions with AI-powered matching" },
        { icon: "🎯", title: "Performance Management", desc: "Goal setting, feedback, and performance evaluation systems" },
        { icon: "💼", title: "Onboarding", desc: "Streamlined new hire onboarding and orientation programs" },
        { icon: "📈", title: "Workforce Analytics", desc: "Data-driven insights for workforce planning and optimization" },
        { icon: "🤝", title: "Employee Engagement", desc: "Tools to boost engagement, culture, and retention" },
        { icon: "📚", title: "Training Programs", desc: "Custom learning paths and professional development" },
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                                HR Tech <span className="text-cyan-400 ">Solutions</span>
                            </h1>
                            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-6">
                                Transform your HR operations with cutting-edge technology. Automate recruitment, streamline employee management, and build a thriving workplace culture.
                            </p>
                            <button className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold px-6 sm:px-8 py-3 rounded-lg transition duration-300 text-sm sm:text-base transform hover:scale-105 hover:shadow-lg active:scale-95">
                                Schedule Demo
                            </button>
                        </div>
                        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80" alt="HR Tech Solutions" className="w-full h-auto rounded-lg shadow-lg hover:shadow-2xl transition duration-300" />
                    </div>
                </div>
            </div>

            {/* HR Tech Features Grid */}
            <div className="bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 text-slate-900">Core HR Solutions</h2>
                    <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">Complete suite of tools to manage your workforce effectively</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {hrTechFeatures.map((f, i) => (
                            <div key={i} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer border-l-4 border-cyan-500">
                                <div className="text-5xl mb-4 transform transition duration-300 group-hover:scale-110">{f.icon}</div>
                                <h3 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">{f.title}</h3>
                                <p className="text-slate-600 text-xs sm:text-sm">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* HR Platform Comparison */}
            <div className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 text-slate-900">Choose Your Ideal HR Platform</h2>
                    <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">Find the perfect HR solution for your organization</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {hrSolutions.map((p, i) => (
                            <div key={i} className={`rounded-lg p-8 text-center transition duration-300 hover:shadow-2xl hover:scale-105 ${p.highlight ? "bg-gradient-to-br from-cyan-500 to-blue-600 text-white ring-2 ring-cyan-300" : "bg-gray-100 text-slate-900 hover:bg-gray-200"}`}>
                                <h3 className="text-2xl font-bold mb-4">{p.name}</h3>
                                <ul className="space-y-2 text-sm">
                                    {p.features.map((f, j) => (
                                        <li key={j} className="flex justify-center items-center gap-2">
                                            <span className="text-lg">✓</span> {f}
                                        </li>
                                    ))}
                                </ul>
                                <button className={`mt-6 px-6 py-2 rounded-lg font-bold transition duration-300 transform hover:scale-110 active:scale-95 ${p.highlight ? "bg-white text-blue-600 hover:bg-gray-100" : "bg-cyan-500 text-white hover:bg-cyan-700"}`}>
                                    Learn More
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* HR Services Section */}
            <div className="bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 text-slate-900">Our HR Services</h2>
                    <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">Comprehensive HR solutions tailored to your organization</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {hrServices.map((s, i) => (
                            <div key={i} className="bg-white p-8 rounded-lg shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 border-t-4 border-cyan-500 cursor-pointer group">
                                <div className="text-5xl mb-4 group-hover:scale-125 transform transition duration-300">{s.icon}</div>
                                <h3 className="font-bold text-slate-900 mb-3 text-lg">{s.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
                                <button className="mt-4 text-cyan-600 font-semibold hover:text-cyan-700 flex items-center gap-2 group-hover:gap-4 transition duration-300">
                                    Learn More <span>→</span>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Talent Management & Retention */}
            <div className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80" alt="Talent Management" className="w-full h-auto rounded-lg shadow-lg hover:shadow-2xl transition duration-300 order-2 md:order-1" />
                        <div className="order-1 md:order-2">
                            <p className="text-cyan-500 font-bold text-xs sm:text-sm uppercase tracking-wide mb-2">Build Strong Teams</p>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Talent Management & Retention</h2>
                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                                Attract, develop, and retain top talent with strategic HR initiatives. Create a workplace where employees thrive and your organization grows.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-sm sm:text-base text-slate-700 hover:text-slate-900 transition duration-200">
                                    <span className="text-cyan-500 font-bold">✓</span> Talent pipeline development
                                </li>
                                <li className="flex gap-3 text-sm sm:text-base text-slate-700 hover:text-slate-900 transition duration-200">
                                    <span className="text-cyan-500 font-bold">✓</span> Succession planning tools
                                </li>
                                <li className="flex gap-3 text-sm sm:text-base text-slate-700 hover:text-slate-900 transition duration-200">
                                    <span className="text-cyan-500 font-bold">✓</span> Career path mapping
                                </li>
                                <li className="flex gap-3 text-sm sm:text-base text-slate-700 hover:text-slate-900 transition duration-200">
                                    <span className="text-cyan-500 font-bold">✓</span> Retention analytics
                                </li>
                                <li className="flex gap-3 text-sm sm:text-base text-slate-700 hover:text-slate-900 transition duration-200">
                                    <span className="text-cyan-500 font-bold">✓</span> Employee satisfaction surveys
                                </li>
                            </ul>
                            <button className="mt-6 bg-cyan-500 hover:bg-cyan-700 text-white font-bold px-6 sm:px-8 py-3 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-700 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Ready to Transform Your HR Operations?</h2>
                    <p className="text-blue-100 text-sm sm:text-base mb-8 max-w-2xl mx-auto">Join hundreds of companies that have streamlined their HR processes and improved employee satisfaction with our integrated platform.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="bg-white text-blue-600 font-bold px-6 sm:px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300 transform hover:scale-110 hover:shadow-xl active:scale-95 text-sm sm:text-base cursor-pointer">
                            Schedule Demo
                        </button>
                        <button className="border-2 border-white text-white font-bold px-6 sm:px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300 transform hover:scale-110 hover:shadow-xl active:scale-95 text-sm sm:text-base cursor-pointer">
                            View Pricing
                        </button>
                    </div>
                </div>
            </div>

            {/* Case Studies Section */}
            <div className="bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 text-slate-900">Enterprise Success Stories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { company: "Global Tech Corp", results: "40% faster hiring", story: "Reduced time-to-hire from 45 days to 27 days with our automated recruitment system." },
                            { company: "Finance Solutions Inc", results: "35% cost reduction", story: "Streamlined payroll and compliance processes, saving thousands in operational costs." },
                            { company: "Healthcare Network", results: "85% employee satisfaction", story: "Implemented performance management and learning systems that boosted engagement scores." }
                        ].map((story, i) => (
                            <div key={i} className="bg-white p-8 rounded-lg shadow-md hover:shadow-2xl hover:scale-105 transition duration-300 cursor-pointer border-l-4 border-cyan-500">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold text-lg">
                                        {story.company.charAt(0)}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">{story.company}</h3>
                                        <p className="text-cyan-600 text-sm font-semibold">{story.results}</p>
                                    </div>
                                </div>
                                <p className="text-slate-600 text-sm italic">"{story.story}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}