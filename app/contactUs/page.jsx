"use client";

import React, { useState } from "react";
import { PhoneIcon, MapPinIcon, MailIcon, Send } from "lucide-react";

const ContactMovers = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
    // Show success message or redirect
  };

  return (
    <div className="max-w-6xl mx-auto p-6 mb-20">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-4">CONTACT</h1>
        <p className="text-gray-600 text-sm max-w-3xl mx-auto">
          You are welcomed by ultra movers, the most reputable and comprehensive
          movers for moving from your home, office, or villa We take care of
          everything for your plan to move to Dubai. We make it both simple and
          painless to handle all the months we deliver our services, which means
          we can deliver on the top-notch moving services quality.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column - Contact Info */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold mb-6">LET GET STARTED</h2>

          <div className="mb-8">
            <img
              src="/whiteLogo.png"
              alt="Afforable Movers Logo"
              className="mb-6"
            />
          </div>

          <div className="space-y-4">
            <h3 className="font-bold">CONTACT US</h3>

            <div className="flex items-center space-x-2">
              <PhoneIcon className="w-5 h-5 text-red-500" />
              <span>+971559223307</span>
            </div>

            {/* <div className="flex items-center space-x-2">
              <MailIcon className="w-5 h-5 text-red-500" />
              <span>info@affordablemoversae.com</span>
            </div> */}

            <div className="flex items-center space-x-2">
              <MapPinIcon className="w-5 h-5 text-red-500" />
              <span>
                SHOP 3, ORRA MARINA TOWER, INSIDE CLOUD RESTAURANT MANAGEMENT CO
                LLC GHOST KITCHEN, SAJAYA PLAZA, HESSA STREET
              </span>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-2">FOLLOW US</h3>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-xl font-bold mb-6">CONTACT US</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                required
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white"
                required
              >
                <option value="" disabled>
                  Select Service
                </option>
                <option value="home">Home Moving</option>
                <option value="office">Office Moving</option>
                <option value="villa">Villa Moving</option>
                <option value="international">International Moving</option>
              </select>
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                required
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-md transition duration-300 flex items-center justify-center"
              >
                SEND MESSAGE
                <Send className="w-4 h-4 ml-2" />
              </button>
            </div>
          </form>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>We all get back to you within 24 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMovers;
