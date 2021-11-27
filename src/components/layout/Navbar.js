import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({children}) => {
  return (
    <>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/news">News</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
    {children}
    </>
  );
};

export default Navbar;
