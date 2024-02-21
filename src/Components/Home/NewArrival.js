import React from "react";
import { ProductCard } from "../Common/product-card";
import { NewArrivalData } from "../../Mock/home-data";

const NewArrival = () => {
  console.log(NewArrivalData, "NewArrivalData");
  return (
    <div className="new-arrival">
      <div className="container-wrapper">
        <h1 className="mt-12 text-center pb-16 top-20 h-14 text-4xl font-serif  leading-11 font-bold">
          {NewArrivalData.mainTitle}
        </h1>
        <section className="grid">
          <div className="card flex gap-[2.70rem] ">
          
            {NewArrivalData.cardsData.map((item, index) => (
              <ProductCard
                key={index}
                src={item.img}
                title={item.title}
                reviewIcons={item.reviewIcons}
                price={item.price}
              />
            ))}
          </div>

          <button
            type="button"
            className="btn bg-[#ebe6de] rounded-full w-[218px] h-[34px] text-black font-bold text-center ml-[35rem] mt-[3rem]"
          >
            View All
          </button>
        </section>
      </div>
    </div>
  );
};

export default NewArrival;
