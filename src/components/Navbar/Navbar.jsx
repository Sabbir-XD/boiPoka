import React from "react";
import { NavLink } from "react-router";


const Navbar = () => {
  const NavbarItems = <>
    <NavLink
      to="/"
      className={({ isActive }) =>
        isActive ? "mr-8 text-lg font-bold text-[#23BE0A]" : "mr-8 text-lg"
      }
    >
      Home
    </NavLink>

    <NavLink
      to="/listed-books"
      className={({ isActive }) =>
        isActive ? "mr-8 text-lg font-bold text-[#23BE0A]" : "mr-8 text-lg"
      }
    >
      Listed Books
    </NavLink>

    <NavLink
      to="/pages-to-read"
      className={({ isActive }) =>
        isActive ? "mr-8 text-lg font-bold text-[#23BE0A]" : "mr-8 text-lg"
      }
    >
      Pages To Read
    </NavLink>
  </>;

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {NavbarItems}
          </ul>
        </div>
        <a className="text-xl font-bold">
          boi<span className="text-[#23BE0A]">POka</span>
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {NavbarItems}
        </ul>
      </div>

      <div className="navbar-end space-x-3">
        <a className="btn bg-[#23BE0A] text-white">Sign In</a>
        <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
