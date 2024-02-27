import React, { useState } from "react";


const Cashforyou = (props) => {


  return (
    <>
      <div className="flex flex-col justify-center items-center  py-12 lg:py-12 lg:pt-24">
        <h1 className="  text-primary text-[18px] font-Montserrat md:text-[30px] font-semibold  ">Why Canuckcash You?</h1>
      </div>

      <div className=" flex flex-col justify-center items-center w-full  ">
        <div className="py-10 md:block hidden ">
          <table className=" lg:w-[55%] h-[500px] lg:h-[600px] mx-auto">
            <tr>
              <th className="hover:bg-onhov transition-all duration-300 hover:scale-110 group hover:shadow-[5px_5px_2px_#ddd]">
                <div className="flex flex-col p-4 group justify-center items-center relative">
                  <img className="w-14 absolute -top-10" src="https://cash4you.ca/wp-content/themes/cash4you2017/images/Why-cash-for-you/fast-cash-icon-mobile.png" />
                  <h1 className="text-[20px] font-Montserrat  text-primary pt-6   ">Fast Cash</h1>
                  <p className="text-[16px]   text-seconday  group-hover:text-[#000]  font-Montserrat ">Borrow upto $10,000 hassle-free</p>
                </div>
              </th>


              <th className="hover:bg-onhov transition-all duration-300 hover:scale-110 group hover:shadow-[5px_5px_2px_#ddd]">
                <div className="flex flex-col p-4 justify-center items-center  relative">
                  <img className="w-8 absolute -top-3" src="https://cash4you.ca/wp-content/themes/cash4you2017/images/Why-cash-for-you/editDoc_mob.png" />
                  <h1 className="text-[20px] font-Montserrat  text-primary pt-10    ">Perfect Credit Not Needed</h1>
                  <p className="text-[16px] p text-seconday 0a0] group-hover:text-[#000] font-Montserrat ">We have Money Solutions for all credit types </p>
                </div>
              </th>
              <th className="hover:bg-onhov transition-all duration-300 hover:scale-110 group hover:shadow-[5px_5px_2px_#ddd]">
                <div className="flex flex-col p-4 gap-y-2 justify-center items-center relative">
                  <img className="w-14 absolute -top-5" src="https://cash4you.ca/wp-content/themes/cash4you2017/images/Why-cash-for-you/convenient-locations-icon-mobile.png" />
                  <h1 className="text-[20px] font-Montserrat  text-primary pt-10   ">Convenient locations</h1>
                  <p className="text-[16px] t text-seconday group-hover:text-[#000] font-Montserrat ">Visit one of our 100+ stores open late to serve you</p>
                </div>
              </th>
            </tr>
            <tr>
              <th className="hover:bg-onhov transition-all duration-300 hover:scale-110 group hover:shadow-[5px_5px_2px_#ddd]">
                <div className="flex flex-col p-4 gap-y-2 justify-center items-center relative">
                  <img className="w-14 absolute -top-5 " src="https://cash4you.ca/wp-content/themes/cash4you2017/images/Why-cash-for-you/no-hidden-fees-icon-mobile.png" />
                  <h1 className="text-[20px] font-Montserrat  text-primary pt-10   ">No hidden fees</h1>
                  <p className="text-[16px] t text-seconday group-hover:text-[#000] font-Montserrat ">No pre-payment penalties. What you see is what you get.</p>
                </div>
              </th>
              <th className="hover:bg-onhov transition-all duration-300 hover:scale-110 group hover:shadow-[5px_5px_2px_#ddd]">
                <div className="flex flex-col p-4 gap-y-2 justify-center items-center relative">
                  <img className="w-14 absolute -top-5 " src="https://cash4you.ca/wp-content/themes/cash4you2017/images/Why-cash-for-you/easy-experiences-icon-mobile.png" />
                  <h1 className="text-[20px] font-Montserrat  text-primary pt-10   ">Easy Experience</h1>
                  <p className="text-[16px] t text-seconday group-hover:text-[#000] font-Montserrat ">Get a loan started in minutes online or in person at 100+ stores.</p>
                </div>
              </th>
              <th className="hover:bg-onhov transition-all duration-300 hover:scale-110 group hover:shadow-[5px_5px_2px_#ddd]">
                <div className="flex flex-col p-4 group gap-y-2 justify-center items-center relative">
                  <img className="w-14 absolute -top-5" src="https://cash4you.ca/wp-content/themes/cash4you2017/images/Why-cash-for-you/canadian-icon-mobile.png" />
                  <h1 className="text-[20px] font-Montserrat  text-primary pt-10   ">100% Canadian</h1>
                  <p className="text-[16px] t text-seconday group-hover:text-[#000] font-Montserrat ">Providing money solutions to Canadians for nearly two decades.</p>
                </div>
              </th>
            </tr>
          </table>
        </div>



      </div>


    </>
  );
};

export default Cashforyou;               // Cash for you