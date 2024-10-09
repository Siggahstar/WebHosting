import React from 'react';
import { FaGlobe } from 'react-icons/fa'; // Import an icon for the globe (using react-icons)

function HostingInfo() {
  return (
    <div className="bg-gray-50 py-6 flex items-center justify-center">
      <div className="flex items-center space-x-3">
        {/* Globe Icon */}
        <FaGlobe className="text-green-600 text-2xl" />

        {/* Text Content */}
        <p className="text-lg text-gray-700">
          <span className="font-semibold">Hosting solutions</span> trusted by the owners of{' '}
          <span className="font-bold text-green-600">3,000,000</span> domains.
        </p>
      </div>
    </div>
  );
};

export default HostingInfo;
