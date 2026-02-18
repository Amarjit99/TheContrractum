import { Target, Lightbulb, Compass, Users, Globe, Cpu, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutUs() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 text-white py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-5xl lg:text-6xl font-black mb-6 drop-shadow-lg">
                        About Us
                    </h1>
                    <p className="text-xl text-red-100 max-w-3xl mx-auto">
                        We are architects of the digital future, dedicated to solving complex
                        problems with elegant, scalable solutions.
                    </p>
                </div>
            </div>

            {/* Vision & Mission Cards */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-red-500">
                        <div className="bg-red-50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                            <Target className="text-red-600 w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                        <p className="text-gray-600 leading-relaxed">
                            To empower businesses and communities by democratizing access to
                            cutting-edge technology, ensuring sustainable growth and digital
                            resilience.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-purple-500">
                        <div className="bg-purple-50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                            <Lightbulb className="text-purple-600 w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                        <p className="text-gray-600 leading-relaxed">
                            A world where technology bridges gaps, fosters inclusivity, and
                            creates limitless opportunities for innovation across every sector.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-pink-500">
                        <div className="bg-pink-50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                            <Compass className="text-pink-600 w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Core</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Integrity, Excellence, and Agility are the pillars upon which we
                            build every project, partnership, and line of code.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-red-600 font-bold uppercase tracking-wider text-sm">
                            Who We Are
                        </span>
                        <h2 className="text-4xl font-black text-gray-900 mt-2 mb-6">
                            Driving Digital Transformation Since Day One
                        </h2>
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                            The Contrractum began as a collective of passionate engineers and
                            strategists who saw a disconnect between emerging technologies and
                            real-world application. We believed that true innovation wasn't
                            just about the code, but about the impact it creates.
                        </p>
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                            Today, we stand as a beacon of technological excellence, partnering
                            with startups, enterprises, and governments to build infrastructure
                            that stands the test of time.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                        <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
                            alt="Team brainstorming"
                            className="relative rounded-2xl shadow-2xl w-full object-cover z-10"
                        />
                    </div>
                </div>
            </div>

            {/* Impact Statistics */}
            <div className="bg-gray-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl lg:text-5xl font-black text-red-500 mb-2">10+</div>
                            <p className="text-gray-400 font-medium">Years of Innovation</p>
                        </div>
                        <div>
                            <div className="text-4xl lg:text-5xl font-black text-pink-500 mb-2">50+</div>
                            <p className="text-gray-400 font-medium">Global Projects</p>
                        </div>
                        <div>
                            <div className="text-4xl lg:text-5xl font-black text-purple-500 mb-2">200+</div>
                            <p className="text-gray-400 font-medium">Team Members</p>
                        </div>
                        <div>
                            <div className="text-4xl lg:text-5xl font-black text-indigo-500 mb-2">98%</div>
                            <p className="text-gray-400 font-medium">Client Retention</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Global Presence */}
            <div className="bg-white py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-purple-600 font-bold uppercase tracking-wider text-sm">
                            Global Scale
                        </span>
                        <h2 className="text-4xl font-black text-gray-900 mt-2">
                            Building a Connected Future
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* New York */}
                        <div className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 group">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors">
                                <Globe className="text-blue-600 w-8 h-8 group-hover:text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">New York</h3>
                            <p className="text-gray-600">Global Headquarters</p>
                        </div>
                        {/* London */}
                        <div className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 group">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 transition-colors">
                                <Globe className="text-red-600 w-8 h-8 group-hover:text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">London</h3>
                            <p className="text-gray-600">EMEA Hub</p>
                        </div>
                        {/* Singapore */}
                        <div className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 group">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-600 transition-colors">
                                <Globe className="text-purple-600 w-8 h-8 group-hover:text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Singapore</h3>
                            <p className="text-gray-600">APAC Innovation Center</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Leadership Teaser */}
            <div className="bg-gray-50 py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div>
                            <span className="text-pink-600 font-bold uppercase tracking-wider text-sm">
                                Visionaries
                            </span>
                            <h2 className="text-4xl font-black text-gray-900 mt-2">
                                Meet the Minds
                            </h2>
                        </div>
                        <Link to="/company/leadership" className="hidden md:flex items-center gap-2 text-pink-600 font-bold hover:text-pink-700 transition-colors">
                            View Full Leadership Team <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* CEO */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:translate-y-1 transition-transform">
                            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" alt="CEO" className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900">Amit Verma</h3>
                                <p className="text-gray-500 text-sm mb-4">Founder & CEO</p>
                            </div>
                        </div>
                        {/* CTO */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:translate-y-1 transition-transform">
                            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" alt="CTO" className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900">Sarah Jenkins</h3>
                                <p className="text-gray-500 text-sm mb-4">Chief Technology Officer</p>
                            </div>
                        </div>
                        {/* COO */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:translate-y-1 transition-transform">
                            <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" alt="COO" className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900">David Chen</h3>
                                <p className="text-gray-500 text-sm mb-4">Head of Operations</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 text-center md:hidden">
                        <Link to="/company/leadership" className="inline-flex items-center gap-2 text-pink-600 font-bold hover:text-pink-700 transition-colors">
                            View Full Leadership Team <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Trusted Partners */}
            <div className="bg-white py-20 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <p className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-10">Trusted Technology Partners</p>
                    <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* AWS Placeholder */}
                        <div className="flex items-center gap-2 text-2xl font-bold text-gray-800">
                            <Cpu size={32} /> AWS
                        </div>
                        {/* Google Cloud Placeholder */}
                        <div className="flex items-center gap-2 text-2xl font-bold text-gray-800">
                            <Cpu size={32} /> Google Cloud
                        </div>
                        {/* Microsoft Placeholder */}
                        <div className="flex items-center gap-2 text-2xl font-bold text-gray-800">
                            <Cpu size={32} /> Microsoft
                        </div>
                        {/* Oracle Placeholder */}
                        <div className="flex items-center gap-2 text-2xl font-bold text-gray-800">
                            <Cpu size={32} /> Oracle
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gray-900 text-white py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl lg:text-4xl font-black mb-6">Want to know more about us?</h2>
                    <p className="text-gray-400 text-lg mb-8">
                        We love discussing new ideas and challenges. Let's connect and see how we can build the future together.
                    </p>
                    <Link to="/contact/touch">
                        <button className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg cursor-pointer">
                            Get in Touch
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
