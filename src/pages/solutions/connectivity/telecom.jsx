export default function TelecomSolutions() {
  const telecomServices = [
    { icon: "📱", title: "Mobile Services", desc: "Advanced mobile networks with 4G/5G coverage" },
    { icon: "☎️", title: "Voice Solutions", desc: "Crystal-clear voice communication systems" },
    { icon: "📊", title: "Data Services", desc: "High-speed data connectivity and management" },
    { icon: "🔗", title: "Leased Lines", desc: "Dedicated private network connections" },
    { icon: "🌐", title: "Internet Services", desc: "Fiber optic broadband and wireless internet" },
    { icon: "📡", title: "Network Infrastructure", desc: "Towers, switches, and routing systems" },
    { icon: "🤝", title: "Business Communications", desc: "Unified communications and collaboration" },
    { icon: "🔐", title: "Security Services", desc: "Advanced telecom security and protection" },
  ];

  const networkTiers = [
    { tier: "4G LTE", speed: "100 Mbps", coverage: "99.5%", highlight: false },
    { tier: "5G Standard", speed: "1 Gbps", coverage: "95%", highlight: true },
    { tier: "5G Premium", speed: "10 Gbps", coverage: "98%", highlight: false },
    { tier: "Enterprise 5G", speed: "50 Gbps", coverage: "99.9%", highlight: false },
  ];

  const infrastructure = [
    { icon: "🗼", title: "Base Stations", count: "50K+" },
    { icon: "🔧", title: "Equipment", count: "100K+" },
    { icon: "🛰️", title: "Satellites", count: "200+" },
    { icon: "🌍", title: "Global Coverage", count: "195 Countries" },
    { icon: "👨‍💼", title: "Engineers", count: "5000+" },
    { icon: "🎓", title: "Training Centers", count: "150+" },
  ];

  const features = [
    { icon: "⚡", title: "Ultra-Fast Speed", benefit: "Up to 50 Gbps connectivity" },
    { icon: "🔒", title: "Security First", benefit: "Military-grade encryption" },
    { icon: "🌐", title: "Global Network", benefit: "Coverage in 195+ countries" },
    { icon: "📈", title: "High Reliability", benefit: "99.99% uptime SLA" },
    { icon: "💰", title: "Cost-Effective", benefit: "Competitive pricing & flexible plans" },
    { icon: "🚀", title: "Future-Ready", benefit: "6G research & development" },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-900 via-orange-900 to-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Telecommunication <span className="text-orange-300">Solutions</span>
              </h1>
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-6">
                Next-generation telecom services delivering lightning-fast connectivity, crystal-clear communication, and comprehensive business solutions worldwide.
              </p>
              <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold px-6 sm:px-8 py-3 rounded-lg transition duration-300 text-sm sm:text-base transform hover:scale-105 hover:shadow-lg active:scale-95">
                Discover Services
              </button>
            </div>
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80" alt="Telecom Solutions" className="w-full h-auto rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105" />
          </div>
        </div>
      </div>

      {/* Telecom Services Grid */}
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 text-slate-900">Core Telecom Services</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">Complete telecommunications solutions for individual and enterprise needs</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {telecomServices.map((s, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 hover:-translate-y-2 transition duration-300 cursor-pointer border-b-4 border-orange-500 group">
                <div className="text-5xl mb-4 transform group-hover:scale-125 group-hover:-rotate-12 transition duration-300">{s.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2 text-sm sm:text-base group-hover:text-orange-600 transition duration-200">{s.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm">{s.desc}</p>
                <div className="mt-4 h-1 w-0 bg-gradient-to-r from-orange-500 to-red-600 group-hover:w-full transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Network Speed Tiers */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 text-slate-900">Network Speed Tiers</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">Choose the network tier that matches your connectivity needs</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {networkTiers.map((net, i) => (
              <div key={i} className={`rounded-lg p-8 text-center transition duration-300 hover:shadow-2xl hover:-translate-y-3 relative overflow-hidden group ${net.highlight ? "bg-gradient-to-br from-orange-600 to-red-600 text-white ring-2 ring-orange-300" : "bg-gray-100 text-slate-900 hover:bg-gray-150"}`}>
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition duration-300 ${net.highlight ? "bg-white" : "bg-orange-600"}`}></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-3">{net.tier}</h3>
                  <p className="text-lg font-bold mb-2">Speed: {net.speed}</p>
                  <p className={`text-sm mb-4 ${net.highlight ? "text-orange-100" : "text-slate-600"}`}>Coverage: {net.coverage}</p>
                  <button className={`px-6 py-2 rounded-lg font-bold transition duration-300 transform hover:scale-110 active:scale-95 ${net.highlight ? "bg-white text-orange-600 hover:bg-gray-50" : "bg-orange-500 text-white hover:bg-orange-700"}`}>
                    Subscribe Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Infrastructure Stats */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 text-slate-900">Our Global Infrastructure</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">Industry-leading capabilities powering billions of connections</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {infrastructure.map((infra, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition duration-300 border-l-4 border-orange-500 group cursor-pointer">
                <div className="text-5xl mb-4 group-hover:scale-125 group-hover:rotate-12 transform transition duration-300">{infra.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2 text-lg group-hover:text-orange-600 transition duration-200">{infra.title}</h3>
                <p className="text-2xl font-bold text-orange-600">{infra.count}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 text-slate-900">Why Choose Our Telecom Services</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">Industry-leading features and benefits for your communication needs</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, i) => (
              <div key={i} className="bg-gradient-to-br from-white to-orange-50 p-8 rounded-lg shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 border-l-4 border-orange-500 cursor-pointer group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-4 group-hover:scale-125 group-hover:rotate-12 transform transition duration-300">{feat.icon}</div>
                  <h3 className="font-bold text-slate-900 mb-3 text-lg group-hover:text-orange-600 transition duration-200">{feat.title}</h3>
                  <p className="text-slate-600 text-sm">{feat.benefit}</p>
                  <div className="mt-4 flex items-center text-orange-600 font-semibold group-hover:gap-3 gap-2 transition duration-300">
                    <span>Learn More</span> <span className="group-hover:translate-x-2 transition duration-300">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5G & Advanced Technology */}
      <div className="bg-gradient-to-r from-red-900 to-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <p className="text-orange-300 font-bold text-xs sm:text-sm uppercase tracking-wide mb-2">Next Generation Technology</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">5G & Beyond</h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                Experience revolutionary connectivity with our advanced 5G infrastructure, offering unprecedented speed, ultra-low latency, and massive device capacity for the connected future.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 text-sm sm:text-base text-gray-200 hover:text-white transition duration-200">
                  <span className="text-orange-300 font-bold">✓</span> Up to 10 Gbps download speeds
                </li>
                <li className="flex gap-3 text-sm sm:text-base text-gray-200 hover:text-white transition duration-200">
                  <span className="text-orange-300 font-bold">✓</span> Sub-1 millisecond latency
                </li>
                <li className="flex gap-3 text-sm sm:text-base text-gray-200 hover:text-white transition duration-200">
                  <span className="text-orange-300 font-bold">✓</span> Support for 1 million+ devices/km²
                </li>
                <li className="flex gap-3 text-sm sm:text-base text-gray-200 hover:text-white transition duration-200">
                  <span className="text-orange-300 font-bold">✓</span> Enhanced mobile broadband (eMBB)
                </li>
                <li className="flex gap-3 text-sm sm:text-base text-gray-200 hover:text-white transition duration-200">
                  <span className="text-orange-300 font-bold">✓</span> Mission-critical communications
                </li>
              </ul>
              <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 sm:px-8 py-3 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95">
                Explore 5G Plans
              </button>
            </div>
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80" alt="5G Technology" className="w-full h-auto rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform group-hover:scale-105" />
          </div>
        </div>
      </div>

      {/* Customer Success */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 text-slate-900">Customer Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { customer: "Fortune 500 Corp", metric: "99.99% uptime", story: "Transformed business operations with enterprise 5G connectivity and achieved zero downtime." },
              { customer: "Startup Tech", metric: "10x faster growth", story: "Scaled from 100 to 10,000 connected devices with our global IoT solutions." },
              { customer: "Media Company", metric: "4K streaming", story: "Delivered HD/4K content to 50M+ users with our optimized mobile network." }
            ].map((client, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition duration-300 cursor-pointer border-l-4 border-orange-500 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-red-600 text-white flex items-center justify-center font-bold text-xl group-hover:scale-125 transition duration-300">
                    {client.customer.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 group-hover:text-orange-600 transition duration-200">{client.customer}</h3>
                    <p className="text-orange-600 text-sm font-semibold">{client.metric}</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm italic">"{client.story}"</p>
                <div className="mt-4 flex items-center text-orange-600 font-semibold text-sm group-hover:gap-3 gap-2 transition duration-300">
                  <span>Read Case Study</span> <span className="group-hover:translate-x-2 transition duration-300">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4">Ready for Next-Gen Connectivity?</h2>
            <p className="text-orange-100 text-sm sm:text-base mb-8 max-w-2xl mx-auto leading-relaxed">
              Join millions of satisfied customers experiencing the future of telecommunications. Get connected with our reliable, fast, and secure network solutions today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-orange-600 font-bold px-8 sm:px-10 py-3 rounded-lg hover:bg-gray-50 transition duration-300 transform hover:scale-110 hover:shadow-xl active:scale-95 text-sm sm:text-base cursor-pointer">
                Get Started Today
              </button>
              <button className="border-3 border-white text-white font-bold px-8 sm:px-10 py-3 rounded-lg hover:bg-white hover:text-orange-600 transition duration-300 transform hover:scale-110 hover:shadow-xl active:scale-95 text-sm sm:text-base cursor-pointer">
                View Plans & Pricing
              </button>
            </div>
            <p className="text-orange-200 text-sm mt-6">Free activation • 24/7 customer support • 30-day money-back guarantee</p>
          </div>
        </div>
      </div>
    </div>
  );
}