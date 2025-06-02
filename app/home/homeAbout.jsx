import React from "react";
import { Phone } from "lucide-react";

const AboutUsSection = () => {
  return (
    <div className="relative container mx-auto p-6 flex flex-col md:flex-row gap-8 items-center">
      {/* Left side images */}
      <div className="relative w-full md:w-1/2">
        <img
          src="/image2.jpg"
          alt="Staff members in orange uniforms"
          className="w-full rounded-lg mb-4"
        />
      </div>

      {/* Right side content */}
      <div className="w-full md:w-1/2 space-y-6">
        <div>
          <h2 className="text-gray-700 text-lg mb-2">ABOUT US</h2>
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
          <h1 className="text-4xl font-bold mb-6">
            WE ARE THE SOLUTION FOR YOUR MOVE
          </h1>
        </div>

        <p className="text-gray-600 leading-relaxed">
          Our firm has 15 years of experience as a{" "}
          <span className="font-semibold">Affordable Movers in UAE</span>. We At
          Best Movers in Dubai, we believe that moving should be an exciting new
          chapter, not a stressful ordeal. Established to serve both residential
          and commercial clients, our mission is to provide efficient, reliable,
          and affordable moving and packing services across Dubai.
        </p>

        <ul className="space-y-4">
          <li className="flex items-center gap-3">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#FF494D" }}
            >
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <span className="text-gray-600">Available to our clients 24*7</span>
          </li>
          <li className="flex items-center gap-3">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#FF494D" }}
            >
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <span className="text-gray-600">
              Services are to be of high quality, caring, and inexpensive
            </span>
          </li>
          <li className="flex items-center gap-3">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#FF494D" }}
            >
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <span className="text-gray-600">
              Huge warehouses ready to keep your important goods
            </span>
          </li>
        </ul>

        <button
          className="border-2 px-8 py-3 font-semibold transition-colors"
          style={{
            borderColor: "#FF494D",
            color: "black",
            ":hover": { backgroundColor: "#FF494D" },
          }}
        >
          GET A QUOTE
        </button>
      </div>

      {/* Floating phone button */}
      {/* <div className="fixed bottom-8 left-8 w-16 h-16 rounded-full flex items-center justify-center cursor-pointer transition-colors">
        <Phone className="text-white w-8 h-8" />
      </div> */}
    </div>
  );
};

export default AboutUsSection;
