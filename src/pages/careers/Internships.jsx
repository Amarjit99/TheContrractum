import { Briefcase, Calendar, CheckCircle, Clock, DollarSign, Rocket, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Internships() {
    const domains = [
        {
            title: "Engineering",
            roles: ["Frontend Dev", "Backend Dev", "DevOps", "QA Automation"],
            icon: <CodeIcon className="w-6 h-6 text-blue-500" />
        },
        {
            title: "Data & AI",
            roles: ["Data Analyst", "ML Engineer", "Data Scientist"],
            icon: <DatabaseIcon className="w-6 h-6 text-purple-500" />
        },
        {
            title: "Design & Product",
            roles: ["UI/UX Designer", "Product Management", "User Researcher"],
            icon: <PenToolIcon className="w-6 h-6 text-pink-500" />
        },
        {
            title: "Sales & Marketing",
            roles: ["Digital Marketing", "Business Development", "Content Strategy"],
            icon: <MegaphoneIcon className="w-6 h-6 text-orange-500" />
        }
    ];

    const timeline = [
        { title: "Applications Open", date: "Jan - Feb", desc: "Submit your application online." },
        { title: "Selection Process", date: "March", desc: "Interviews and assessments." },
        { title: "Onboarding", date: "May", desc: "Welcome kit and orientation." },
        { title: "Internship Period", date: "May - July", desc: "8-12 weeks of intense learning." },
        { title: "PPO Offers", date: "August", desc: "Top performers get full-time offers." }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full mb-6">
                        <Briefcase size={18} className="text-yellow-300" />
                        <span className="font-semibold text-sm uppercase tracking-wide">
                            Intern Leaders Program
                        </span>
                    </div>
                    <h1 className="text-5xl lg:text-6xl font-black mb-6 drop-shadow-lg">
                        Do Work That Matters
                    </h1>
                    <p className="text-xl text-orange-100 max-w-2xl mx-auto">
                        Don't just fetch coffee. Build products, ship code, and solve real problems affecting millions of users.
                    </p>
                </div>
            </div>

            {/* Perks Grid */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-16 relative z-10 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-orange-500">
                        <Rocket className="w-10 h-10 text-orange-500 mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Real Impact</h3>
                        <p className="text-gray-600">Work on live production code. Your contributions will be shipped to real users.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-red-500">
                        <DollarSign className="w-10 h-10 text-red-500 mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Competitive Stipend</h3>
                        <p className="text-gray-600">We value your time and talent. Receive industry-leading stipends and perks.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-pink-500">
                        <CheckCircle className="w-10 h-10 text-pink-500 mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">PPO Opportunity</h3>
                        <p className="text-gray-600">Perform well and secure a Pre-Placement Offer to join us full-time after graduation.</p>
                    </div>
                </div>
            </div>

            {/* Domains Section */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    <div className="md:w-1/3">
                        <h2 className="text-3xl font-black text-gray-900 mb-4">Open Roles</h2>
                        <p className="text-gray-600 mb-6">
                            We hire interns across almost every function. Find the role that suits your skills.
                        </p>
                        <Link to="/careers/jobs">
                            <button className="bg-gray-900 text-white font-bold py-3 px-8 rounded-full hover:bg-gray-800 transition-all flex items-center gap-2">
                                Apply Now <ArrowRight size={16} />
                            </button>
                        </Link>
                    </div>
                    <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {domains.map((domain, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-gray-50 p-2 rounded-lg">{domain.icon}</div>
                                    <h3 className="font-bold text-lg text-gray-900">{domain.title}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {domain.roles.map((role, rIdx) => (
                                        <span key={rIdx} className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded-md">
                                            {role}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Timeline Section */}
            <div className="bg-white py-24 mt-12">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-black text-gray-900">Internship Timeline</h2>
                        <p className="text-gray-500 mt-2">Summer 2026 Batch</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-6 left-0 right-0 h-1 bg-gray-100 -z-0 transform translate-y-1/2"></div>

                        {timeline.map((item, index) => (
                            <div key={index} className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-14 h-14 bg-white border-4 border-red-500 rounded-full flex items-center justify-center font-bold text-red-600 shadow-lg mb-4">
                                    {index + 1}
                                </div>
                                <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                                <span className="text-sm font-semibold text-primary-600 mb-2 block text-red-500">{item.date}</span>
                                <p className="text-gray-500 text-xs px-2">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* FAQ / CTA */}
            <div className="bg-gray-900 text-white py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-black mb-6">Still have questions?</h2>
                    <p className="text-gray-400 text-lg mb-8">
                        Check out our student resources or reach out to our university recruiting team.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Link to="/contact/support">
                            <button className="bg-white text-gray-900 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-all">
                                Contact Team
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

function DatabaseIcon({ className }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
    )
}

function PenToolIcon({ className }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
    )
}

function MegaphoneIcon({ className }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
    )
}
