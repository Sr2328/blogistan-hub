import React from 'react';
import { useParams } from 'react-router-dom';

const SingleBlogPage: React.FC = () => {
  const { id } = useParams();

  return (
    <div className="max-w-4xl mx-auto">
      <article className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <img 
          src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Blog cover"
          className="w-full h-64 object-cover"
        />
        
        <div className="p-8">
          <div className="mb-6">
            <span className="text-sm font-medium px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full">
              Web Development
            </span>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Mastering TypeScript: Advanced Techniques
          </h1>
          
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <span>By Alex Johnson</span>
            <span>•</span>
            <span>Feb 18, 2025</span>
            <span>•</span>
            <span>8 min read</span>
          </div>
          
          <div className="prose dark:prose-invert max-w-none">
            <p>
              This is a placeholder for the blog content. In a real application, this would be populated with the actual blog post content from your database or CMS.
            </p>
            
            <h2>Introduction</h2>
            <p>
              TypeScript has become an essential tool in modern web development, offering powerful features that help developers write more maintainable and scalable code.
            </p>
            
            <h2>Advanced Types</h2>
            <p>
              Understanding advanced TypeScript types is crucial for building robust applications. Let's explore some of the more complex type features that TypeScript offers.
            </p>
            
            <h2>Best Practices</h2>
            <p>
              Following established best practices helps ensure your TypeScript code remains maintainable and performs well at scale.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default SingleBlogPage;