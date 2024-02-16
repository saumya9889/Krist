import React from "react";
import BannerData from "../../Mock/BannerData";
// import Image from "../../assests/image/cardImage/image 7 (1).png";

const NewArrival = () => {
  return (
    <>
      <div className="new-arrival">
        <div className="container-wrapper">
          <h1>New Arrivals</h1>
          <section class="grid">
            <div class="card">
            <img src={BannerData.image} alt="banner" />
            <h2>{BannerData.title}</h2>
             
            
              <p>{BannerData.description}</p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default NewArrival;
