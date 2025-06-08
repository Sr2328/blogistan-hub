import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, FileText, Video, PenTool as Tool, Tag, Bookmark, Settings, X } from 'lucide-react';

interface SidebarProps {
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  const navItems = [
    { name: 'Home', path: '/', icon: <Home size={20} /> },
    { name: 'Blogs', path: '/blogs', icon: <FileText size={20} /> },
    { name: 'Videos', path: '/videos', icon: <Video size={20} /> },
    { name: 'Tools', path: '/tools', icon: <Tool size={20} /> },
    { name: 'Categories', path: '/categories', icon: <Tag size={20} /> },
    { name: 'Bookmarks', path: '/bookmarks', icon: <Bookmark size={20} /> },
    { name: 'Settings', path: '/settings', icon: <Settings size={20} /> },
  ];

  return (
    <aside className="w-64 h-full bg-white dark:bg-gray-800 shadow-lg">
      <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700 md:hidden">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Menu</h2>
        <button 
          onClick={onClose} 
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          aria-label="Close sidebar"
        >
          <X size={24} />
        </button>
      </div>
      
      <nav className="p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) => `
                  flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                  ${isActive ? 
                    'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300' : 
                    'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}
                `}
                onClick={onClose}
              >
                {item.icon}
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 mt-4">
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
          <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Quick Filters</h3>
          <div className="flex flex-wrap gap-2">
            <button className="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full">
              Recent
            </button>
            <button className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full">
              Popular
            </button>
            <button className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full">
              Featured
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;