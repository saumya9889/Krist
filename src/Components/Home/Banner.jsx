import React from "react";
import Banners from "../../assests/image/banner.png";
import Vector from "../../assests/image/vector.png";
import Vectors from "../../assests/image/vector-small.png";
import  {BannerData,NewArrivalData} from "../../Mock/home-data"; 

const Banner = () => { 
  return (
    <>
      
        <div className="banner-wrapper">
          <div className="container-wrapper">
            <div className="banner-content-wrapper flex justify-between items-center">
            <div className="left-side">
            <div className="letf-content-wrapper">
              <h1 className="heading font-[mono] leading-[58px] text-[47px] font-extrabold">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
              <p className="para text-[14px] text-lightGrey">
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
            </div>
            <div className="right-side relative">
            <figure className="image-wrap w-full">
            <img   alt="banner" src={Banners} />
            </figure>
            <img className="vector absolute w-[80px] top-[79px] right-[6px]" src={Vector} />
            <img  className="vectors absolute top-[14rem] left-[4rem]" src={Vectors} /></div></div>
          </div>
        </div>
      
    </>
  );
};

export default Banner;

//<div className="banner-img bg-cover bg-no-repeat bg-center min-h-screen" style={{backgroundImage: 'url("../../image/banner.png")'}}></div>
