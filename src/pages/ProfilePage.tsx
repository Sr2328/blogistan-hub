import React from 'react';
import { Navigate } from 'react-router-dom';

const ProfilePage: React.FC = () => {
  // This would come from your auth context in a real app
  const isAuthenticated = false;
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    joinDate: '2025-01-15',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  };

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          Profile
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your account settings and view your content.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="md:col-span-1">
          <div className="card p-6">
            <div className="flex flex-col items-center">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-1">
                {user.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {user.email}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Member since {new Date(user.joinDate).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-2">
          {/* Account Settings */}
          <div className="card p-6 mb-6">
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4">
              Account Settings
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="input"
                  defaultValue={user.name}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="input"
                  defaultValue={user.email}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  className="input"
                  placeholder="••••••••"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
            </form>
          </div>

          {/* Content Stats */}
          <div className="card p-6">
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4">
              Your Content
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  12
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Blog Posts
                </div>
              </div>
              <div className="p-4 bg-secondary-50 dark:bg-secondary-900/20 rounded-lg">
                <div className="text-2xl font-bold text-secondary-600 dark:text-secondary-400">
                  8
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Videos
                </div>
              </div>
              <div className="p-4 bg-accent-50 dark:bg-accent-900/20 rounded-lg">
                <div className="text-2xl font-bold text-accent-600 dark:text-accent-400">
                  15
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Tools Shared
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;