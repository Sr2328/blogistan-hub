import React, { useState } from 'react';
import { Search, Filter, ChevronDown, Play } from 'lucide-react';

const VideosPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSort, setSelectedSort] = useState('Newest');
  const [showFilters, setShowFilters] = useState(false);
  
  const categories = ['All', 'Web Development', 'Mobile Apps', 'Design', 'AI & ML', 'Productivity', 'DevOps'];
  const sortOptions = ['Newest', 'Oldest', 'Most Viewed', 'Highest Rated'];
  
  const videos = [
    {
      id: 1,
      title: 'Building a Full-Stack App with Next.js',
      description: 'Learn how to build a complete web application using Next.js, including API routes, authentication, and database integration.',
      thumbnail: 'https://images.pexels.com/photos/4974920/pexels-photo-4974920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Web Development',
      duration: '18:42',
      views: 12453,
      date: '2025-02-20',
      author: 'DevMastery',
    },
    {
      id: 2,
      title: 'Introduction to Machine Learning with Python',
      description: 'A beginner-friendly introduction to machine learning concepts and implementation using Python and scikit-learn.',
      thumbnail: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'AI & ML',
      duration: '24:15',
      views: 8729,
      date: '2025-02-15',
      author: 'DataScientist',
    },
    {
      id: 3,
      title: 'Docker Containers Explained Simply',
      description: 'A simple explanation of what Docker containers are and how they work, with practical examples and use cases.',
      thumbnail: 'https://images.pexels.com/photos/4393683/pexels-photo-4393683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'DevOps',
      duration: '12:07',
      views: 5632,
      date: '2025-02-10',
      author: 'CloudGuru',
    },
    {
      id: 4,
      title: 'Modern UI Design Principles',
      description: 'Explore the key principles of modern UI design, including typography, color theory, layout, and more.',
      thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Design',
      duration: '15:32',
      views: 7845,
      date: '2025-02-05',
      author: 'DesignMaster',
    },
    {
      id: 5,
      title: 'Swift Programming for iOS Development',
      description: 'A comprehensive guide to Swift programming language for building iOS applications.',
      thumbnail: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Mobile Apps',
      duration: '22:18',
      views: 6321,
      date: '2025-01-30',
      author: 'AppDeveloper',
    },
    {
      id: 6,
      title: 'Getting Started with TypeScript',
      description: 'Learn the basics of TypeScript and how it improves JavaScript development with static typing and advanced features.',
      thumbnail: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Web Development',
      duration: '16:49',
      views: 9254,
      date: '2025-01-25',
      author: 'CodeMaster',
    },
  ];
  
  // Filter and sort logic
  const filteredVideos = videos
    .filter(video => 
      (selectedCategory === 'All' || video.category === selectedCategory) &&
      (video.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
       video.description.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      switch (selectedSort) {
        case 'Newest':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'Oldest':
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'Most Viewed':
          return b.views - a.views;
        case 'Highest Rated':
          // This would use ratings in a real app
          return Math.random() - 0.5;
        default:
          return 0;
      }
    });

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          Video Library
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Watch tutorials, guides, and informative videos on various topics.
        </p>
      </div>
      
      <div className="mb-8 space-y-4">
        {/* Search and filter controls */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <input
              type="search"
              placeholder="Search videos..."
              className="input pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden btn bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 flex items-center gap-2"
          >
            <Filter size={18} />
            <span>Filters</span>
            <ChevronDown size={16} className={`transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>
        </div>
        
        {/* Filter options - always visible on desktop, toggleable on mobile */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${showFilters ? 'block' : 'hidden md:grid'}`}>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Category
            </label>
            <select
              className="input"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Sort by
            </label>
            <select
              className="input"
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value)}
            >
              {sortOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      {/* Results count */}
      <div className="text-sm text-gray-600 dark:text-gray-400 mb-6">
        Showing {filteredVideos.length} {filteredVideos.length === 1 ? 'video' : 'videos'}
      </div>
      
      {/* Videos grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map(video => (
          <article key={video.id} className="card overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <img 
                src={video.thumbnail} 
                alt={video.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-40 transition-all">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                  <Play size={24} className="text-primary-600 ml-1" />
                </div>
              </div>
              <span className="absolute top-4 left-4 text-xs font-medium px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full">
                {video.category}
              </span>
              <span className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white text-xs py-1 px-2 rounded">
                {video.duration}
              </span>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 line-clamp-2">
                {video.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-2">
                {video.description}
              </p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  By {video.author}
                </span>
                <span className="text-gray-500 dark:text-gray-400">
                  {formatViews(video.views)} views
                </span>
              </div>
              <div className="mt-4">
                <a 
                  href={`/videos/${video.id}`} 
                  className="btn btn-primary w-full flex justify-center items-center gap-2"
                >
                  <Play size={16} />
                  <span>Watch Video</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      
      {/* Empty state */}
      {filteredVideos.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🎬</div>
          <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-2">
            No videos found
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Try adjusting your filters or search query.
          </p>
          <button 
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
              setSelectedSort('Newest');
            }}
            className="btn btn-primary"
          >
            Reset filters
          </button>
        </div>
      )}
    </div>
  );
};

// Helper function
const formatViews = (views: number): string => {
  if (views >= 1000000) {
    return (views / 1000000).toFixed(1) + 'M';
  } else if (views >= 1000) {
    return (views / 1000).toFixed(1) + 'K';
  } else {
    return views.toString();
  }
};

export default VideosPage;