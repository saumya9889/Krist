import React from "react";
import Banners from "../../assests/image/banner.png";
import Vector from "../../assests/image/vector.png";
import Vectors from "../../assests/image/vector-small.png";

const Banner = () => {
  return (
    <>
      
        <div className="container-wrapper">
          <div className="banner-wrapper">
            <div className="left-side">
              <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
              <p>
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <button> SignUp</button>
              <div>
                <span>
                  200+<p>International Brands</p>
                </span>
                <span>
                  2,000+<p>High-Quality Products</p>
                </span>
                <span>
                  30,000+<p>Happy Customers</p>
                </span>
              </div>
            </div>

            <div className="right-side">
            <img  className="img" alt="banner" src={Banners} />
            <img src={Vector} />
            <img src={Vectors} /></div>
          </div>
        </div>
      
    </>
  );
};

export default Banner;

//<div className="banner-img bg-cover bg-no-repeat bg-center min-h-screen" style={{backgroundImage: 'url("../../image/banner.png")'}}></div>
