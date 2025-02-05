import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface NavigationProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

function Navigation({ darkMode, toggleDarkMode }: NavigationProps) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const navigate = useNavigate()
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false)
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

  return (
    <nav className={`${isVisible ? 'fixed' : 'sticky'} top-0 w-full transition-all duration-100 bg-white dark:bg-gray-900 backdrop-blur-sm z-50 border-b dark:border-gray-800`}>
      <div className="container mx-auto px-6 py-4 relative">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AniketChaturvedi
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            {isHomePage && (
              <>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                >
                  Gallery
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                >
                  Contact
                </button>
              </>
            )}
          </div>

          <div className="flex items-center gap-6 pr-8 md:pr-0">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a
              href="#contact"
              className="bg-blue-600 hidden md:block text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              Hire Me
            </a>
          </div>
        </div>


        {/* mobile nav */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden absolute right-2 top-[14px]  p-2 "
        >
          <Menu size={24} />
        </button>

        {/* Overlay */}
        <div
          className={` absolute inset-0 h-screen w-screen bg-black/50 backdrop-blur-lg z-40 transition-opacity ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
          onClick={() => setMenuOpen(false)}
        ></div>

        {/* Mobile Menu Panel */}
        <div
          className={`absolute md:hidden top-0 right-0 h-screen w-3/4 max-w-xs bg-white dark:bg-gray-900 shadow-lg z-50 transform transition-transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="p-6 flex flex-col space-y-6">
            {/* Close Button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="self-end p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Navigation Links */}
            <nav className="flex flex-col space-y-2">
              <a
                onClick={() => navigate('/')}
                className="text-lg text-gray-800 dark:text-gray-300 hover:text-blue-500 font-mono tracking-wide"
              >
                Home
              </a>
              <a
                onClick={() => navigate('/about')}
                className="text-lg text-gray-800 dark:text-gray-300 hover:text-blue-500 font-mono tracking-wide"
              >
                About
              </a>
              <a
                onClick={() => navigate('/projects')}
                className="text-lg text-gray-800 dark:text-gray-300 hover:text-blue-500 font-mono tracking-wide"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="bg-blue-600 text-center text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors font-mono tracking-wider"
              >
                Hire Me
              </a>
              <a
                href="#contact"
                className="bg-blue-600 text-white px-4 py-2 text-center rounded-full hover:bg-blue-700 transition-colors font-mono tracking-wider"
              >
                Contact Me
              </a>
            </nav>
          </div>
        </div>

      </div>
    </nav >
  );
}

export default Navigation;