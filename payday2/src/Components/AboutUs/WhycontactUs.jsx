import React from "react";

function Cads() {
    return (
        <>
            <div className="  flex justify-center items-center md:items-start  flex-col md:flex-row ">
                <div className=" pt-2 px-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="auto" viewBox="0 0 55 55" focusable="false" role="img" aria-hidden="false" id="application" stroke="" class="css-oad6tm"><path d="M24.924 49.093H.755V.755h27.19v6.042h9.06L30.966.755v9.063h6.039v12.087h-2.028c-7.995 0-14.472 5.875-14.472 13.87a13.318 13.318 0 0 0 13.314 13.318A12.253 12.253 0 0 0 46.072 36.84a11.027 11.027 0 0 0-11.095-11.161c-6.1 0-10.7 4.34-10.7 10.1v1.116l7.853 7.854 9.675-9.676-2.414-2.413-7.258 7.258-4.048-4.048" fill="none" stroke="#d91828" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                    </svg>
                </div>

                <div className=" space-y-3">
                    <h2 className=" text-[20px] md:text-[22px] md:text-left text-center lg:text-[20px] font-semibold   text-primary font-Montserrat ">Ease of Application</h2>
                    <p className=" text-[16px] md:text-[18px] text-seconday  lg:text-left text-center font-Montserrat ">We've made applying for a loan as simple as possible. Conveniently apply in-store, online or by phone with a few verifiable pieces of paperwork. We’re happy to work through your application process with you. You'll receive a quick loan decision within 10 minutes!</p>
                </div>
            </div>

        </>
    )
}


function WhyContactUs() {

    return (
        <>

            <div className=" w-full py-7 pt-10 px-5 md:px-16 lg:px-48">
                <div className=" flex justify-center items-center gap-4 flex-col">
                    <h1 className=" text-[30px] font-semibold  font-Montserrat  text-primary">Why to Choose Canuckcash?</h1>
                    <p className=" text-center text-[16px] md:text-[18px] font-Montserrat text-seconday ">Because this Company offers more flexibility than traditional banking institutions. We continue to grow our products and services to better serve you in your various financial situations.</p>
                    <p className=" text-center text-[16px] md:text-[18px] font-Montserrat text-seconday ">
                        Since 1992, this Company has earned the trust of almost 1.2 million Canadian Customers. We've helped them tackle cash emergencies by usingPayday LoansandLines of Credit. Whether you want to apply for loans online or prefer to see us in person at a store, we strive to give a positive experience. And of course, fast cash! Canada, we're here to support you during your short-term cash needs, and beyond.
                    </p>
                </div>


                <div className=" pt-24 space-y-10 px-0  lg:px-12">



                    <Cads />
                    <Cads />
                    <Cads />
                    <Cads />
                    <Cads />


                </div>

            </div>

 


        </>
    )
}


export default WhyContactUs;