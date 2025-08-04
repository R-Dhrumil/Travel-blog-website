import React from "react";
import { Link } from "react-router";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex flex-row gap-5 justify-between w-[85%] items-center px-5 py-4 rounded-3xl text-xl shadow-[0_10px_25px_rgba(0,0,0,0.25)]">
      <div className="font-extrabold text-3xl ">BagPack</div>

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

      <div className="pl-25">
        <Moon />
      </div>
    </div>
  );
};

export default Navbar;
