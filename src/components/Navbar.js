import React from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";
import { useEffect } from "react";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);


  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "Legends",
    },
    {
      id: 3,
      link: "About",
    },
    {
      id: 4,
      link: "Albums",
    },
  ];

  return (
    <div name="Home">
      <nav className="   bg-black fixed top-0 w-full z-40 h-[85px]">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between py-5 ">
          <div className="w-full relative flex justify-between lg:w-auto lg:justify-start">
            <a className="text-3xl tracking-wide  inline-block ml-9  py-2  uppercase text-white cursor-pointer font-metal">
              Led zeppelin
            </a>
            <button
              className=" text-white pointer text-xl  px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden md:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaBars />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow justify-items-center md:flex bg-black ml-[-1.4em] rounded  " +
              (navbarOpen ? " flex p-10" : " hidden ")
            }
          >
            <ul className="flex flex-col lg:flex-row  lg:ml-auto md:flex-row md:ml-auto mt-l4 sm-mt-4 mt-n4">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="nav-item pointer pr-2 md:mt-[-40px] lg:mt-[10px]"
                >
                  <a className="px-3 py-2 flex items-center text-base uppercase cursor-pointer text-white hover:opacity-60 ">
                    <span className="ml-2 ">
                      <Link to={link} smooth duration={500}>
                        {link}
                      </Link>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
