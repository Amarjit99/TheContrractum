import { Rocket, GitBranch, Code, Cpu, ExternalLink } from "lucide-react";

export default function Projects() {
    const projects = [
        {
            title: "Project Nova",
            category: "R&D - Artificial Intelligence",
            desc: "A next-generation predictive analytics engine designed to optimize supply chain logistics in real-time using reinforcement learning.",
            status: "Active Development",
            tech: ["Python", "PyTorch", "AWS Sagemaker"],
            icon: <Cpu className="w-8 h-8 text-purple-500" />
        },
        {
            title: "Project Aegis",
            category: "Cybersecurity",
            desc: "An automated threat detection system that uses behavioral analysis to identify zero-day vulnerabilities in enterprise networks.",
            status: "Beta Testing",
            tech: ["Go", "Kafka", "ElasticSearch"],
            icon: <Code className="w-8 h-8 text-blue-500" />
        },
        {
            title: "Project Helios",
            category: "Renewable Energy Tech",
            desc: "IoT-based monitoring platform for solar farms to maximize efficiency and predict maintenance needs.",
            status: "Concept Phase",
            tech: ["IoT", "React Native", "MQTT"],
            icon: <Rocket className="w-8 h-8 text-orange-500" />
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-violet-600 via-primary to-primary text-white py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full mb-6">
                        <GitBranch size={18} className="text-violet-300" />
                        <span className="font-semibold text-sm uppercase tracking-wide">
                            Internal Initiatives
                        </span>
                    </div>
                    <h1 className="text-5xl lg:text-6xl font-black mb-6 drop-shadow-lg">
                        Innovation Labs
                    </h1>
                    <p className="text-xl text-violet-100 max-w-2xl mx-auto">
                        Explore the cutting-edge projects our teams are hacking on. From moonshots to weekend hacks, this is where the future is built.
                    </p>
                </div>
            </div>

            {/* Projects Grid */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col group">
                            <div className="flex justify-between items-start mb-6">
                                <div className="bg-gray-50 p-4 rounded-2xl group-hover:bg-violet-50 transition-colors">
                                    {project.icon}
                                </div>
                                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${project.status === "Active Development" ? "bg-green-100 text-green-700" :
                                        project.status === "Beta Testing" ? "bg-blue-100 text-blue-700" :
                                            "bg-yellow-100 text-yellow-700"
                                    }`}>
                                    {project.status}
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                            <div className="text-violet-600 font-semibold text-sm mb-4">{project.category}</div>
                            <p className="text-gray-600 mb-6 flex-1 leading-relaxed">
                                {project.desc}
                            </p>

                            <div className="border-t border-gray-100 pt-6">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs font-mono bg-gray-100 text-gray-600 px-2 py-1 rounded-md">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <button className="w-full py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary-dark transition-all flex items-center justify-center gap-2">
                                    View Details <ExternalLink size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Hackathon Teaser */}
            <div className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="bg-black rounded-3xl overflow-hidden shadow-2xl relative">
                        {/* Abstract Background Shapes */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

                        <div className="relative z-10 px-6 py-20 text-center">
                            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Internal Hackathon 2026</h2>
                            <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-10">
                                48 hours. Unlimited coffee. One goal: Build something awesome.
                                Currently open for employee registration.
                            </p>
                            <div className="flex justify-center gap-4">
                                <button className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition-all">
                                    Register Team
                                </button>
                                <button className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition-all">
                                    View Themes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
