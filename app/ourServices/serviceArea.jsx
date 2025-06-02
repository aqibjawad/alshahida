import React from "react";

const ServiceSection = () => {
  return (
    <div className="relative mx-auto flex flex-col gap-8">
      {/* Full width image */}
      <div className="w-full">
        <img
          src="/services.jpg"
          alt="Staff members in orange uniforms"
          className="w-full mb-4"
        />
      </div>

      {/* Content below image */}
      <div className="w-full container p-6 space-y-6">
        <ul className="list-disc pl-6 space-y-4">
          <li>
            <span className="font-bold text-xl">Aggregator Management</span>
          </li>
          <li>
            <span className="font-bold text-xl"> Menu Engineering </span>
          </li>
          <li>
            <span className="font-bold text-xl">Box Packing</span>
          </li>
          <li>
            <span className="font-bold text-xl">Commercial Printing</span>
          </li>
          <li>
            <span className="font-bold text-xl">
              Digital Marketing and Development
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ServiceSection;
