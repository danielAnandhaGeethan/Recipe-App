import React, { useState } from "react";
import logo from "../assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div name="navbar" className="w-full top-0 left-0 fixed z-20">
      <div className="grid grid-cols-3 p-5 shadow-lg">
        <div>{""}</div>
        <div className="flex justify-center">
          <img
            src={logo}
            alt="Chef's Palette"
            className="h-[35px] cursor-pointer"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          />
        </div>
        <div className="hidden md:flex justify-end pr-[15%] w-full">
          <ul className="flex gap-10 items-center">
            <li className="font-sans text-lg">
              <ScrollLink
                to="search"
                smooth={true}
                duration={700}
                className="cursor-pointer"
              >
                Search
              </ScrollLink>
            </li>
            <li className="font-sans text-lg">
              <RouterLink to="/favourites" className="cursor-pointer">
                Favourites
              </RouterLink>
            </li>
          </ul>
        </div>
        <div className="flex flex-col md:hidden items-end pr-[18%] justify-center">
          <RxHamburgerMenu
            size={25}
            className="cursor-pointer"
            onClick={() => setIsVisible(!isVisible)}
          />
          <div
            className={`absolute top-20 z-[20] ${isVisible ? "" : "hidden"}`}
          >
            <ul className="bg-white shadow-lg font-sans">
              <li className="py-2 px-7 border">
                <ScrollLink
                  to="search"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                  onClick={() => setIsVisible(!isVisible)}
                >
                  Search
                </ScrollLink>
              </li>
              <li className="py-2 px-7 border">
                <RouterLink
                  to="/favourites"
                  className="cursor-pointer"
                  onClick={() => setIsVisible(!isVisible)}
                >
                  Favourites
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
