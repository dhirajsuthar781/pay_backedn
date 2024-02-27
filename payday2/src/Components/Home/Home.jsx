import React, { useEffect } from "react";
import { ReactDOM } from "react";
import { NavLink } from "react-router-dom";
import LoanSolution from "./LoanSolution";
import Faq from "./Faq";
import CashMoney from "./CashMoney";
import CustomerSay from "./CustomerSay";
import Cashforyou from "./Cashforyou";
import Payday from "./Payday";
import Testimonial from './Testimonial';

const questions = [
    {
        id: 1,
        question: 'Popular Articles',
        answer: 'Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.',
    },
    {
        id: 2,
        question: 'Fix problems & request removals',
        answer: 'Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.',
    },
    {
        id: 3,
        question: 'Browse the web',
        answer: 'Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.',
    },
    {
        id: 4,
        question: 'Search on your phone or tablet',
        answer: 'Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.',
    },

]

function Home(props) {


  

    return (
        <>

            <Payday />

      


            <div className=" w-full flex flex-col  lg:flex-row   justify-center items-center py-8 md:py-16 lg:py-32 md:gap-16 gap-8 lg:gap-24 px-5  md:px-16 lg:px-24">

                <div className=" md:w-[100%]  lg:w-[40%]">
                    <div>
                        <p className=" md:text-[25px] text-[20px] lg:text-[40px] font-semibold   text-primary leading-7  md:leading-[100%]  font-Montserrat">Online Payday Loans – A Fast & Easy Alternative</p>
                    </div>
                    <div className=" pt-6 text-[16px] md:text-[18px] text-seconday font-Montserrat tracking-wide space-y-2">

                        <p>In today’s fast-paced world, online loans have emerged as a convenient alternative to traditional payday loans, offering numerous advantages that make them a smarter choice for your financial needs. With Canuckcash, you can experience a hassle-free and reliable way to secure the financial support you require. </p>
                        <p>Prefer in-person service? We have 20 store locations across Canada to assist! Find one near you and visit us today!</p>
                    </div>
                    <div className=" pt-5">
                        <button className=" text-[16px] md:text-[20px] font-medium w-[130px] md:w-[180px] text-white  font-Montserrat py-1 md:py-2  rounded-full bg-gradient-to-r  border-[2px] border-transparent transition-all duration-300 from-gradfrom to-gradto hover:from-white  hover:tp-white hover:border-[2px] hover:border-primary  hover:text-primary">Apply Today</button>
                    </div>
                </div>

                <div className=" overflow-hidden ">
                    <img src="./static/img/back2.png" alt="back2" className=" hover:scale-105 transition-all duration-500 ease-in-out  md:w-[450px] w-[300px] lg:w-[550px]" />
                </div>
            </div>


            <LoanSolution />
            <Cashforyou />
            <CashMoney />
            <Faq />


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


export default Home;