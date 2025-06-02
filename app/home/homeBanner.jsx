"use client";
import React from "react";
import { useState, useEffect } from "react";

const HomeBanner = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = ["/banner1.jpg", "/banner2.jpg", "/banner3.jpg"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Removed any padding/margin that might cause spacing */}
      <div className="h-[60vh] md:h-screen w-full"
          style={{height:"600px"}}
      
      >
        {/* Carousel Images */}
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              currentImage === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover object-center"
              style={{ height: "600px" }}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
        ))}

        {/* Text Content - Removed px-4 which was adding horizontal padding */}
        <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Al Shahida Restaurants Management LLC
          </h1>
          <p className="text-base md:text-lg font-semibold text-white">
            Al Shahida Restaurant began as a passion project to deliver
            exceptional culinary experiences through cloud kitchens
          </p>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors duration-300 ${
                currentImage === index ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
