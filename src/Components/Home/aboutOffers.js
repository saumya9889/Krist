import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const AboutOffers = () => {
  return (
    <>
      <div className="container-wrapper relative ">
        <div className="offers-content absolute w-full z-10 h-[200px] bg-black rounded-[20px]">
          <div className="offer-wrapper flex justify-around items-center">
            <div className="left-side">
              <h1 className="text-[40px] font-bold leading-[50px] text-[white] font-auto mt-[3rem]">
                STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
              </h1>
            </div>
            <div className="right-side mt-[3rem]">
              <div className="left-wrapper flex flex-col justify-center items-center gap-5">
              <div className="input-wrapper relative flex gap-2">
                <FontAwesomeIcon  className=" absolute h-[20px] text-[grey] bottom-4 left-4 pt-[0.8rem]" icon={faEnvelope} />
                <input  className=" w-[349px] rounded-[62px] h-[48px] pl-12 " type="text" placeholder="Enter your email address" />
                </div>
                <button className=" btn w-[349px] font-sans text-black font-bold text-[14px] rounded-[62px] bg-white h-[48px]">Subscribe To Newsletter</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutOffers;
