import { ShieldCheck, Zap, TrendingUp, Users, Clock, Smile } from "lucide-react";
import { Link } from "react-router-dom";

export default function WhyChooseUs() {
    const features = [
        {
            icon: <Zap className="w-8 h-8 text-yellow-500" />,
            title: "Rapid Innovation",
            description:
                "We don't just follow trends; we set them. Our agile methodology ensures you stay ahead of the curve.",
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-green-500" />,
            title: "Enterprise Security",
            description:
                "Security is woven into our DNA. We build systems that protect your data and your reputation.",
        },
        {
            icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
            title: "Proven Scalability",
            description:
                "From MVP to IPO, our infrastructure grows with you, handling millions of requests without breaking a sweat.",
        },
        {
            icon: <Users className="w-8 h-8 text-purple-500" />,
            title: "User-Centric Design",
            description:
                "We build for humans, not just machines. Intuitive interfaces that drive engagement and retention.",
        },
        {
            icon: <Clock className="w-8 h-8 text-red-500" />,
            title: "24/7 Reliability",
            description:
                "Downtime isn't an option. Our systems are engineered for 99.99% uptime and resilience.",
        },
        {
            icon: <Smile className="w-8 h-8 text-pink-500" />,
            title: "Dedicated Support",
            description:
                "We are your long-term partners. Our support team is always ready to assist, no matter the time zone.",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 text-white py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-5xl lg:text-6xl font-black mb-6 drop-shadow-lg">
                        Why Choose Us?
                    </h1>
                    <p className="text-xl text-red-100 max-w-3xl mx-auto">
                        Because in a digital-first world, you need a partner who understands
                        both technology and business.
                    </p>
                </div>
            </div>

            {/* Stats Section */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-16 relative z-10 mb-20">
                <div className="bg-white rounded-3xl shadow-xl p-10 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    <div>
                        <h3 className="text-4xl font-black text-gray-900 mb-2">500+</h3>
                        <p className="text-gray-500 font-semibold uppercase tracking-wide text-sm">Projects Delivered</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-black text-gray-900 mb-2">98%</h3>
                        <p className="text-gray-500 font-semibold uppercase tracking-wide text-sm">Client Retention</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-black text-gray-900 mb-2">50+</h3>
                        <p className="text-gray-500 font-semibold uppercase tracking-wide text-sm">Global Partners</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-black text-gray-900 mb-2">10+</h3>
                        <p className="text-gray-500 font-semibold uppercase tracking-wide text-sm">Years Experience</p>
                    </div>
                </div>
            </div>

            {/* Features Grid */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 pb-24">
                <div className="text-center mb-16">
                    <span className="text-red-600 font-bold uppercase tracking-wider text-sm">
                        The Contrractum Advantage
                    </span>
                    <h2 className="text-4xl font-black text-gray-900 mt-2">
                        Built for Excellence
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                        >
                            <div className="bg-gray-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 text-white py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl lg:text-4xl font-black mb-6">Ready to Experience the Difference?</h2>
                    <p className="text-red-100 text-lg mb-8">
                        Join 500+ satisfied clients who have transformed their business with Contrractum.
                    </p>
                    <Link to="/contact/quote">
                        <button className="bg-white text-red-600 hover:bg-gray-50 font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg cursor-pointer">
                            Start Your Project
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
