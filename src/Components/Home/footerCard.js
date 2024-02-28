import React from 'react';
import Gpay from "../../assests/image/gpay.png";
import Applepay from "../../assests/image/applepay.png";
import MasterCard from "../../assests/image/mastercard.png";
import Visa from "../../assests/image/visa.png";
import Paypal from "../../assests/image/paypal.png";


const footerCard = () => {
  return (
    <>
    <div className="bg-[#f2f0f1]">
    <div className="container-wrapper">
          <div className="flex justify-between items-center pt-8 ">
                  <span className='text-[14px] leading-5  text-gray-500'>Shop.co © 2000-2023, All Rights Reserved </span>
                  <div className='flex justify-between '>
                    <figure>
                        <img src={Gpay} alt="gpay" />
                    </figure>
                    <figure>
                        <img src={Applepay} alt="gpay" />
                    </figure>
                    <figure>
                        <img src={MasterCard} alt="gpay" />
                    </figure>
                    <figure>
                        <img src={Paypal} alt="paypal" />
                    </figure>
                    <figure>
                        <img src={Visa} alt="visa" />
                    </figure>
                  </div>
                  </div>
                </div>
                </div>
    </>
  )
}

export default footerCard