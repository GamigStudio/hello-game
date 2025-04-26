import React from 'react';

const Hero: React.FC = () => {
  const scrollToGames = () => {
    const element = document.getElementById('games');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center bg-gray-100 pt-16"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          Building Worlds, Simulating Reality.
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          HELLO GAMES LIMITED: Crafting immersive simulation experiences with unparalleled detail and realism.
        </p>
        <button
          onClick={scrollToGames}
          className="px-6 py-3 bg-blue-600 text-white rounded-md text-lg font-medium hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
        >
          Explore Our Games
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-white" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;