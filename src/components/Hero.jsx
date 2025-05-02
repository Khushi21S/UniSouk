import React from "react";

export default function Hero() {
  return (
    <section className="text-center py-20 bg-white">
      <h1 className="text-5xl font-extrabold">
        Start Crafting Your{" "}
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-500">
          Next Great Idea
        </p>
      </h1>
      <p className="mt-4 text-gray-500 text-lg">
        Simplifying the creation of landing pages, blog pages, <p>application pages and so much more!</p>
      </p>
      <div className="mt-8 flex flex-col items-center space-y-4">
        <div className="relative inline-flex">
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-medium">
            Purchase Now
          </button>
          <span className="absolute -top-2 -right-4 bg-emerald-400 text-white text-xs px-2 py-0.5 rounded-full">
            only $15/mo
          </span>
        </div>
        <a href="#" className="text-indigo-600 underline text-sm">
          Learn More
        </a>
      </div>
    </section>
  );
}
