import React from "react";
import { Phone } from "lucide-react";

const Page = () => {
  return (
    <div className="relative container mx-auto p-6 flex flex-col md:flex-row gap-8 items-center">
      {/* Left side images */}
      <div className="relative w-full md:w-1/2">
        <img
          src="/imageagre.avif"
          alt="Staff members in orange uniforms"
          className="w-full rounded-lg mb-4"
        />
      </div>

      {/* Right side content */}
      <div className="w-full md:w-1/2 space-y-6">
        <div>
          <h2 className="text-gray-700 text-lg mb-2 font-bold">
            {" "}
            Box Packing{" "}
          </h2>
          <div className="flex gap-1 mb-4">
            <div
              className="h-1"
              style={{ backgroundColor: "#FF494D", width: "0.75rem" }}
            ></div>
            <div
              className="h-1"
              style={{ backgroundColor: "#FF494D", width: "0.75rem" }}
            ></div>
            <div
              className="h-1"
              style={{ backgroundColor: "#FF494D", width: "0.75rem" }}
            ></div>
          </div>
        </div>

        <p className="text-gray-600 leading-relaxed">
          We provide high-quality, custom box packing solutions in Dubai for a
          wide range of industries, including food service, e-commerce, retail,
          and more. Our packaging solutions include pizza boxes, takeaway
          containers, and specialized packaging designed to ensure product
          safety, durability, and brand visibility. Whether you need
          eco-friendly packaging for food delivery in Dubai or custom boxes for
          retail products, we offer cost-effective and reliable solutions that
          guarantee secure transit and enhance your brands presence. With a
          focus on sustainability and innovative design, our packaging services
          help your business stand out in the competitive Dubai market while
          fulfilling all your packaging needs
        </p>
      </div>
    </div>
  );
};

export default Page;
