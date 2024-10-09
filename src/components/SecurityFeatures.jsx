import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // For the checkmarks
import sneakerImage from '/src/assets/zigzag_security_img_en.png'; // Path to the image

function SecurityFeature() {
  return (
    <div className="bg-gray-50 py-12 flex items-center justify-center">
      <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-blue-100 p-8 rounded-lg">
        
        {/* Left Side - Image Section */}
        <div className="relative">
          <img
            src={sneakerImage}
            alt="Man holding sneaker"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg flex items-center">
            <div className="text-2xl font-bold text-gray-800">670 M</div>
            <div className="ml-2">
              <p className="text-gray-700 text-sm">Attacks blocked</p>
              <p className="text-gray-700 text-sm">on avg. every day</p>
            </div>
            <div className="ml-auto text-blue-500 text-3xl">&#128274;</div> {/* Shield Emoji */}
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Stronger Website Security, More Peace of Mind</h2>
          <p className="text-gray-700 mb-6">
            Our security systems are always on the alert, so you don't have to be.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center text-gray-700">
              <FaCheckCircle className="text-blue-500 mr-2" />
              24/7 monitoring with server checks every 0.5 sec
            </li>
            <li className="flex items-center text-gray-700">
              <FaCheckCircle className="text-blue-500 mr-2" />
              AI protection blocking millions of brute-force attempts
            </li>
            <li className="flex items-center text-gray-700">
              <FaCheckCircle className="text-blue-500 mr-2" />
              Built-in Spam Protection for a zen inbox
            </li>
            <li className="flex items-center text-gray-700">
              <FaCheckCircle className="text-blue-500 mr-2" />
              Geo-distributed Daily Backups for extra peace of mind
            </li>
          </ul>
          <a
            href="#"
            className="text-blue-600 font-semibold mt-6 inline-block"
          >
            EXPLORE SECURITY &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default SecurityFeature;