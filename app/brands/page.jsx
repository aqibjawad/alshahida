"use client";
import React from "react";

const Page = () => {
  const logos = [
    { id: 2, src: "/brand2.jpeg", alt: "Food Item 2" },
    { id: 3, src: "/brand3.jpeg", alt: "Food Item 3" },
    { id: 4, src: "/brand4.jpeg", alt: "Food Item 4" },
    { id: 5, src: "/brand5.jpeg", alt: "Food Item 5" },
    { id: 6, src: "/brand6.jpeg", alt: "Food Item 6" },
    { id: 7, src: "/brand7.jpeg", alt: "Food Item 7" },
    { id: 10, src: "/brand10.jpeg", alt: "Food Item 10" },
    { id: 11, src: "/brand11.jpg", alt: "Food Item 11" },
    { id: 12, src: "/brand12.jpg", alt: "Food Item 12" },
  ];

  return (
    <div className="container mx-auto py-8 p-5">
      <h2 className="text-2xl font-bold text-center mb-6">Our Brands</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {logos.map((logo) => (
          <div
            key={logo.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            {/* Fixed image display with proper sizing */}
            <div className="flex items-center justify-center p-4 h-48">
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
