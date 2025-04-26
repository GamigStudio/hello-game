import React from 'react';
import Layout from '../components/Layout';
import { companyInfo } from '../data';

const PrivacyPolicy: React.FC = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
            
            <p className="text-gray-700 mb-6">
              Your privacy is important to us. This policy explains how HELLO GAMES LIMITED collects, 
              uses, and protects your personal data when you use our website and services, in compliance 
              with GDPR and UK data protection laws.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              We may collect the following information:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Name and contact information, including email address</li>
              <li>Demographic information such as preferences and interests</li>
              <li>Other information relevant to customer surveys and/or offers</li>
              <li>Information about your visits to our website through cookies and analytics</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use this information to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Improve our products and services</li>
              <li>Communicate with you about our products, services and promotions</li>
              <li>Customize the website according to your interests</li>
              <li>Process transactions or send information you have requested</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Cookies</h2>
            <p className="text-gray-700 mb-6">
              Our website uses cookies to distinguish you from other users of our website. This helps us 
              provide you with a good experience when you browse our website and allows us to improve our site. 
              By continuing to browse the site, you are agreeing to our use of cookies.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Data Security</h2>
            <p className="text-gray-700 mb-6">
              We are committed to ensuring that your information is secure. In order to prevent unauthorized 
              access or disclosure, we have put in place suitable physical, electronic and managerial 
              procedures to safeguard and secure the information we collect online.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Your Rights</h2>
            <p className="text-gray-700 mb-4">
              Under the GDPR, you have the following rights:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>The right to access your personal data</li>
              <li>The right to rectification of your personal data</li>
              <li>The right to erasure of your personal data</li>
              <li>The right to restrict processing of your personal data</li>
              <li>The right to data portability</li>
              <li>The right to object to processing of your personal data</li>
              <li>Rights in relation to automated decision making and profiling</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Changes to Our Privacy Policy</h2>
            <p className="text-gray-700 mb-6">
              We may change this policy from time to time by updating this page. You should check this page 
              regularly to ensure that you are happy with any changes.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Contact Information</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions about this privacy policy or our data practices, please contact us at:<br />
              <strong>{companyInfo.email}</strong><br />
              <strong>{companyInfo.name}</strong><br />
              <strong>{companyInfo.address}</strong>
            </p>

            <div className="mt-8 pt-6 border-t border-gray-200 text-sm text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;