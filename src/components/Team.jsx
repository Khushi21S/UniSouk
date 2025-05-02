import React from "react";
import { FaTwitter, FaGithub } from "react-icons/fa";

export default function Team() {
  const members = [
    {
      name: "Freddy Smith",
      title: "CEO and Founder",
      img: "https://randomuser.me/api/portraits/men/10.jpg",
      bg: "bg-yellow-100",
    },
    {
      name: "Carl Jones",
      title: "CTO and Co-Founder",
      img: "https://randomuser.me/api/portraits/men/11.jpg",
      bg: "bg-green-100",
    },
    {
      name: "Susan Peterson",
      title: "Marketing Directory",
      img: "https://randomuser.me/api/portraits/women/12.jpg",
      bg: "bg-pink-100",
    },
    {
      name: "Tommy Barnes",
      title: "Designer",
      img: "https://randomuser.me/api/portraits/men/13.jpg",
      bg: "bg-green-100",
    },
    {
      name: "Ron Jenson",
      title: "Senior Developer",
      img: "https://randomuser.me/api/portraits/men/14.jpg",
      bg: "bg-teal-200",
    },
    {
      name: "Pete Tompkins",
      title: "Web Developer",
      img: "https://randomuser.me/api/portraits/men/15.jpg",
      bg: "bg-pink-100",
    },
    {
      name: "Kelly Richards",
      title: "Sales Manager",
      img: "https://randomuser.me/api/portraits/women/16.jpg",
      bg: "bg-green-100",
    },
    {
      name: "Alexis Jordan",
      title: "Affiliate Manager",
      img: "https://randomuser.me/api/portraits/women/17.jpg",
      bg: "bg-yellow-100",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-left mb-12">
          <p className="text-sm text-blue-500 font-semibold mb-2">OUR TEAM</p>
          <h2 className="text-3xl font-bold leading-snug">
            An incredible team of <br /> amazing individuals
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {members.map(({ name, title, img, bg }) => (
            <div key={name} className="text-center">
              <div
                className={`w-32 h-32 mx-auto rounded-full ${bg} flex items-center justify-center mb-4`}
              >
                <img
                  src={img}
                  alt={name}
                  className="w-24 h-24 rounded-full object-cover"
                />
              </div>
              <p className="font-semibold">{name}</p>
              <p className="text-sm text-blue-600 mt-1">{title}</p>
              <div className="flex justify-center space-x-4 mt-2 text-gray-500 text-lg">
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaGithub /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
