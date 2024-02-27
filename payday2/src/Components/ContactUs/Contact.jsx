import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdGlobe } from "react-icons/io";

const First = () => {
  return (

    <>
      <div className="  font-Montserrat flex items-center justify-center">


        <div className=" w-auto  lg:flex md:hidden hidden justify-between md:w-[72%]  h-[550px]  items-center  md:flex-col lg:flex-row  shadow-2xl mx-10 rounded-2xl">

          {/* right */}
          <div className=" w-1/2 bg-gradient-to-r  h-full  from-gradfrom to-gradto  text-[#def6da]   md:rounded-l-2xl ">

            <div className="px-10  py-12 flex-col  flex  justify-center h-full items-center ">

              <div className=" py-5 ">
                <h1 className=" text-[30px] font-semibold font-Montserrat ">Lets get in touch</h1>
              </div>

              <div className=" py-3 text-center text-[18px]">
                <p>We're open for any suggestion or just to have a chat</p>
              </div>

              <div className=' flex justify-start items-start flex-col px-10'>

                <div className="flex items-start  ">
                  <IoLocationSharp size={40} className="text-gray-600 mr-4" />
                  <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, ex!</span>
                </div>


                <div className="flex items-center py-4">
                  <FaPhone className="text-gray-600 mr-4" size={24} />
                  <span>123-456-7890</span>
                </div>

                <div className="flex items-center py-4">
                  < MdEmail className="text-gray-600 mr-4" size={24} />
                  <span>abc@ gmail.com</span>
                </div>


                <div className="flex items-center py-4">
                  < IoMdGlobe className="text-gray-600 mr-4" size={24} />
                  <span>abc.com</span>
                </div>

              </div>
            </div>


          </div>

          {/* left */}

          <div className=" w-1/2 h-full  p-10">

            <div className="py-3">
              <h1 className=" text-[20px] font-Montserrat font-semibold">Contact Us</h1>
            </div>

            <div className=" flex flex-col pt-4 lg:flex-row justify-between items-start lg:items-center">

              <div class="mb-4 text-seconday">
                <label for="full-name" class="block font-bold text-lg mb-2 ">Full Name</label>
                <input id="full-name" type="text" name="full-name" class="border-b focus:outline-none " />
              </div>

              <div class="mb-4 text-seconday border-seconday ml-4">
                <label for="email" class="block  font-bold text-lg mb-2">Email Adress</label>
                <input id="email" type="email" name="email" class="border-b  focus:outline-none" />
              </div>

            </div>


            <div class="pt-4 border-seconday text-seconday ">
              <label for="phone" class="block text-gray-700 font-bold mb-2">Phone Number</label>
              <input id="phone" type="tel" name="phone" class="border-b  focus:outline-none  w-full" />
            </div>


            <div class="pt-4 border-seconday text-seconday ">
              <label for="comments" class="block text-gray-700 font-bold">Comments</label>
              <textarea id="comments" name="comments" class="border-b focus:outline-none w-full resize-none"></textarea>
            </div>

            <div class="pt-4 border-secondary text-seconday">
              <label for="comments" class="block  font-bold">Requirements</label>
              <textarea id="comments" name="comments" class="border-b  focus:outline-none  w-full resize-none"></textarea>
            </div>



            <button className=" text-title transition-all px-8 rounded-full mt-5 duration-300 text-[#ffff]  hover:text-primary  border-transparent   border-[2px]  hover:border-primary  tracking-[1px] py-2  flex justify-center items-center   bg-gradient-to-r to-gradfrom from-gradto hover:bg-gradient-to-r  hover:from-[#ffffff] hover:to-[#ffffff] mb-4">
              SUBMIT

            </button>
          </div>


        </div>





        {/* ///////////////////////////////////////////  for tablet  start //////////////////////////////////////////////////{} */}



        <div className=" w-auto  lg:hidden md:flex hidden justify-between md:w-[72%]    items-center   flex-col  shadow-2xl mx-10 rounded-2xl">

          {/* right */}
          <div className=" w-full bg-gradient-to-b     from-gradfrom to-gradto  text-[#def6da]   rounded-t-2xl ">

            <div className="px-10  py-6 flex-col  flex  justify-center h-full items-center ">

              <div className=" py-5 ">
                <h1 className=" text-[30px] font-semibold font-Montserrat ">Lets get in touch</h1>
              </div>

              <div className=" py-3 text-center text-[18px]">
                <p>We're open for any suggestion or just to have a chat</p>
              </div>

              <div className=' flex justify-start items-start flex-col px-10'>

                <div className="flex items-start  ">
                  <IoLocationSharp size={40} className="text-gray-600 mr-4" />
                  <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, ex!</span>
                </div>


                <div className="flex items-center py-4">
                  <FaPhone className="text-gray-600 mr-4" size={24} />
                  <span>123-456-7890</span>
                </div>

                <div className="flex items-center py-4">
                  < MdEmail className="text-gray-600 mr-4" size={24} />
                  <span>abc@ gmail.com</span>
                </div>


                <div className="flex items-center py-4">
                  < IoMdGlobe className="text-gray-600 mr-4" size={24} />
                  <span>abc.com</span>
                </div>

              </div>
            </div>


          </div>

          {/* left */}

          <div className=" w-full px-10 py-5">

            <div className="py-3">
              <h1 className=" text-[20px] font-Montserrat font-semibold">Contact Us</h1>
            </div>

            <div className=" flex  pt-4 flex-row justify-between items-center">

              <div class="mb-4 text-seconday">
                <label for="full-name" class="block font-bold text-lg mb-2 ">Full Name</label>
                <input id="full-name" type="text" name="full-name" class="border-b focus:outline-none " />
              </div>

              <div class="mb-4 text-seconday border-seconday ml-4">
                <label for="email" class="block  font-bold text-lg mb-2">Email Adress</label>
                <input id="email" type="email" name="email" class="border-b  focus:outline-none" />
              </div>

            </div>


            <div class="pt-4 border-seconday text-seconday ">
              <label for="phone" class="block text-gray-700 font-bold mb-2">Phone Number</label>
              <input id="phone" type="tel" name="phone" class="border-b  focus:outline-none  w-full" />
            </div>


            <div class="pt-4 border-seconday text-seconday ">
              <label for="comments" class="block text-gray-700 font-bold">Comments</label>
              <textarea id="comments" name="comments" class="border-b focus:outline-none w-full resize-none"></textarea>
            </div>

            <div class="pt-4 border-secondary text-seconday">
              <label for="comments" class="block  font-bold">Requirements</label>
              <textarea id="comments" name="comments" class="border-b  focus:outline-none  w-full resize-none"></textarea>
            </div>



            <button className=" text-title transition-all px-8 rounded-full mt-5 duration-300 text-[#ffff]  hover:text-primary  border-transparent  hover:border-[2px]  hover:border-[#77bb1f]  tracking-[1px] py-2  flex justify-center items-center   bg-gradient-to-r to-gradfrom from-gradto hover:bg-gradient-to-r  hover:from-[#ffffff] hover:to-[#ffffff] mb-4">
              SUBMIT

            </button>
          </div>


        </div>

        {/* ///////////////////////////////////////////  for tablet  end //////////////////////////////////////////////////{} */}





        {/* for mobile  start*/}

        <div className="  block  md:hidden  w-full px-10 py-5   bg-gradient-to-b from-[#bebebe5f]  to-[#ffffff00]  ">

          <div className="py-3">
            <h1 className=" text-[20px] font-Montserrat font-semibold">Contact Us</h1>
          </div>

          <div className=" flex w-full  pt-4 flex-col justify-between items-center">

            <div class="mb-4 w-full text-seconday">
              <label for="full-name" class="block font-bold text-lg mb-2 ">Full Name</label>
              <input id="full-name" type="text" name="full-name" class="border-b  bg-[#0000] w-full focus:outline-none " />
            </div>

            <div class="mb-4 w-full text-seconday border-seconday ">
              <label for="email" class="block  font-bold text-lg mb-2">Email Adress</label>
              <input id="email" type="email" name="email" class="border-b  bg-[#0000] w-full  focus:outline-none" />
            </div>

          </div>


          <div class="pt-4 border-seconday text-seconday ">
            <label for="phone" class="block text-gray-700 font-bold mb-2">Phone Number</label>
            <input id="phone" type="tel" name="phone" class="border-b  bg-[#0000]  focus:outline-none  w-full" />
          </div>


          <div class="pt-4 border-seconday text-seconday ">
            <label for="comments" class="block text-gray-700 font-bold">Comments</label>
            <textarea id="comments" name="comments" class="border-b  bg-[#0000] focus:outline-none w-full resize-none"></textarea>
          </div>

          <div class="pt-4 border-secondary text-seconday">
            <label for="comments" class="block  font-bold">Requirements</label>
            <textarea id="comments" name="comments" class="border-b  bg-[#0000]  focus:outline-none  w-full resize-none"></textarea>
          </div>



          <button className=" text-title transition-all px-8 rounded-full mt-5 duration-300 text-[#ffff]  hover:text-primary  border-transparent  hover:border-[2px]  hover:border-[#77bb1f]  tracking-[1px] py-2  flex justify-center items-center   bg-gradient-to-r to-gradfrom from-gradto hover:bg-gradient-to-r  hover:from-[#ffffff] hover:to-[#ffffff] mb-4">
            SUBMIT

          </button>
        </div>
      </div>
    </>



  )
}

export default First;
