import React from 'react';
import { ShoppingBag, TrendingUp, Users, RefreshCw, Truck, Smartphone, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Retail() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative bg-purple-900 text-white py-24 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=1200"
                        alt="Retail Store"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-linear-to-r from-purple-900 via-purple-900/90 to-transparent z-0"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-6">
                            <ShoppingBag size={16} />
                            <span>Retail & Ecommerce</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                            Redefining the <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">
                                Shopper Experience
                            </span>
                        </h1>
                        <p className="text-xl text-purple-100 mb-8 leading-relaxed max-w-2xl">
                            Unifying physical and digital commerce with omnichannel strategies, AI-driven personalization, and smart supply chain solutions.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/contact/quote" className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-purple-500/25 flex items-center gap-2">
                                Request Strategy
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
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Capturing the Modern Consumer</h2>
                        <p className="text-gray-600 text-lg">In a hyper-competitive market, we help retailers stay agile, relevant, and customer-obsessed.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: RefreshCw,
                                title: "Omnichannel Unity",
                                description: "Eliminating silos between online and offline channels to create a fluid, consistent brand journey."
                            },
                            {
                                icon: TrendingUp,
                                title: "Data-Driven Insights",
                                description: "Leveraging big data to predict trends, optimize inventory, and personalize marketing efforts."
                            },
                            {
                                icon: Users,
                                title: "Customer Loyalty",
                                description: "Building lasting relationships through rewards programs, superior service, and emotional connection."
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                                <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-6">
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
                            <div className="absolute inset-0 bg-linear-to-tr from-purple-600/20 to-pink-600/20 rounded-3xl transform -rotate-3"></div>
                            <img
                                src="https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800"
                                alt="Modern Retail"
                                loading="lazy"
                                className="relative rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Future-Ready Retail Architecture</h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Whether you're a boutique brand or a global chain, we build the technology stack that powers your growth.
                            </p>

                            <div className="space-y-6">
                                {[
                                    "E-commerce Platform Development",
                                    "Point of Sale (POS) Integration",
                                    "Inventory & Supply Chain Management",
                                    "Customer Relationship Management (CRM)",
                                    "AR/VR Virtual Try-On Experiences"
                                ].map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <div className="mt-1">
                                            <CheckCircle2 className="w-6 h-6 text-purple-500" />
                                        </div>
                                        <span className="text-lg text-gray-800 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10">
                                <Link to="/contact/touch" className="text-purple-600 font-bold hover:text-purple-700 inline-flex items-center gap-2 group">
                                    Upgrade your store
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-purple-900 py-20 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold mb-2">100+</div>
                            <div className="text-purple-200">Brands Transformed</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">$2B+</div>
                            <div className="text-purple-200">Revenue Processed</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">25%</div>
                            <div className="text-purple-200">Conversion Uplift</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">50%</div>
                            <div className="text-purple-200">Faster Checkout</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <div className="bg-linear-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Scale Your Retail Business</h2>
                            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                                Don't just sell—create experiences. Let's build a retail ecosystem that customers love.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/contact/quote" className="px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-50 transition-colors shadow-lg">
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
