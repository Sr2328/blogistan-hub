import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <Link to="/" className="text-xl font-bold text-primary-600 dark:text-primary-400 flex items-center gap-2">
              <span className="text-2xl">📝</span>
              <span>ContentHub</span>
            </Link>
            <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm">
              Your one-stop platform for all your blogs, articles, videos, and tools.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-gray-800 dark:text-gray-200 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Blogs', 'Videos', 'Tools'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item === 'Home' ? '' : item.toLowerCase()}`} 
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-gray-800 dark:text-gray-200 font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {['About', 'Contact', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact & Social */}
          <div>
            <h3 className="text-gray-800 dark:text-gray-200 font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Subscribe to our newsletter for updates
            </p>
            <div className="mt-2 flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="input text-sm py-1 rounded-r-none" 
              />
              <button className="btn btn-primary py-1 rounded-l-none text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-600 dark:text-gray-400">
          &copy; {currentYear} ContentHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;