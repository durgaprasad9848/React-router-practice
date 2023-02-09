import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <li>
          <NavLink to="/quotes">All Quotes</NavLink>
        </li>
        <li>
          <NavLink to="/new-quote">Add a Quote</NavLink>
        </li>
        <li>
          <NavLink to ="/quotes/:quo">Quote Details</NavLink>
        </li>
      </nav>
    </div>
  );
};
export default Navbar;