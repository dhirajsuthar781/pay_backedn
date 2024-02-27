import React, { useState,useEffect } from "react";
import SpeedyCash from "./SpeedyCash";
import CashAdvance from "./CashAdvance";



const Quickloan = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
        },[])





    return (

        <>
            <SpeedyCash />


            <div className=" bg-white md:py-0 py-10">

                <div className="flex flex-col justify-center items-center bg-gradient-to-r from-[#52bdff17]  to-[#ffffff7d]  py-5 sticky ">
                    <div className="space-y-2 py-3">
                        <h1 className=" text-center font-semibold  font-Varela md:text-[30px] text-[18px] text-primary ">Canuckcashprocess for a quick loan</h1>
                        <p className="text-[16px]  font-Varela text-center px-5 md:px-10">Applying for a quick loan at Canuckcash is easy and convenient. Our process is designed to get you the money you need as quickly as possible.<span className=" font-bold "> Here's how it works:</span>
                        </p>
                    </div>
                    <div className="flex flex-col gap-y-14 md:gap-y-0 md:flex-row justify-center gap-x-6 py-10 items-center">
                        <div className="w-[300px] md:w-[210px]  lg:w-[280px] px-3 py-2 relative rounded-xl h-[120px] bg-white shadow-xl ">
                            <p className=" text-[70px] absolute font-extrabold  -top-12 left-1  text-primary ">1</p>
                            <div className="pl-7">
                                <h1 className="py-1   font-Varela  font-bold ">Apply</h1>
                                <p className="lg:text-[16px] md:text-[12px]    font-Varela  ">Simply fill out our online application or visit one of our locations.</p>
                            </div>
                        </div>
                        <div className="w-[300px] md:w-[210px] lg:w-[280px] px-3 py-2 relative rounded-xl h-[120px] bg-white shadow-xl ">
                            <p className=" text-[70px] absolute font-extrabold  -top-12 left-1  text-primary ">2</p>
                            <div className="pl-10">
                                <h1 className="py-1   font-Varela  font-bold ">Select</h1>
                                <p className="lg:text-[16px] md:text-[12px]    font-Varela  ">Choose your preferred bank account and funding method.</p>
                            </div>
                        </div>
                        <div className="w-[300px] md:w-[210px] lg:w-[280px] px-3 py-2 relative rounded-xl h-[120px] bg-white shadow-xl ">
                            <p className=" text-[70px] absolute font-extrabold  -top-12 left-1  text-primary ">3</p>
                            <div className="pl-11">
                                <h1 className="py-1   font-Varela  font-bold ">Receive</h1>
                                <p className="lg:text-[16px] md:text-[12px]    font-Varela  ">Get your cash in as little as 15 minutes, 24 hours, or 1-2 days.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center py-5 px-7 md:px-24">
                        <p className="   font-Varela  text-[16px]">Canuckcash offers a variety of quick loans to suit your needs. We offer <span className=" font-bold"> Installment Loans, Cash Advance loans, and small business loans.</span> Whether you need a little extra cash to get through the month or a larger amount for a major purchase, we can help.</p>
                    </div>
                </div>

                <CashAdvance />

                <div className="relative  flex justify-end  bg-white ">
                    <img src="./img/logobg1.png" className="bg-cover bg-no-repeat " />
                </div>
            </div>
        </>

    );

};


export default Quickloan;