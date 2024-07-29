import { List } from "@phosphor-icons/react";

import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-pink-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
          <p className="text-lg px-4 hover:text-blue-950"></p>
        <div className="hidden md:flex items-center">
          <Link to="/" className="mr-4 hover:text-blue-950">
            <span className="text-lg"> Home</span>
          </Link>
          <Link to="/login" className="mr-4 hover:text-blue-950">
            <span className="text-lg"> Login</span>
          </Link>
          <Link to="/signup" className="mr-4 hover:text-blue-950">
            <span className="text-lg">signup</span>
          </Link>
          
        </div>
        <div className="md:hidden flex items-center">
          <button className="text-white focus:outline-none  hover:text-blue-950" onClick={toggleMenu}>
          <List size={32} />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-rose-700 text-white py-2 px-4">
          <div className="flex flex-col gap-2">
            <Link
              to="/"
              className="text-sm block py-1 hover:text-rose-950"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/project"
              className="text-sm block py-1 hover:text-rose-950"
              onClick={toggleMenu}
            >
              Login
            </Link>
            <Link
              to="/contact"
              className="text-sm block py-1 hover:text-rose-950"
              onClick={toggleMenu}
            >
              signup
            </Link>
            
          </div>
        </div>
      )}
    </nav>
  );
};