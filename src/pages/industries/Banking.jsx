import React from 'react';
import { Landmark, CreditCard, Shield, TrendingUp, Smartphone, PieChart, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Banking() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative bg-slate-900 text-white py-24 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1601597111158-2fceff292cd4?auto=format&fit=crop&q=80&w=1200"
                        alt="Modern Banking"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-linear-to-r from-slate-900 via-slate-900/90 to-transparent z-0"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
                            <Landmark size={16} />
                            <span>FinTech Solutions</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                            Secure, Seamless <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-teal-400">
                                Digital Banking
                            </span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            Transforming financial institutions with secure cloud banking, blockchain integration, and AI-driven fraud detection.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/contact/quote" className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-emerald-500/25 flex items-center gap-2">
                                Request Consultation
                                <ArrowRight size={20} />
                            </Link>
                            <Link to="/solutions/business" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg backdrop-blur-sm transition-all border border-white/10">
                                Explore Services
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Key Challenges Section */}
            <div className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">The Future of Finance is Digital</h2>
                        <p className="text-gray-600 text-lg">Banks and insurers must innovate rapidly to meet customer expectations while managing risk and compliance.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Shield,
                                title: "Cybersecurity",
                                description: "Protecting assets and customer data against increasingly sophisticated cyber threats and fraud."
                            },
                            {
                                icon: Smartphone,
                                title: "Neobank Experience",
                                description: "Competing with agile fintech startups by offering frictionless mobile-first banking experiences."
                            },
                            {
                                icon: PieChart,
                                title: "Regulatory Compliance",
                                description: "Navigating a complex web of global financial regulations (GDPR, PSD2, KYC/AML) with automated solutions."
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                                <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
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
                            <div className="absolute inset-0 bg-linear-to-tr from-emerald-600/20 to-teal-600/20 rounded-3xl transform -rotate-3"></div>
                            <img
                                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
                                alt="Digital Finance"
                                loading="lazy"
                                className="relative rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Intelligent Financial Systems</h2>
                            <p className="text-lg text-gray-600 mb-8">
                                We engineer secure, scalable platforms that power the next generation of financial services.
                            </p>

                            <div className="space-y-6">
                                {[
                                    "Open Banking API Development",
                                    "AI-Powered Risk Assessment & Scoring",
                                    "Blockchain-based Payments & Settlements",
                                    "Robotic Process Automation (RPA) for Operations",
                                    "Secure Mobile Wallet & Payment Apps"
                                ].map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <div className="mt-1">
                                            <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                                        </div>
                                        <span className="text-lg text-gray-800 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10">
                                <Link to="/contact/touch" className="text-emerald-600 font-bold hover:text-emerald-700 inline-flex items-center gap-2 group">
                                    Modernize your bank
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-slate-900 py-20 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold mb-2">300+</div>
                            <div className="text-emerald-400">Financial Clients</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">$50B+</div>
                            <div className="text-emerald-400">Assets Managed</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">Zero</div>
                            <div className="text-emerald-400">Security Breaches</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">24/7</div>
                            <div className="text-emerald-400">Fraud Monitoring</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <div className="bg-linear-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Innovate with Confidence</h2>
                            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
                                Partner with a team that understands the intersection of finance and technology.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/contact/quote" className="px-8 py-4 bg-white text-emerald-600 font-bold rounded-lg hover:bg-gray-50 transition-colors shadow-lg">
                                    Start a Project
                                </Link>
                                <Link to="/company/about-us" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                                    Why Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
