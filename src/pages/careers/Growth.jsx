import { TrendingUp, BookOpen, Award, Target, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Growth() {
    const learningPaths = [
        {
            title: "Technical Mastery",
            icon: <Zap className="w-8 h-8 text-yellow-500" />,
            desc: "Deep dive into Cloud, AI, and Blockchain with sponsored certifications (AWS, Google, etc.) and workshops."
        },
        {
            title: "Leadership Track",
            icon: <Users className="w-8 h-8 text-blue-500" />,
            desc: "For those who want to lead teams. Includes management training, EQ workshops, and mentorship."
        },
        {
            title: "Product Innovation",
            icon: <Target className="w-8 h-8 text-primary" />,
            desc: "Learn the art of product management, user research, and strategic thinking."
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-primary-light text-white py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full mb-6">
                        <TrendingUp size={18} className="text-green-300" />
                        <span className="font-semibold text-sm uppercase tracking-wide">
                            Learning & Development
                        </span>
                    </div>
                    <h1 className="text-5xl lg:text-6xl font-black mb-6 drop-shadow-lg">
                        Grow With Us
                    </h1>
                    <p className="text-xl text-green-100 max-w-2xl mx-auto">
                        We invest in your future because your growth is our growth. Access world-class learning resources and mentorship.
                    </p>
                </div>
            </div>

            {/* Stats/Budget Section */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-16 relative z-10 mb-20">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-3 border-b-4 border-emerald-500">
                    <div className="p-8 text-center border-b md:border-b-0 md:border-r border-gray-100">
                        <div className="text-4xl font-black text-gray-900 mb-2">$2,000</div>
                        <div className="text-gray-500 font-medium">Annual Learning Budget</div>
                    </div>
                    <div className="p-8 text-center border-b md:border-b-0 md:border-r border-gray-100">
                        <div className="text-4xl font-black text-gray-900 mb-2">40+</div>
                        <div className="text-gray-500 font-medium">Hours of Paid Learning</div>
                    </div>
                    <div className="p-8 text-center">
                        <div className="text-4xl font-black text-gray-900 mb-2">1-on-1</div>
                        <div className="text-gray-500 font-medium">Mentorship Program</div>
                    </div>
                </div>
            </div>

            {/* Learning Paths */}
            <div className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-black text-gray-900 mb-4">Choose Your Path</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Whether you want to be a rigorous individual contributor or an inspiring leader, we have a path for you.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {learningPaths.map((path, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                                <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-emerald-50 transition-colors">
                                    {path.icon}
                                </div>
                                <h3 className="font-bold text-xl text-gray-900 mb-3">{path.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{path.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mentorship Section */}
            <div className="py-24 bg-primary text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <img
                                src="https://images.unsplash.com/photo-1515169067759-0f01dac55866?auto=format&fit=crop&q=80&w=800"
                                alt="Mentorship session"
                                className="rounded-2xl shadow-2xl skew-y-3 transform hover:skew-y-0 transition-transform duration-500"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 text-emerald-400 mb-4 font-bold uppercase tracking-wider text-sm">
                                <BookOpen size={18} />
                                <span>Mentorship</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black mb-6">
                                Learn from the Best
                            </h2>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                Our mentorship program pairs you with senior leaders and domain experts. Get career advice, code reviews, and life lessons from people who have been there and done that.
                            </p>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-4 bg-primary p-4 rounded-xl">
                                    <div className="bg-emerald-500/20 p-2 rounded-lg text-emerald-400"><Award size={24} /></div>
                                    <div>
                                        <h4 className="font-bold">Structured Goals</h4>
                                        <p className="text-sm text-gray-400">Set quarterly goals with your mentor.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 bg-primary p-4 rounded-xl">
                                    <div className="bg-emerald-500/20 p-2 rounded-lg text-emerald-400"><Users size={24} /></div>
                                    <div>
                                        <h4 className="font-bold">Networking</h4>
                                        <p className="text-sm text-gray-400">Access to leadership and cross-team networks.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="bg-white py-20 text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-black text-gray-900 mb-6">Invest in Your Future</h2>
                    <p className="text-gray-600 text-lg mb-8">
                        Join a company that prioritizes your personal and professional evolution.
                    </p>
                    <Link to="/careers/jobs">
                        <button className="bg-gradient-to-r from-primary to-primary-light hover:from-primary hover:to-primary-light text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg">
                            Find Your Role
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
