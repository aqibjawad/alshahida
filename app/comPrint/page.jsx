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
            Commercial Printing{" "}
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
          We offer professional logo design and high-quality logo printing
          services in Dubai, helping businesses create a strong, unique brand
          identity. Our expert designers specialize in crafting custom logos
          that reflect your brands values and vision while adhering to Dubais
          business standards. We provide premium logo printing on various
          materials, including packaging, promotional items, business
          stationery, and merchandise, using durable, high-resolution printing
          techniques. Whether you are starting a new business or rebranding, our
          tailored logo design and printing solutions ensure your brand stands
          out in the competitive Dubai market.
        </p>
      </div>
    </div>
  );
};

export default Page;
