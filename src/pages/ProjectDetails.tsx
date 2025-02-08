import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { Github, ExternalLink, ArrowLeft, Trophy, GraduationCap, Code } from "lucide-react";
import { useSelector } from "react-redux";
import ProjectCardSkeloton from "../components/projectcardSkeloton";
import { useEffect } from "react";
import useFetchData from "../hooks/UseFetchdata";

function ProjectDetails() {
    const { id } = useParams();
    const { allProject } = useSelector((state) => state.data);
    const { getAllProject } = useFetchData()
    // Find the project by ID
    const project = allProject.find((p) => p._id === id);
    console.log(project);

    useEffect(() => {
        if (!project) {
            getAllProject()
        }
    }, [])

    if (!project) {
        return (
            <div className="flex items-center justify-center min-h-screen text-gray-700 dark:text-gray-300">
                <ProjectCardSkeloton />
            </div>
        );
    }

    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-gray-50 text-black dark:text-white dark:bg-gray-900 py-12 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Back Button */}
                <div
                    onClick={() => navigate(-1)}
                    className="inline-flex items-center cursor-pointer gap-2 text-blue-600 hover:text-blue-700 transition-all duration-300 mb-8"
                >
                    <ArrowLeft size={20} />
                    <span className="font-medium">Back</span>
                </div>

                {/* Hero Section */}
                <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h1 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                            {project.title}
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                            {project.shortDescription || "A cutting-edge project with modern tech stack and seamless user experience."}
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                            {project.githubLink && (
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition-all"
                                >
                                    <Github size={20} />
                                    GitHub Repo
                                </a>
                            )}
                            {project.demoLink && (
                                <a
                                    href={project.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-all"
                                >
                                    <ExternalLink size={20} />
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="rounded-xl shadow-lg w-full object-cover"
                        />
                    </div>
                </div>

                {/* Tech Stack Section */}
                {project.technologies && project.technologies.length > 0 && (
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg mb-10">
                        <div className="flex items-center gap-4 mb-6">
                            <Code className="w-8 h-8 text-blue-600" />
                            <h2 className="text-2xl font-bold">Tech Stack</h2>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {project.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Description Section */}
                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                    <div className="flex items-center gap-4 mb-6">
                        <GraduationCap className="w-8 h-8 text-blue-600" />
                        <h2 className="text-2xl font-bold">Description</h2>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {project.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;
