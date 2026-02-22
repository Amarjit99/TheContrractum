import { GraduationCap, Briefcase, Star, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

export default function StudentInterns() {
    const interns = [
        {
            name: "Aryan Gupta",
            role: "Frontend Developer Intern",
            school: "IIT Delhi",
            image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=400",
            quote: "Working on real-world projects from day one has been an incredible learning curve.",
            tags: ["React", "UI/UX", "Web Performance"],
        },
        {
            name: "Sneha Patel",
            role: "Data Science Intern",
            school: "BITS Pilani",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
            quote: "The mentorship here is unmatched. I've learned more in 3 months than a year of college.",
            tags: ["Python", "Pandas", "Machine Learning"],
        },
        {
            name: "Rahul Singh",
            role: "Cybersecurity Intern",
            school: "NIT Trichy",
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=400",
            quote: "Protecting live infrastructure against simulated attacks was the highlight of my summer.",
            tags: ["Ethical Hacking", "Network Security"],
        },
        {
            name: "Ananya Roy",
            role: "Product Design Intern",
            school: "NID Ahmedabad",
            image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400",
            quote: "I love how my designs are actually being used by thousands of users today.",
            tags: ["Figma", "User Research", "Prototyping"],
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-primary-dark via-primary to-primary-light text-white py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full mb-6">
                        <Rocket size={18} className="text-yellow-300" />
                        <span className="font-semibold text-sm uppercase tracking-wide">
                            Future Leaders Program
                        </span>
                    </div>
                    <h1 className="text-5xl lg:text-6xl font-black mb-6 drop-shadow-lg">
                        Student Interns
                    </h1>
                    <p className="text-xl text-orange-100 max-w-2xl mx-auto">
                        Fueling growth, innovation, and fresh perspectives. Meet the bright
                        minds shaping tomorrow.
                    </p>
                </div>
            </div>

            {/* Interns Grid */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {interns.map((intern, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 md:flex gap-6 items-center group border border-gray-100"
                        >
                            <div className="w-full md:w-1/3 h-48 md:h-full shrink-0 overflow-hidden rounded-2xl relative">
                                <img
                                    src={intern.image}
                                    alt={intern.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:hidden">
                                    <h3 className="text-white font-bold text-lg">{intern.name}</h3>
                                </div>
                            </div>
                            <div className="flex-1 mt-4 md:mt-0">
                                <div className="hidden md:block">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                                        {intern.name}
                                    </h3>
                                    <p className="text-primary font-semibold mb-3">{intern.role}</p>
                                </div>

                                <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                                    <GraduationCap size={16} />
                                    <span>{intern.school}</span>
                                </div>

                                <div className="bg-orange-50 p-4 rounded-xl mb-4 relative">
                                    <QuoteIcon className="absolute top-2 left-2 text-orange-200 w-6 h-6 z-0" />
                                    <p className="text-gray-700 italic text-sm relative z-10">"{intern.quote}"</p>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {intern.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-1 bg-gray-100 text-xs font-semibold text-gray-600 rounded-md"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary-dark via-primary to-primary-light text-white py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl lg:text-4xl font-black mb-6">Applications for Summer Internships 2026 are Open!</h2>
                    <p className="text-orange-100 text-lg mb-8">
                        Don't just watch the revolution—be part of it. Experience mentorship, real projects, and rapid growth.
                    </p>
                    <Link to="/careers/internships">
                        <button className="bg-primary text-white hover:bg-primary-dark font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg cursor-pointer">
                            Apply Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

function QuoteIcon({ className }) {
    return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
        </svg>
    )
}
