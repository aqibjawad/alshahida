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
            Menu Engineering{" "}
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
          We offer expert menu engineering services in Dubai, helping
          restaurants and cloud kitchens design, optimize, and price their menus
          for maximum profitability and customer appeal. Using data-driven
          strategies, we refine menus by analyzing sales performance, customer
          preferences, and market trends. From strategic pricing to improved
          menu layouts, our tailored solutions enhance brand positioning, boost
          revenue, and drive sustainable growth in the competitive Dubai food
          industry.
        </p>
      </div>
    </div>
  );
};

export default Page;
