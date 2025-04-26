import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CookieBanner from './CookieBanner';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      setShowCookieBanner(true);
    }
  }, []);

  const handleCookieAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowCookieBanner(false);
  };

  const handleCookieDecline = () => {
    // Still need to hide the banner even if cookies are declined
    localStorage.setItem('cookiesAccepted', 'false');
    setShowCookieBanner(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      {showCookieBanner && (
        <CookieBanner
          onAccept={handleCookieAccept}
          onDecline={handleCookieDecline}
        />
      )}
    </div>
  );
};

export default Layout;