import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import useFetchData from '../hooks/UseFetchdata.tsx';
import { useSelector } from 'react-redux';
import 'react-loading-skeleton/dist/skeleton.css';
import { ProjectCardSkeloton } from '../components/projectcardSkeloton.tsx';

function Projects() {
  const { getAllProject } = useFetchData();
  const { allProject } = useSelector((state) => state.data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (!allProject.length) {
      getAllProject();
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-10 dark:text-white">
      <div className="container mx-auto px-6 py-12">
        <Link
          to="/"
          className="inline-flex sticky top-10 z-50 items-center gap-2 text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">All Projects</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Explore my complete portfolio of projects, showcasing various technologies and solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading
            ? [...Array(6)].map((_, index) => (
              <ProjectCardSkeloton key={index} />
            ))
            : allProject &&
            allProject.length > 0 &&
            allProject.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden h-full transform hover:-translate-y-1 transition-transform duration-300"
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                    >
                      <Github size={20} />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                    >
                      <ExternalLink size={20} />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
