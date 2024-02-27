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

            <Testimonial image='./static/img/rev1.jpg' content="You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change." name="Olivia Wilson" workingProfession="Digital Marketer"/>
               

               <Testimonial image='./static/img/rev2.jpg' content="Your assistance was invaluable. My website's performance has significantly improved, making it much more efficient to manage. Updating pages is now a breeze." name="Leslie Alexander" workingProfession="Freelance React Developer" />
              

               <Testimonial image='./static/img/rev3.jpg' content="Your support has simplified everything. My website now runs smoothly, allowing for quick and effortless modifications to any page." name="Ethan Thompson" workingProfession="Software Engineer"/>
              

            </div>




        </>
    )
}




export default ContactUs;