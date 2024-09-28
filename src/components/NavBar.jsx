import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  const LinkClassName = ({isActive}) => isActive ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' : 'text-white hover:bg-gray-900 rounded-md px-3 py-2'; 
  return (
    <>
      <nav className="bg-indigo-600 border-b border-indigo-400">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              <NavLink className="flex flex-shrink-0 items-center mr-3" to="/">
                <img className="h-10 w-auto" src={logo} alt="React Jobs"/> </NavLink>
                <span className="hidden md:block text-white text-2xl font-bold ml-2 my-1">React Jobs Now</span>
              <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink
                  to="/"
                  className={LinkClassName}
                  >Home</NavLink>
                <NavLink
                  to="/jobs"
                  className={LinkClassName}
                  >Jobs</NavLink>
                <NavLink
                  to="/add-job"
                  className={LinkClassName}
                  >Add Job</NavLink>
            </div>
          </div>
        </div>
        </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar;