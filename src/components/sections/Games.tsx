import React from 'react';
import { games } from '../../data';

const Games: React.FC = () => {
  return (
    <section id="games" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Step Into Our Worlds
          </h2>
          <p className="text-lg text-gray-700">
            Explore our portfolio of simulation titles. Each game is a testament to our commitment 
            to realism, depth, and player engagement. Discover the experiences we've brought to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {games.map((game) => (
            <div 
              key={game.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={game.imageUrl} 
                  alt={game.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{game.title}</h3>
                <p className="text-gray-700 mb-4">
                  {game.description}
                </p>
                <div className="flex justify-end">
                  <button 
                    className={`px-4 py-2 text-sm font-medium rounded transition-colors duration-300 ${
                      game.id === 'game3' 
                        ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    {game.id === 'game3' ? 'Coming Soon' : 'Learn More'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Games;