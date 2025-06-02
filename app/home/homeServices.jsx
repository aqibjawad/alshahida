import React from "react";

const ServicesCard = ({ title, description, imagePath, link }) => (
  <div className="bg-white p-4 rounded-lg shadow-md h-full">
    <img
      src={imagePath}
      alt={title}
      className="w-full h-48 object-contain rounded-lg mb-4"
    />
    <h3 className="text-xl md:text-lg lg:text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4 text-sm md:text-base">{description}</p>
    <a
      href={link}
      className="bg-black text-white px-4 py-2 rounded font-semibold hover:bg-gray-800 text-sm md:text-base mt-auto inline-block"
    >
      READ MORE
    </a>
  </div>
);

const HomeServices = () => {
  const services = [
    {
      title: "Aggregator Management",
      description: `We optimize discounts, marketing, and dashboard management for online food businesses in Dubai.
                    Our team boosts brand visibility on Deliveroo, Careem, Talabat, Noon, and Smiles while tracking key performance metrics.`,
      imagePath: "/agree1.png",
      link: "/agregators",
    },
    {
      title: "Menu Engineering",
      description: `We optimize menu design, pricing, and profitability for restaurants and cloud kitchens in Dubai.
                    Using data-driven insights, we refine menus based on sales, customer preferences, and market trends.
                    Our strategies enhance brand positioning, boost revenue, and drive sustainable growth.`,
      imagePath: "/menu.png",
      link: "/menuEng",
    },
    {
      title: "Box Packing",
      description: `We provide custom box packaging solutions in Dubai for food service, e-commerce, and retail.
        Our durable, eco-friendly packaging ensures product safety, brand visibility, and secure transit.
        From pizza boxes to retail packaging, we offer cost-effective solutions to enhance your brand.`,
      imagePath: "/packing.jpg",
      link: "/boxPack",
    },
    {
      title: "Commercial Printing",
      description: `We provide expert logo design and high-quality printing services in Dubai to build strong brand identities. 
      Our custom logos reflect your vision, meeting Dubai business standards with premium, durable printing.`,
      imagePath: "/prinitng.png",
      link: "/comPrint",
    },
  ];

  return (
    <div className="bg-gray-50 py-8 md:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 px-4">
            WE ARE THE SOLUTION FOR YOUR FOOD BUSINESS
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {services.map((service, index) => (
            <div key={index}>
              <ServicesCard
                title={service.title}
                description={service.description}
                imagePath={service.imagePath}
                link={service.link}
              />
            </div>
          ))}
        </div>
      </div>

      {/* New Digital Marketing Heading */}
      <div className="text-center mb-8 md:mb-12 mt-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          Digital Marketing and Development
        </h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>

        <p className="text-gray-600 leading-relaxed">
          We specialize in digital marketing, optimization, and development
          services in Dubai, helping businesses enhance their online presence
          and drive sustainable growth. Our expert team offers comprehensive
          solutions, including SEO, paid advertising, social media management,
          website optimization, and custom web development. With a data-driven
          approach, we optimize digital campaigns for maximum ROI, improve user
          experience, and ensure your website functions seamlessly across all
          platforms. Partner with us to elevate your brand, improve online
          performance, and stand out in the competitive Dubai market.
        </p>
      </div>
    </div>
  );
};

export default HomeServices;