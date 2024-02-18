import React from "react";
import Versace from "../../assests/image/versace.png";
import Zara from "../../assests/image/zara.png";
import Gucci from "../../assests/image/gucci.png";
import Prada from "../../assests/image/prada.png";
import Calvein from "../../assests/image/calvein.png";

const CompanyBar = () => {
  return (
    <div className="company-wrapper">
      <div className="container-wrapper">
      <div className="img-container ">
        <img  src={Versace} alt="versacelogo"/>
        <img className="zara h-[30px] w-[76px] " src={Zara} alt="zaralogo"/>
        <img src={Gucci} alt="guccilogo" />
        <img src={Prada} alt="pradalogo" />
        <img  src={Calvein} alt="calveinlogo"/>
      </div>
      </div>
    </div>
  );
};

export default CompanyBar;
