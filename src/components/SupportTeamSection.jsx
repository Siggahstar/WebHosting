import React from 'react';
import { FaHeadset, FaTrophy, FaRobot, FaThumbsUp } from 'react-icons/fa';
import profileImage from '/src/assets/velina_h.jpg'; // Path to the image file

function SupportTeamSection() {
  return (
    <div className="bg-yellow-50 py-10 px-6 flex justify-center">
      <div className="bg-yellow-100 rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl items-center">
        
        {/* Left Side - Profile with description */}
        <div className="flex flex-col items-center text-center md:text-left md:items-start">
          <div className="w-40 h-40 bg-purple-300 rounded-full overflow-hidden mb-4">
            <img src={profileImage} alt="Lily, Customer Care" className="w-full h-auto" />
          </div>
          <div className="text-lg font-semibold">Lily</div>
          <div className="text-gray-600 text-sm">SiteGround Customer Care</div>
        </div>

        {/* Right Side - Text and Icons */}
        <div className="text-left">
          <h2 className="text-2xl font-bold mb-4">Award-Winning Support by an Outstanding Team</h2>
          <p className="text-gray-700 mb-6">
            Putting our hearts, skills, and know-how into your website success.
          </p>

          <div className="space-y-4">
            <div className="flex items-center">
              <FaHeadset className="text-blue-500 text-xl mr-4" />
              <div>
                <span className="font-bold">24/7 Expert Support</span>
                <p className="text-sm text-gray-600">On multiple channels</p>
              </div>
            </div>

            <div className="flex items-center">
              <FaTrophy className="text-blue-500 text-xl mr-4" />
              <div>
                <span className="font-bold">Multiple Awards</span>
                <p className="text-sm text-gray-600">For best customer service</p>
              </div>
            </div>

            <div className="flex items-center">
              <FaRobot className="text-blue-500 text-xl mr-4" />
              <div>
                <span className="font-bold">Instant AI assistant</span>
                <p className="text-sm text-gray-600">For the most relevant quick answers</p>
              </div>
            </div>

            <div className="flex items-center">
              <FaThumbsUp className="text-blue-500 text-xl mr-4" />
              <div>
                <span className="font-bold">98% Customer Satisfaction Rate</span>
                <p className="text-sm text-gray-600">Based on rated interactions</p>
              </div>
            </div>
          </div>

          <a href="#" className="text-blue-600 font-semibold mt-6 inline-block">
            EXPLORE OUR SUPPORT →
          </a>
        </div>
      </div>
    </div>
  );
};

export default SupportTeamSection;
