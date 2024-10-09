import React from "react";

function HeroOne() {
    return (
        <div className="hero h-96 bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* Image Section */}
          <img 
            src="/src/assets/index_hero_img_en.png" 
            alt="Hero" 
            className="max-w-sm rounded-lg shadow-2xl"
          />
          
          {/* Text Section */}
          <div className="lg:mr-10">
            <h1 className="text-5xl font-bold">Good. Better. Siteground.</h1>
            <h1 className="text-5xl font-bold">Web Hosting Perfected</h1>
            <p className="py-6">
            Leverage two decades of expertise with our robust website hosting, managed WordPress and e-commerce solutions tailored to your online success.
            </p>
            <br></br>
            <p className="py-6">
            From $2.99/mo. Regular $17.99/mo. excl. VAT
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
  );
};


export default HeroOne;