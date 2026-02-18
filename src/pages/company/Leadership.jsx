import { Quote } from "lucide-react";
import { Link } from "react-router-dom";

export default function Leadership() {
    const board = [
        {
            name: "Dr. Eleanor Vance",
            role: "Chairperson of the Board",
            bio: "Former policy advisor with 20+ years steering global tech conglomerates.",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
        },
        {
            name: "Marcus Thorne",
            role: "Non-Executive Director",
            bio: "Investment strategist and philanthropist focused on sustainable tech ecosystems.",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
        },
        {
            name: "Lydia Chen",
            role: "Independent Director",
            bio: "Pioneer in AI ethics and governance, ensuring responsible innovation at every step.",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 text-white py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-5xl lg:text-6xl font-black mb-6 drop-shadow-lg">
                        Leadership
                    </h1>
                    <p className="text-xl text-red-100 max-w-3xl mx-auto">
                        Guided by wisdom, driven by purpose. Our leadership philosophy is built
                        on long-term value creation.
                    </p>
                </div>
            </div>

            {/* Philosophy Section */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden md:flex">
                    <div className="md:w-1/2 bg-gray-900 text-white p-12 flex flex-col justify-center">
                        <Quote className="text-red-500 w-12 h-12 mb-6" />
                        <h2 className="text-3xl font-bold mb-6 italic leading-relaxed">
                            "True leadership isn't about being in charge. It's about taking
                            care of those in your charge and ensuring the vision remains clear
                            through every challenge."
                        </h2>
                        <p className="text-gray-400 font-semibold">- Amit Verma, Founder & CEO</p>
                    </div>
                    <div className="md:w-1/2 p-12 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Our Governance Philosophy
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            At Contrractum, we believe in transparency, accountability, and
                            ethical stewardship. Our leadership structure is designed to separate
                            strategic oversight from operational execution, ensuring balanced
                            decision-making.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            We govern not just for shareholders, but for stakeholdersâ€”our
                            employees, our customers, and the communities we serve.
                        </p>
                    </div>
                </div>
            </div>

            {/* Board of Directors */}
            <div className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-purple-600 font-bold uppercase tracking-wider text-sm">
                            Strategic Oversight
                        </span>
                        <h2 className="text-4xl font-black text-gray-900 mt-2">
                            Board of Directors
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {board.map((member, index) => (
                            <div key={index} className="text-center group">
                                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-100 shadow-lg group-hover:border-purple-500 transition-colors duration-300">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">
                                    {member.name}
                                </h3>
                                <p className="text-purple-600 font-semibold mb-2">
                                    {member.role}
                                </p>
                                <p className="text-gray-500 text-sm max-w-xs mx-auto">
                                    {member.bio}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-white py-20 border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6">Lead with us</h2>
                    <p className="text-gray-600 text-lg mb-8">
                        We are always looking for visionaries to join our executive excellence program.
                    </p>
                    <Link to="/careers/jobs">
                        <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg cursor-pointer">
                            Explore Careers
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
