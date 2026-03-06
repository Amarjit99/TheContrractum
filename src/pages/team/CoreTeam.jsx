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
            {/* Hero Section with Background Image */}
            <div className="relative bg-white text-gray-200 py-32 overflow-hidden">
                {/* Background Image */}
                <div 
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=80)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: '1'
                    }}
                />
                
                {/* Light Overlay for Text Readability */}
                <div className="absolute inset-0 bg-white/60 z-0" />
                
                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-5xl lg:text-6xl font-black mb-6 drop-shadow-lg text-gray-900">
                        Meet Our Leadership
                    </h1>
                    <p className="text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed font-semibold">
                        The visionaries and strategists guiding The Contrractum towards a
                        smarter, more connected future.
                    </p>
                    <div className="mt-8 flex justify-center gap-4 flex-wrap">
                        <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-gray-800 shadow-lg">
                            <p className="text-sm font-bold text-gray-900">🎯 Visionary Leadership</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-gray-800 shadow-lg">
                            <p className="text-sm font-bold text-gray-900">🚀 Strategic Excellence</p>
                        </div>
                    </div>
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
                                <p className="text-primary font-semibold mb-4">{leader.role}</p>
                                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                    {leader.bio}
                                </p>
                                <div className="flex justify-center space-x-4">
                                    <a href="#" className="p-2 text-gray-400 hover:text-blue-600 hover:bg-primary-dark rounded-full transition-colors">
                                        <Linkedin size={20} />
                                    </a>
                                    <a href="#" className="p-2 text-gray-400 hover:text-blue-400 hover:bg-primary-dark rounded-full transition-colors">
                                        <Twitter size={20} />
                                    </a>
                                    <a href="mailto:contact@contrractum.com" className="p-2 text-gray-400 hover:text-primary hover:bg-primary/10 rounded-full transition-colors">
                                        <Mail size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl lg:text-4xl font-black mb-6 text-white">Connect with Visionaries</h2>
                    <p className="text-gray-100 text-lg mb-8">
                        Our leadership team is always open to discussing strategic partnerships and new ventures.
                    </p>
                    <Link to="/contact/touch">
                        <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-2xl cursor-pointer">
                            Contact Leadership
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
