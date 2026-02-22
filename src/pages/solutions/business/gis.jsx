export default function Gissolution() {
  const features = [
    {
      icon: "🗺️",
      title: "Geospatial Mapping",
      desc: "Interactive maps and spatial data visualization solutions",
    },
    {
      icon: "📡",
      title: "Spatial Data Management",
      desc: "Capture, organize, and maintain accurate geographic datasets",
    },
    {
      icon: "📊",
      title: "Location Intelligence",
      desc: "Transform location data into actionable business insights",
    },
    {
      icon: "🌍",
      title: "GIS Consulting Services",
      desc: "Expert guidance for GIS strategy, deployment, and optimization",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-green-300 font-semibold uppercase tracking-wider mb-2">
                Geographic Information Systems
              </p>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                GIS Solutions for Smarter Spatial Decisions
              </h1>

              <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-6">
                Leverage the power of location intelligence with our advanced GIS
                solutions. We help organizations visualize, analyze, and interpret
                spatial data to improve planning, optimize resources, and drive
                informed decision-making.
              </p>

              <div className="flex gap-3 flex-wrap">
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold px-5 py-3 rounded-lg text-sm">
                  Request Consultation
                </button>

                <button className="bg-white text-slate-900 font-bold px-5 py-3 rounded-lg hover:bg-gray-100 text-sm">
                  Explore Capabilities
                </button>
              </div>
            </div>

            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80"
              alt="GIS Solutions"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 text-slate-900">
            What We Offer
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">
                  {f.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img
              src="https://images.unsplash.com/photo-1526403224743-5c7f3f37a6a9?auto=format&fit=crop&w=800&q=80"
              alt="GIS Applications"
              className="w-full h-auto rounded-lg shadow-lg order-2 md:order-1"
            />

            <div className="order-1 md:order-2">
              <p className="text-green-500 font-bold text-xs sm:text-sm uppercase tracking-wide mb-2">
                GIS Applications
              </p>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Where GIS Creates Business Impact
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Our GIS solutions empower organizations to understand spatial
                relationships, monitor assets, and make data-driven decisions with
                greater clarity and precision.
              </p>

              <ul className="space-y-3">
                <li className="flex gap-3 text-sm sm:text-base text-slate-700">
                  <span className="text-green-500 font-bold">✓</span>
                  Infrastructure & utility mapping
                </li>

                <li className="flex gap-3 text-sm sm:text-base text-slate-700">
                  <span className="text-green-500 font-bold">✓</span>
                  Urban planning & smart city analytics
                </li>

                <li className="flex gap-3 text-sm sm:text-base text-slate-700">
                  <span className="text-green-500 font-bold">✓</span>
                  Logistics & route optimization
                </li>

                <li className="flex gap-3 text-sm sm:text-base text-slate-700">
                  <span className="text-green-500 font-bold">✓</span>
                  Environmental & risk assessment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Ready to Transform Your Spatial Data?
          </h2>

          <p className="text-green-100 text-sm sm:text-base mb-6 max-w-2xl mx-auto">
            Discover how our GIS solutions can help you visualize opportunities,
            optimize operations, and make smarter location-driven decisions.
          </p>

          <button className="bg-white text-green-700 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 hover:shadow-lg transition-all duration-300 text-sm">
            Request GIS Consultation
          </button>
        </div>
      </div>
    </div>
  );
}