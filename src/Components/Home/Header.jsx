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
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const handleClose = () => {
    setIsVisible(false);
  };

  const toggleSearchBar = () => {
    // setIsVisible(!isVisible);
    setIsVisible(true);
  };
  console.log(isMenuOpen, "isMenuOpen");
  // for humburge menu
  const handleToggleMenu = () => {
    setisMenuOpen(true);
  };
  return (
    <>
      <header>
        <nav className="container-wrapper">
          <div className="content-wrappe m-auto h-[80px] place-items-center max-sm:grid-cols-3  grid md:grid-cols-[100px,823px,1fr]">
            <div
              className="menu-toggle block sm:hidden"
              onClick={handleToggleMenu}
            >
              <div className="w-[25px] text-black h-[3px] m-[5px 0] mt-[2px] bg-[#333]"></div>
              <div className="w-[25px] text-black h-[3px] m-[5px 0] mt-[2px] bg-[#333]"></div>
              <div className="w-[25px] text-black h-[3px] m-[5px 0] mt-[2px] bg-[#333]"></div>
            </div>

            <figure className="logo w-full cursor-pointer max-sm:max-w-[100px]">
              <img src={Logo} className=" logos w-max h-max" alt="logo" />
            </figure>
            {/* {isMenuOpen ? ( */}
            <div
              className={`${
                isMenuOpen ? "block" : "hidden"
              } menu-wrap absolute sm:relative  sm:block`}
            >
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
            {/* ) : (
              ""
            )} */}
            <div className="card-area   flex items-center gap-8 max-sm:flex-wrap max-sm:gap-y-2 max:mt-3">
              <div className="search-wrapper relative text-gray-500 focus-within:text-black">
                <button
                  onClick={toggleSearchBar}
                  className="search-container text-black font-extrabold"
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
                </button>
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
        {isVisible && (
          <div className="absolute top-[28px]  sm:right-[22.5rem] right-0 bottom-0 rounded-sm bg-[#f2f0f1] sm:w-[300px] w-[90%] mx-auto h-[40px]">
            <div className="relative">
              <span className="absolute   top-[1px] left-3  text-black font-extrabold z-10 ">
                {" "}
                <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
              </span>

              <input
                className="search-input  bg-[#f2f0f1!important] rounded-sm   pl-[3rem!important]    w-full"
                type="text"
                placeholder="Search For Products"
              />
              <button
                onClick={handleClose}
                className="search-close absolute top-[1px] right-3   text-black font-extrabold"
              >
                X
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
