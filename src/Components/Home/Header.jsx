import React, { useState } from "react";
import Logo from "../../assests/image/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleSearchBar = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <header>
        <nav className="container-wrapper">
          <div className="content-wrappe m-auto h-[80px] place-items-center  grid md:grid-cols-[100px,823px,1fr]">
            <figure className="logo w-full ">
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
                {/* <li>
                  <a href="contact us">Contact us</a>
                </li> */}
              </ul>
            </div>
            <div className="card-area   flex items-center gap-8 max-sm:flex-wrap max-sm:gap-y-2 max:mt-3">
              <div className="search-wrapper relative text-gray-500 focus-within:text-black">
                <button onClick={toggleSearchBar} className="search-container">
                  <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
                </button>
                {isVisible && (
                  <input
                    className="search-input"
                    type="text"
                    placeholder="Search For Products"
                  />
                )}
              </div>
              <div>
                <FontAwesomeIcon icon={faShoppingCart} />
              </div>

              <div>
                <FontAwesomeIcon icon={faUser} />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
