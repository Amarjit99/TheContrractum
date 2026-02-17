export default function Benefits() {
    const benefits = [
        {
            icon: "💰",
            title: "Competitive Salary",
            description: "Industry-leading compensation packages with performance-based bonuses and annual increments.",
            color: "from-green-500 to-emerald-600"
        },
        {
            icon: "🏥",
            title: "Health Insurance",
            description: "Comprehensive medical coverage for you and your family, including dental and vision care.",
            color: "from-blue-500 to-cyan-600"
        },
        {
            icon: "🏖️",
            title: "Paid Time Off",
            description: "Generous vacation days, sick leave, and paid holidays to maintain work-life balance.",
            color: "from-orange-500 to-red-600"
        },
        {
            icon: "📚",
            title: "Learning & Development",
            description: "Access to training programs, certifications, workshops, and conferences to grow your skills.",
            color: "from-purple-500 to-pink-600"
        },
        {
            icon: "🏠",
            title: "Remote Work Options",
            description: "Flexible work-from-home policies and hybrid working arrangements for better flexibility.",
            color: "from-indigo-500 to-blue-600"
        },
        {
            icon: "🎯",
            title: "Career Growth",
            description: "Clear career progression paths with mentorship programs and leadership development.",
            color: "from-red-500 to-pink-600"
        },
        {
            icon: "🍔",
            title: "Free Meals & Snacks",
            description: "Complimentary lunch, breakfast options, and unlimited snacks in the office pantry.",
            color: "from-yellow-500 to-orange-600"
        },
        {
            icon: "🚗",
            title: "Transport Allowance",
            description: "Monthly transportation reimbursement or company-provided shuttle services.",
            color: "from-teal-500 to-green-600"
        },
        {
            icon: "💼",
            title: "Retirement Plans",
            description: "Provident fund contributions and retirement savings plans for your future security.",
            color: "from-gray-600 to-gray-800"
        },
        {
            icon: "🎉",
            title: "Team Events",
            description: "Regular team outings, celebrations, and company-sponsored social activities.",
            color: "from-pink-500 to-rose-600"
        },
        {
            icon: "🧘",
            title: "Wellness Programs",
            description: "Gym memberships, yoga classes, mental health support, and wellness initiatives.",
            color: "from-green-500 to-teal-600"
        },
        {
            icon: "👶",
            title: "Parental Leave",
            description: "Extended maternity and paternity leave with flexible return-to-work options.",
            color: "from-violet-500 to-purple-600"
        }
    ];

    const additionalPerks = [
        "Employee referral bonus program",
        "Performance recognition awards",
        "Annual company retreats",
        "Stock options for senior positions",
        "Technology equipment allowance",
        "Professional membership fees covered",
        "Relocation assistance",
        "Education assistance for higher studies",
        "Life and disability insurance",
        "Childcare support",
        "Flexible spending accounts",
        "Employee assistance programs"
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 text-white py-24 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
                </div>
                
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center">
                        <span className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold uppercase tracking-wider mb-6">
                            Careers at The Contrractum
                        </span>
                        <h1 className="text-5xl md:text-6xl font-black mb-6 drop-shadow-lg">
                            Employee Benefits & Perks
                        </h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                            We believe in taking care of our team. Discover the comprehensive benefits package designed to support your professional growth and personal well-being.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Benefits Grid */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Why Work With Us?
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto mb-4"></div>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        We offer a comprehensive benefits package that goes beyond the basics to ensure you thrive both professionally and personally.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div 
                            key={index}
                            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2"
                        >
                            <div className={`h-2 bg-gradient-to-r ${benefit.color}`}></div>
                            <div className="p-8">
                                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Additional Perks Section */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Additional Perks</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto mb-4"></div>
                        <p className="text-gray-300 text-lg">
                            And there's more! Here are some additional benefits you'll enjoy as part of our team.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                        {additionalPerks.map((perk, index) => (
                            <div 
                                key={index}
                                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300"
                            >
                                <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-white/90">{perk}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
                <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-3xl shadow-2xl overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="p-12">
                            <h2 className="text-4xl font-bold text-white mb-4">
                                Ready to Join Our Team?
                            </h2>
                            <p className="text-white/90 text-lg mb-6">
                                Explore our current job openings and start your journey with The Contrractum today.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a 
                                    href="#/careers/jobs" 
                                    className="inline-block px-8 py-4 bg-white text-red-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                                >
                                    View Job Openings
                                </a>
                                <a 
                                    href="#/careers/life" 
                                    className="inline-block px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/50 font-bold rounded-xl hover:bg-white/20 transition-all duration-300"
                                >
                                    Life at Company
                                </a>
                            </div>
                        </div>
                        <div className="hidden md:block relative h-full min-h-[400px]">
                            <img 
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800" 
                                alt="Team collaboration" 
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gray-50 py-16">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Have Questions About Our Benefits?
                    </h3>
                    <p className="text-gray-600 mb-8">
                        Our HR team is here to help. Reach out to learn more about our comprehensive benefits package.
                    </p>
                    <a 
                        href="#/contact/touch" 
                        className="inline-block px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                        Contact HR Team
                    </a>
                </div>
            </div>
        </div>
    );
}
