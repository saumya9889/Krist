import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { Layout } from "../../Components/Common/defaultHeader-layout";
import Image1 from "../../assests/image/pdp/img-1.jpg";
import Image2 from "../../assests/image/pdp/image 2.jpg";
import Image3 from "../../assests/image/pdp/image 3.jpg";
import Image4 from "../../assests/image/pdp/image 4.jpg";
import { StarIcon } from "../../Mock/icons";

const ProductDetail = () => {
  const [count, setCount] = useState(0);
  const sizes = ["Medium", "Small", "Large", "X-Large"];
  
  // console.log(count, "count");

  return (
    <>
      <Layout>
        <div className="container-wrapper">
          <div className="product-detail mt-8">
            <div className="product-detail-wrapper">
              <div className="product-detail-breadcrumb ">
                <ul className="grid grid-flow-col w-max gap-1 text-[16px] text-grey">
                  <div className="grid w-max grid-cols-[max-content,10px] items-center gap-2">
                    <li className="">Home</li>{" "}
                    <span className="flex items-center">
                      <FontAwesomeIcon
                        icon={faGreaterThan}
                        size="2xs"
                        style={{ color: "#74C0FC" }}
                      />
                    </span>
                  </div>
                  <div className="grid w-max grid-cols-[max-content,10px] items-center gap-2">
                    <li>Shop</li>{" "}
                    <span className="flex items-center">
                      <FontAwesomeIcon
                        icon={faGreaterThan}
                        size="2xs"
                        style={{ color: "#74C0FC" }}
                      />
                    </span>
                  </div>
                  <div className="grid w-max grid-cols-[max-content,10px] items-center gap-2">
                    <li>Men</li>{" "}
                    <span className="flex items-center">
                      <FontAwesomeIcon
                        icon={faGreaterThan}
                        size="2xs"
                        style={{ color: "#74C0FC" }}
                      />
                    </span>
                  </div>
                  <div>
                    <li>Tshirts</li>
                  </div>
                </ul>
              </div>
              <div className="product-details grid grid-cols-2 gap-2 mt-12">
                <div className=" left-side grid grid-flow-col gap-2">
                  <div className="left-side-wrapper grid grid-cols-175px-1fr ">
                    <div className=" grid grid-flow-row gap-[6px]  w-[46%]">
                      <figure className="w-[140px]">
                        <img src={Image2} />
                      </figure>
                      <figure className="w-[140px]">
                        <img src={Image3} />
                      </figure>
                      <figure className="w-[140px]">
                        <img src={Image4} />
                      </figure>
                    </div>
                    <div className="">
                      <figure>
                        <img src={Image1} />
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="right-side  ">
                  <div className="">
                    <h1 className="text-[40px] font-bold leading-[48px]">
                      One Life Graphic T-shirt
                    </h1>
                    <div className="flex  items-center gap-[14px]">
                      <h3 className="text-[25px]">
                        <StarIcon number={4} className={"text-[#ffc633] "} />
                      </h3>
                      <h6 className="text-[16px]">4.5/6</h6>
                    </div>
                    <div className="grid grid-cols-2 gap-[6px]">
                      <div className="grid grid-cols-2 gap-[2px] w-[60%] mt-2 items-center">
                        <h4 className="text-[32px] font-bold leading-[24px] font-sans">
                          $260
                        </h4>
                        <h5 className="text-[32px] font-bold leading-[24px] font-sans text-grey">
                          $300
                        </h5>
                      </div>
                      <span className=" bg-[#ff33331a] bg-opacity-50 rounded-full text-base  font-semibold w-[72px] h-[34px]">
                        <p className="mt-[6px] ml-[18px] text-[#ff3333] leading-[21px]">
                          -40%
                        </p>
                      </span>
                    </div>
                    <span className="text-[16px] text-[#00000099] leading-[22px]">
                      <p className="mt-8 ">
                        This graphic t-shirt which is perfect for any occasion.
                        Crafted from a soft and
                        <br /> breathable fabric, it offers superior comfort and
                        style.
                      </p>
                    </span>
                  </div>
                  <div class=" mx-auto mt-4 h-px bg-[#0000001a]"></div>
                  <div className="mt-8">
                    <h1 className="text-[16px] font-bold leading-[21px] text-[#00000099]">
                      Select Colors
                    </h1>
                    <div className="flex gap-2 mt-2">
                      <button className="w-[38px] h-[38px] bg-[#4f4631] rounded-full"></button>
                      <button className="w-[38px] h-[38px] bg-[#314f4a] rounded-full"></button>
                      <button className="w-[38px] h-[38px] bg-[#31344f] rounded-full"></button>
                    </div>
                    <div class=" mx-auto mt-4 h-px bg-[#0000001a]"></div>
                    <div className="mt-8">
                      <h1>Choose Size</h1>
                      <div className="flex gap-2 mt-2">
      {sizes.map((size, index) => (
        <button
          key={index}
          className="w-[105px] h-[46px] bg-[#f0f0f0] rounded-[62px] text-grey"
        >
          {size}
        </button>
      ))}
    </div>
  
                      <div class=" mx-auto mt-4 h-px bg-[#0000001a]"></div>
                      <div className="mt-8 grid grid-cols-250px-1fr gap-2">
                        <div className="flex  mt-2">
                          <button
                            className="w-[50px] h-[46px] text-[30px] bg-[#f0f0f0] rounded-l-[62px] font-bold text-black"
                            onClick={() =>
                              setCount(count - 1 <= 0 ? 1 : count - 1)
                            }
                          >
                            -
                          </button>
                          {/* <input
                            type=""
                            min={1}
                            value={1}
                            className="w-[50px] h-[46px] bg-[#f0f0f0]  text-grey"
                          /> */}
                          <span className="w-[50px] h-[46px] bg-[#f0f0f0] font-bold  text-grey pl-[18px] pt-[13px]">
                            {count}
                          </span>
                          <button
                            className="w-[50px] h-[46px] text-[25px] bg-[#f0f0f0] font-bold rounded-r-[62px]   text-black"
                            onClick={() => setCount(count + 1)}
                          >
                            +
                          </button>
                        </div>
                        <button className="w-[350px] h-[46px] bg-black rounded-[62px] mt-[8px] text-[white] font-bold">
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProductDetail;
