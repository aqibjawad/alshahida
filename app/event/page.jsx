import React from "react";
import { Phone } from "lucide-react";

const AboutUsSection = () => {
  return (
    <div className="relative mx-auto flex flex-col gap-8">
      {/* Full width image */}
      <div className="w-full">
        <img
          src="/event.webp"
          alt="Staff members in orange uniforms"
          className="w-full  mb-4"
        />
      </div>

      {/* Content below image */}
      <div className="container p-6 w-full space-y-6">
        <div>
          <h2 className="text-gray-700 text-lg mb-2">ABOUT US</h2>
          <div className="flex gap-1 mb-4">
            <div className="h-1 w-3 bg-[#F3D39E]"></div>
            <div className="h-1 w-3 bg-[#F3D39E]"></div>
            <div className="h-1 w-3 bg-[#F3D39E]"></div>
          </div>
          <h1 className="text-4xl font-bold mb-6">
            Your Business Growth Partner in Dubai & the UAE
          </h1>
        </div>

        <p className="text-gray-600 leading-relaxed">
          At <span className="font-semibold">Al Shahida</span>, we provide{" "}
          <span className="font-semibold">end-to-end solutions</span>, to help
          food businesses, investors, and entrepreneurs succeed in the{" "}
          <span className="font-semibold">UAE market.</span>
          From{" "}
          <span className="font-semibold">low-investment opportunities</span> to
          aggregator management, custom packaging, stickers and branding for
          food businesses, and digital marketing, our tailored services
          streamline your operations, boost profitability, and drive long-term
          success.
        </p>

        {/* <div>
          <h3 className="font-bold text-xl mb-3">What We Offer</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center bg-[#F3D39E]">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="text-gray-600">
                <span className="font-semibold">Expert Consultation</span> – Get
                insights from industry professionals.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center bg-[#F3D39E]">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="text-gray-600">
                <span className="font-semibold">Brand Development</span> – From
                concept to launch, we help you build a strong online identity.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center bg-[#F3D39E]">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="text-gray-600">
                <span className="font-semibold">Menu Engineering</span> – Create
                a high-demand, profit-driven menu.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center bg-[#F3D39E]">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="text-gray-600">
                <span className="font-semibold">
                  Technology & Operations Setup
                </span>{" "}
                – We integrate the latest food delivery & cloud kitchen
                solutions.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center bg-[#F3D39E]">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="text-gray-600">
                <span className="font-semibold">
                  Marketing & Growth Strategy
                </span>{" "}
                – Ensure visibility and customer acquisition from day one.
              </span>
            </li>
          </ul>
        </div> */}

        {/* <p className="text-gray-600 leading-relaxed">
          At <span className="font-semibold">Al Shahida</span>, we do not just
          offer advice—we{" "}
          <span className="font-semibold">
            build and grow successful food brands
          </span>{" "}
          with you.{" "}
          <span className="font-semibold">
            Ready to launch your online food business?
          </span>{" "}
          Let us make it happen together!
        </p> */}

        {/* Services Section */}
        {/* <div className="mt-12">
          <h2 className="text-gray-700 text-lg mb-2">OUR SERVICES</h2>
          <div className="flex gap-1 mb-4">
            <div className="h-1 w-3 bg-[#F3D39E]"></div>
            <div className="h-1 w-3 bg-[#F3D39E]"></div>
            <div className="h-1 w-3 bg-[#F3D39E]"></div>
          </div>
          <h1 className="text-3xl font-bold mb-8">
            Comprehensive Solutions for Food Businesses
          </h1>
        </div> */}

        {/* Service 1 */}
        <div className="border-l-4 border-[#F3D39E] pl-4 py-2">
          <h3 className="font-bold text-xl mb-3">
            Investor Relations – Low-Investment Business Model
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            We offer a low-investment, high-return business model for
            individuals looking to enter the UAE food market. With our Investor
            Relations service, you can run a cloud kitchen or food delivery
            business with minimal capital investment. Benefit from curated
            menus, performance analytics, and continuous business support
            without needing full-time commitment or large initial investments.
          </p>
          <h4 className="font-semibold text-lg mb-2">Key Features:</h4>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <div className="text-[#F3D39E] mt-1">✅</div>
              <span className="text-gray-600">
                <span className="font-semibold">Ready-to-Launch Menus</span> –
                Gain access to pre-designed menus from diverse cuisines.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="text-[#F3D39E] mt-1">✅</div>
              <span className="text-gray-600">
                <span className="font-semibold">
                  Affordable Monthly Rentals
                </span>{" "}
                – Fixed, affordable monthly fees and food costs for simplicity
                and predictability.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="text-[#F3D39E] mt-1">✅</div>
              <span className="text-gray-600">
                <span className="font-semibold">Hassle-Free Setup</span> – We
                handle aggregator setup, menu management, and performance
                tracking.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="text-[#F3D39E] mt-1">✅</div>
              <span className="text-gray-600">
                <span className="font-semibold">Growth Monitoring</span> –
                Real-time tracking and continuous support to help optimize
                business performance.
              </span>
            </li>
          </ul>
          <p className="text-gray-600 italic">
            <span className="text-[#F3D39E] mr-2">👉</span>
            <span className="font-semibold">Ideal for:</span> Investors looking
            for a passive income opportunity with minimal investment.
          </p>
        </div>

        {/* Service 2 */}
        <div className="border-l-4 border-[#F3D39E] pl-4 py-2">
          <h3 className="font-bold text-xl mb-3">
            Aggregator Management & Optimization
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our Aggregator Management services ensure your business thrives on
            food delivery platforms like Talabat, Deliveroo, Careem, Noon, and
            Zomato. We specialize in menu management, discount optimization,
            promotion handling, and performance analytics to ensure your food
            business gains more visibility, increases sales, and attracts more
            customers.
          </p>
          <h4 className="font-semibold text-lg mb-2">Key Features:</h4>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <div className="text-[#F3D39E] mt-1">✅</div>
              <span className="text-gray-600">
                <span className="font-semibold">
                  Aggregator Setup & Optimization
                </span>{" "}
                – Manage your menu and pricing across popular food delivery
                platforms.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="text-[#F3D39E] mt-1">✅</div>
              <span className="text-gray-600">
                <span className="font-semibold">Discount Optimization</span> –
                Maximize sales through targeted promotions without sacrificing
                profitability.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="text-[#F3D39E] mt-1">✅</div>
              <span className="text-gray-600">
                <span className="font-semibold">Performance Tracking</span> –
                Real-time insights and continuous optimization to drive better
                results.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="text-[#F3D39E] mt-1">✅</div>
              <span className="text-gray-600">
                <span className="font-semibold">Brand Visibility</span> –
                Improve search ranking and stand out on delivery platforms.
              </span>
            </li>
          </ul>
          <p className="text-gray-600 italic">
            <span className="text-[#F3D39E] mr-2">👉</span>
            <span className="font-semibold">Ideal for:</span> Restaurants, cloud
            kitchens, and food businesses aiming to enhance their presence on
            delivery platforms in the UAE.
          </p>
        </div>

        {/* Service 3 */}
        <div className="border-l-4 border-[#F3D39E] pl-4 py-2">
          <h3 className="font-bold text-xl mb-3">
            Custom Packaging & Branding Solutions
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            We provide custom packaging solutions to enhance your food
            business brand presence and ensure the safe delivery of your
            products. Whether you need pizza boxes, takeaway containers, or
            specialized retail packaging, we offer a wide range of
            cost-effective and eco-friendly packaging solutions tailored to the
            UAE market.
          </p>
          <h4 className="font-semibold text-lg mb-2">Key Features:</h4>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <div className="text-[#F3D39E] mt-1">✅</div>
              <span className="text-gray-600">
                <span className="font-semibold">Branded Packaging</span> –
                Custom packaging options that represent your brand effectively.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="text-[#F3D39E] mt-1">✅</div>
              <span className="text-gray-600">
                <span className="font-semibold">Eco-Friendly Materials</span> –
                Sustainable packaging that aligns with UAEs green initiatives.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="text-[#F3D39E] mt-1">✅</div>
              <span className="text-gray-600">
                <span className="font-semibold">Cost-Effective Solutions</span>{" "}
                – Affordable, durable packaging to maintain quality and safety.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="text-[#F3D39E] mt-1">✅</div>
              <span className="text-gray-600">
                <span className="font-semibold">Tailored Design</span> –
                Packaging design that creates a memorable brand experience for
                customers.
              </span>
            </li>
          </ul>
          <p className="text-gray-600 italic">
            <span className="text-[#F3D39E] mr-2">👉</span>
            <span className="font-semibold">Ideal for:</span> Restaurants, cloud
            kitchens, and food delivery services looking to enhance branding and
            product safety.
          </p>
        </div>

        {/* Service 4 */}
        <div className="border-l-4 border-[#F3D39E] pl-4 py-2">
          <h3 className="font-bold text-xl mb-3">
            Stickers & Branding Design for Food Businesses
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our stickers and branding design services are tailored specifically
            for the food industry. From food packaging stickers to promotional
            materials such as window decals and labels, we provide high-quality
            branding solutions that make your food products stand out. We focus
            on creating designs that are memorable, enhance brand recall, and
            attract customers.
          </p>
          <h4 className="font-semibold text-lg mb-2">Key Features:</h4>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <div className="text-[#F3D39E] mt-1">✅</div>
              <span className="text-gray-600">
                <span className="font-semibold">Custom Stickers & Labels</span>{" "}
                – Design unique stickers for food packaging that represent your
                brand identity.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="text-[#F3D39E] mt-1">✅</div>
              <span className="text-gray-600">
                <span className="font-semibold">
                  Branded Packaging Stickers
                </span>{" "}
                – Add personalized touches to your takeaway containers and food
                packaging for a professional look.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="text-[#F3D39E] mt-1">✅</div>
              <span className="text-gray-600">
                <span className="font-semibold">Promotional Stickers</span> –
                Create special offer labels and event-based designs to drive
                sales and engage customers.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="text-[#F3D39E] mt-1">✅</div>
              <span className="text-gray-600">
                <span className="font-semibold">Attractive Branding</span> –
                Ensure your food products look appealing and professional with
                cohesive branding elements.
              </span>
            </li>
          </ul>
          <p className="text-gray-600 italic">
            <span className="text-[#F3D39E] mr-2">👉</span>
            <span className="font-semibold">Ideal for:</span> Food businesses,
            restaurants, and cloud kitchens seeking to elevate their brand image
            through custom designs.
          </p>
        </div>

        {/* Service 5 */}
        <div className="border-l-4 border-[#F3D39E] pl-4 py-2">
          <h3 className="font-bold text-xl mb-3">
            Business Development & Operational Consulting
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            We help food businesses in the UAE optimize their operations for
            greater efficiency and increased profitability. From workflow
            optimization to menu development and pricing strategies, we provide
            consulting services that help your business grow sustainably and
            efficiently.
          </p>
          <h4 className="font-semibold text-lg mb-2">Key Features:</h4>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <div className="text-[#F3D39E] mt-1">✅</div>
              <span className="text-gray-600">
                <span className="font-semibold">Efficiency Optimization</span> –
                Streamline operations to reduce costs and enhance productivity.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="text-[#F3D39E] mt-1">✅</div>
              <span className="text-gray-600">
                <span className="font-semibold">Revenue Maximization</span> –
                Implement strategies to optimize menu pricing and product
                offerings.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="text-[#F3D39E] mt-1">✅</div>
              <span className="text-gray-600">
                <span className="font-semibold">Scalable Business Plans</span> –
                Design growth strategies that are adaptable and scalable as your
                business expands.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="text-[#F3D39E] mt-1">✅</div>
              <span className="text-gray-600">
                <span className="font-semibold">Continuous Monitoring</span> –
                Regular tracking of performance metrics to ensure sustained
                growth.
              </span>
            </li>
          </ul>
          <p className="text-gray-600 italic">
            <span className="text-[#F3D39E] mr-2">👉</span>
            <span className="font-semibold">Ideal for:</span> Food businesses
            and cloud kitchens seeking operational improvements and strategies
            for sustainable growth.
          </p>
        </div>

        {/* Service 6 */}
        <div className="border-l-4 border-[#F3D39E] pl-4 py-2">
          <h3 className="font-bold text-xl mb-3">
            Digital Marketing & Online Growth
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            In todays digital-first world, we help food businesses strengthen
            their online presence through SEO, social media marketing, PPC
            advertising, and reputation management. Our tailored digital
            strategies are designed to increase your visibility, generate leads,
            and convert them into loyal customers.
          </p>
          <h4 className="font-semibold text-lg mb-2">Key Features:</h4>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <div className="text-[#F3D39E] mt-1">✅</div>
              <span className="text-gray-600">
                <span className="font-semibold">Local SEO</span> – Optimize your
                website for local searches to improve visibility in Dubai and
                across the UAE.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="text-[#F3D39E] mt-1">✅</div>
              <span className="text-gray-600">
                <span className="font-semibold">Social Media Marketing</span> –
                Run targeted campaigns on Instagram, Facebook, TikTok, and more
                to increase engagement.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="text-[#F3D39E] mt-1">✅</div>
              <span className="text-gray-600">
                <span className="font-semibold">PPC Campaigns</span> – Leverage
                Google Ads and paid campaigns to drive traffic and increase
                conversions.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="text-[#F3D39E] mt-1">✅</div>
              <span className="text-gray-600">
                <span className="font-semibold">Reputation Management</span> –
                Build a strong online reputation through positive customer
                reviews and feedback.
              </span>
            </li>
          </ul>
          <p className="text-gray-600 italic">
            <span className="text-[#F3D39E] mr-2">👉</span>
            <span className="font-semibold">Ideal for:</span> Restaurants, cloud
            kitchens, and food brands looking to grow their digital presence and
            online sales.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gray-50 p-6 rounded-lg mt-8">
          <h3 className="font-bold text-xl mb-4">Why Choose Us?</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="text-[#F3D39E] mt-1">✅</div>
              <span className="text-gray-600">
                <span className="font-semibold">Local Expertise</span> – We
                understand the UAE market and its unique food business
                landscape.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="text-[#F3D39E] mt-1">✅</div>
              <span className="text-gray-600">
                <span className="font-semibold">Tailored Solutions</span> –
                Custom services designed specifically for the food industry and
                Dubais competitive market.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="text-[#F3D39E] mt-1">✅</div>
              <span className="text-gray-600">
                <span className="font-semibold">Data-Driven Approach</span> – We
                use analytics and insights to make informed decisions that
                optimize performance.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="text-[#F3D39E] mt-1">✅</div>
              <span className="text-gray-600">
                <span className="font-semibold">Comprehensive Support</span> –
                From branding to marketing, we offer end-to-end solutions to
                help your food business thrive.
              </span>
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="bg-[#F3D39E] text-white p-6 rounded-lg mt-8 text-center">
          <h3 className="font-bold text-2xl mb-3">
            Lets Grow Your Food Business Together!
          </h3>
          <p className="mb-4">
            Partner with Al Shahida to unlock the full potential of your food
            business in the UAE. Whether you are an investor looking for a
            low-investment opportunity or a restaurant owner aiming to grow your
            business, we provide the solutions you need to succeed in a
            competitive market.
          </p>
          <button className="bg-white text-[#F3D39E] font-bold py-3 px-6 rounded-full flex items-center justify-center gap-2 mx-auto">
            <Phone size={20} />
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
