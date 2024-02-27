import React,{useEffect} from "react";

import Contact from "./Contact"
import Faq from "../Home/Faq";
import Testimonial from "../Home/Testimonial";

function ContactUs() {
    useEffect(()=>{
        window.scrollTo(0,0)
        },[])
    return (
        <>



            <div className=" py-12">

                <Contact />
            </div>
            <div className=" py-12">

                <Faq />
            </div>
            <div className=" text-[20px] md:text-[30px] lg:pt-10 md:pt-12 text-center font-semibold font-Montserrat  text-primary">
                <p>Take it from us. Better yet, Our customers.</p>
            </div>


            <div className=" grid  grid-cols-1 md:grid-cols-3 py-10  gap-5 md:gap-4 lg:gap-10 md:px-5 px-5 lg:px-32 ">

                <Testimonial />
                <Testimonial />
                <Testimonial />

            </div>




        </>
    )
}




export default ContactUs;