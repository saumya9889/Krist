// import React from "react";

// export const TestiCard = ({ verified, name, src, description, reviews }) => {
//   return (
//     <>
//       <div className="testi-card-wrapper w-400 h-165 text-black left-4 pt-8 pl-8 pr-4">
//         <h2
//           className={`text-sm ${
//             img ? "text-green-6   " : "text-orange-500"
//           }`}
//         >
//                 <img className="image w-[280px] rounded-[20px]" src={src}  />

//           {reviews ? reviews : "reviews"}
//         </h2>
        
//         <h1 className=" text-[20px] text-black font-[700] leading-9">
//           {name ? name : "name"}
//         </h1>
//         <p className= {`text-base mt-3 ${verified && "text-grey text-[16px] w-[336px]"}`}>
//           {description ? description : "description"}
//         </p>
//       </div>
//     </>
//   );
// };
import React from "react";
import { VeriedIcon } from "../../Mock/icons";
import { StarIcon } from "../../Mock/icons";

export const TestiCard = ({ verified, name, img, description, reviews }) => {
  return (
    <>
      <div className="testi-card-wrapper w-400 h-165 text-black left-4 pt-8 pl-8 pr-4">
        <h2
          className={`text-sm ${verified ? "text-green-6" : "text-[#ffc633]"}`}
        >
          {/* {reviews ? reviews : "reviews"} */}
        </h2>
        
         <StarIcon number={reviews} className={"text-[#ffc633] text-[20px]"}/> 
            <div className="flex">
         
        {/* Render the verified badge image if user is verified */}
        <h1 className="text-[20px] text-black w-[82px] font-[700] leading-9">
          {name ? name : "name"}
        </h1>
        <img
            className="image w-[24px] h-6 mt-[5px] rounded-[20px]"
            src={img}
            alt="Verified"
          /> 
        </div>
        <p
          className={`text-base mt-3 ${
            verified && "text-grey text-[16px] w-[336px]"
          }`}
        >
          {description ? description : "description"}
        </p>
      </div>
    </>
  );
};
