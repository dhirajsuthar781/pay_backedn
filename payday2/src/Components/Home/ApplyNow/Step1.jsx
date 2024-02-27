import React, { useEffect } from "react";
import { json, useNavigate } from "react-router";


function Step1() {
    useEffect(() => {

        const usernoteData = {
            name: "dhiraj",
        }

        fetch('/', {
            method: 'POST',
            body: json.toString({ "name": "asdf" }),
            headers: {
                'Content-Type': 'application/json',
            },

        });

    }, [])

    const navi = useNavigate();
    return (
        <>



            <div className=" w-full flex justify-start items-center px-5 md:px-10  lg:px-44 py-5 md:py-10 lg:py-24  bg-onhov ">

                <div className=" bg-white rounded-2xl border-[1px] flex flex-col justify-center items-center gap-5 border-[#bababa] shadow-xl w-full p-4 md:p-7">
                    <div>
                        <h2 className=" font-Montserrat pb-3 text-[20px] md:text-[28px] text-primary  leading-[100%]  md:leading-[120%] font-semibold ">Your GoDay Payday Loan Application</h2>
                        <p className=" font-Montserrat text-[16px] md:text-[17px] text-seconday leading-[110%]">Your actual cost of borrowing will be shown after you submit your application, but as a licensed and responsible lender, we encourage you to take a look at our sample borrowing costs.</p>
                    </div>

                    <div className=" flex flex-col md:flex-row justify-between items-center">
                        <div className="  md:w-1/2 flex flex-col  gap-4 ">
                            <p className=" font-Montserrat text-[18px] md:text-[22px] text-black">Maximum Allowable Cost per $100 Borrowed:  <span className=" text-[#808080]">$15.00</span></p>

                            <p className=" text-[18px] md:text-[22px] font-Montserrat  text-[#000000]">Our cost per $100 borrowed:  <span className=" text-[#808080]">$15.00</span> </p>
                            <div >
                                <p className=" my-2 text-[16px] md:text-[19px] font-Montserrat  text-[#304db7]">Example:</p>
                                <p className=" text-[16px] md:text-[19px] font-Montserrat  text-[#808080]">Your $500 loan for 14 days</p>
                                <p className=" text-[16px] md:text-[19px] font-Montserrat  text-[#808080]">Amount Advanced: $500.00</p>
                                <p className=" text-[16px] md:text-[19px] font-Montserrat  text-[#808080]">Total Cost of Borrowing: $75.00</p>
                                <p className=" text-[16px] md:text-[19px] font-Montserrat  text-[#808080]">Annual Percentage Rate - APR 391.07%</p>
                                <div className=" h-[2px] my-3 w-[90%]  bg-primary">

                                </div>
                                <p className=" text-[16px] md:text-[19px] font-Montserrat  text-[#808080]">Total You Repay: $575.00</p>
                            </div>

                        </div>
                        <div className=" md:w-1/2 p-10 flex justify-center items-center gap-5 flex-col">
                            <img src="./img/back4.jpg" alt="images" className=" md:w-[80%]" />
                            <img src="./img/logobg1.png" alt="asdf" className=" " />
                        </div>
                    </div>
                    <div className=" w-full justify-center items-center flex  flex-col gap-8">
                        <p className=" text-center font-Montserrat text-[18px] text-[#808080]">
                            This poster is required under the Payday Loans Act, 2008
                        </p>
                        <button onClick={() => {
                            navi('step2')

                        }} className=" border-[2px]  border-transparent   font-Montserrat bg-primary transition-all duration-300 hover:text-primary   py-2 md:py-3 md:h-[60px] w-[100px]  md:w-[210px] hover:bg-white hover:border-[2px]  hover:border-primary text-white rounded-lg text-[22px] ">GO !</button>

                    </div>

                </div>
            </div>

        </>
    )
}

export default Step1;