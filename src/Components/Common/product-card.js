import React from "react";

export const ProductCard = ({ title, src, price ,reviewIcons}) => {
  return (
    <div className="product-card-wrapper">
      <figure>
        {" "}
        <img src={src} alt={title} />
      </figure>
      <h2>{title ? title : "title"}</h2>
      <span className="star-icon">{reviewIcons ? reviewIcons : "*"} </span>
      <h5 className="price">{price ? price : "price"}</h5>
    </div>
  );
};
