import React from "react";
import { FaCertificate, FaBullhorn, FaBox, FaTools, FaCubes, FaTicketAlt } from "react-icons/fa";

const features = [
  {
    icon: <FaCertificate className="text-blue-500 text-3xl mb-4" />,
    title: "Certifications",
    description: "Each of our plan will provide you and your team with certifications.",
  },
  {
    icon: <FaBullhorn className="text-blue-500 text-3xl mb-4" />,
    title: "Notifications",
    description: "Send out notifications to all your customers to keep them engaged.",
  },
  {
    icon: <FaBox className="text-blue-500 text-3xl mb-4" />,
    title: "Bundles",
    description: "High-quality bundles of awesome tools to help you out.",
  },
  {
    icon: <FaTools className="text-blue-500 text-3xl mb-4" />,
    title: "Developer Tools",
    description: "Developer tools to help grow your application and keep it up-to-date.",
  },
  {
    icon: <FaCubes className="text-blue-500 text-3xl mb-4" />,
    title: "Building Blocks",
    description: "The right kind of building blocks to take your company to the next level.",
  },
  {
    icon: <FaTicketAlt className="text-blue-500 text-3xl mb-4" />,
    title: "Coupons",
    description: "Coupons system to provide special offers and discounts for your app.",
  },
];

export default function Features() {
  return (
    <section className="py-12 px-4 bg-white text-center">
      <h2 className="text-3xl font-bold mb-2">Our Features</h2>
      <p className="text-gray-600 mb-10">Check out our list of awesome features below.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map(({ icon, title, description }) => (
          <div
            key={title}
            className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-center text-center"
          >
            {icon}
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
