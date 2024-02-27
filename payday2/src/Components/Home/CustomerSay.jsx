import React, { useState } from "react";


const CustomerSay = (props) => {
 

  return (
 <div className="flex flex-col justify-center items-center">
    <div className="gap-y-2 flex flex-col justify-center items-center ">
        <h1 className=" font-Varela text-[30px] font-medium  ">What Money Mart customers are saying</h1>
        <h1 className=" font-Montserrat text-[12px]  ">Find out why customers choose Money Mart when they need money fast</h1>
    </div>

<p className=" text-[16px] font-Varela  py-2 font-thin " >Rated <span className=" font-semibold ">4.5</span> / 5 based <span className=" underline ">3,981 reviews</span> Showing our 4 & 5 star reviews. </p>

 </div>
  );
};

export default CustomerSay;