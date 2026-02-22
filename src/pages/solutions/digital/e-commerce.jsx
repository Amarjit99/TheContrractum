export default function ECommerceSolutions() {
    const ecommercePlatforms = [
        { icon: "🛍️", title: "Multi-Channel Selling", desc: "Sell across multiple platforms and channels seamlessly" },
        { icon: "📱", title: "Mobile Commerce", desc: "Optimized shopping experience for mobile users" },
        { icon: "💳", title: "Payment Integration", desc: "Multiple payment gateways and processors" },
        { icon: "📦", title: "Inventory Management", desc: "Real-time stock tracking and management" },
        { icon: "🚚", title: "Logistics Integration", desc: "Automated shipping and delivery solutions" },
        { icon: "📊", title: "Analytics Dashboard", desc: "Advanced insights and sales analytics" },
        { icon: "🔒", title: "Security & Compliance", desc: "PCI DSS certified and secure transactions" },
        { icon: "👥", title: "Customer Management", desc: "CRM and loyalty program integration" },
    ];

    const platformComparison = [
        { name: "Shopify", features: ["Easy Setup", "Low Cost", "Scalable"], highlight: true },
        { name: "WooCommerce", features: ["Flexible", "Open Source", "Customizable"], highlight: false },
        { name: "Magento", features: ["Enterprise", "Powerful", "Complex"], highlight: false },
        { name: "BigCommerce", features: ["Professional", "Full-Featured", "Global"], highlight: true },
    ];

    const services = [
        { icon: "⚙️", title: "Platform Setup", desc: "Configure your e-commerce platform from scratch with best practices" },
        { icon: "🎨", title: "Store Design", desc: "Beautiful, responsive storefronts that convert visitors to customers" },
        { icon: "🔗", title: "Integration Services", desc: "Connect your store with inventory, accounting, and analytics tools" },
        { icon: "📈", title: "Performance Optimization", desc: "Speed optimization, SEO, and conversion rate improvements" },
        { icon: "🛒", title: "Cart Customization", desc: "Enhanced checkout flows to reduce abandonment" },
        { icon: "📱", title: "App Development", desc: "Native mobile apps for increased customer engagement" },
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                                E-Commerce Platform <span className="text-green-400">Solutions</span>
                            </h1>
                            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-6">
                                Build, scale, and optimize your online store with our comprehensive e-commerce solutions. From setup to growth, we've got you covered.
                            </p>
                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-6 sm:px-8 py-3 rounded-lg transition duration-300 text-sm sm:text-base transform hover:scale-105 hover:shadow-lg active:scale-95">
                                Start Your Store
                            </button>
                        </div>
                        <img src="https://images.unsplash.com/photo-1460925895917-adf4e565db0c?auto=format&fit=crop&w=600&q=80" alt="E-Commerce Solutions" className="w-full h-auto rounded-lg shadow-lg hover:shadow-2xl transition duration-300" />
                    </div>
                </div>
            </div>

            {/* E-Commerce Features Grid */}
            <div className="bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 text-slate-900">E-Commerce Platform Features</h2>
                    <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">Everything you need to run a successful online business</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {ecommercePlatforms.map((f, i) => (
                            <div key={i} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer border-l-4 border-green-400">
                                <div className="text-5xl mb-4 transform group-hover:scale-110 transition duration-300">{f.icon}</div>
                                <h3 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">{f.title}</h3>
                                <p className="text-slate-600 text-xs sm:text-sm">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Platform Comparison */}
            <div className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 text-slate-900">Choose Your Perfect Platform</h2>
                    <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">Compare our recommended e-commerce platforms</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {platformComparison.map((p, i) => (
                            <div key={i} className={`rounded-lg p-8 text-center transition duration-300 hover:shadow-2xl hover:scale-105 ${p.highlight ? "bg-gradient-to-br from-green-500 to-green-600 text-white ring-2 ring-green-300" : "bg-gray-100 text-slate-900 hover:bg-gray-200"}`}>
                                <h3 className="text-2xl font-bold mb-4">{p.name}</h3>
                                <ul className="space-y-2 text-sm">
                                    {p.features.map((f, j) => (
                                        <li key={j} className="flex justify-center items-center gap-2">
                                            <span className="text-lg">✓</span> {f}
                                        </li>
                                    ))}
                                </ul>
                                <button className={`mt-6 px-6 py-2 rounded-lg font-bold transition duration-300 transform hover:scale-110 active:scale-95 ${p.highlight ? "bg-white text-green-600 hover:bg-gray-100" : "bg-green-500 text-white hover:bg-green-700"}`}>
                                    Learn More
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 text-slate-900">Our E-Commerce Services</h2>
                    <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">Complete solutions from launch to growth</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((s, i) => (
                            <div key={i} className="bg-white p-8 rounded-lg shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 border-t-4 border-green-500 cursor-pointer group">
                                <div className="text-5xl mb-4 group-hover:scale-125 transform transition duration-300">{s.icon}</div>
                                <h3 className="font-bold text-slate-900 mb-3 text-lg">{s.title}</h3>
                                <p className="text-slate-600 text-smleading-relaxed">{s.desc}</p>
                                <button className="mt-4 text-green-600 font-semibold hover:text-green-700 flex items-center gap-2 group-hover:gap-4 transition duration-300">
                                    Learn More <span>→</span>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Conversion & Growth */}
            <div className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <img src="https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=600&q=80" alt="Conversion Optimization" className="w-full h-auto rounded-lg shadow-lg hover:shadow-2xl transition duration-300 order-2 md:order-1" />
                        <div className="order-1 md:order-2">
                            <p className="text-green-500 font-bold text-xs sm:text-sm uppercase tracking-wide mb-2">Maximize Revenue</p>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Conversion & Growth Strategies</h2>
                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                                Optimize every step of the customer journey to increase sales and customer lifetime value. Our proven strategies drive measurable results.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-sm sm:text-base text-slate-700 hover:text-slate-900 transition duration-200">
                                    <span className="text-green-500 font-bold">✓</span> A/B testing & optimization
                                </li>
                                <li className="flex gap-3 text-sm sm:text-base text-slate-700 hover:text-slate-900 transition duration-200">
                                    <span className="text-green-500 font-bold">✓</span> Email marketing automation
                                </li>
                                <li className="flex gap-3 text-sm sm:text-base text-slate-700 hover:text-slate-900 transition duration-200">
                                    <span className="text-green-500 font-bold">✓</span> SEO and content marketing
                                </li>
                                <li className="flex gap-3 text-sm sm:text-base text-slate-700 hover:text-slate-900 transition duration-200">
                                    <span className="text-green-500 font-bold">✓</span> Personalization engines
                                </li>
                                <li className="flex gap-3 text-sm sm:text-base text-slate-700 hover:text-slate-900 transition duration-200">
                                    <span className="text-green-500 font-bold">✓</span> Upsell & cross-sell tactics
                                </li>
                            </ul>
                            <button className="mt-6 bg-green-500 hover:bg-green-700 text-white font-bold px-6 sm:px-8 py-3 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Ready to Launch Your E-Commerce Store?</h2>
                    <p className="text-green-100 text-sm sm:text-base mb-8 max-w-2xl mx-auto">Get expert guidance and support to build and scale your online business. Our proven strategies help merchants like you achieve 5x growth.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="bg-white text-green-600 font-bold px-6 sm:px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300 transform hover:scale-110 hover:shadow-xl active:scale-95 text-sm sm:text-base cursor-pointer">
                            Request Demo
                        </button>
                        <button className="border-2 border-white text-white font-bold px-6 sm:px-8 py-3 rounded-lg hover:bg-white hover:text-green-600 transition duration-300 transform hover:scale-110 hover:shadow-xl active:scale-95 text-sm sm:text-base cursor-pointer">
                            View Pricing
                        </button>
                    </div>
                </div>
            </div>

            {/* Testimonial Section */}
            <div className="bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 text-slate-900">Success Stories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Fashion Boutique", growth: "250% increase in sales", testimonial: "The platform setup and optimization were seamless. Our conversion rate improved significantly." },
                            { name: "Electronics Store", growth: "5x faster shipping", testimonial: "Integration with our logistics was quick and reliable. Customer satisfaction has never been better." },
                            { name: "Health & Wellness", growth: "$2M annual revenue", testimonial: "Their growth strategies helped us scale from 100 to 500 orders monthly in just 6 months." }
                        ].map((story, i) => (
                            <div key={i} className="bg-white p-8 rounded-lg shadow-md hover:shadow-2xl hover:scale-105 transition duration-300 cursor-pointer border-l-4 border-green-500">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">
                                        {story.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">{story.name}</h3>
                                        <p className="text-green-600 text-sm font-semibold">{story.growth}</p>
                                    </div>
                                </div>
                                <p className="text-slate-600 text-sm italic">"{story.testimonial}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}