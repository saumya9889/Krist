import React, {  useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { Layout } from "../../Components/Common/defaultHeader-layout";
import Image1 from "../../assests/image/pdp/img-1.jpg";
// import Image2 from "../../assests/image/pdp/image 2.jpg";
import Image3 from "../../assests/image/pdp/image 3.jpg";
import Image4 from "../../assests/image/pdp/image 4.jpg";
import Gtshirt from "../../assests/image/pdp/gtshirts.jpg";
import GtshirtF from "../../assests/image/pdp/gtshirtfron.jpg";
import Gtshirtb from "../../assests/image/pdp/gtshirt.jpg";
import Btshirt from "../../assests/image/pdp/btshirt.jpg";
import Btshirtb from "../../assests/image/pdp/btshirtback.jpg";
import BtshirtF from "../../assests/image/pdp/btshirts.jpg";
import { StarIcon } from "../../Mock/icons";
import { ProductDetailPage } from "../../Mock/product-detail-page";

const ProductDetail = () => {
  // const [count, setCount] = useState(1);
  const sizes = ["Medium", "Small", "Large", "X-Large"];
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const stock= 10;
  const handleSizeClick = (size) => {
    setSelectedSize(size);
  }
 
  const handleQuantity = (change) => {
    setQuantity(prevQuantity => {
      // const newQuantity = prevQuantity + change;
      return quantity < stock ? quantity + 1 : prevQuantity; // Ensure quantity doesn't go below 1
    });

    if (quantity == stock) {
      alert("out of stock")
    }
  };

    const handleAddToCart = (e) => {
      // Check if size is selected
      console.log(e)
      if (!selectedSize) {
        alert('Please choose a size');
        return;
        
      }
      // console.log(handleAddToCart)
      // Construct item object with selected size and quantity
      const item = {
        size: selectedSize,
        quantity: quantity,
        // Add other product details like ID, name, price
      };
  
      // Call a function to add the item to the cart
      // e.g., addToCartHandler(item);
    };
  const imgs = [
    { image: Image1, type: "grey" },
    { image: Image3, type: "grey" },
    { image: Image4, type: "grey" },
    { image: Btshirt, type: "blue" },
    { image: BtshirtF, type: "blue" },
    { image: Btshirtb, type: "blue" },
    { image: Gtshirt, type: "common" },
    { image: GtshirtF, type: "common" },
    { image: Gtshirtb, type: "common" },
  ];

  const [selectedImage, setSelectedImage] = useState(Image1);
  const [selectedColor, setSelectedColor] = useState("#4f4631");

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };
  // console.log('selectedColor:', selectedColor);

  const colorimg = [
    { color: "#4f4631", type: "grey" },
    { color: "#314f4a", type: "common" },
    { color: "#31344f", type: "blue" },
  ];
  // console.log('colorimg:', colorimg);
  // const handleColorSelect = (color) => {
  //   setSelectedColor(color);
  //   setSelectedImage(0); // Reset selected image index when color changes
  // };
  const selectedImages = colorimg[0][selectedColor];
  // console.log("selectedImages:", selectedImages);

  const handleSideImageClick = (item) => {
    // console.log(item,"item++")
    setSelectedImage(item);
    // setSelectedImage(index);
  };
  const filteredData = imgs.filter((item) => item.type === selectedColor?.type);

 const selectedColorData =selectedColor;
 const selectedSizeData = selectedSize;
 const selectedquantity = quantity;
 const StoreData = [
  selectedColorData,
  selectedSizeData,
  selectedquantity
]

  return (
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
              <div className="left-side grid grid-flow-col gap-2">
                <div className="left-side-wrapper grid grid-cols-175px-1fr ">
                  <div className="grid grid-flow-row gap-[6px] w-[100%] h-[calc(40%-20px)] overflow-y-auto">
                    {(filteredData.length === 0 ? imgs : filteredData).map(
                      (item, index) => (
                        <figure
                          key={index}
                          className="w-[140px]"
                          onClick={() => handleSideImageClick(item)}
                        >
                          <img
                            src={
                              item?.type === selectedColor?.type
                                ? item.image
                                : item.image
                            }
                            alt={`Image ${index + 1}`}
                          />
                        </figure>
                      )
                    )}
                  </div>
                  <div className="side-img">
                    <figure>
                      {/* Display selected image based on selectedImage state */}
                      <img
                        src={selectedImage.image ? selectedImage.image : Image1}
                        alt={`Image ${selectedImage + 1}`}
                        style={{ width: "200px", height: "200px" }}
                      />
                    </figure>
                  </div>
                  <div>
                    {/* Render color buttons */}
                    {/* {colorimg.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => handleColorSelect(item)}
                      >
                        {item.color}
                      </button>
                    ))} */}
                  </div>
                </div>
              </div>
              <div className="right-side">
                {ProductDetailPage.map((product) => (
                  <div key={product.id}>
                    <h1 className="text-[40px] font-bold leading-[48px]">
                      {product.name}
                    </h1>
                    <div className="flex items-center gap-[14px]">
                      <h3 className="text-[25px]">
                        <StarIcon
                          number={Number(product.reviewIcon)}
                          className={"text-[#ffc633]"}
                        />
                      </h3>
                      <h6 className="text-[16px]">{product.reviews}</h6>
                    </div>
                    <div className="grid grid-cols-2 gap-[6px]">
                      <div className="grid grid-cols-2 gap-[2px] w-[60%] mt-2 items-center">
                        <h4 className="text-[32px] font-bold leading-[24px] font-sans">
                          {product.price}
                        </h4>
                        <h5 className="text-[32px] font-bold leading-[24px] font-sans text-grey">
                          {product.prices}
                        </h5>
                      </div>
                      <span className="bg-[#ff33331a] bg-opacity-50 rounded-full text-base font-semibold w-[72px] h-[34px]">
                        <p className="mt-[6px] ml-[18px] text-[#ff3333] leading-[21px]">
                          -40%
                        </p>
                      </span>
                    </div>
                    <span className="text-[16px] text-[#00000099] leading-[22px]">
                      <p className="mt-8">{product.description}</p>
                    </span>
                    <div className="mx-auto mt-4 h-px bg-[#0000001a]"></div>
                    <div className="mt-8">
                      <h1 className="text-[16px] font-bold leading-[21px] text-[#00000099]">
                        Select Colors
                      </h1>
                      <div className="flex gap-2 mt-2">
                        {colorimg.map((item, index) => (
                          <button
                            key={index}
                            className="w-[38px] h-[38px] rounded-full"
                            style={{ backgroundColor: item.color }}
                            onClick={() => handleColorSelect(item)}
                          ></button>
                        ))}
                      </div>
                      <div className="mx-auto mt-4 h-px bg-[#0000001a]"></div>
                      <div className="mt-8">
                        <h1>Choose Size</h1>
                        <div className="flex gap-2 mt-2">
                          {sizes.map((size, index) => (
                            <button
                              key={index}
                              className={`w-[105px] h-[46px] bg-[#f0f0f0] rounded-[62px] text-grey ${selectedSize === size ? 'bg-black text-white' : ''}`}
                              onClick={() => handleSizeClick(size)}
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                        <div className="mx-auto mt-4 h-px bg-[#0000001a]"></div>
                        <div className="mt-8 grid grid-cols-250px-1fr gap-2">
                          <div className="flex mt-2">
                            <button
                              className="w-[50px] h-[46px] text-[30px] bg-[#f0f0f0] rounded-l-[62px] font-bold text-black"
                              // onClick={() =>
                              //   setCount(count - 1 <= 0 ? 1 : count - 1)
                              // }
                              // onClick={(e) => handleQuantity(quantity - 1 <= 0 ? 1 : quantity - 1)}
                            >
                              -
                            </button>
                            <span className="w-[50px] h-[46px] bg-[#f0f0f0] font-bold text-grey pl-[18px] pt-[13px]">
                              {quantity}
                            </span>
                            <button
                            // disabled={quantity == stock ? true : false}
                              className="w-[50px] h-[46px] text-[25px] bg-[#f0f0f0] font-bold rounded-r-[62px] text-black"
                              onClick={(e) => handleQuantity( )}
                             
                            >
                              +
                            </button>
                          </div>
                          <button className="w-[350px] h-[46px] bg-black rounded-[62px] mt-[8px] text-white font-bold" onClick={(e)=>handleAddToCart(e)}>
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
