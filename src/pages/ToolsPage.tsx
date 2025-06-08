import React, { useState } from 'react';
import { Search, Filter, ChevronDown, Star, ExternalLink } from 'lucide-react';

const ToolsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSort, setSelectedSort] = useState('Most Popular');
  const [showFilters, setShowFilters] = useState(false);
  
  const categories = ['All', 'Development', 'Design', 'Productivity', 'Marketing', 'Analytics', 'Communication'];
  const sortOptions = ['Most Popular', 'Highest Rated', 'Newest', 'Alphabetical'];
  
  const tools = [
    {
      id: 1,
      name: 'CodeSandbox',
      description: 'Online code editor and prototyping tool that helps you create and share web apps faster.',
      category: 'Development',
      rating: 4.8,
      reviewCount: 1243,
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      url: 'https://codesandbox.io',
      tags: ['Coding', 'Web Development', 'Collaboration'],
      date: '2025-01-15',
    },
    {
      id: 2,
      name: 'Figma',
      description: 'Collaborative interface design tool that lets you create, test, and ship better designs from start to finish.',
      category: 'Design',
      rating: 4.9,
      reviewCount: 2156,
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      url: 'https://figma.com',
      tags: ['UI/UX', 'Design', 'Prototyping'],
      date: '2025-01-20',
    },
    {
      id: 3,
      name: 'Notion',
      description: 'All-in-one workspace for notes, tasks, wikis, and databases to help you organize your work and life.',
      category: 'Productivity',
      rating: 4.7,
      reviewCount: 1876,
      image: 'https://images.pexels.com/photos/4974920/pexels-photo-4974920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      url: 'https://notion.so',
      tags: ['Notes', 'Tasks', 'Wiki', 'Database'],
      date: '2025-01-25',
    },
    {
      id: 4,
      name: 'Vercel',
      description: 'Platform for frontend frameworks and static sites, built to integrate with your headless content, commerce, or database.',
      category: 'Development',
      rating: 4.8,
      reviewCount: 1532,
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      url: 'https://vercel.com',
      tags: ['Hosting', 'Deployment', 'Serverless'],
      date: '2025-01-30',
    },
    {
      id: 5,
      name: 'Adobe XD',
      description: 'Vector-based user experience design tool for web apps and mobile apps that supports wireframing and creating animated prototypes.',
      category: 'Design',
      rating: 4.6,
      reviewCount: 1654,
      image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      url: 'https://adobe.com/products/xd.html',
      tags: ['UI/UX', 'Design', 'Prototyping'],
      date: '2025-02-05',
    },
    {
      id: 6,
      name: 'Google Analytics',
      description: 'Web analytics service that tracks and reports website traffic, currently as a platform inside the Google Marketing Platform brand.',
      category: 'Analytics',
      rating: 4.5,
      reviewCount: 2105,
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      url: 'https://analytics.google.com',
      tags: ['Analytics', 'Data', 'Marketing'],
      date: '2025-02-10',
    },
  ];
  
  // Filter and sort logic
  const filteredTools = tools
    .filter(tool => 
      (selectedCategory === 'All' || tool.category === selectedCategory) &&
      (tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
       tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
       tool.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
    )
    .sort((a, b) => {
      switch (selectedSort) {
        case 'Most Popular':
          return b.reviewCount - a.reviewCount;
        case 'Highest Rated':
          return b.rating - a.rating;
        case 'Newest':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'Alphabetical':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          Tools Directory
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Discover and explore useful tools to enhance your workflow and productivity.
        </p>
      </div>
      
      <div className="mb-8 space-y-4">
        {/* Search and filter controls */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <input
              type="search"
              placeholder="Search tools, categories, or tags..."
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
        Showing {filteredTools.length} {filteredTools.length === 1 ? 'tool' : 'tools'}
      </div>
      
      {/* Tools grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTools.map(tool => (
          <article key={tool.id} className="card overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-40">
              <img 
                src={tool.image} 
                alt={tool.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent"></div>
              <span className="absolute bottom-4 left-4 text-xs font-medium px-2 py-1 bg-white text-gray-800 rounded-full">
                {tool.category}
              </span>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                {tool.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-3">
                {tool.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {tool.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Ratings */}
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500 mr-2">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      fill={index < Math.floor(tool.rating) ? "currentColor" : "none"}
                      className={index < Math.floor(tool.rating) ? "" : "text-gray-300 dark:text-gray-600"}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {tool.rating} ({tool.reviewCount})
                </span>
              </div>
              
              {/* Actions */}
              <div className="flex gap-3">
                <a 
                  href={`/tools/${tool.id}`} 
                  className="btn btn-primary flex-1 text-center"
                >
                  View Details
                </a>
                <a 
                  href={tool.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 p-2"
                  aria-label={`Visit ${tool.name} website`}
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      
      {/* Empty state */}
      {filteredTools.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🧰</div>
          <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-2">
            No tools found
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Try adjusting your filters or search query.
          </p>
          <button 
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
              setSelectedSort('Most Popular');
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

export default ToolsPage;