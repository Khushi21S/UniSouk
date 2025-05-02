import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm bg-gray-100">
      <div className="mb-2 space-x-4">
        <a href="#">About</a>
        <a href="#">Blog</a>
        <a href="#">Team</a>
        <a href="#">Pricing</a>
        <a href="#">Contact</a>
        <a href="#">Terms</a>
      </div>
      <p>&copy; 2025 SomeCompany, Inc. All rights reserved.</p>
    </footer>
  );
}