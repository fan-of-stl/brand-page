import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const MenuIcons = ({ open, onClick }) => {
  return (
    <FontAwesomeIcon
      className="text-2xl cursor-pointer md:hidden"
      icon={open ? faXmark : faBars}
      onClick={onClick}
    />
  );
};
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prevValue) => !prevValue);
  };
  return (
    <nav className="flex justify-between items-center w-[92%] mx-auto py-1">
      <div>
        <img className="w-16" src="/images/brand_logo.png" alt="" />
      </div>

      <div
        className={`md:static duration-500 absolute bg-white md:min-h-fit min-h-[60vh] left-0 ${
          open ? "top-[9%]" : "top-[-100%]"
        } md:w-auto w-full flex items-center px-5`}
      >
        <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
          <li>
            <a className="hover:text-gray-500" href="#">
              MENU
            </a>
          </li>
          <li>
            <a className="hover:text-gray-500" href="#">
              LOCATION
            </a>
          </li>
          <li>
            <a className="hover:text-gray-500" href="#">
              ABOUT
            </a>
          </li>
          <li>
            <a className="hover:text-gray-500" href="#">
              CONTACT
            </a>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-6">
        <button className="bg-[#e3747b] text-white px-5 py-1 rounded hover:bg-[#D01C28]">
          Login
        </button>
        <MenuIcons open={open} onClick={handleClick} />
      </div>
    </nav>
  );
};

export default Navbar;
