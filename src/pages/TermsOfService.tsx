import React from 'react';
import Layout from '../components/Layout';
import { companyInfo } from '../data';

const TermsOfService: React.FC = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
            
            <p className="text-gray-700 mb-6">
              Please read these Terms of Service carefully before using the HELLO GAMES LIMITED website 
              or any of our games/services. By accessing or using our services, you agree to be bound by these terms.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-6">
              By accessing or using our website, games, or any other services provided by HELLO GAMES LIMITED, 
              you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, 
              you may not access or use our services.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Use License</h2>
            <p className="text-gray-700 mb-6">
              Permission is granted to temporarily download one copy of the materials on HELLO GAMES LIMITED's 
              website for personal, non-commercial transitory viewing only. This is the grant of a license, not 
              a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>modify or copy the materials;</li>
              <li>use the materials for any commercial purpose;</li>
              <li>attempt to decompile or reverse engineer any software contained on the website;</li>
              <li>remove any copyright or other proprietary notations from the materials; or</li>
              <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Disclaimer</h2>
            <p className="text-gray-700 mb-6">
              The materials on HELLO GAMES LIMITED's website are provided on an 'as is' basis. HELLO GAMES 
              LIMITED makes no warranties, expressed or implied, and hereby disclaims and negates all other 
              warranties including, without limitation, implied warranties or conditions of merchantability, 
              fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Limitations</h2>
            <p className="text-gray-700 mb-6">
              In no event shall HELLO GAMES LIMITED or its suppliers be liable for any damages (including, 
              without limitation, damages for loss of data or profit, or due to business interruption) arising 
              out of the use or inability to use the materials on HELLO GAMES LIMITED's website, even if 
              HELLO GAMES LIMITED or a HELLO GAMES LIMITED authorized representative has been notified orally 
              or in writing of the possibility of such damage.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Accuracy of Materials</h2>
            <p className="text-gray-700 mb-6">
              The materials appearing on HELLO GAMES LIMITED's website could include technical, typographical, 
              or photographic errors. HELLO GAMES LIMITED does not warrant that any of the materials on its 
              website are accurate, complete or current. HELLO GAMES LIMITED may make changes to the materials 
              contained on its website at any time without notice.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Links</h2>
            <p className="text-gray-700 mb-6">
              HELLO GAMES LIMITED has not reviewed all of the sites linked to its website and is not responsible 
              for the contents of any such linked site. The inclusion of any link does not imply endorsement by 
              HELLO GAMES LIMITED of the site. Use of any such linked website is at the user's own risk.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Modifications</h2>
            <p className="text-gray-700 mb-6">
              HELLO GAMES LIMITED may revise these terms of service for its website at any time without notice. 
              By using this website you are agreeing to be bound by the then current version of these terms of service.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Governing Law</h2>
            <p className="text-gray-700 mb-6">
              These terms and conditions are governed by and construed in accordance with the laws of England and 
              Wales and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Contact Information</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions about these Terms of Service, please contact us at:<br />
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

export default TermsOfService;