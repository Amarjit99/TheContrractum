import { Quote, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function IndustryAdvisors() {
    const advisors = [
        {
            name: "Dr. Robert Keynes",
            role: "Ex-Director, Global Strategy at TechGiant",
            quote:
                "The Contrractum is uniquely positioned to bridge the gap between traditional industry silos and modern digital ecosystems.",
            impact: "Strategic Partnerships",
            image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=400",
        },
        {
            name: "Elena Rodriguez",
            role: "Board Member, FinTech Innovators",
            quote:
                "Their approach to blockchain integration in finance sets a new standard for transparency and operational efficiency.",
            impact: "Financial Compliance",
            image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400",
        },
        {
            name: "James Sterling",
            role: "Senior Policy Advisor",
            quote:
                "Navigating complex regulatory landscapes requires foresight. This team has the vision to lead responsibly.",
            impact: "GovTech Regulations",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 text-white py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-5xl lg:text-6xl font-black mb-6 drop-shadow-lg">
                        Industry Advisors
                    </h1>
                    <p className="text-xl text-red-100 max-w-2xl mx-auto">
                        Guiding our journey with decades of experience and strategic
                        foresight.
                    </p>
                </div>
            </div>

            {/* Advisors Grid */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {advisors.map((advisor, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-red-500 hover:shadow-2xl transition-shadow duration-300 flex flex-col"
                        >
                            <div className="p-8 flex-1">
                                <Quote className="w-10 h-10 text-red-200 mb-4" />
                                <p className="text-gray-600 italic text-lg mb-6 leading-relaxed">
                                    "{advisor.quote}"
                                </p>
                                <div className="flex items-center gap-2 text-sm font-semibold text-purple-600 mb-6 bg-purple-50 w-fit px-3 py-1 rounded-full">
                                    <TrendingUp size={16} />
                                    <span>Focus: {advisor.impact}</span>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-6 flex items-center gap-4 border-t border-gray-100">
                                <img
                                    src={advisor.image}
                                    alt={advisor.name}
                                    className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
                                />
                                <div>
                                    <h3 className="font-bold text-gray-900">{advisor.name}</h3>
                                    <p className="text-sm text-gray-500">{advisor.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gray-50 border-t border-gray-200 py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6">Shape the Future with Us</h2>
                    <p className="text-gray-600 text-lg mb-8">
                        We value wisdom and experience. If you're a industry veteran looking to make an impact, let's talk.
                    </p>
                    <Link to="/join/partner">
                        <button className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg cursor-pointer">
                            Become an Advisor
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
