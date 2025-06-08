import React, { useState } from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';

const BlogsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSort, setSelectedSort] = useState('Newest');
  const [showFilters, setShowFilters] = useState(false);
  
  const categories = ['All', 'Web Development', 'Mobile Apps', 'Design', 'AI & ML', 'Productivity', 'DevOps'];
  const sortOptions = ['Newest', 'Oldest', 'Most Popular', 'Alphabetical'];
  
  const blogPosts = [
    {
      id: 1,
      title: 'Mastering TypeScript: Advanced Techniques',
      excerpt: 'Discover advanced TypeScript patterns to make your code more robust and maintainable. This guide covers mapped types, conditional types, and more.',
      category: 'Web Development',
      author: 'Alex Johnson',
      date: '2025-02-18',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 2,
      title: 'Building Accessible UIs: A Complete Guide',
      excerpt: 'Learn how to create web applications that everyone can use, regardless of their abilities or disabilities. This comprehensive guide covers ARIA attributes, keyboard navigation, and more.',
      category: 'Design',
      author: 'Sophia Martinez',
      date: '2025-02-15',
      readTime: '12 min read',
      image: 'https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 3,
      title: 'Optimizing React Performance',
      excerpt: 'Practical strategies to make your React apps lightning fast. We\'ll explore memoization, code splitting, virtualization, and more techniques to optimize performance.',
      category: 'Web Development',
      author: 'James Wilson',
      date: '2025-02-12',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 4,
      title: 'Introduction to Machine Learning with Python',
      excerpt: 'Get started with machine learning using Python and scikit-learn. This beginner-friendly guide will teach you the fundamentals of ML algorithms and how to implement them.',
      category: 'AI & ML',
      author: 'Emily Chen',
      date: '2025-02-08',
      readTime: '15 min read',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 5,
      title: 'The Future of Mobile App Development',
      excerpt: 'Explore the emerging trends and technologies that will shape the future of mobile app development, including cross-platform frameworks, AI integration, and more.',
      category: 'Mobile Apps',
      author: 'Ryan Taylor',
      date: '2025-02-05',
      readTime: '9 min read',
      image: 'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 6,
      title: 'Docker Containers: A Practical Guide',
      excerpt: 'Learn how to use Docker containers to streamline your development and deployment processes. This hands-on guide covers everything from basic concepts to advanced techniques.',
      category: 'DevOps',
      author: 'Michael Brown',
      date: '2025-02-01',
      readTime: '11 min read',
      image: 'https://images.pexels.com/photos/4393683/pexels-photo-4393683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];
  
  // Filter and sort logic
  const filteredBlogs = blogPosts
    .filter(blog => 
      (selectedCategory === 'All' || blog.category === selectedCategory) &&
      (blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
       blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      switch (selectedSort) {
        case 'Newest':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'Oldest':
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'Alphabetical':
          return a.title.localeCompare(b.title);
        case 'Most Popular':
          // This would use view count or likes in a real app
          return Math.random() - 0.5;
        default:
          return 0;
      }
    });

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          Blog Articles
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Discover insightful articles, tutorials, and guides on various topics.
        </p>
      </div>
      
      <div className="mb-8 space-y-4">
        {/* Search and filter controls */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <input
              type="search"
              placeholder="Search articles..."
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
        Showing {filteredBlogs.length} {filteredBlogs.length === 1 ? 'article' : 'articles'}
      </div>
      
      {/* Blog posts grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlogs.map(blog => (
          <article key={blog.id} className="card overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <img 
                src={blog.image} 
                alt={blog.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="text-xs font-medium px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full">
                  {blog.category}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 line-clamp-2">
                {blog.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                {blog.excerpt}
              </p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500 dark:text-gray-400">{blog.readTime}</span>
                <span className="text-gray-500 dark:text-gray-400">{formatDate(blog.date)}</span>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  By {blog.author}
                </span>
                <a 
                  href={`/blogs/${blog.id}`} 
                  className="text-primary-600 dark:text-primary-400 font-medium hover:underline"
                >
                  Read more
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      
      {/* Empty state */}
      {filteredBlogs.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📝</div>
          <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-2">
            No articles found
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
const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

export default BlogsPage;