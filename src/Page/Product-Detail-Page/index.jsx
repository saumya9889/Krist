import React from "react";
import Header from "../../Components/Home/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { Layout } from "../../Components/Common/defaultHeader-layout";

const ProductDetail = () => {
  return (
    <>
      <Layout>
      <div className="container-wrapper">
        <div className="product-detail mt-8">
          <div className="product-detail-wrapper">
            <div className="product-detail-breadcrumb ">
              <ul className="grid grid-flow-col w-max gap-1 text-[16px] text-gray">
                <div  className="grid w-max grid-cols-[max-content,10px] items-center gap-2">
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
          </div>
        </div>
      </div>
      </Layout>
    </>
  );
};

export default ProductDetail;
