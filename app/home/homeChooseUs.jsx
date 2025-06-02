import React from 'react';

const WorkSection = () => {
  const stats = [
    { value: "1550+", label: "MOVES" },
    { value: "15+", label: "YEARS IN BUSINESS" },
    { value: "70+", label: "PROFESSIONAL TEAM" },
    { value: "24/7", label: "OPEN" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-gray-600 mt-8">
        <h6 className="text-sm font-medium">WORK</h6>
        <div className="flex flex-col md:flex-row gap-8 mt-4">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              WHY CHOOSE ULTRA MOVERS IN UAE?
            </h1>
            <p className="text-gray-600 leading-relaxed mb-6">
              We have been working for over 15 years. Thus, the crew in our company
              are now the Ultra Movers and Packers in UAE. We make sure that we
              meet our customers demands. Hence, we have built our reputation
              with consideration of 3 things of services we provide: Quality, a
              professional team, and an affordable price. You will not think twice to
              choose us because we are the professional movers in dubai.
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/api/placeholder/800/600" 
              alt="Moving service demonstration" 
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
        
        <div className="bg-gray-900 mt-8 p-6 flex flex-wrap justify-between items-center">
          {stats.map((stat, index) => (
            <div key={index} className="text-center px-4 py-2">
              <span className="block text-amber-500 text-2xl font-bold">
                {stat.value}
              </span>
              <span className="block text-white text-sm mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkSection;