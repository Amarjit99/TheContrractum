import { Linkedin, Mail, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function CoreTeam() {
    const leaders = [
        {
            name: "Amit Verma",
            role: "Founder & CEO",
            bio: "Visionary leader with 15+ years in tech innovation. Driving Contrractum's mission to reshape digital landscapes.",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
        },
        {
            name: "Sarah Jenkins",
            role: "Chief Technology Officer",
            bio: "Expert in AI & Blockchain architectures. Leading our engineering teams to build scalable, future-proof solutions.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
        },
        {
            name: "David Chen",
            role: "Head of Operations",
            bio: "Operational excellence strategist ensuring seamless delivery and execution across all global projects.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
        },
        {
            name: "Priya Sharma",
            role: "Chief Marketing Officer",
            bio: "Brand builder and storyteller connecting our innovations with the communities that need them most.",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 text-white py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-5xl lg:text-6xl font-black mb-6 drop-shadow-lg">
                        Meet Our Leadership
                    </h1>
                    <p className="text-xl text-red-100 max-w-2xl mx-auto">
                        The visionaries and strategists guiding The Contrractum towards a
                        smarter, more connected future.
                    </p>
                </div>
            </div>

            {/* Team Grid */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {leaders.map((leader, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 border border-gray-100"
                        >
                            <div className="h-64 overflow-hidden">
                                <img
                                    src={leader.image}
                                    alt={leader.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                                    {leader.name}
                                </h3>
                                <p className="text-red-600 font-semibold mb-4">{leader.role}</p>
                                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                    {leader.bio}
                                </p>
                                <div className="flex justify-center space-x-4">
                                    <a href="#" className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
                                        <Linkedin size={20} />
                                    </a>
                                    <a href="#" className="p-2 text-gray-400 hover:text-blue-400 hover:bg-blue-50 rounded-full transition-colors">
                                        <Twitter size={20} />
                                    </a>
                                    <a href="mailto:contact@contrractum.com" className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors">
                                        <Mail size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gray-900 text-white py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl lg:text-4xl font-black mb-6">Connect with Visionaries</h2>
                    <p className="text-gray-400 text-lg mb-8">
                        Our leadership team is always open to discussing strategic partnerships and new ventures.
                    </p>
                    <Link to="/contact/touch">
                        <button className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg cursor-pointer">
                            Contact Leadership
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
