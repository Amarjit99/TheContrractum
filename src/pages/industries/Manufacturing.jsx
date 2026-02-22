import React from 'react';
import { Factory, Cog, Cpu, Truck, BarChart3, Settings, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Manufacturing() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative bg-zinc-900 text-white py-24 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=1200"
                        alt="Advanced Manufacturing"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-linear-to-r from-zinc-900 via-zinc-900/90 to-transparent z-0"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6">
                            <Factory size={16} />
                            <span>Industry 4.0</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                            Smart Manufacturing <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-amber-400">
                                & Automation
                            </span>
                        </h1>
                        <p className="text-xl text-zinc-300 mb-8 leading-relaxed max-w-2xl">
                            Driving the next industrial revolution with IoT connectivity, predictive maintenance, and digital twin technology.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/contact/quote" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-orange-500/25 flex items-center gap-2">
                                Optimize Production
                                <ArrowRight size={20} />
                            </Link>
                            <Link to="/solutions/automation" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg backdrop-blur-sm transition-all border border-white/10">
                                See Solutions
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Key Challenges Section */}
            <div className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">The Factory of the Future</h2>
                        <p className="text-gray-600 text-lg">Manufacturers need to increase efficiency, reduce downtime, and adapt to changing market demands instantly.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Cog,
                                title: "Operational Efficiency",
                                description: "Streamlining production workflows to maximize output and minimize waste."
                            },
                            {
                                icon: Cpu,
                                title: "IoT Integration",
                                description: "Connecting machines, sensors, and systems to gain real-time visibility into the shop floor."
                            },
                            {
                                icon: Truck,
                                title: "Supply Chain Resilience",
                                description: "Building agile supply chains that can withstand disruptions and ensure timely delivery."
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                                <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
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
                        <div className="order-2 lg:order-1 relative">
                            <div className="absolute inset-0 bg-linear-to-tr from-blue-600/20 to-blue-400/20 rounded-3xl transform -rotate-3"></div>
                            <img
                                src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=800"
                                alt="Robotic Arm"
                                loading="lazy"
                                className="relative rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Industrial Solutions</h2>
                            <p className="text-lg text-gray-600 mb-8">
                                We help manufacturers unlock new value through digital transformation and intelligent automation.
                            </p>

                            <div className="space-y-6">
                                {[
                                    "Manufacturing Execution Systems (MES)",
                                    "Predictive Maintenance & Asset Management",
                                    "Digital Twin Simulations",
                                    "Warehouse Management Systems (WMS)",
                                    "Automated Quality Control"
                                ].map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <div className="mt-1">
                                            <CheckCircle2 className="w-6 h-6 text-orange-500" />
                                        </div>
                                        <span className="text-lg text-black font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10">
                                <Link to="/contact/touch" className="text-blue-600 font-bold hover:text-orange-700 inline-flex items-center gap-2 group">
                                    Modernize your plant
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-zinc-900 py-20 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold mb-2">200+</div>
                            <div className="text-orange-400">Factories Connected</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">15%</div>
                            <div className="text-orange-400">Efficiency Gain</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">30%</div>
                            <div className="text-orange-400">Maintenance Costs Cut</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">99.9%</div>
                            <div className="text-orange-400">Uptime Reliability</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <div className="bg-linear-to-r from-blue-600 to-blue-500 rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Industry 4.0?</h2>
                            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                                Leap forward with manufacturing solutions designed for the digital age.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/contact/quote" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
                                    Get Started
                                </Link>
                                <Link to="/company/about-us" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
