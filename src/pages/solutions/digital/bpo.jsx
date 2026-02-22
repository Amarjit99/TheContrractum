export default function BPO() {
    const bpoServices = [
        { icon: "📞", title: "Customer Support Services", desc: "24/7 multilingual support handling inbound and outbound calls" },
        { icon: "📧", title: "Email Support", desc: "Professional email management and customer inquiry resolution" },
        { icon: "💬", title: "Live Chat Support", desc: "Real-time customer engagement across multiple platforms" },
        { icon: "📝", title: "Data Entry & Processing", desc: "Accurate data entry with 99.8% accuracy rates" },
        { icon: "📊", title: "Back-Office Operations", desc: "Invoice processing, billing, and account management" },
        { icon: "🔍", title: "Quality Assurance", desc: "Compliance monitoring and quality control services" },
        { icon: "📱", title: "Technical Support", desc: "IT helpdesk and technical troubleshooting services" },
        { icon: "📋", title: "HR Administration", desc: "Payroll processing and employee onboarding support" },
    ];

    const industries = [
        { name: "Retail & E-Commerce", icon: "🛒", clients: "500+" },
        { name: "Finance & Banking", icon: "💼", clients: "350+" },
        { name: "Healthcare", icon: "⚕️", clients: "200+" },
        { name: "Technology", icon: "💻", clients: "450+" },
        { name: "Telecommunications", icon: "📡", clients: "180+" },
        { name: "Travel & Hospitality", icon: "✈️", clients: "220+" },
    ];

    const bpoModels = [
        { model: "Dedicated Team", desc: "Exclusive team assigned to your account", min: "5", highlight: false },
        { model: "Shared Services", desc: "Cost-effective shared resource model", min: "1", highlight: false },
        { model: "Hybrid Model", desc: "Combination of dedicated and shared resources", min: "10", highlight: true },
        { model: "Project-Based", desc: "Short-term project-specific resources", min: "2", highlight: false },
    ];

    const advantages = [
        { icon: "💰", title: "Cost Reduction", benefit: "Save up to 60% on operational costs" },
        { icon: "⚡", title: "Efficiency Boost", benefit: "Increase productivity by 40-50%" },
        { icon: "🌍", title: "Global Reach", benefit: "24/7 operations across time zones" },
        { icon: "📈", title: "Scalability", benefit: "Easily scale resources up or down" },
        { icon: "🎯", title: "Focus on Core Business", benefit: "Let us handle non-core operations" },
        { icon: "👥", title: "Skilled Workforce", benefit: "Access to trained professionals" },
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                                BPO <span className="text-purple-300">Services</span>
                            </h1>
                            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-6">
                                Streamline your business operations with our comprehensive BPO solutions. Focus on growth while we handle your back-office, customer support, and operational needs.
                            </p>
                            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold px-6 sm:px-8 py-3 rounded-lg transition duration-300 text-sm sm:text-base transform hover:scale-105 hover:shadow-lg active:scale-95">
                                Get Free Consultation
                            </button>
                        </div>
                        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80" alt="BPO Services" className="w-full h-auto rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105" />
                    </div>
                </div>
            </div>

            {/* BPO Services Grid */}
            <div className="bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 text-slate-900">Comprehensive BPO Services</h2>
                    <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">End-to-end business process outsourcing solutions tailored to your needs</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {bpoServices.map((s, i) => (
                            <div key={i} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 hover:-translate-y-2 transition duration-300 cursor-pointer border-b-4 border-purple-500 group">
                                <div className="text-5xl mb-4 transform group-hover:scale-125 group-hover:rotate-6 transition duration-300">{s.icon}</div>
                                <h3 className="font-bold text-slate-900 mb-2 text-sm sm:text-base group-hover:text-purple-600 transition duration-200">{s.title}</h3>
                                <p className="text-slate-600 text-xs sm:text-sm">{s.desc}</p>
                                <div className="mt-4 h-1 w-0 bg-gradient-to-r from-purple-500 to-indigo-600 group-hover:w-full transition-all duration-300"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Industry Specializations */}
            <div className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 text-slate-900">Industries We Serve</h2>
                    <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">Proven expertise across diverse industries and sectors</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {industries.map((ind, i) => (
                            <div key={i} className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-lg border-2 border-purple-200 hover:border-purple-500 hover:shadow-2xl transition duration-300 cursor-pointer group">
                                <div className="text-6xl mb-4 group-hover:scale-150 transform transition duration-300 group-hover:rotate-12">{ind.icon}</div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition duration-200">{ind.name}</h3>
                                <p className="text-purple-600 font-semibold text-lg">{ind.clients} Clients</p>
                                <button className="mt-4 text-purple-600 font-semibold hover:text-purple-700 flex items-center gap-2 group-hover:gap-3 transition duration-300">
                                    Learn More <span className="transform group-hover:translate-x-2 transition duration-300">→</span>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Business Advantages */}
            <div className="bg-gradient-to-b from-white to-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 text-slate-900">Why Choose Our BPO Services</h2>
                    <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">Key benefits that drive business transformation</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {advantages.map((adv, i) => (
                            <div key={i} className="bg-white p-8 rounded-lg shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 border-t-4 border-purple-500 cursor-pointer group relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                                <div className="relative z-10">
                                    <div className="text-5xl mb-4 group-hover:scale-125 group-hover:rotate-12 transform transition duration-300">{adv.icon}</div>
                                    <h3 className="font-bold text-slate-900 mb-3 text-lg group-hover:text-purple-600 transition duration-200">{adv.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">{adv.benefit}</p>
                                    <div className="mt-4 flex items-center text-purple-600 font-semibold group-hover:gap-3 gap-2 transition duration-300">
                                        <span>Explore</span> <span className="group-hover:translate-x-2 transition duration-300">→</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* BPO Engagement Models */}
            <div className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 text-slate-900">Flexible Engagement Models</h2>
                    <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">Choose the BPO model that fits your business requirements</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {bpoModels.map((mod, i) => (
                            <div key={i} className={`rounded-lg p-8 text-center transition duration-300 hover:shadow-2xl hover:-translate-y-3 relative overflow-hidden group ${mod.highlight ? "bg-gradient-to-br from-purple-600 to-indigo-600 text-white ring-2 ring-purple-300" : "bg-gray-100 text-slate-900 hover:bg-gray-150"}`}>
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition duration-300 ${mod.highlight ? "bg-white" : "bg-purple-600"}`}></div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold mb-2">{mod.model}</h3>
                                    <p className={`text-sm mb-4 ${mod.highlight ? "text-purple-100" : "text-slate-600"}`}>{mod.desc}</p>
                                    <p className="text-lg font-bold mb-4">Min: {mod.min} resources</p>
                                    <button className={`px-6 py-2 rounded-lg font-bold transition duration-300 transform hover:scale-110 active:scale-95 ${mod.highlight ? "bg-white text-purple-600 hover:bg-gray-50" : "bg-purple-500 text-white hover:bg-purple-700"}`}>
                                        Get Quote
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Quality & Process Section */}
            <div className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div>
                            <p className="text-purple-300 font-bold text-xs sm:text-sm uppercase tracking-wide mb-2">Excellence in Delivery</p>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Quality Assurance & Compliance</h2>
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                                We maintain stringent quality standards with ISO certifications, GDPR compliance, and continuous process improvement.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-sm sm:text-base text-gray-200 hover:text-white transition duration-200">
                                    <span className="text-purple-300 font-bold">✓</span> ISO 9001 & ISO 27001 certified
                                </li>
                                <li className="flex gap-3 text-sm sm:text-base text-gray-200 hover:text-white transition duration-200">
                                    <span className="text-purple-300 font-bold">✓</span> GDPR & SOC 2 compliant
                                </li>
                                <li className="flex gap-3 text-sm sm:text-base text-gray-200 hover:text-white transition duration-200">
                                    <span className="text-purple-300 font-bold">✓</span> 99.8% SLA uptime guarantee
                                </li>
                                <li className="flex gap-3 text-sm sm:text-base text-gray-200 hover:text-white transition duration-200">
                                    <span className="text-purple-300 font-bold">✓</span> Regular audits and training
                                </li>
                            </ul>
                            <button className="mt-6 bg-purple-400 hover:bg-purple-300 text-white font-bold px-6 sm:px-8 py-3 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95">
                                View Certifications
                            </button>
                        </div>
                        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80" alt="Quality Assurance" className="w-full h-auto rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform group-hover:scale-105" />
                    </div>
                </div>
            </div>

            {/* Case Studies Section */}
            <div className="bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 text-slate-900">Proven Results from Our Clients</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { company: "E-Commerce Giant", metric: "45% cost reduction", story: "Partnered for customer support, saved $2M annually while improving satisfaction by 30%." },
                            { company: "Financial Services", metric: "40% faster operations", story: "Automated back-office processes resulting in faster transaction processing and compliance." },
                            { company: "Tech Startup", metric: "3x volume growth", story: "Scaled customer support from 5000 to 15000 monthly tickets without hiring overhead." }
                        ].map((client, i) => (
                            <div key={i} className="bg-white p-8 rounded-lg shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition duration-300 cursor-pointer border-l-4 border-purple-500 group">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 text-white flex items-center justify-center font-bold text-xl group-hover:scale-125 transition duration-300">
                                        {client.company.charAt(0)}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 group-hover:text-purple-600 transition duration-200">{client.company}</h3>
                                        <p className="text-purple-600 text-sm font-semibold">{client.metric}</p>
                                    </div>
                                </div>
                                <p className="text-slate-600 text-sm italic">"{client.story}"</p>
                                <div className="mt-4 flex items-center text-purple-600 font-semibold text-sm group-hover:gap-3 gap-2 transition duration-300">
                                    <span>Read Case Study</span> <span className="group-hover:translate-x-2 transition duration-300">→</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                    <div className="text-center">
                        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4">Ready to Optimize Your Operations?</h2>
                        <p className="text-purple-100 text-sm sm:text-base mb-8 max-w-2xl mx-auto leading-relaxed">
                            Partner with us to streamline your business processes, reduce costs, and focus on what matters most. Get expert guidance tailored to your business needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button className="bg-white text-purple-600 font-bold px-8 sm:px-10 py-3 rounded-lg hover:bg-gray-50 transition duration-300 transform hover:scale-110 hover:shadow-xl active:scale-95 text-sm sm:text-base cursor-pointer">
                                Get Free Consultation
                            </button>
                            <button className="border-3 border-white text-white font-bold px-8 sm:px-10 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition duration-300 transform hover:scale-110 hover:shadow-xl active:scale-95 text-sm sm:text-base cursor-pointer">
                                Schedule a Call
                            </button>
                        </div>
                        <p className="text-purple-200 text-sm mt-6">No credit card required • 30-minute demo • Dedicated account manager</p>
                    </div>
                </div>
            </div>
        </div>
    );
}