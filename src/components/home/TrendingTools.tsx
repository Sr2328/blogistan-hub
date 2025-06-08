import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star } from 'lucide-react';

const TrendingTools: React.FC = () => {
  const tools = [
    {
      id: 1,
      name: 'CodeSandbox',
      description: 'Online code editor and prototyping tool',
      category: 'Development',
      rating: 4.8,
      reviewCount: 1243,
    },
    {
      id: 2,
      name: 'Figma',
      description: 'Collaborative interface design tool',
      category: 'Design',
      rating: 4.9,
      reviewCount: 2156,
    },
    {
      id: 3,
      name: 'Notion',
      description: 'All-in-one workspace for notes and tasks',
      category: 'Productivity',
      rating: 4.7,
      reviewCount: 1876,
    },
  ];

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
          Trending Tools
        </h2>
        <Link to="/tools" className="text-primary-600 dark:text-primary-400 flex items-center hover:underline text-sm">
          <span>View all</span>
          <ChevronRight size={16} />
        </Link>
      </div>
      
      <div className="space-y-4">
        {tools.map((tool) => (
          <Link 
            key={tool.id}
            to={`/tools/${tool.id}`}
            className="card p-4 block hover:border-primary-300 dark:hover:border-primary-700 border border-transparent"
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-medium px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                  {tool.category}
                </span>
                <h3 className="font-medium text-gray-800 dark:text-gray-200 mt-2">
                  {tool.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {tool.description}
                </p>
              </div>
            </div>
            <div className="flex items-center mt-3 text-xs text-yellow-500">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  size={14}
                  fill={index < Math.floor(tool.rating) ? "currentColor" : "none"}
                  className={index < Math.floor(tool.rating) ? "" : "text-gray-300 dark:text-gray-600"}
                />
              ))}
              <span className="ml-1 text-gray-700 dark:text-gray-300">
                {tool.rating} ({tool.reviewCount})
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TrendingTools;