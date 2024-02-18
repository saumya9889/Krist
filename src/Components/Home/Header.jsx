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
  const handleClose=()=>{
    setIsVisible(false);
  }

  const toggleSearchBar = () => {
    // setIsVisible(!isVisible);
    setIsVisible(true);
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
                  <div className="relative">
                    <span className="absolute right-[317px] text-black z-10"> <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" /></span>
                  
                  <input
                    className="search-input absolute top-[0] right-[2.5rem] w-[300px]"
                    type="text"
                    placeholder="Search For Products"
                  />
                  <button  onClick={handleClose} className="search-close absolute left-[2px] text-black">X</button>
                  </div>
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
