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
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <>
      <nav className={`${isVisible ? 'sticky' : 'fixed'}  top-0 w-full transition-all duration-100 bg-white dark:bg-gray-900 backdrop-blur-sm z-50 border-b dark:border-gray-800`}>
        <div className="container mx-auto px-2 py-3 relative">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AniketChaturvedi
            </Link>

            <div className="hidden lg:flex items-center gap-8">
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

            <div className="flex items-center gap-6  lg:pr-0">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <a
                href="#contact"
                className="bg-blue-600 hidden lg:block text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                Hire Me
              </a>

              {/* mobile nav */}
              <button
                onClick={() => setMenuOpen(true)}
                className="lg:hidden p-2 "
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>



      </nav >

      {/* Overlay */}

      <div
        className={` fixed inset-0 h-screen w-screen bg-black/50 backdrop-blur-lg z-40 transition-opacity ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      <div
        className={`fixed lg:hidden top-0 z-50 right-0 h-screen w-3/4 max-w-xs bg-white dark:bg-gray-900 shadow-lg pb-11 transform transition-transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'
          } overflow-hidden`}
      >
        <div className="p-6 flex flex-col h-full space-y-6">
          {/* Close Button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="self-end p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          >
            <X size={24} />
          </button>

          {/* Navigation Links */}
          <nav className="flex flex-col h-full justify-between">
            <div className=' flex w-full flex-col gap-2'>
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
            </div>

            <div className=' mt-full flex flex-col gap-2 '>
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
            </div>

          </nav>
        </div>
      </div>
    </>

  );
}

export default Navigation;