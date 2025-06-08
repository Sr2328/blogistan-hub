import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, ExternalLink, Share2, Bookmark } from 'lucide-react';

const SingleToolPage: React.FC = () => {
  const { id } = useParams();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
        {/* Hero section */}
        <div className="relative h-64">
          <img 
            src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Tool cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-6 left-6">
            <span className="text-sm font-medium px-3 py-1 bg-white text-gray-800 rounded-full mb-3 inline-block">
              Development
            </span>
            <h1 className="text-3xl font-bold text-white">
              CodeSandbox
            </h1>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-8">
          {/* Quick stats */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-6">
              <div>
                <div className="flex text-yellow-500 mb-1">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={20}
                      fill={index < 4 ? "currentColor" : "none"}
                      className={index < 4 ? "" : "text-gray-300 dark:text-gray-600"}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  4.8 (1,243 reviews)
                </span>
              </div>
              
              <div>
                <div className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
                  Category
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Development
                </div>
              </div>
              
              <div>
                <div className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
                  Last Updated
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Jan 15, 2025
                </div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <button className="btn btn-primary flex items-center gap-2">
                <ExternalLink size={18} />
                <span>Visit Website</span>
              </button>
              <button className="btn bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600">
                <Share2 size={18} />
              </button>
              <button className="btn bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600">
                <Bookmark size={18} />
              </button>
            </div>
          </div>
          
          {/* Description */}
          <div className="prose dark:prose-invert max-w-none mb-8">
            <h2>About CodeSandbox</h2>
            <p>
              CodeSandbox is an online code editor and prototyping tool that helps you create and share web applications faster. It supports a variety of templates and configurations, making it perfect for both learning and professional development.
            </p>
            
            <h2>Key Features</h2>
            <ul>
              <li>Real-time collaboration with team members</li>
              <li>Wide range of templates and starter configurations</li>
              <li>Integrated with GitHub for version control</li>
              <li>Live preview and hot module reloading</li>
              <li>Built-in npm package management</li>
            </ul>
            
            <h2>Use Cases</h2>
            <p>
              Perfect for prototyping, teaching, bug reporting, and creating reproducible examples. CodeSandbox makes it easy to share your code with others and get feedback quickly.
            </p>
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {['Coding', 'Web Development', 'Collaboration', 'IDE', 'JavaScript'].map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToolPage;