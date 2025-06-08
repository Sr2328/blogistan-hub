import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Play } from 'lucide-react';

const PopularVideos: React.FC = () => {
  const videos = [
    {
      id: 1,
      title: 'Building a Full-Stack App with Next.js',
      thumbnail: 'https://images.pexels.com/photos/4974920/pexels-photo-4974920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      duration: '18:42',
      views: 12453,
    },
    {
      id: 2,
      title: 'Introduction to Machine Learning with Python',
      thumbnail: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      duration: '24:15',
      views: 8729,
    },
    {
      id: 3,
      title: 'Docker Containers Explained Simply',
      thumbnail: 'https://images.pexels.com/photos/4393683/pexels-photo-4393683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      duration: '12:07',
      views: 5632,
    },
  ];

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
          Popular Videos
        </h2>
        <Link to="/videos" className="text-primary-600 dark:text-primary-400 flex items-center hover:underline text-sm">
          <span>View all</span>
          <ChevronRight size={16} />
        </Link>
      </div>
      
      <div className="space-y-4">
        {videos.map((video) => (
          <Link 
            key={video.id}
            to={`/videos/${video.id}`}
            className="card block"
          >
            <div className="relative">
              <img 
                src={video.thumbnail} 
                alt={video.title}
                className="w-full h-36 object-cover rounded-t-xl"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-40 transition-all">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <Play size={20} className="text-primary-600 ml-1" />
                </div>
              </div>
              <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs py-1 px-2 rounded">
                {video.duration}
              </span>
            </div>
            <div className="p-3">
              <h3 className="font-medium text-gray-800 dark:text-gray-200 line-clamp-2">
                {video.title}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {formatViews(video.views)} views
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
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

export default PopularVideos;