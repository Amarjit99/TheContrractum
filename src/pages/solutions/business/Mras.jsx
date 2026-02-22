import React from "react";
import { Link } from "react-router-dom";

export default function MRASservies() {
  const features = [
    { icon: "🛠️", title: "Managed Operations", desc: "24/7 operations & monitoring" },
    { icon: "🤖", title: "Automation", desc: "RPA and workflow automation for efficiency" },
    { icon: "📈", title: "Analytics", desc: "Business insights and reporting pipelines" },
    { icon: "🔧", title: "Integration & Support", desc: "End-to-end integration and SLA-backed support" },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-green-300 font-semibold uppercase tracking-wider mb-2">Managed Resilience</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">MRAS — Managed, Reliable & Automated Services</h1>
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-6">
                Reduce operational overhead and increase reliability with managed services, automation and expert support tailored to your environment.
              </p>
              <div className="flex gap-3 flex-wrap">
                <Link to="/solutions/digitalsolutions/csi-services" className="bg-green-500 hover:bg-green-600 text-white font-bold px-5 py-3 rounded-lg text-sm">Explore CS/IT Services</Link>
                <Link to="/solutions/gis-solution" className="bg-white text-slate-900 font-bold px-5 py-3 rounded-lg hover:bg-gray-100 text-sm">Explore GIS Solutions</Link>
              </div>
            </div>
            <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80" alt="MRAS" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 text-slate-900">Our MRAS Capabilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">{f.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-green-500 font-bold text-xs sm:text-sm uppercase tracking-wide mb-2">Benefits</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Why choose MRAS</h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                We deliver predictable operations, lower MTTR, and continuous improvement through automation and expert-managed services.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 text-sm sm:text-base text-slate-700"><span className="text-green-500 font-bold">✓</span> SLA-backed managed operations</li>
                <li className="flex gap-3 text-sm sm:text-base text-slate-700"><span className="text-green-500 font-bold">✓</span> Automation-driven efficiency</li>
                <li className="flex gap-3 text-sm sm:text-base text-slate-700"><span className="text-green-500 font-bold">✓</span> Fast incident response</li>
                <li className="flex gap-3 text-sm sm:text-base text-slate-700"><span className="text-green-500 font-bold">✓</span> Transparent reporting & analytics</li>
              </ul>
            </div>
            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80" alt="Managed Services" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Let us manage your operations</h2>
          <p className="text-green-100 text-sm sm:text-base mb-6 max-w-2xl mx-auto">Talk to our MRAS team to design a managed services plan that reduces risk and cost.</p>
          <div className="flex gap-3 justify-center">
            <Link to="/solutions/digitalsolutions/csi-services" className="bg-white text-green-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 text-sm">See CS/IT</Link>
            <Link to="/solutions/gis-solution" className="bg-white/20 border border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white/30 text-sm">See GIS</Link>
          </div>
        </div>
      </div>
    </div>
  );
}