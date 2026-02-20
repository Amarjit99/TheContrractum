import React from 'react';
import { BookOpen, GraduationCap, Video, Library, Users, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Education() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative bg-indigo-900 text-white py-24 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1200"
                        alt="Education Campus"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-linear-to-r from-indigo-900 via-indigo-900/90 to-transparent z-0"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-6">
                            <BookOpen size={16} />
                            <span>EdTech Solutions</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                            Smart Learning <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-400">
                                Beyond Boundaries
                            </span>
                        </h1>
                        <p className="text-xl text-indigo-100 mb-8 leading-relaxed max-w-2xl">
                            Empowering institutions with next-gen learning management systems, virtual classrooms, and data-driven student success platforms.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/contact/quote" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-blue-500/25 flex items-center gap-2">
                                Request Demo
                                <ArrowRight size={20} />
                            </Link>
                            <Link to="/projects/case-studies" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg backdrop-blur-sm transition-all border border-white/10">
                                View Case Studies
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Key Challenges Section */}
            <div className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Reimagining the Education Landscape</h2>
                        <p className="text-gray-600 text-lg">We help schools and universities adapt to the digital age, ensuring continuity and quality in education.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Video,
                                title: "Hybrid Learning",
                                description: "Creating seamless experiences that bridge the gap between physical classrooms and remote learning environments."
                            },
                            {
                                icon: Library,
                                title: "Digital Libraries",
                                description: "Cloud-based repositories that provide instant access to millions of resources for students and researchers."
                            },
                            {
                                icon: Users,
                                title: "Student Engagement",
                                description: "Interactive platforms that foster collaboration, gamify learning, and improve retention rates."
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
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
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive EdTech Ecosystem</h2>
                            <p className="text-lg text-gray-600 mb-8">
                                From K-12 to Higher Education, we provide scalable platforms that streamline administration and enhance learning outcomes.
                            </p>

                            <div className="space-y-6">
                                {[
                                    "Learning Management Systems (LMS)",
                                    "Student Information Systems (SIS)",
                                    "AI-Powered Proctoring & Assessments",
                                    "Campus Management ERP",
                                    "Alumni Network Platforms"
                                ].map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <div className="mt-1">
                                            <CheckCircle2 className="w-6 h-6 text-blue-500" />
                                        </div>
                                        <span className="text-lg text-gray-800 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10">
                                <Link to="/solutions/digital" className="text-blue-600 font-bold hover:text-blue-700 inline-flex items-center gap-2 group">
                                    Discover our platforms
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-linear-to-tr from-blue-600/20 to-indigo-600/20 rounded-3xl transform rotate-3"></div>
                            <img
                                src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80&w=800"
                                alt="Digital Classroom"
                                loading="lazy"
                                className="relative rounded-3xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-indigo-900 py-20 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold mb-2">500+</div>
                            <div className="text-blue-200">Institutions</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">1M+</div>
                            <div className="text-blue-200">Students Supported</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">10M+</div>
                            <div className="text-blue-200">Exams Conducted</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">35%</div>
                            <div className="text-blue-200">Engagement Boost</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <div className="bg-linear-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Campus Today</h2>
                            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                                Join the digital education revolution. Let's build the future of learning together.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/contact/touch" className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-50 transition-colors shadow-lg">
                                    Contact Us
                                </Link>
                                <Link to="/company/about-us" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                                    See Results
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
