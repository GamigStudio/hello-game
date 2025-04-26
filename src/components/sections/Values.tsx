import React from 'react';
import { values } from '../../data';
import { Compass, Lightbulb, Users, Shield, Puzzle } from 'lucide-react';

const Values: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass size={36} className="text-blue-600" />;
      case 'Lightbulb':
        return <Lightbulb size={36} className="text-blue-600" />;
      case 'Users':
        return <Users size={36} className="text-blue-600" />;
      case 'Shield':
        return <Shield size={36} className="text-blue-600" />;
      case 'Puzzle':
        return <Puzzle size={36} className="text-blue-600" />;
      default:
        return <Compass size={36} className="text-blue-600" />;
    }
  };

  return (
    <section id="values" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The Principles That Guide Us
          </h2>
          <p className="text-lg text-gray-700">
            Our core values shape every aspect of our work, from initial concept to final delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value) => (
            <div
              key={value.id}
              className="bg-gray-50 p-8 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {getIcon(value.icon)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;