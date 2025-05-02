import React from "react";

export default function FeaturesSection() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* First Row */}
      <div className="grid md:grid-cols-2 items-center gap-12 mb-20">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/robotic-process-automation-concept-illustration_114360-7311.jpg"
            alt= "Illustration"
            className="w-40 md:w-96"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Boost Productivity</h2>
          <p className="text-gray-700 mb-4">
            Build an atmosphere that creates productivity in your organization and your company culture.
          </p>
          <ul className="text-sm text-gray-600 space-y-3">
            {[
              "Maximize productivity and growth",
              "Speed past your competition",
              "Learn the top techniques",
            ].map((text, idx) => (
              <li key={idx} className="flex items-start">
                <span className="mt-1 w-2.5 h-2.5 bg-yellow-400 rounded-full mr-3 flex-shrink-0"></span>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Second Row */}
      <div className="grid md:grid-cols-2 items-center gap-12">
        {/* Text */}
        <div className="pl-4 md:pl-16">
          <h2 className="text-2xl font-bold mb-3">Automated Tasks</h2>
          <p className="text-gray-700 mb-4">
            Save time and money with our revolutionary services. We are the leaders in the industry.
          </p>
          <ul className="text-sm text-gray-600 space-y-3">
            {[
              "Automated task management workflow",
              "Detailed analytics for your data",
              "Some awesome integrations",
            ].map((text, idx) => (
              <li key={idx} className="flex items-start">
                <span className="mt-1 w-2.5 h-2.5 bg-yellow-400 rounded-full mr-3 flex-shrink-0"></span>
                {text}
              </li>
            ))}
          </ul>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/robotic-process-automation-concept-illustration_114360-7311.jpg"
            alt="Automation Illustration"
            className="w-40 md:w-96"
          />
        </div>
      </div>
    </section>
  );
}
