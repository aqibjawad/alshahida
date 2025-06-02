import React from "react";
import { Phone } from "lucide-react";

const Page = () => {
  return (
    <div
      className=""
      style={{
        paddingLeft: "5rem",
        paddingRight: "5rem",
        paddingTop: "3rem",
        paddingBottom: "1rem",
      }}
    >
      {/* Top Banner */}
      <div className="bg-black text-white p-4 text-center font-medium">
        <h2 className="text-xl md:text-2xl">
          Get 90% off your plan for 3 months*
        </h2>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-200">
        {/* Starter Plan */}
        <div className="border-b md:border-r border-gray-200 p-6 flex flex-col items-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Starter</h3>
          <p className="text-gray-600 mb-2">Usually $29</p>
          <p className="text-gray-700 font-medium">Now</p>
          <div className="flex items-start mb-1">
            <span className="text-gray-700 text-xl mt-2">$</span>
            <span className="text-5xl font-bold text-gray-800">2</span>
            <div className="flex flex-col items-start">
              <span className="text-xl font-bold text-gray-800">.90</span>
            </div>
          </div>
          <p className="text-gray-600 mb-6">USD per month</p>

          <div className="bg-[#F3D39E] px-6 py-2 rounded mb-6 text-center">
            <p className="font-medium">Save $78.30</p>
            <p>over 3 months</p>
          </div>

          <a href="#" className="text-[#0077c8] font-medium mb-6 underline">
            Learn more
          </a>

          {/* <button className="w-full bg-[#4AD295] hover:bg-[#3bc185] text-gray-800 font-medium py-3 px-4 rounded mb-6">
            Buy now
          </button> */}

          <div className="w-full border-t border-gray-200 pt-4">
            <div className="flex items-center py-2">
              <p className="flex-1">Send quotes and 20 invoices†</p>
              <div className="text-[#4AD295] text-2xl font-bold">✓</div>
            </div>
            <div className="flex items-center py-2 border-t border-gray-200">
              <p className="flex-1">Enter 5 bills</p>
              <div className="text-[#4AD295] text-2xl font-bold">✓</div>
            </div>
            <div className="flex items-center py-2 border-t border-gray-200">
              <p className="flex-1">&nbsp;</p>
              <div className="text-[#4AD295] text-2xl font-bold">✓</div>
            </div>
          </div>
        </div>

        {/* Standard Plan */}
        <div className="border-b md:border-r border-gray-200 p-6 flex flex-col items-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Standard</h3>
          <p className="text-gray-600 mb-2">Usually $46</p>
          <p className="text-gray-700 font-medium">Now</p>
          <div className="flex items-start mb-1">
            <span className="text-gray-700 text-xl mt-2">$</span>
            <span className="text-5xl font-bold text-gray-800">4</span>
            <div className="flex flex-col items-start">
              <span className="text-xl font-bold text-gray-800">.60</span>
            </div>
          </div>
          <p className="text-gray-600 mb-6">USD per month</p>

          <div className="bg-[#F3D39E] px-6 py-2 rounded mb-6 text-center">
            <p className="font-medium">Save $124.20</p>
            <p>over 3 months</p>
          </div>

          <a href="#" className="text-[#0077c8] font-medium mb-6 underline">
            Learn more
          </a>

          <div className="w-full border-t border-gray-200 pt-4">
            <div className="flex items-center py-2">
              <p className="flex-1">Send quotes and 20 invoices†</p>
              <div className="text-[#4AD295] text-2xl font-bold">✓</div>
            </div>
            <div className="flex items-center py-2 border-t border-gray-200">
              <p className="flex-1">Enter 5 bills</p>
              <div className="text-[#4AD295] text-2xl font-bold">✓</div>
            </div>
            <div className="flex items-center py-2 border-t border-gray-200">
              <p className="flex-1">&nbsp;</p>
              <div className="text-[#4AD295] text-2xl font-bold">✓</div>
            </div>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="p-6 flex flex-col items-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Premium</h3>
          <p className="text-gray-600 mb-2">Usually $69</p>
          <p className="text-gray-700 font-medium">Now</p>
          <div className="flex items-start mb-1">
            <span className="text-gray-700 text-xl mt-2">$</span>
            <span className="text-5xl font-bold text-gray-800">6</span>
            <div className="flex flex-col items-start">
              <span className="text-xl font-bold text-gray-800">.90</span>
            </div>
          </div>
          <p className="text-gray-600 mb-6">USD per month</p>

          <div className="bg-[#F3D39E] px-6 py-2 rounded mb-6 text-center">
            <p className="font-medium">Save $186.30</p>
            <p>over 3 months</p>
          </div>

          <a href="#" className="text-[#0077c8] font-medium mb-6 underline">
            Learn more
          </a>

          <div className="w-full border-t border-gray-200 pt-4">
            <div className="flex items-center py-2">
              <p className="flex-1">Send quotes and 20 invoices†</p>
              <div className="text-[#4AD295] text-2xl font-bold">✓</div>
            </div>
            <div className="flex items-center py-2 border-t border-gray-200">
              <p className="flex-1">Enter 5 bills</p>
              <div className="text-[#4AD295] text-2xl font-bold">✓</div>
            </div>
            <div className="flex items-center py-2 border-t border-gray-200">
              <p className="flex-1">&nbsp;</p>
              <div className="text-[#4AD295] text-2xl font-bold">✓</div>
            </div>
          </div>
        </div>
      </div>

      {/* Investor Relations Program Information */}
      <div className="w-full mt-5 mx-auto text-gray-800">
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            2. How Our Investor Relations Program Works
          </h2>
          <p className="mb-4">
            Our program is designed to be simple, flexible, and transparent for
            investors, allowing you to enter the food business without worrying
            about operations. Here how it works:
          </p>

          <div className="mb-4">
            <h3 className="font-bold">
              Step 1: Choose Your Investment Package
            </h3>
            <p>
              Select the package that suits your business goals and budget. Our
              pre-planned menus make getting started easy.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="font-bold">
              Step 2: Menu Planning & Food Preparation
            </h3>
            <p>
              Once you have chosen your package, we all provide a pre-planned menu
              tailored to meet market demand. Our expert kitchen team handles
              all aspects of food preparation, ensuring high-quality meals.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="font-bold">Step 3: Dispatch & Delivery Logistics</h3>
            <p>
              We manage the food dispatch and delivery logistics. Partnering
              with reliable delivery companies, we ensure timely deliveries to
              customers.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="font-bold">Step 4: Collect Your Revenue</h3>
            <p>
              Your role as an investor is simple—you receive the revenue
              generated from sales. We provide you with regular reports and
              clear financial statements, so you can track performance.
            </p>
          </div>
        </section>

        <hr className="border-gray-300 my-8" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            3. Exit Strategy – Simple Transition to Independent Business
            Ownership
          </h2>
          <p className="mb-4">
            If you wish to eventually operate independently, we offer an exit
            strategy. However, it is important to note that:
          </p>

          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>No Recipes or Menus Shared</strong> – We never share our
              trade secrets, recipes, or menus.
            </li>
            <li>
              <strong>Brand Name</strong> – You may continue using the brand
              name developed during your investment period, under specific terms
              and conditions, but not the operational methods or recipes.
            </li>
            <li>
              <strong>Conditions Apply</strong> – There are clear terms for
              using the brand name after transitioning. Full independence is
              possible with adherence to these terms.
            </li>
            <li>
              <strong>Training and Support</strong> – We provide you with
              necessary training to manage your new business, ensuring that you
              understand the processes needed to maintain quality and customer
              satisfaction under your own operations.
            </li>
          </ul>

          <p>
            This exit option is designed to allow investors to grow their own
            business, leveraging the work and success they have helped create, but
            with the freedom to operate independently once they are ready.
          </p>
        </section>

        <hr className="border-gray-300 my-8" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            4. Why Invest with Al Shahidas in Dubais Food Industry?
          </h2>
          <p className="mb-4">
            Investing with Al Shahidas gives you the opportunity to
            build a profitable food business with minimal operational
            involvement. Heres why you should consider our Investor Relations
            Program:
          </p>

          <h3 className="font-bold mb-2">Key Features of Our Program:</h3>
          <ul className="mb-4 space-y-2">
            <li className="flex items-start">
              <span className="text-[#4AD295] font-bold mr-2">✅</span>
              <span>
                <strong>Pre-Planned Menus</strong> – Professionally curated,
                high-demand menus designed for profitability.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#4AD295] font-bold mr-2">✅</span>
              <span>
                <strong>Flexible Investment Packages</strong> – Choose from
                Basic, Standard, or Premium options to suit your business goals.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#4AD295] font-bold mr-2">✅</span>
              <span>
                <strong>No Operational Hassles</strong> – We handle food
                preparation, menu planning, and delivery logistics for you.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#4AD295] font-bold mr-2">✅</span>
              <span>
                <strong>Low Initial Investment</strong> – Get started with a low
                capital investment compared to traditional food businesses.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#4AD295] font-bold mr-2">✅</span>
              <span>
                <strong>Scalable Business Model</strong> – Start with a low-risk
                package and scale as you grow.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#4AD295] font-bold mr-2">✅</span>
              <span>
                <strong>Clear Revenue Sharing</strong> – Receive detailed
                monthly reports and keep track of your earnings.
              </span>
            </li>
          </ul>
        </section>

        <hr className="border-gray-300 my-8" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            5. Advantages of Our Investor Relations Program
          </h2>
          <p className="mb-4">
            Our program offers numerous advantages for those looking to invest
            in the Dubai food market. Heres why its the right investment
            choice:
          </p>

          <div className="mb-4">
            <h3 className="font-bold">1. Low-Risk, High-Return Investment</h3>
            <p>
              Our program allows you to enter the food business in Dubai with
              minimal capital and low risk. We handle the operational side,
              while you focus on growing your monthly earnings.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="font-bold">
              2. Smooth Transition to Business Ownership
            </h3>
            <p>
              If you want to eventually run your own food business, our exit
              strategy lets you retain the brand name and customer relationships
              without sharing trade secrets. It is the perfect path for investors
              looking to scale independently.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="font-bold">3. Transparent Revenue Reporting</h3>
            <p>
              Our investors receive regular financial reports and
              revenue-sharing breakdowns, allowing you to keep track of your
              profits and business performance.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="font-bold">4. Scalable and Flexible Growth</h3>
            <p>
              Start with a small investment and scale your business as it grows.
              Our investment packages provide the flexibility to adapt to market
              demands.
            </p>
          </div>
        </section>

        <hr className="border-gray-300 my-8" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            6. Who Should Invest in Our Program?
          </h2>
          <p className="mb-4">
            Our Investor Relations Program is designed for:
          </p>

          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              Professionals who want to invest in the food business without
              leaving their jobs.
            </li>
            <li>
              Aspiring entrepreneurs seeking a low-risk investment in the food
              industry.
            </li>
            <li>
              Investors looking for hands-off business models with predictable
              returns.
            </li>
            <li>
              Anyone who wants to enter the Dubai food market but prefers
              minimal operational involvement.
            </li>
          </ul>
        </section>

        <hr className="border-gray-300 my-8" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            7. Get Started – Invest in Your Food Business Today
          </h2>
          <p className="mb-4">
            Ready to begin your low-investment food business in Dubai? Our
            Investor Relations Program provides an easy, scalable path to
            success in the UAE food market with the option to transition into
            running your own business later on.
          </p>

          <h3 className="font-bold mb-2">How to Get Started:</h3>
          <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li>
              <strong>Choose Your Investment Package</strong> – Select from our
              Basic, Standard, or Premium packages.
            </li>
            <li>
              <strong>Choose Your Pre-Planned Menu</strong> – Pick a menu that
              aligns with market trends and customer demand.
            </li>
            <li>
              <strong>Let Us Handle Operations</strong> – We take care of food
              preparation, dispatch, and delivery logistics.
            </li>
            <li>
              <strong>Receive Your Revenue</strong> – Track and collect your
              monthly earnings with regular reports.
            </li>
          </ol>

          {/* Call to Action */}
          <div className="bg-[#F3D39E] text-white p-6 rounded-lg mt-8 text-center">
            <h3 className="font-bold text-2xl mb-3">
              Lets Grow Your Food Business Together!
            </h3>
            <p className="mb-4">
              Partner with Al Shahida to unlock the full potential of your food
              business in the UAE. Whether you are an investor looking for a
              low-investment opportunity or a restaurant owner aiming to grow
              your business, we provide the solutions you need to succeed in a
              competitive market.
            </p>
            <button className="bg-white text-[#F3D39E] font-bold py-3 px-6 rounded-full flex items-center justify-center gap-2 mx-auto">
              <Phone size={20} />
              Contact Us Today
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
