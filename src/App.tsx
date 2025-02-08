import React, { useState, useEffect, useRef } from 'react';
import {
  Github,
  Linkedin,
  Code2,
  Download,
  Moon,
  Sun,
  Send,
  ExternalLink,
  Mail,
  ChevronRight,
  Database,
  Layout,
  Server,
  Globe,
  Trophy,
  Star,
  Code,
  GitFork,
  Heart,
  BookOpen,
  Quote,
  ArrowUp,
  Loader2Icon,
  Terminal,
  Brush,
  ShoppingCart,
  Cuboid,
  Copy,
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import aniketlogo from '/aniket.png'
import useFetchData from './hooks/UseFetchdata.tsx'
import { useSelector } from 'react-redux';
import api from './services/axioswrapper.ts';
import toast from 'react-hot-toast';
import BlogSkeleton from './components/blogSkeloton.tsx';
import { ProjectCardSkeloton } from './components/projectcardSkeloton.tsx';
import p1 from '/p1.png'
import p2 from '/p2.png'
import p3 from '/p3.png'
import p4 from '/p4.png'
import p5 from '/p5.png'
import p6 from '/p6.png'


function useIntersectionObserver(options = {}) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.1, ...options });

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return [elementRef, isVisible];
}

export function AnimatedSection({ children, className = '' }) {

  const [ref, isVisible] = useIntersectionObserver();
  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
        } ${className}`}
    >
      {children}
    </div>
  );
}

// Example Usage:

function App({ darkMode, setDarkMode, toggleDarkMode }) {

  const [isVisible, setIsVisible] = useState(false);
  const { getResume, getProjects, getBlogs } = useFetchData()
  const { resume, blogs, projects } = useSelector(state => state.data)
  const [loder, setLoading] = useState({
    blog: false,
    project: false,
    resume: false,
  })
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      if (!resume || resume.length === 0) {
        await getResume();
      }
      if (!projects || projects.length === 0) {
        await getProjects();
      }
      if (!blogs || blogs.length === 0) {
        await getBlogs();
      }
    };

    fetchData();
  }, []);

  const testimonials = [
    {
      name: "Aryan choubey",
      role: "aryanchaturvediac18@gmail.com",
      feedback: "Aniket's work is outstanding! His attention to detail and problem-solving skills are exceptional.",
      rating: 5,
    },
    {
      name: "Pushpam Singh",
      role: "pushpamsingh66@gmail.com",
      feedback: "Delivered an amazing project on time. Great communication and highly skilled in full-stack development.",
      rating: 4.8,
    },
    {
      name: "Aradhya Gupta",
      role: "aradhyayanan@gmail.com",
      feedback: "Aniket’s expertise in cloud and DevOps is remarkable. Highly recommend working with him!",
      rating: 5,
    },
  ];

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateTo = (link) => {
    window.open(link, "_blank");
  }

  const [contact, setContact] = useState({})
  const [sendLoder, setSendLoder] = useState(false)

  const sendMail = async (e) => {
    e.preventDefault()
    setSendLoder(true)
    try {
      const response = await api.post('/api/users/mail', contact)

      toast.success("email sent successfully")
      setContact({ name: "", email: "", message: "" })
    } catch (error) {
    } finally {
      setSendLoder(false)
    }
  }


  return (
    <div className=' w-screen overflow-hidden '>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-10 right-8 z-50 w-14 h-14 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg transition-opacity duration-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
          } hover:bg-blue-600`}
      >
        <ArrowUp size={24} />
      </button>

      <div className="dark:bg-gray-900 dark:text-white min-h-screen transition-colors duration-200">
        <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        {/* Hero Section */}
        <section id="home" className=" min-h-[100dvh] pb-8 pt-8 md:pt-0 max-h-[1200px] flex justify-start items-center ">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <div className="flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2">
                  <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                    Full-Stack Developer
                    <span className="block text-blue-600">Building Digital Solutions</span>
                  </h1>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                    Passionate about creating robust and scalable applications with modern technologies.
                    Specialized in React, Node.js, and cloud architecture.
                  </p>
                  <div className="flex gap-4 mb-8">
                    <a href="https://github.com/beaaniket" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                      <Github size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/aniket-chaturvedi-2114b2271/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                      <Linkedin size={24} />
                    </a>
                    <a href="https://leetcode.com/u/BE_A_ANIKET/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                      <Code2 size={24} />
                    </a>
                    <a target='blank' href={resume?.location} className=" hidden sm:inline-flex cursor-pointer items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors">
                      <Download size={20} />
                      Download Resume
                    </a>
                  </div>
                </div>
                <div className="lg:w-1/2  ">
                  <img
                    src={aniketlogo}
                    alt="Profile"
                    className="rounded-full w-72 h-72 object-cover mx-auto border-4 border-blue-600"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Coding Skills Section */}
        <section id="coding-skills" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-center mb-16">Coding Profiles</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {/* LeetCode Profile */}
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <Code2 size={32} className="text-yellow-500" />
                    <h3 className="text-xl font-semibold">LeetCode</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">Problems Solved</span>
                      <span className="font-semibold">600+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">Contest Rating</span>
                      <span className="font-semibold text-yellow-500">1500</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">Global Rank</span>
                      <span className="font-semibold text-blue-600">Top 20%</span>
                    </div>
                  </div>
                </div>

                {/* <a href="https://leetcode.com/BE_A_ANIKET/">
                  <img src="https://leetcard.jacoblin.cool/BE_A_ANIKET?theme=light&font=Goldman&ext=activityy"></img>
                </a> */}

                {/* GitHub Stats */}
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <Github size={32} className="text-gray-700 dark:text-gray-300" />
                    <h3 className="text-xl font-semibold">GitHub</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">Repositories</span>
                      <div className="flex items-center gap-2">
                        <GitFork size={16} />
                        <span className="font-semibold">40+</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">Stars Earned</span>
                      <div className="flex items-center gap-2">
                        <Star size={16} className="text-yellow-500" />
                        <span className="font-semibold">20+</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">Contributions</span>
                      <div className="flex items-center gap-2">
                        <Heart size={16} className="text-red-500" />
                        <span className="font-semibold">100+</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CodeForces Profile */}
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <Code2 size={32} className="text-yellow-500" />
                    <h3 className="text-xl font-semibold">Geeks for geeks</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">Problems Solved</span>
                      <span className="font-semibold">300+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">Contest Rating</span>
                      <span className="font-semibold text-yellow-500">1500</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">Global Rank</span>
                      <span className="font-semibold text-blue-600">Top 40%</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-center mb-16">Technical Expertise</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:gap-2 gap-2  ">
              {[
                {
                  icon: <Layout className="w-8 h-8 text-blue-600" />,
                  title: "Frontend",
                  skills: ["React", "Next.js", "TypeScript", "Tailwind"]
                },
                {
                  icon: <Server className="w-8 h-8 text-green-600" />,
                  title: "Backend",
                  skills: ["Node.js", "Express.js", "Next.js (Full-stack)", "AWS Lambda"]
                },
                {
                  icon: <Database className="w-8 h-8 text-purple-600" />,
                  title: "Database",
                  skills: ["PostgreSQL", "MongoDB", "Redis", "MongoDB Full-Text Search"]
                },
                {
                  icon: <Globe className="w-8 h-8 text-orange-600" />,
                  title: "DevOps",
                  skills: ["AWS", "Docker", "GitHub Actions", "Linux", "CI/CD"]
                },
                {
                  icon: <Code className="w-8 h-8 text-gray-600" />,
                  title: "Version Control",
                  skills: ["Git", "GitHub"]
                },
                {
                  icon: <Brush className="w-8 h-8 text-pink-600" />,
                  title: "UI/UX & Design",
                  skills: ["Figma", "Tailwind CSS"]
                },
                {
                  icon: <Terminal className="w-8 h-8 text-cyan-600" />,
                  title: "Automation & Tools",
                  skills: ["Browser Extensions", "Excel Automation", "GitHub Actions"]
                },
                {
                  icon: <Cuboid className="w-8 h-8 text-indigo-600" />,
                  title: "Exploring",
                  skills: ["Blockchain", "Golang"]
                }
              ].map((skill, index) => (
                <AnimatedSection key={index} className="h-full">
                  <div className="bg-gray-50 dark:bg-gray-800 p-1 lg:p-6 rounded-xl shadow-lg h-full transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-gray-100 dark:hover:bg-gray-700">
                    {/* Icon Section */}
                    <div className="mb-4 flex justify-center">
                      {skill.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100 text-center mb-4">
                      {skill.title}
                    </h3>

                    {/* Skills List */}
                    <ul className="space-y-2">
                      {skill.skills.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 p-2 rounded-md text-gray-700 dark:text-gray-300 transition-all duration-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                          <ChevronRight size={18} className="text-blue-600 dark:text-blue-400" />
                          <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-center mb-16">My Projects</h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects && projects.length ? projects.map((project) => (
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
              )) : <ProjectCardSkeloton />}
            </div>
            <div className="text-center mt-12">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
              >
                View All Projects
                <ChevronRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* blog sections  */}
        <section id="blog" className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-center mb-16">Latest Blog Posts</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs && blogs.length ? blogs.map((blog, index) => (
                <AnimatedSection key={index} className="h-full">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg h-full flex flex-col">
                    <div className="mb-4"><BookOpen className="w-8 h-8 text-blue-600" /></div>
                    <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 flex-grow">{blog.description}</p>
                    <a
                      onClick={() => navigateTo(blog.link)}
                      target='blank'
                      className="mt-4 cursor-pointer inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Read More <ChevronRight size={16} className="ml-2" />
                    </a>
                  </div>
                </AnimatedSection>
              )) : <BlogSkeleton />}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-center mb-16">My Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  p1, p2, p3, p4, p5, p6
                ].map((image, index) => (
                  <AnimatedSection key={index} className="aspect-square">
                    <img
                      src={image}
                      alt={`Gallery Image ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg shadow-lg hover:opacity-75 transition-opacity cursor-pointer"
                    />
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* testonimals sections  */}
        <section id="testimonials" className="py-20 bg-gray-100 dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-center mb-16">What People Are Saying</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <AnimatedSection key={index} className="h-full">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <Quote className="w-6 h-6 text-blue-600" />
                      <span className="ml-2 text-lg font-semibold">{testimonial.name}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 flex-grow">"{testimonial.feedback}"</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400 text-nowrap truncate ">{testimonial.role}</span>
                      <div className="flex">
                        {Array.from({ length: Math.round(testimonial.rating) }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-center mb-16">Get In Touch</h2>
              <div className="max-w-2xl mx-auto">
                <form onSubmit={sendMail} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      value={contact.name}
                      required
                      onChange={(e) => setContact((prev) => ({ ...prev, name: e.target.value }))} placeholder='write your name '
                      className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800 focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={contact.email}
                      onChange={(e) => setContact((prev) => ({ ...prev, email: e.target.value }))}
                      placeholder='write your email'
                      className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800 focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={contact.message}
                      onChange={(e) => setContact((prev) => ({ ...prev, message: e.target.value }))}
                      placeholder='write somethings ..'
                      className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800 focus:ring-2 focus:ring-blue-600"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={sendLoder}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  >
                    {sendLoder ? <Loader2Icon size={20} className=' animate-spin ' /> : <Send size={20} />}
                    Send Message
                  </button>
                </form>
                <div className="mt-12 flex justify-center gap-3">
                  <a
                    href="mailto:aniketchaturvedi309@email.com"
                    className="flex items-center gap-3 text-blue-600 hover:text-blue-800"
                  >
                    <Mail size={20} />
                    <span className="text-sm font-semibold">aniketchaturvedi309@email.com</span>
                  </a>
                  <button
                    onClick={() => navigator.clipboard.writeText('aniketchaturvedi309@email.com')}
                    className=" active:scale-75 text-blue-600 rounded-full hover:bg-gray-200 transition duration-200 ease-in-out"
                  >
                    <Copy />
                  </button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-50 dark:bg-gray-800 py-12">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AniketChaturvedi
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Building digital solutions with passion and precision.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#home" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#skills" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                      Skills
                    </a>
                  </li>
                  <li>
                    <a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Connect</h4>
                <div className="flex gap-4">
                  <a href="https://github.com/beaaniket" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                    <Github size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/aniket-chaturvedi-2114b2271/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                    <Linkedin size={24} />
                  </a>
                  <a href="https://leetcode.com/u/BE_A_ANIKET/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                    <Code2 size={24} />
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t dark:border-gray-700 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400">
              <p>© {new Date().getFullYear()} DevPortfolio. All rights reserved.</p>
            </div>
          </div>
        </footer>

      </div >
    </div >
  );
}

export default App;