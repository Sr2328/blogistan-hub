import React from 'react';
import { useParams } from 'react-router-dom';
import { Play, ThumbsUp, Share2, Bookmark } from 'lucide-react';

const SingleVideoPage: React.FC = () => {
  const { id } = useParams();

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="lg:col-span-2">
          {/* Video player */}
          <div className="relative bg-black aspect-video rounded-xl overflow-hidden mb-6">
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors">
                <Play size={36} className="text-primary-600 ml-2" />
              </button>
            </div>
          </div>
          
          {/* Video info */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-6">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              Building a Full-Stack App with Next.js
            </h1>
            
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <span>By DevMastery</span>
                <span>•</span>
                <span>Feb 20, 2025</span>
                <span>•</span>
                <span>12.4K views</span>
              </div>
              
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                  <ThumbsUp size={20} />
                  <span>2.1K</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                  <Share2 size={20} />
                  <span>Share</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                  <Bookmark size={20} />
                  <span>Save</span>
                </button>
              </div>
            </div>
            
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Learn how to build a complete web application using Next.js, including API routes, authentication, and database integration. This comprehensive tutorial covers everything you need to know to get started with full-stack development using Next.js.
              </p>
            </div>
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Related Videos
          </h2>
          
          {/* Related videos list */}
          {[1, 2, 3].map((index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/4974920/pexels-photo-4974920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Video thumbnail"
                  className="w-full h-32 object-cover"
                />
                <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs py-1 px-2 rounded">
                  15:32
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
                  Advanced Next.js Patterns
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  8.2K views • 2 days ago
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleVideoPage;