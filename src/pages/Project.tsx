import React from "react";

interface Project {
    title: string;
    description: string;
    link: string;
}

const projects: Project[] = [
    {
        title: "Blood Donation Management System",
        description:
            "A Spring Boot web app with JWT auth for managing donors, recipients, and blood banks.",
        link: "https://github.com/yourusername/blood-donation-system",
    },
    {
        title: "E-commerce Web App",
        description:
            "JavaEE + JSP-based e-commerce platform with admin & customer features.",
        link: "https://github.com/yourusername/ecommerce-app",
    },
    {
        title: "Portfolio Website",
        description:
            "My personal responsive portfolio built using React, TypeScript, and TailwindCSS.",
        link: "https://yourportfolio.com",
    },
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-4">
                    My Projects
                </h2>
                <p className="text-gray-600 mb-12">
                    Here are some of the projects I've worked on recently.
                </p>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition"
                        >
                            <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                                {project.title}
                            </h3>
                            <p className="text-gray-700 text-sm mb-4">{project.description}</p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-indigo-500 hover:underline"
                            >
                                View Project →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
