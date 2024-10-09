import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // For the checkmarks (optional, you can replace this)
import womanImage from '/src/assets/zigzag_speed_img_en.png'; // Replace with the path to the image you're using

function HostingFeature() {
  return (
    <div className="bg-gray-50 py-12 flex items-center justify-center">
      <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-yellow-100 p-8 rounded-lg">
        {/* Left Side - Text Content */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Faster Websites, Better Online Business Results</h2>
          <p className="text-gray-700 mb-6">
            Your fast track to higher SEO rankings, more website visitors & conversions.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center text-gray-700">
              <FaCheckCircle className="text-blue-500 mr-2" />
              Google Cloud infrastructure for high-end availability
            </li>
            <li className="flex items-center text-gray-700">
              <FaCheckCircle className="text-blue-500 mr-2" />
              Built-in caching for up to 5x Faster sites out-of-the-box
            </li>
            <li className="flex items-center text-gray-700">
              <FaCheckCircle className="text-blue-500 mr-2" />
              Free one-click CDN to load instantly from anywhere
            </li>
            <li className="flex items-center text-gray-700">
              <FaCheckCircle className="text-blue-500 mr-2" />
              Custom MySQL for extra speed when you most need it
            </li>
          </ul>
          <a
            href="#"
            className="text-blue-600 font-semibold mt-6 inline-block"
          >
            EXPLORE SPEED &rarr;
          </a>
        </div>

        {/* Right Side - Image */}
        <div className="relative">
          <img
            src={womanImage}
            alt="Woman with laptop"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg flex items-center">
            <div className="text-2xl font-bold text-gray-800">85%</div>
            <div className="ml-2">
              <p className="text-gray-700 text-sm">Faster on avg. after</p>
              <p className="text-gray-700 text-sm">moving to SiteGround</p>
            </div>
            <div className="ml-auto text-yellow-500 text-3xl">&#128640;</div> {/* Rocket Emoji */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostingFeature;
