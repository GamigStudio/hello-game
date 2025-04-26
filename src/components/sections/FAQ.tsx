import React, { useState } from 'react';
import { faqs } from '../../data';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={faq.id} 
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {openIndex === index ? 
                    <ChevronUp className="text-gray-500" size={20} /> : 
                    <ChevronDown className="text-gray-500" size={20} />
                  }
                </button>
                <div 
                  className={`p-4 bg-white transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 hidden'
                  }`}
                >
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;