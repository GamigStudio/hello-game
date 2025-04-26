import React from 'react';
import { team } from '../../data';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The Architects Behind the Simulations
          </h2>
          <p className="text-lg text-gray-700">
            HELLO GAMES LIMITED is powered by a diverse team of talented individuals united by a 
            shared passion for simulation and gaming. While we value our collective effort, we believe 
            our strength comes from the unique expertise each member brings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-white p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md text-center"
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-400">
                  {member.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-blue-600 font-medium mb-3">{member.role}</p>
              {member.bio && <p className="text-gray-700 text-sm">{member.bio}</p>}
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-2xl mx-auto text-center">
          <p className="text-gray-700">
            We are engineers, artists, designers, and testers dedicated to creating world-class 
            simulation experiences. Our team combines decades of industry experience with fresh 
            perspectives to deliver games that push the boundaries of what's possible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;