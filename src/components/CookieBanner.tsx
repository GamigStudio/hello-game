import React from 'react';

interface CookieBannerProps {
  onAccept: () => void;
  onDecline: () => void;
}

const CookieBanner: React.FC<CookieBannerProps> = ({ onAccept, onDecline }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm flex-1">
            This website uses cookies to enhance user experience and analyse traffic. 
            By clicking 'Accept', you consent to our use of cookies. You can read more 
            about how we use cookies in our{' '}
            <a 
              href="/privacy" 
              className="text-blue-400 hover:text-blue-300 underline transition-colors duration-300"
            >
              Privacy Policy
            </a>.
          </div>
          <div className="flex gap-4">
            <button
              onClick={onDecline}
              className="px-4 py-2 border border-gray-600 rounded text-sm hover:bg-gray-800 transition-colors duration-300"
            >
              Decline
            </button>
            <button
              onClick={onAccept}
              className="px-4 py-2 bg-blue-600 rounded text-sm hover:bg-blue-700 transition-colors duration-300"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;