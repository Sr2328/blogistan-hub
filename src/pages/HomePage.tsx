import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Bookmark, Eye, Star, Clock } from 'lucide-react';
import FeaturedContent from '../components/home/FeaturedContent';
import RecentBlogs from '../components/home/RecentBlogs';
import PopularVideos from '../components/home/PopularVideos';
import TrendingTools from '../components/home/TrendingTools';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-700 rounded-xl p-8 text-white">
        <div className="max-w-4xl mx-auto text-center py-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 slide-up">
            Your Content, Organized
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 slide-up">
            Discover, organize, and share your blogs, videos, and favorite tools all in one place.
          </p>
          <div className="flex flex-wrap justify-center gap-4 slide-up">
            <Link to="/blogs" className="btn bg-white text-primary-700 hover:bg-gray-100">
              Explore Blogs
            </Link>
            <Link to="/videos" className="btn bg-opacity-20 bg-white text-white border border-white hover:bg-opacity-30">
              Watch Videos
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <FeaturedContent />
      
      {/* Content Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <RecentBlogs />
        <PopularVideos />
        <TrendingTools />
      </div>
      
      {/* Categories Section */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            Browse by Category
          </h2>
          <Link to="/categories" className="text-primary-600 dark:text-primary-400 flex items-center hover:underline">
            <span>View all</span>
            <ChevronRight size={16} />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4">
          {['Web Development', 'Mobile Apps', 'Design', 'AI & ML', 'Productivity', 'DevOps'].map((category) => (
            <Link 
              to={`/categories/${category.toLowerCase().replace(/\s+/g, '-')}`}
              key={category}
              className="card p-6 text-center hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
            >
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">{getEmoji(category)}</span>
              </div>
              <h3 className="font-medium text-gray-800 dark:text-gray-200">{category}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {getCount(category)} items
              </p>
            </Link>
          ))}
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-accent-50 dark:bg-gray-800 rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold text-accent-800 dark:text-accent-300 mb-4">
          Start Organizing Your Content Today
        </h2>
        <p className="text-accent-700 dark:text-accent-400 max-w-2xl mx-auto mb-6">
          Join thousands of content creators who use ContentHub to manage their digital library.
        </p>
        <Link to="/register" className="btn btn-accent">
          Get Started for Free
        </Link>
      </section>
    </div>
  );
};

// Helper functions
const getEmoji = (category: string): string => {
  const emojis: Record<string, string> = {
    'Web Development': '💻',
    'Mobile Apps': '📱',
    'Design': '🎨',
    'AI & ML': '🤖',
    'Productivity': '⚡',
    'DevOps': '🚀',
  };
  return emojis[category] || '📚';
};

const getCount = (category: string): number => {
  // This would come from an API in a real app
  const counts: Record<string, number> = {
    'Web Development': 145,
    'Mobile Apps': 87,
    'Design': 112,
    'AI & ML': 94,
    'Productivity': 76,
    'DevOps': 63,
  };
  return counts[category] || 0;
};

export default HomePage;