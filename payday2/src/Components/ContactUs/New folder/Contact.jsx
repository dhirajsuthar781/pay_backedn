import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdGlobe } from "react-icons/io";

const First = () => {
  return (

    <>
      <div style={{ fontFamily: "Montserrat" }} className="h-screen w-screen flex items-center justify-center">
        <div className=" w-auto md:w-[70%]  h-auto md:h-[75%] flex flex-col md:flex-row shadow-2xl mx-10 rounded-2xl">
          {/* left */}
          <div className=" w-auto md:w-[45%]  h-auto md:h-[100%] bg-gradient-to-r from-primary  to-[#2f8221]  text-[#def6da] box-sizing:border-box md:rounded-l-2xl ">
            {/* Lets get in touch */}
            <div className="px-10">
              <div className="mt-6">
                <h1 className="text-3xl font-semibold">Lets get in touch</h1>
              </div>
              {/* para */}
              <div className="mt-2">
                <p>We're open for any suggestion or just to have a chat</p>
              </div>

              {/* Adress */}
              <div className="flex items-center py-4">
                <IoLocationSharp size={60} className="text-gray-600 mr-4" />
                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, ex!</span>
              </div>

              {/* Phone */}
              <div className="flex items-center py-4">
                <FaPhone className="text-gray-600 mr-4" size={24} />
                <span>123-456-7890</span>
              </div>

              {/* Email */}
              <div className="flex items-center py-4">
                < MdEmail className="text-gray-600 mr-4" size={24} />
                <span>abc@ gmail.com</span>
              </div>

              {/* website */}
              <div className="flex items-center py-4">
                < IoMdGlobe className="text-gray-600 mr-4" size={24} />
                <span>abc.com</span>
              </div>

            </div>
          </div>

          {/* right */}
          <div className="box-sizing:border-box px-8">
            <div className="py-3">
              <h1 className="text-xl font-bold">Contact Us</h1>
            </div>

            <div className=" flex flex-col lg:flex-row justify-center  items-start lg:items-center">
              {/* Name */}
              <div class="mb-4 text-seconday">
                <label for="full-name" class="block font-bold text-lg mb-2 ">Full Name</label>
                <input id="full-name" type="text" name="full-name" class="border-b focus:outline-none " />
              </div>

              {/* Email */}
              <div class="mb-4 text-seconday border-seconday ml-4">
                <label for="email" class="block  font-bold text-lg mb-2">Email Adress</label>
                <input id="email" type="email" name="email"  class="border-b  focus:outline-none" />
              </div>
              
            </div>

            {/* phone number */}
            <div class="mb-4 border-seconday text-seconday ">
              <label for="phone" class="block text-gray-700 font-bold mb-2">Phone Number</label>
              <input id="phone" type="tel" name="phone"  class="border-b  focus:outline-none  w-full" />
            </div>


            <div class="mb-4 border-seconday text-seconday ">
              <label for="comments" class="block text-gray-700 font-bold">Comments</label>
              <textarea id="comments" name="comments" class="border-b border-gray-500 focus:outline-none  w-full"></textarea>
            </div>

            <div class="mb-4 border-secondary text-seconday">
              <label for="comments" class="block  font-bold">Requirements</label>
              <textarea id="comments" name="comments" class="border-b  focus:outline-none  w-full"></textarea>
            </div>


            {/* Button */}
            <div className='bg-primary w-[80px] flex items-center justify-center rounded-xl text-[#def6da]'>
           <button type='submit' className="px-4 py-2">Submit</button>
           </div>


          </div>
        </div>
      </div>
    </>



  )
}

export default First;
