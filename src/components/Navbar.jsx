import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 shadow">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold">
        nullBrains.
      </Link>

      {/* Navigation Links */}
      <div className="space-x-6 hidden md:block">
        <Link to="/" className="text-gray-700 hover:text-indigo-600">Home</Link>
        <Link to="/features" className="text-gray-700 hover:text-indigo-600">Features</Link>
        <Link to="/blog" className="text-gray-700 hover:text-indigo-600">Blog</Link>
        <Link to="/contact" className="text-gray-700 hover:text-indigo-600">Contact</Link> {/* Link for Contact */}
      </div>

      {/* Auth Buttons */}
      <div className="space-x-2">
        <button className="text-sm text-gray-700 hover:text-indigo-600">Sign In</button>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm hover:bg-indigo-700">
          Sign Up
        </button>
      </div>
    </nav>
  );
}
