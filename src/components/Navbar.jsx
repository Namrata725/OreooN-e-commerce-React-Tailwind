import React from "react";
import { GoHeartFill } from "react-icons/go";
import { IoBag } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
function Navbar() {
  return (
    <header className="bg-white">
      <nav className="flex justify-between max-w-9/10 mx-auto  h-[14vh] items-center px-10">
        <a href="#" className="text-3xl font-bold">
          O<span className="text-orange-500">reoo</span>N
        </a>

        {/* desktop menu */}

        <ul className="flex items-center gap-x-15">
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

          <div className="flex  p-0.5 border-2 border-orange-500 rounded-full">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Search ....."
              autoComplete="off"
              className="flex-1 h-[5vh] px-3 focus:outline-none items-center justify-center"
            />
            <button className="bg-gradient-to-b from-red-600 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full">
              <IoMdSearch className="text-xl" />
            </button>
          </div>

          <a href="" className="text-zinc-800 text-2xl">
            <GoHeartFill />
          </a>

          <a href="" className="text-zinc-800 text-2xl">
            <IoBag />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
