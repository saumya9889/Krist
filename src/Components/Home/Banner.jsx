import React from "react";
import Banners from "../../assests/image/banner.png";
import Vector from "../../assests/image/vector.png";
import Vectors from "../../assests/image/vector-small.png";
import { BannerData, NewArrivalData } from "../../Mock/home-data";

const Banner = () => {
  return (
    <>
      <div className="banner-wrapper">
        <div className="container-wrapper">
          <div className="banner-content-wrapper flex justify-between items-center">
            <div className="left-side">
              <div className="letf-content-wrapper -mt-40">
                <h1 className="heading font-[mono] leading-[60px] text-[47px] font-extrabold">
                  FIND CLOTHES <br /> THAT
                  MATCHES <br /> YOUR STYLE
                </h1>
                <p className="para text-[14px] leading-6 mt-4 text-lightGrey">
                  Browse through our diverse range of meticulously crafted
                  garments, designed
                  <br /> to bring out your individuality and cater to your sense
                  of style.
                </p>
                <button
                  style={{
                    color: "white",
                    padding: "6px",
                    width: "120px",
                    cursor: "pointer",
                    borderRadius: "62px",
                    marginTop: "2.5rem",
                    background: "#131118",
                  }}
                >
                  Shop Now
                </button>
                <div className="flex justify-between mt-14 ">
                  <span className="span text-[34px] text-black font-bold leading-[54px]">
                    200+
                    <p className="text-[16px] text-lightGrey leading-6 font-normal mt-2">
                      International Brands
                    </p>
                  </span>
                  <span className="span text-[34px] ] text-black font-bold leading-[54px">
                    2,000+
                    <p className="text-[16px] text-lightGrey leading-6 font-normal mt-2">
                      High-Quality Products
                    </p>
                  </span>
                  <span className="span  text-[34px] text-black font-bold leading-[54px]">
                    30,000+
                    <p className="text-[16px] text-lightGrey leading-6 font-normal mt-2">
                      Happy Customers
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <div className="right-side relative">
              <figure className="image-wrap w-full">
                <img alt="banner" src={Banners} />
              </figure>
              <img
                className="vector absolute w-[80px] top-[79px] right-[6px]"
                src={Vector}
              />
              <img
                className="vectors absolute top-[14rem] left-[4rem]"
                src={Vectors}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

//<div className="banner-img bg-cover bg-no-repeat bg-center min-h-screen" style={{backgroundImage: 'url("../../image/banner.png")'}}></div>
