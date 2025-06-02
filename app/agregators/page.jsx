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
          <h2 className="text-gray-700 text-lg mb-2 font-bold"> Agreegators </h2>
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
          We provide expert management services for online food businesses in
          Dubai, specializing in discount optimization, strategic marketing, and
          dashboard management. Our team helps restaurants and cloud kitchens in
          Dubai enhance their brand visibility on popular delivery platforms
          like Deliveroo, Careem, Talabat, Noon, and Smiles, while continuously
          tracking key performance metrics to refine growth strategies. Partner
          with us to streamline your operations, optimize your marketing
          efforts, and successfully scale your food business in the competitive
          Dubai market.
        </p>
      </div>
    </div>
  );
};

export default Page;
