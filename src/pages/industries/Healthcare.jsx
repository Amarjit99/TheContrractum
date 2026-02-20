import React from 'react';
import { Heart, Activity, ShieldCheck, Microscope, Database, Lock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Healthcare() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative bg-teal-900 text-white py-24 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=1200"
                        alt="Medical Professionals"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-linear-to-r from-teal-900 via-teal-900/90 to-transparent z-0"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-sm font-medium mb-6">
                            <Heart size={16} />
                            <span>Healthcare Innovation</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                            Digital Health <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-400 to-emerald-400">
                                for a Better Tomorrow
                            </span>
                        </h1>
                        <p className="text-xl text-teal-100 mb-8 leading-relaxed max-w-2xl">
                            Revolutionizing patient care with cutting-edge telemedicine, data interoperability, and AI-driven diagnostic tools.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/contact/quote" className="px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-teal-500/25 flex items-center gap-2">
                                Talk to an Expert
                                <ArrowRight size={20} />
                            </Link>
                            <Link to="/solutions/digital" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg backdrop-blur-sm transition-all border border-white/10">
                                Explore Solutions
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Key Challenges Section */}
            <div className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Navigating the Future of Healthcare</h2>
                        <p className="text-gray-600 text-lg">We empower healthcare providers to overcome modern challenges and focus on what matters most: patient outcomes.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Activity,
                                title: "Interoperability",
                                description: "Seamlessly connecting disparate EHR systems to provide a unified view of patient health history."
                            },
                            {
                                icon: ShieldCheck,
                                title: "HIPAA Compliance",
                                description: "Rigorous security protocols to protect patient privacy and ensure compliance with global healthcare regulations."
                            },
                            {
                                icon: Microscope,
                                title: "AI Diagnostics",
                                description: "Leveraging machine learning to assist doctors in early detection and personalized treatment plans."
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                                <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 mb-6">
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
                            <div className="absolute inset-0 bg-linear-to-tr from-teal-600/20 to-emerald-600/20 rounded-3xl transform -rotate-3"></div>
                            <img
                                src="https://images.unsplash.com/photo-1576091160550-2187d80afea2?auto=format&fit=crop&q=80&w=800"
                                alt="Healthcare Technology"
                                loading="lazy"
                                className="relative rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Intelligent Healthcare Ecosystems</h2>
                            <p className="text-lg text-gray-600 mb-8">
                                We help hospitals, clinics, and health-tech startups build robust digital infrastructure that improves operational efficiency and patient care.
                            </p>

                            <div className="space-y-6">
                                {[
                                    "Telehealth & Remote Monitoring Apps",
                                    "Blockchain for Medical Records",
                                    "Hospital Management Systems (HMS)",
                                    "Predictive Analytics for Resource Allocation",
                                    "IoT-enabled Medical Devices Integration"
                                ].map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <div className="mt-1">
                                            <CheckCircle2 className="w-6 h-6 text-teal-500" />
                                        </div>
                                        <span className="text-lg text-gray-800 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10">
                                <Link to="/contact/touch" className="text-teal-600 font-bold hover:text-teal-700 inline-flex items-center gap-2 group">
                                    Schedule a demo
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-teal-900 py-20 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold mb-2">200+</div>
                            <div className="text-teal-200">Hospitals Partnered</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">5M+</div>
                            <div className="text-teal-200">Patient Records Secured</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">40%</div>
                            <div className="text-teal-200">Efficiency Increase</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">24/7</div>
                            <div className="text-teal-200">Support & Monitoring</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <div className="bg-linear-to-r from-teal-500 to-emerald-600 rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Innovate Your Healthcare Services</h2>
                            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
                                Partner with us to deliver better care through technology. Secure, scalable, and patient-centric solutions await.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/contact/quote" className="px-8 py-4 bg-white text-teal-600 font-bold rounded-lg hover:bg-gray-50 transition-colors shadow-lg">
                                    Get Started
                                </Link>
                                <Link to="/company/about-us" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                                    Why Choose Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
