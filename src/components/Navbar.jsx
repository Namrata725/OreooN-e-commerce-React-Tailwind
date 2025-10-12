import React, { useState } from "react";
import { GoHeartFill } from "react-icons/go";
import { IoBag } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { TbMenu2, TbMenu3 } from "react-icons/tb";
function Navbar() {
  const [showMenu, setmenu] = useState(false);
  const toggleMenu = () => {
    setmenu(!showMenu);
  };
  return (
    <header className="bg-white fixed top-0 left-0 right-0">
      <nav className="flex justify-between max-w-9/10 mx-auto h-[12vh] md:h-[14vh] items-center px-10">
        <a href="#" className="text-3xl font-bold">
          O<span className="text-orange-500">reoo</span>N
        </a>

        {/* desktop menu */}

        <ul className="lg:flex items-center gap-x-15 hidden">
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-orange-500 "
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* nav action */}

        <div className="flex items-center gap-x-5">
          {/* input field */}

          <div className="p-0.5 ml-4 border-2 border-orange-500 rounded-full md:flex hidden">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Search ....."
              autoComplete="off"
              className="flex-1 h-7 px-3 focus:outline-none items-center justify-center"
            />
            <button className="bg-gradient-to-b from-red-600 to-orange-500 text-white size-7 flex justify-center items-center rounded-full">
              <IoMdSearch className="text-xl" />
            </button>
          </div>

          <a href="" className="text-zinc-800 text-2xl">
            <GoHeartFill />
          </a>

          <a href="" className="text-zinc-800 text-2xl">
            <IoBag />
          </a>

          {/* hamburger */}
          <a className="text-zinc-800 text-3xl lg:hidden" onClick={toggleMenu}>
            {showMenu ? <TbMenu3 /> : <TbMenu2 />}
          </a>
        </div>

        {/* mobile menu */}

        <ul
          className={`flex-col items-center gap-y-15 lg:hidden absolute bg-white/40 p-10 top-0  w-full text-center h-screen justify-center text-3xl backdrop-blur-sm -left-1/2 transform -translate-x-1/2 transition-all duration-1000 top-25 ${
            showMenu ? "left-1/2" : ""
          }`}
        >
          <li className="border-b-orange-500 border-2 border-transparent">
            <a
              href="#"
              className="font-semibold tracking-wider text-orange-500 "
            >
              Home
            </a>
          </li>
          <li className="border-b-orange-500 border-2 border-transparent">
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              About Us
            </a>
          </li>
          <li className="border-b-orange-500 border-2 border-transparent">
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Process
            </a>
          </li>
          <li className="border-b-orange-500 border-2 border-transparent">
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Contact Us
            </a>
          </li>

          <li className="p-0.5 border-2 border-orange-500 rounded-full flex mt-7 md:hidden">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Search ....."
              autoComplete="off"
              className="flex-1 h-[5vh] text-sm md:text-xl px-3 focus:outline-none items-center justify-center"
            />
            <button className="bg-gradient-to-b from-red-600 to-orange-500 text-white size-10 flex justify-center items-center rounded-full">
              <IoMdSearch className="text-lg" />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
