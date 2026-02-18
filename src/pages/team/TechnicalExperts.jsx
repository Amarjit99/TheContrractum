import { Code2, Database, Shield, Cpu, Globe, Server } from "lucide-react";
import { Link } from "react-router-dom";

export default function TechnicalExperts() {
    const experts = [
        {
            icon: <Cpu className="w-10 h-10 text-red-600" />,
            title: "AI & Machine Learning",
            description:
                "Architecting intelligent systems that drive automation and predictive analytics.",
            technologies: ["TensorFlow", "PyTorch", "OpenAI API", "Computer Vision"],
        },
        {
            icon: <Shield className="w-10 h-10 text-pink-600" />,
            title: "Cybersecurity",
            description:
                "Ensuring enterprise-grade security with advanced threat detection and zero-trust models.",
            technologies: ["Penetration Testing", "Cryptography", "Network Security"],
        },
        {
            icon: <Database className="w-10 h-10 text-purple-600" />,
            title: "Blockchain Solutions",
            description:
                "Building decentralized applications and smart contracts for transparent operations.",
            technologies: ["Solidity", "Ethereum", "Hyperledger", "Web3.js"],
        },
        {
            icon: <Globe className="w-10 h-10 text-blue-600" />,
            title: "GIS & Spatial Analysis",
            description:
                "Mapping the future with precision utilizing advanced geospatial data processing.",
            technologies: ["ArcGIS", "QGIS", "Remote Sensing", "Spatial Databases"],
        },
        {
            icon: <Code2 className="w-10 h-10 text-indigo-600" />,
            title: "Full Stack Development",
            description:
                "Crafting seamless user experiences with robust and scalable backend architectures.",
            technologies: ["React", "Node.js", "GraphQL", "Next.js"],
        },
        {
            icon: <Server className="w-10 h-10 text-green-600" />,
            title: "Cloud Infrastructure",
            description:
                "Deploying resilient cloud-native solutions for global scalability and uptime.",
            technologies: ["AWS", "Azure", "Docker", "Kubernetes"],
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 text-white py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-5xl lg:text-6xl font-black mb-6 drop-shadow-lg">
                        Technical Experts
                    </h1>
                    <p className="text-xl text-red-100 max-w-2xl mx-auto">
                        The engineering minds building the backbone of our digital solutions.
                    </p>
                </div>
            </div>

            {/* Skills Grid */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {experts.map((expert, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
                        >
                            <div className="mb-6 bg-gray-50 rounded-xl p-4 w-fit group-hover:bg-red-50 transition-colors">
                                {expert.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                {expert.title}
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {expert.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {expert.technologies.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-semibold rounded-full group-hover:bg-red-100 group-hover:text-red-700 transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl lg:text-4xl font-black mb-6">Join the Architects of Tomorrow</h2>
                    <p className="text-blue-200 text-lg mb-8">
                        We are looking for brilliant minds to solve the toughest challenges in tech. Are you ready?
                    </p>
                    <Link to="/careers/jobs">
                        <button className="bg-white text-blue-900 hover:bg-gray-100 font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg cursor-pointer">
                            View Engineering Roles
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
