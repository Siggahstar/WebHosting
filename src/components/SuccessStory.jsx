import React from 'react';

function SuccessStory() {
  return (
    <div className="flex flex-col items-center p-8">
      {/* Title */}
      <h2 className="text-3xl font-semibold mb-4 text-center">Customer Success Stories</h2>
      <p className="text-gray-600 mb-8 text-center">
        Celebrating business owners and freelance professionals on our platform by sharing their stories.
      </p>

      {/* Card with Image and Testimonial */}
      <div className="flex flex-col sm:flex-row items-center bg-white shadow-xl rounded-lg p-6 max-w-4xl">
        
        {/* Image Section */}
        <div className="relative w-full sm:w-1/2">
          <img
            src="/src/assets/borislava_n.jpg"
            alt="Customer"
            className="rounded-lg"
          />
          {/* Play button overlay */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="bg-white opacity-80 rounded-full p-3">
              <svg
                className="w-8 h-8 text-gray-800"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6.5 5.5A1.5 1.5 0 015.5 4h9a1.5 1.5 0 011.5 1.5v9a1.5 1.5 0 01-1.5 1.5h-9a1.5 1.5 0 01-1.5-1.5v-9zm1.5 4.5v2.5l3.5-1.75L8 10z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center p-4 sm:w-1/2">
          <blockquote className="text-lg font-medium text-gray-900 mb-4">
            <span className="text-purple-600 text-3xl">&ldquo;</span>
            Web hosting as a service is mainly something that facilitates the process of creation. I’m really glad that I moved because SiteGround just goes a lot more in depth than just the basics.
          </blockquote>
          <p className="font-semibold text-gray-800">niafaraway.com</p>
          <p className="text-sm text-gray-600">Wellness Blogger</p>
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;