import React,{useEffect} from "react";
import WhyContactUs from "./WhycontactUs";
import Faq from "../Home/Faq";
import Testimonial from "../Home/Testimonial";

function AboutUs() {
    useEffect(()=>{
        window.scrollTo(0,0)
        },[])
    return (
        <>

            <div className="  aboutMain py-12 md:py-24 lg:py-32">
                <div>
                    <h1 className=" py-4 text-center text-[28px] text-white font-Montserrat font-medium ">About us</h1>
                    <p className=" text-[30px] font-bold text-white text-center font-Varela">Lorem ipsum dolor sit isicing elit. Quaerat, voluptate.</p>

                </div>
            </div>


            <WhyContactUs />

            <div className=" py-12">

                <Faq />
            </div>
            <div className=" text-[20px] md:text-[30px] text-center font-semibold font-Montserrat  text-primary">
                <p>Take it from us. Better yet, Our customers.</p>
            </div>

            <div className=" grid  grid-cols-1 md:grid-cols-3 py-10  gap-5 md:gap-4 lg:gap-10 md:px-5 px-5 lg:px-32 ">

            <Testimonial image='./static/img/rev1.jpg' content="You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change." name="Olivia Wilson" workingProfession="Digital Marketer"/>
               

                <Testimonial image='./static/img/rev2.jpg' content="Your assistance was invaluable. My website's performance has significantly improved, making it much more efficient to manage. Updating pages is now a breeze." name="Leslie Alexander" workingProfession="Freelance React Developer" />
               

                <Testimonial image='./static/img/rev3.jpg' content="Your support has simplified everything. My website now runs smoothly, allowing for quick and effortless modifications to any page." name="Ethan Thompson" workingProfession="Software Engineer"/>
               

            </div>
        </>
    )
}
 
export default AboutUs;