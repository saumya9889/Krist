import React from "react"; 
import { ProductCard } from "../Common/product-card";
import {NewArrivalData} from "../../Mock/home-data"
// import Image from "../../assests/image/cardImage/image 7 (1).png";

const NewArrival = () => {
  console.log(NewArrivalData,"NewArrivalData");
  return (
    <>
      <div className="new-arrival">
        <div className="container-wrapper">
          <h1>{NewArrivalData.mainTitle}</h1>
          <section class="grid">
            <div class="card flex">
             
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default NewArrival;
