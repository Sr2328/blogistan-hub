import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="text-8xl mb-6">🧩</div>
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
        Page Not Found
      </h1>
      <p className="text-gray-600 dark:text-gray-400 max-w-md mb-8">
        The page you're looking for doesn't exist or has been moved to another URL.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/"
          className="btn btn-primary flex items-center justify-center gap-2"
        >
          <Home size={20} />
          <span>Back to Home</span>
        </Link>
        <button
          onClick={() => window.history.back()}
          className="btn bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;