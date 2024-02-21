import React from "react";
import Gym from "../../assests/image/cardImage/gym.png";
import Casual from "../../assests/image/cardImage/casual.png";
import Formal from "../../assests/image/cardImage/formal.png";
import Party from "../../assests/image/cardImage/party.png";

const DressCards = () => {
  return (
    <>
      <div className="container-wrapper">
      <div className="content-wrapper bg-[#f2f0f1] pt-8 mt-8 h-[880px] rounded-[40px]">
        <div className="text-center">
          <h1 className="text-center text-3xl font-bold mt-12 mb-12">
          BROWSE BY DRESS STYLE
          </h1>
        </div>
        <div className="flex justify-center gap-4 items-center rounder-[20px] ">
          <div>
            <img src={Casual}/>
          </div>
          <div>
          <img src={Formal}/>
          </div>
        </div>
        <div className="flex justify-center gap-4 items-center mt-[2rem]">
          <div>
            <img src={Party}/>
          </div>
          <div>
          <img src={Gym}/>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default DressCards;
