import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { Search, Moon, Sun, User, Menu } from 'lucide-react';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isAuthenticated, setIsAuthenticated] = React.useState(false); // This would be from auth context in a real app

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md py-4 px-6">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-primary-600 dark:text-primary-400 flex items-center gap-2">
            <span className="text-3xl">📝</span>
            <span>ContentHub</span>
          </Link>
        </div>
        
        {/* Search bar */}
        <form onSubmit={handleSearch} className="flex-1 max-w-md">
          <div className="relative">
            <input
              type="search"
              placeholder="Search for blogs, videos, tools..."
              className="input pr-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button 
              type="submit" 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
          </div>
        </form>
        
        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Theme toggle */}
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          {/* Profile/Auth */}
          {isAuthenticated ? (
            <Link 
              to="/profile" 
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              aria-label="Profile"
            >
              <User size={20} />
            </Link>
          ) : (
            <Link 
              to="/login" 
              className="btn btn-primary"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;