import React from "react";
import Logo from "../../assests/image/logo.png";

const Header = () => {
  return (
    <>
      <header>
        <nav className="container-wrapper">
          <div className="content-wrappe m-auto h-[80px] place-items-center  grid md:grid-cols-[100px,1fr,200px]">
            <figure className="logo w-full ">
              <img
                src={Logo}
                className=" logos w-max h-max"
                alt="logo"
              />
            </figure>
            <div className="menu">
              <ul className="menu-list flex items-center gap-8 max-sm:flex-wrap max-sm:gap-y-2 max:mt-3">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#shop">Shop</a>
                </li>
                <li>
                  <a href="our story">Our Story</a>
                </li>
                <li>
                  <a href="blog">Blog</a>
                </li>
                <li>
                  <a href="contact us">Contact us</a>
                </li>
              </ul>
            </div>
            <div className="login flex  justify-between align-middle items-center">
              <div>se</div>
              <div>l</div>
              <div>bag</div>
              <div>log</div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
