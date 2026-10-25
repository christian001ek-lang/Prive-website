import React from "react";
import { Link } from "react-router";

export default function Nabar() {
  return (
    <div className="flex justify-evenly">
      
        <div className=" flex gap-10 ">
         <Link to="/"className="hover:text-orange-400 text-2xl font-bold">LW</Link>
         <Link to="/about"className="hover:text-orange-400">About</Link>
         <Link to="/work"className="hover:text-orange-400">Work</Link>
         <Link to="/Blog"className="hover:text-orange-400">Blog</Link>
         <Link to="/contact"className="hover:text-orange-400">Contact</Link>
         
</div>
<div className="flex items-center gap-3">
  <a href="#" aria-label="X" className="text-xl font-semibold">
    𝕏
  </a>

  <a
    href="#"
    aria-label="LinkedIn"
    className="border border-black rounded-sm text-sm font-bold px-1"
  >
    in
  </a>


  <button
    id="themeToggle"
    className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center text-xl"
  >
    ☾
  </button>
</div>

        </div>
       


  
  );
}
