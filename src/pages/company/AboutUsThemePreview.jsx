import { Target, Lightbulb, Compass, Users, Globe, Cpu, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutUsThemePreview() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-slate-900 text-white py-24">
                {/* Background Glow - Softer, Calmer Colors (Indigo/Teal) */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] -z-10"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[120px] -z-10"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700/50 backdrop-blur-sm px-4 py-1.5 rounded-full mb-8">
                        <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
                        <span className="text-slate-300 text-sm font-medium tracking-wide uppercase">Innovation First</span>
                    </div>
                    <h1 className="text-5xl lg:text-6xl font-black mb-6 tracking-tight text-white">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">Us</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
                        Architecting the digital future with precision, integrity, and sustainable innovation.
                    </p>
                </div>
            </div>

            {/* Vision & Mission Cards */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Mission - Indigo */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:border-indigo-100 transition-all duration-300 group hover:-translate-y-1">
                        <div className="bg-indigo-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-100 transition-colors">
                            <Target className="text-indigo-600 w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Mission</h3>
                        <p className="text-slate-600 leading-relaxed">
                            To empower enterprises with robust, scalable technology that drives efficiency and sustainable growth.
                        </p>
                    </div>
                    {/* Vision - Teal */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:border-teal-100 transition-all duration-300 group hover:-translate-y-1">
                        <div className="bg-teal-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-100 transition-colors">
                            <Lightbulb className="text-teal-600 w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Vision</h3>
                        <p className="text-slate-600 leading-relaxed">
                            A connected world where technology serves as a bridge to opportunity, fostering inclusivity and success.
                        </p>
                    </div>
                    {/* Core - Slate/Blue */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:border-blue-100 transition-all duration-300 group hover:-translate-y-1">
                        <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                            <Compass className="text-blue-600 w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Values</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Integrity, Excellence, and Reliability are the cornerstones of our partnership with every client.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 bg-slate-50">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-indigo-600 font-bold uppercase tracking-wider text-sm">
                            Who We Are
                        </span>
                        <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-6 tracking-tight">
                            Excellence in Digital Transformation
                        </h2>
                        <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                            The Contrractum was founded on the belief that technology should be simple, effective, and transformative. We bridge the gap between complex digital challenges and user-centric solutions.
                        </p>
                        <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                            Today, we are a trusted partner for leaders across industries, delivering infrastructure that is secure, scalable, and future-ready.
                        </p>
                    </div>
                    <div className="relative group">
                        <div className="absolute -inset-2 bg-gradient-to-r from-indigo-200 to-teal-200 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition duration-500"></div>
                        <img
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
                            alt="Modern Office"
                            className="relative rounded-2xl shadow-xl w-full object-cover z-10"
                        />
                    </div>
                </div>
            </div>

            {/* Impact Statistics - Clean & Professional */}
            <div className="py-20 bg-white border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        <div className="p-6">
                            <div className="text-4xl lg:text-5xl font-bold text-slate-800 mb-2">10+</div>
                            <p className="text-slate-500 font-medium">Years of Innovation</p>
                        </div>
                        <div className="p-6">
                            <div className="text-4xl lg:text-5xl font-bold text-slate-800 mb-2">50+</div>
                            <p className="text-slate-500 font-medium">Global Projects</p>
                        </div>
                        <div className="p-6">
                            <div className="text-4xl lg:text-5xl font-bold text-slate-800 mb-2">200+</div>
                            <p className="text-slate-500 font-medium">Team Members</p>
                        </div>
                        <div className="p-6">
                            <div className="text-4xl lg:text-5xl font-bold text-slate-800 mb-2">98%</div>
                            <p className="text-slate-500 font-medium">Client Retention</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Global Presence */}
            <div className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-teal-600 font-bold uppercase tracking-wider text-sm">
                            Global Reach
                        </span>
                        <h2 className="text-3xl font-bold text-slate-900 mt-2 tracking-tight">
                            Serving Clients Worldwide
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* New York */}
                        <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-slate-100 group">
                            <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-indigo-50 transition-colors">
                                <Globe className="text-slate-500 w-7 h-7 group-hover:text-indigo-600" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 mb-2">New York</h3>
                            <p className="text-slate-500 text-sm">Global Headquarters</p>
                        </div>
                        {/* London */}
                        <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-slate-100 group">
                            <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-50 transition-colors">
                                <Globe className="text-slate-500 w-7 h-7 group-hover:text-teal-600" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 mb-2">London</h3>
                            <p className="text-slate-500 text-sm">EMEA Hub</p>
                        </div>
                        {/* Singapore */}
                        <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-slate-100 group">
                            <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-50 transition-colors">
                                <Globe className="text-slate-500 w-7 h-7 group-hover:text-blue-600" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 mb-2">Singapore</h3>
                            <p className="text-slate-500 text-sm">APAC Innovation Center</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Leadership Teaser */}
            <div className="bg-white py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div>
                            <span className="text-indigo-600 font-bold uppercase tracking-wider text-sm">
                                Leadership
                            </span>
                            <h2 className="text-3xl font-bold text-slate-900 mt-2 tracking-tight">
                                Guided by Experience
                            </h2>
                        </div>
                        <Link to="#" className="hidden md:flex items-center gap-2 text-slate-600 font-medium hover:text-indigo-600 transition-colors group">
                            Meet the Team <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* CEO */}
                        <div className="bg-slate-50 rounded-xl overflow-hidden group">
                            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" alt="CEO" className="w-full h-64 object-cover filter grayscale-50 group-hover:grayscale-0 transition-all duration-500" />
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-slate-800">Amit Verma</h3>
                                <p className="text-indigo-600 text-xs font-semibold uppercase tracking-wider mb-2">Founder & CEO</p>
                            </div>
                        </div>
                        {/* CTO */}
                        <div className="bg-slate-50 rounded-xl overflow-hidden group">
                            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" alt="CTO" className="w-full h-64 object-cover filter grayscale-50 group-hover:grayscale-0 transition-all duration-500" />
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-slate-800">Sarah Jenkins</h3>
                                <p className="text-teal-600 text-xs font-semibold uppercase tracking-wider mb-2">Chief Technology Officer</p>
                            </div>
                        </div>
                        {/* COO */}
                        <div className="bg-slate-50 rounded-xl overflow-hidden group">
                            <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" alt="COO" className="w-full h-64 object-cover filter grayscale-50 group-hover:grayscale-0 transition-all duration-500" />
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-slate-800">David Chen</h3>
                                <p className="text-blue-600 text-xs font-semibold uppercase tracking-wider mb-2">Head of Operations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Trusted Partners - Subtle */}
            <div className="py-20 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-10">Trusted Partners</p>
                    <div className="flex flex-wrap justify-center gap-16 opacity-40 hover:opacity-100 transition-all duration-500 text-slate-600">
                        {/* Icons would go here */}
                        <div className="flex items-center gap-2 text-xl font-bold hover:text-indigo-600 transition-colors"><Cpu size={24} /> AWS</div>
                        <div className="flex items-center gap-2 text-xl font-bold hover:text-teal-600 transition-colors"><Cpu size={24} /> Google Cloud</div>
                        <div className="flex items-center gap-2 text-xl font-bold hover:text-blue-600 transition-colors"><Cpu size={24} /> Microsoft</div>
                        <div className="flex items-center gap-2 text-xl font-bold hover:text-red-500 transition-colors"><Cpu size={24} /> Oracle</div>
                    </div>
                </div>
            </div>

            {/* CTA Section - Professional & Clear */}
            <div className="relative py-24 overflow-hidden bg-slate-900">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-slate-900"></div>
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6 tracking-tight text-white">Partner with Excellence</h2>
                    <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto font-light">
                        Transform your operational capabilities with our enterprise-grade digital solutions.
                    </p>
                    <Link to="/contact/touch">
                        <button className="bg-white text-indigo-900 hover:bg-indigo-50 font-bold py-4 px-10 rounded-full transition-all transform hover:-translate-y-1 shadow-lg cursor-pointer">
                            Start the Conversation
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
