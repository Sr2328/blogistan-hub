import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const FeaturedContent: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const featuredItems = [
    {
      id: 1,
      title: 'The Future of Web Development in 2025',
      excerpt: 'Exploring the upcoming trends and technologies that will shape web development.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      type: 'blog',
      category: 'Web Development',
    },
    {
      id: 2,
      title: 'Building AI-Powered Applications',
      excerpt: 'Learn how to integrate machine learning models into your web and mobile apps.',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      type: 'video',
      category: 'AI & ML',
    },
    {
      id: 3,
      title: 'Essential Tools for Remote Development Teams',
      excerpt: 'A curated list of the best tools to improve productivity in distributed teams.',
      image: 'https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      type: 'tool',
      category: 'Productivity',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === featuredItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? featuredItems.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="relative">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          Featured Content
        </h2>
        <div className="flex gap-2">
          <button 
            onClick={prevSlide}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextSlide}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      
      <div className="overflow-hidden rounded-xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {featuredItems.map((item) => (
            <div key={item.id} className="min-w-full">
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                  <span className="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full w-fit mb-3">
                    {item.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 mb-4 max-w-2xl">
                    {item.excerpt}
                  </p>
                  <Link 
                    to={`/${item.type}s/${item.id}`}
                    className="btn btn-primary w-fit"
                  >
                    {item.type === 'blog' ? 'Read Article' : item.type === 'video' ? 'Watch Video' : 'Explore Tool'}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Indicators */}
      <div className="flex justify-center mt-4 gap-2">
        {featuredItems.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-primary-600' : 'bg-gray-300 dark:bg-gray-600'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedContent;