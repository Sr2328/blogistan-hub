import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Clock } from 'lucide-react';
import { formatDistance } from 'date-fns';

const RecentBlogs: React.FC = () => {
  const blogs = [
    {
      id: 1,
      title: 'Mastering TypeScript: Advanced Techniques',
      excerpt: 'Discover advanced TypeScript patterns to make your code more robust.',
      category: 'Web Development',
      date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
    },
    {
      id: 2,
      title: 'Building Accessible UIs: A Complete Guide',
      excerpt: 'Learn how to create web applications that everyone can use.',
      category: 'Design',
      date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 4), // 4 days ago
    },
    {
      id: 3,
      title: 'Optimizing React Performance',
      excerpt: 'Practical strategies to make your React apps lightning fast.',
      category: 'Web Development',
      date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5), // 5 days ago
    },
  ];

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
          Recent Blogs
        </h2>
        <Link to="/blogs" className="text-primary-600 dark:text-primary-400 flex items-center hover:underline text-sm">
          <span>View all</span>
          <ChevronRight size={16} />
        </Link>
      </div>
      
      <div className="space-y-4">
        {blogs.map((blog) => (
          <Link 
            key={blog.id}
            to={`/blogs/${blog.id}`}
            className="card p-4 block hover:border-primary-300 dark:hover:border-primary-700 border border-transparent"
          >
            <span className="text-xs font-medium px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full">
              {blog.category}
            </span>
            <h3 className="font-medium text-gray-800 dark:text-gray-200 mt-2">
              {blog.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
              {blog.excerpt}
            </p>
            <div className="flex items-center mt-3 text-xs text-gray-500 dark:text-gray-400">
              <Clock size={14} className="mr-1" />
              <span>{formatDistance(blog.date, new Date(), { addSuffix: true })}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RecentBlogs;