import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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

  const navigateTo = (link) => {
    window.open(link, "_blank");
  }

  const navigate = useNavigate()

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
          {!allProject || !allProject.length
            ? [...Array(2)].map((_, index) => (
              <ProjectCardSkeloton key={index} />
            ))
            : allProject &&
            allProject.length > 0 &&
            allProject.map((project) => (
              <div key={project._id} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden h-full">
                <img
                  onClick={() => navigate(`/projects/${project._id}`)}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-nowrap truncate">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))} ...
                  </div>
                  <div className="flex gap-4">
                    <a onClick={() => navigateTo(project.githubLink)} className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                      <Github size={20} />
                      Code
                    </a>
                    <a onClick={() => navigateTo(project.demoLink)} className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
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
