import React from "react";
import { Link } from "react-router"; // fixed import
import { Moon } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center w-[85%] mx-auto px-6 py-4 rounded-3xl text-black text-xl bg-white/10 backdrop-blur-sm shadow-[0_10px_25px_rgba(0,0,0,0.5)]">
      
      {/* Logo */}
      <div className="font-extrabold text-3xl">BagPack</div>

      {/* Navigation Links */}
      <ul className="flex flex-row gap-7 font-medium">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      {/* Theme Toggle Icon */}
      <div>
        <Moon className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
