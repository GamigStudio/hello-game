import React from 'react';
import { companyInfo } from '../data';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">HELLO GAMES</h3>
            <p className="text-sm">
              Building Worlds, Simulating Reality.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/privacy"
                  className="text-sm hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="/terms"
                  className="text-sm hover:text-white transition-colors duration-300"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <p className="text-sm mb-2">{companyInfo.email}</p>
            <p className="text-sm">
              Registered in England and Wales.<br />
              Company Number: {companyInfo.regNumber}
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-xs text-gray-500">
          <p className="mb-2">
            © {companyInfo.year} {companyInfo.name}. All Rights Reserved.
          </p>
          <p className="mb-2">
            Registered Office: {companyInfo.address}
          </p>
          <p>
            Contact: {companyInfo.email}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;