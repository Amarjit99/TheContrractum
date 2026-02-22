import React from 'react';
import { Sprout, Sun, CloudRain, Tractor, BarChart2, Leaf, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Agriculture() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative bg-green-900 text-white py-24 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80&w=1200"
                        alt="Smart Agriculture"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-linear-to-r from-green-900 via-green-900/90 to-transparent z-0"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-sm font-medium mb-6">
                            <Sprout size={16} />
                            <span>AgriTech Innovations</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                            Cultivating the <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 to-lime-400">
                                Future of Farming
                            </span>
                        </h1>
                        <p className="text-xl text-green-100 mb-8 leading-relaxed max-w-2xl">
                            Empowering farmers with precision agriculture, IoT monitoring, and data-driven crop management systems.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/contact/quote" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-green-500/25 flex items-center gap-2">
                                Request Demo
                                <ArrowRight size={20} />
                            </Link>
                            <Link to="/solutions/sustainability" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg backdrop-blur-sm transition-all border border-white/10">
                                Farming Solutions
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Key Challenges Section */}
            <div className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Feeding a Growing World</h2>
                        <p className="text-gray-600 text-lg">Modern agriculture faces the dual challenge of increasing yields while preserving the environment and resources.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: CloudRain,
                                title: "Climate Resilience",
                                description: "Adapting to changing weather patterns with predictive analytics and smart irrigation."
                            },
                            {
                                icon: Tractor,
                                title: "Farm Automation",
                                description: "Reducing manual labor and operational costs through autonomous machinery and robotics."
                            },
                            {
                                icon: BarChart2,
                                title: "Yield Optimization",
                                description: "Maximizing crop production per acre using data-driven insights and soil health monitoring."
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                                <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                                    <item.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Solutions Grid */}
            <div className="py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Precision Agriculture Ecosystem</h2>
                            <p className="text-lg text-gray-600 mb-8">
                                From soil to shelf, our technology helps you manage every aspect of the agricultural lifecycle.
                            </p>

                            <div className="space-y-6">
                                {[
                                    "Farm Management Software (FMS)",
                                    "IoT Soil Sensors & Drone Monitoring",
                                    "Supply Chain & Traceability Platforms",
                                    "Livestock Health Monitoring",
                                    "Automated Irrigation Control"
                                ].map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <div className="mt-1">
                                            <CheckCircle2 className="w-6 h-6 text-green-500" />
                                        </div>
                                        <span className="text-lg text-black font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10">
                                <Link to="/solutions/sustainability" className="text-blue-600 font-bold hover:text-green-700 inline-flex items-center gap-2 group">
                                    Explore AgriTech
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-linear-to-tr from-green-600/20 to-lime-600/20 rounded-3xl transform rotate-3"></div>
                            <img
                                src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=800"
                                alt="Drone Farming"
                                loading="lazy"
                                className="relative rounded-3xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-green-900 py-20 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold mb-2">1M+</div>
                            <div className="text-green-200">Acres Managed</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">20%</div>
                            <div className="text-green-200">Water Saved</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">15%</div>
                            <div className="text-green-200">Yield Increase</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">50+</div>
                            <div className="text-green-200">Agri-Partners</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <div className="bg-linear-to-r from-green-600 to-lime-600 rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Grow With Technology</h2>
                            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                                Join the new era of sustainable, high-tech farming.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/contact/quote" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
                                    Contact Us
                                </Link>
                                <Link to="/company/about-us" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                                    About Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
