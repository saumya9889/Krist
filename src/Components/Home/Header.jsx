import React, { useState } from "react";
import Logo from "../../assests/image/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faShoppingCart,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClose = () => {
    setIsVisible(false);
  };

  const toggleSearchBar = () => {
    // setIsVisible(!isVisible);
    setIsVisible(true);
  };

  // for humburge menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <header>
        <nav className="container-wrapper">
          <div className="content-wrappe m-auto h-[80px] place-items-center  grid md:grid-cols-[100px,823px,1fr]">
            <div className="menu-toggle max-sm:block hidden" onClick={toggleMenu}>
            <div className="w-[25px] text-black h-[3px] m-[5px 0] mt-[2px] bg-[#333]"></div>
            <div className="w-[25px] text-black h-[3px] m-[5px 0] mt-[2px] bg-[#333]"></div>
            <div className="w-[25px] text-black h-[3px] m-[5px 0] mt-[2px] bg-[#333]"></div>
          </div>

            <figure className="logo w-full cursor-pointer max-sm:max-w-[100px]">
              <img src={Logo} className=" logos w-max h-max" alt="logo" />
            </figure>
            <div className="menu">
              <ul className="menu-list flex items-center gap-8 max-sm:flex-wrap max-sm:gap-y-2 max:mt-3">
                <li>
                  <a href="#home">Shop</a>
                </li>
                <li>
                  <a href="#shop">On Sales</a>
                </li>
                <li>
                  <a href="our story">New Arrivals</a>
                </li>
                <li>
                  <a href="blog">Brands</a>
                </li>
              </ul>
            </div>
            <div className="card-area   flex items-center gap-8 max-sm:flex-wrap max-sm:gap-y-2 max:mt-3">
              <div className="search-wrapper relative text-gray-500 focus-within:text-black">
                <button
                  onClick={toggleSearchBar}
                  className="search-container text-black font-extrabold"
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
                </button>
                {isVisible && (
                  <div className="relative">
                    <span className="absolute right-[317px] top-[-10px] text-black font-extrabold z-10 ">
                      {" "}
                      <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
                    </span>

                    <input
                      className="search-input absolute bg-[#f2f0f1!important] top-[-10px] pl-[3rem!important]  right-[2.5rem]  w-[305px]"
                      type="text"
                      placeholder="Search For Products"
                    />
                    <button
                      onClick={handleClose}
                      className="search-close absolute top-[-10px] left-[-64px] text-black font-extrabold"
                    >
                      X
                    </button>
                  </div>
                )}
              </div>
              <div className="cursor-pointer">
                <FontAwesomeIcon icon={faShoppingCart} />
              </div>

              <div className="cursor-pointer">
                <Link to="/login">
                  <FontAwesomeIcon icon={faUser} />
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
