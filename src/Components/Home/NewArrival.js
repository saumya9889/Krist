import React from "react";
import { ProductCard } from "../Common/product-card";
import { NewArrivalData } from "../../Mock/home-data";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const { carouselState: { currentSlide } } = rest;
  return (
    <div className="carousel-button-group flex gap-2">  
      <button className={`${currentSlide === 0 ? 'bg-[#999!important]' : ''} w-10 h-5 shadow-sm bg-[#33333383]`} onClick={() => previous()}>{"<"}</button>
      <button  className={`${currentSlide === 0 ? 'bg-[#999!important]' : ''} w-10 h-5 shadow-sm bg-[#33333383] `} onClick={() => next()} >{">"}</button> 
    </div>
  );
};

const NewArrival = () => {
  console.log(NewArrivalData, "NewArrivalData");
  return (
    <div className="new-arrival">
      <div className="container-wrapper">
        <h1 className="mt-12 text-center pb-16 top-20 h-14 text-4xl font-serif  leading-11 font-bold">
          {NewArrivalData.mainTitle}
        </h1>
        <section className="grid">
          {/* <div className="card grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3   sm:grid-cols-2 grid-cols-1  gap-[2.70rem] "> */}
          <Carousel renderButtonGroupOutside={true} responsive={responsive} arrows={false} customButtonGroup={<ButtonGroup />}>
            {NewArrivalData.cardsData.map((item, index) => (
              <ProductCard
                key={index}
                src={item.img}
                title={item.title}
                reviewIcons={item.reviewIcons}
                price={item.price}
              />
            ))}</Carousel>
          {/* </div> */}

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
