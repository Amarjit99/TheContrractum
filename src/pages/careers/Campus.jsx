import { GraduationCap, BookOpen, Users, Globe, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Campus() {
    const programs = [
        {
            title: "Graduate Engineer Trainee (GET)",
            description: "A comprehensive 12-month program designed to transform fresh engineering graduates into world-class technologists.",
            icon: <CodeIcon className="w-8 h-8 text-blue-500" />,
            features: ["Rotational assignments", "Mentorship from senior architects", "Project ownership"]
        },
        {
            title: "Management Trainee (MT)",
            description: "For MBA graduates looking to lead the future of business. Gain exposure to strategy, operations, and finance.",
            icon: <ChartIcon className="w-8 h-8 text-green-500" />,
            features: ["Leadership shadowing", "Cross-functional projects", "Fast-track growth"]
        },
        {
            title: "Research & Innovation Fellow",
            description: "Join our R&D labs to work on cutting-edge technologies like AI, Quantum Computing, and Blockchain.",
            icon: <MicroscopeIcon className="w-8 h-8 text-purple-500" />,
            features: ["Publish papers", "Patent filing support", "Access to state-of-the-art labs"]
        }
    ];

    const stats = [
        { number: "50+", label: "Partner Universities" },
        { number: "200+", label: "Graduates Hired Annually" },
        { number: "100%", label: "PPO Conversion Rate for Top Performers" },
        { number: "15+", label: "Global Locations" }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-primary via-primary-light to-primary-dark text-white py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full mb-6">
                        <GraduationCap size={18} className="text-yellow-300" />
                        <span className="font-semibold text-sm uppercase tracking-wide">
                            University Relations
                        </span>
                    </div>
                    <h1 className="text-5xl lg:text-6xl font-black mb-6 drop-shadow-lg">
                        From Campus to Corporate
                    </h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Your degree was just the beginning. Launch your career with a company that invests in your potential.
                    </p>
                </div>
            </div>

            {/* Stats Section */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-16 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center border-b-4 border-red-500">
                            <div className="text-3xl lg:text-4xl font-black text-gray-900 mb-1">{stat.number}</div>
                            <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Programs Grid */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-black text-gray-900 mb-4">Our Programs</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We offer tailored paths for different disciplines, ensuring you start your career on the right foot.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {programs.map((program, index) => (
                        <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                            <div className="bg-gray-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                                {program.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                            <p className="text-gray-600 mb-6 text-sm leading-relaxed">{program.description}</p>
                            <ul className="space-y-2 mb-8">
                                {program.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Link to="/careers/jobs" className="flex items-center text-primary font-bold hover:gap-2 transition-all">
                                View Openings <ArrowRight size={16} className="ml-1" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {/* Steps Section */}
            <div className="bg-white py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-primary font-bold uppercase tracking-wider text-sm">Hiring Process</span>
                            <h2 className="text-4xl font-black text-gray-900 mt-2 mb-6">How We Hire</h2>
                            <p className="text-gray-600 text-lg mb-8">
                                We look for problem solvers, critical thinkers, and passionate learners. Our process is designed to help you showcase your best self.
                            </p>
                            <div className="space-y-6">
                                {[
                                    { title: "Application & Assessment", desc: "Submit your profile and complete a coding/aptitude challenge." },
                                    { title: "Technical Interviews", desc: "Deep dive into your domain knowledge and problem-solving approach." },
                                    { title: "Culture Fit & HR", desc: "Understanding your aspirations and alignment with our values." },
                                    { title: "Offer & Onboarding", desc: "Welcome to the team! A structured orientation awaits you." }
                                ].map((step, index) => (
                                    <div key={index} className="flex gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-primary flex items-center justify-center font-bold text-sm">
                                            {index + 1}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">{step.title}</h4>
                                            <p className="text-gray-500 text-sm">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-primary rounded-2xl opacity-20 blur-xl"></div>
                            <img
                                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
                                alt="Students discussing"
                                className="relative rounded-2xl shadow-2xl w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="bg-primary text-white py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl lg:text-4xl font-black mb-6">Ready to Start Your Journey?</h2>
                    <p className="text-gray-400 text-lg mb-8">
                        Check if we are visiting your campus or apply directly through our off-campus drives.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/careers/jobs">
                            <button className="bg-primary text-white hover:bg-primary-dark font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto">
                                View Campus Drives
                            </button>
                        </Link>
                        <Link to="/contact/touch">
                            <button className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-10 rounded-full transition-all w-full sm:w-auto">
                                For Placement Officers
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

function CodeIcon({ className }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
    )
}

function ChartIcon({ className }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
    )
}

function MicroscopeIcon({ className }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
    )
}
