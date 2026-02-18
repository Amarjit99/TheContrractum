import { Flag, Globe, Award, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

export default function OurJourney() {
    const milestones = [
        {
            year: "2015",
            title: "Inception",
            description:
                "Founded in a garage with a vision to revolutionize digital infrastructure.",
            icon: <Rocket className="text-white" />,
            color: "bg-red-500",
        },
        {
            year: "2017",
            title: "First Major Contract",
            description:
                "Secured a landmark partnership with a Fortune 500 logistics firm.",
            icon: <Flag className="text-white" />,
            color: "bg-pink-500",
        },
        {
            year: "2020",
            title: "Global Expansion",
            description:
                "Opened offices in London and Singapore, expanding our footprint to 3 continents.",
            icon: <Globe className="text-white" />,
            color: "bg-purple-500",
        },
        {
            year: "2023",
            title: "Industry Recognition",
            description:
                "Awarded 'Top Innovator in AI' by TechGlobal for our predictive analytics engine.",
            icon: <Award className="text-white" />,
            color: "bg-indigo-500",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 text-white py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-5xl lg:text-6xl font-black mb-6 drop-shadow-lg">
                        Our Journey
                    </h1>
                    <p className="text-xl text-red-100 max-w-3xl mx-auto">
                        From humble beginnings to global impact. Every milestone is a testament to our team's resilience.
                    </p>
                </div>
            </div>

            {/* Timeline Section */}
            <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20 relative">
                {/* Vertical Line */}
                <div className="absolute left-10 md:left-1/2 top-20 bottom-20 w-1 bg-gray-200 -translate-x-1/2 transform"></div>

                <div className="relative">
                    {milestones.map((item, index) => (
                        <div key={index} className="mb-12 flex flex-col md:flex-row items-center justify-between w-full relative">
                            {/* Content Card - Left (Even Index) or Right (Odd Index) for Desktop */}
                            <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:order-1 md:text-right" : "md:order-3 md:text-left"} pl-12 md:pl-0`}>
                                <div className={`bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 ${index % 2 === 0 ? "md:mr-6" : "md:ml-6"}`}>
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-3 ${item.color}`}>
                                        {item.year}
                                    </span>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            </div>

                            {/* Dot/Icon on Line */}
                            <div className={`absolute left-4 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center border-4 border-white shadow-lg ${item.color} z-10 md:static md:order-2 shrink-0 my-4 md:my-0`}>
                                {item.icon}
                            </div>

                            {/* Spacer for the other side on Desktop */}
                            <div className={`hidden md:block md:w-5/12 md:order-${index % 2 === 0 ? "3" : "1"}`}></div>
                        </div>
                    ))}
                </div>

                {/* Future Node */}
                <div className="relative flex flex-col items-center ml-10 md:ml-0 md:justify-center">
                    <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-gray-300 rounded-full border-4 border-white shadow-md z-10 md:static"></div>
                    <p className="mt-12 md:mt-4 text-gray-500 font-medium tracking-widest uppercase text-sm text-center md:text-center pl-12 md:pl-0">The best is yet to come</p>
                </div>

            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-gray-900 to-black text-white py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl lg:text-4xl font-black mb-6">Be Part of Our Next Chapter</h2>
                    <p className="text-gray-400 text-lg mb-8">
                        The journey is just beginning. Join us as we write the future of technology.
                    </p>
                    <Link to="/careers/jobs">
                        <button className="bg-white text-gray-900 hover:bg-gray-100 font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg cursor-pointer">
                            Join the Journey
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
