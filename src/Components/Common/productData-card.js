import React from "react";
import { StarIcon } from "../../Mock/icons";

export const ProductDataCard = ({ title, src, price, reviewIcons }) => {
  return (
    <div className="product-card-wrapper">
      <figure className="w-[230px]">
        <img className="image w-[280px] rounded-[20px]" src={src} alt={title} />
      </figure>
      <h2 className="leading-8 text-[16px] font-bold  mt-4">
        {title ? title : "title"}
      </h2>

      <h3 className="star-icon w-[95px] text-[22px]">
        {/* {reviewIcons ? reviewIcons : "*"}
         */}
         <StarIcon number={reviewIcons} className={"text-[#ffc633] "}/>

      </h3>
      <h5 className="price text-[20px] font-[700] leading-9">
        {price ? price : "price"}
      </h5>
    </div>
  );
};
