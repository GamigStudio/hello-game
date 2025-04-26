import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Driven by Detail. Defined by Realism.
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Welcome to HELLO GAMES LIMITED. Based in the UK, we are a passionate team of developers, 
            designers, and artists dedicated to pushing the boundaries of simulation gaming. 
            We believe in the power of immersion and specialise in creating intricate, authentic, 
            and engaging simulation experiences.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            From the physics of flight to the complexities of city management and the mechanics of 
            advanced vehicles, our focus is on capturing the essence of reality within a digital world. 
            We combine cutting-edge technology with meticulous research to build worlds that players 
            can truly lose themselves in.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm transition-transform duration-300 hover:transform hover:scale-105">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Precision</h3>
              <p className="text-gray-700">
                Our simulations are backed by meticulous research and real-world data.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm transition-transform duration-300 hover:transform hover:scale-105">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Immersion</h3>
              <p className="text-gray-700">
                We create environments that respond realistically to player actions.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm transition-transform duration-300 hover:transform hover:scale-105">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-700">
                We constantly push technology to enhance simulation fidelity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;