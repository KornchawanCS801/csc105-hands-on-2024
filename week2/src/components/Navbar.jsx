import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-5 bg-white shadow-md">
        <div>
        <h1 className="text-2xl font-bold">Artist John</h1>
      <div className="space-x-6">
        <a href="#home" className="hover:text-green-600">Home</a>
        <a href="#about" className="hover:text-green-600">About Me</a>
        <a href="#gallery" className="hover:text-green-600">Gallery</a>
      </div>
        </div>
      <button className="bg-green-600 text-white px-4 py-2 rounded-full">Contact</button>
    </nav>
  );
};

export default Navbar;
