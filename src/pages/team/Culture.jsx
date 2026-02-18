import { Heart, Zap, Users, Coffee, Globe, Smile } from "lucide-react";
import { Link } from "react-router-dom";

export default function Culture() {
    const values = [
        {
            icon: <Zap className="w-8 h-8 text-yellow-500" />,
            title: "Innovation First",
            description:
                "We challenge the status quo and push boundaries to create solutions that matter.",
        },
        {
            icon: <Heart className="w-8 h-8 text-red-500" />,
            title: "Empathy & Integrity",
            description:
                "We build with heart, ensuring our technology serves humanity with ethics and care.",
        },
        {
            icon: <Users className="w-8 h-8 text-blue-500" />,
            title: "Collaborative Spirit",
            description:
                "Great things are never done by one person. We win together as a diverse, united team.",
        },
    ];

    const benefits = [
        { icon: <Globe size={20} />, text: "Remote-First Options" },
        { icon: <Coffee size={20} />, text: "Unlimited Coffee & Snacks" },
        { icon: <Smile size={20} />, text: "Mental Health Support" },
        { icon: <Zap size={20} />, text: "Continuous Learning Budget" },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-5xl lg:text-6xl font-black mb-6 drop-shadow-lg">
                        Our Culture
                    </h1>
                    <p className="text-xl text-purple-100 max-w-2xl mx-auto">
                        More than just a workplace. A community of dreamers, doers, and
                        innovators building the future together.
                    </p>
                </div>
            </div>

            {/* Values Section */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
                <div className="text-center mb-16">
                    <span className="text-red-600 font-bold uppercase tracking-wider text-sm">
                        Core Values
                    </span>
                    <h2 className="text-3xl font-black text-gray-900 mt-2">
                        What Drives Us
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border-b-4 border-transparent hover:border-red-500"
                        >
                            <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                {value.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {value.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Life at Contrractum - Photo Collage & Benefits */}
            <div className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-purple-600 font-bold uppercase tracking-wider text-sm">
                                Life at Contrractum
                            </span>
                            <h2 className="text-4xl font-black text-gray-900 mt-2 mb-6">
                                Work Hard, Play Harder
                            </h2>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                We believe that a happy team is a productive team. From hackathons
                                to team retreats, we foster an environment where creativity
                                thrives and burnout has no place.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-center gap-3 text-gray-700 font-medium">
                                        <div className="text-red-500">{benefit.icon}</div>
                                        <span>{benefit.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400"
                                alt="Team collaboration"
                                className="rounded-2xl shadow-lg w-full h-48 object-cover transform translate-y-8"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=400"
                                alt="Office happy hour"
                                className="rounded-2xl shadow-lg w-full h-48 object-cover"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=400"
                                alt="Creative meeting"
                                className="rounded-2xl shadow-lg w-full h-48 object-cover transform translate-y-8"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80&w=400"
                                alt="Woman working on laptop"
                                className="rounded-2xl shadow-lg w-full h-48 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Join CTA */}
            <div className="bg-gray-900 text-white py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl lg:text-4xl font-black mb-6">Ready to make an impact?</h2>
                    <p className="text-gray-400 text-lg mb-8">
                        We are always looking for passionate individuals to join our mission.
                        Check out our open roles and find your place at Contrractum.
                    </p>
                    <Link to="/careers/jobs">
                        <button className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg cursor-pointer">
                            View Open Positions
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
