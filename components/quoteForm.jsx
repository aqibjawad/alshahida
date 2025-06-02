"use client";

import React, { useState } from "react";
import axios from "axios";

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    fromLocation: "",
    toLocation: "",
    movingDate: "",
    services: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format the message for WhatsApp - moved outside try block
    const message = `New Quote Request!
📝 Name: ${formData.fullName}
📱 Mobile: ${formData.mobile}
📧 Email: ${formData.email}
📍 From: ${formData.fromLocation}
🎯 To: ${formData.toLocation}
📅 Date: ${formData.movingDate}
🔧 Service: ${formData.services}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/971505461048?text=${encodedMessage}`;

    try {
      // Send to WhatsApp
      await axios.post("https://api.whatsapp.com/send", {
        phone: "971544342621", // Replace with your number
        text: message,
      });

      // Clear form after successful submission
      setFormData({
        fullName: "",
        mobile: "",
        email: "",
        fromLocation: "",
        toLocation: "",
        movingDate: "",
        services: "",
      });

      alert("Quote request sent successfully!");
    } catch (error) {
      console.error("Submission error:", error);

      // Directly navigate to WhatsApp
      window.location.href = whatsappURL;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black bg-opacity-70 p-8">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            GET A QUOTE FOR <span style={{ color: "#FF494D" }}>FREE</span>
          </h1>
          <p className="text-white text-lg">
            Ready to embark on a stress-free moving journey with Ultra Movers?
            Fill out our inquiry form now to receive a personalized quote and
            let our expert team handle all your packing and moving needs in UAE.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name*"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-white"
            required
          />

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile No*"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-white"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-white"
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="fromLocation"
              placeholder="From - Location"
              value={formData.fromLocation}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-white"
            />

            <input
              type="text"
              name="toLocation"
              placeholder="To - Location"
              value={formData.toLocation}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-white"
            />
          </div>

          <input
            type="date"
            name="movingDate"
            placeholder="Estimated Moving Date"
            value={formData.movingDate}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-white"
          />

          <select
            name="services"
            value={formData.services}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-white text-gray-600"
          >
            <option value="">- Select Services -*</option>
            <option value="residential">Residential Moving</option>
            <option value="office">Office Relocation</option>
            <option value="warehouse">Warehouse Moving</option>
            <option value="export">Export Packaging</option>
            <option value="handyman">Handyman Services</option>
            <option value="painting">Painting Services</option>
          </select>

          <button
            type="submit"
            className={`w-full text-white font-semibold py-3 rounded-md transition-colors ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
            style={{ backgroundColor: "#FF494D" }}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Submit Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuoteForm;
