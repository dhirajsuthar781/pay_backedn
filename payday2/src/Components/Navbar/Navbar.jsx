import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Select from 'react-select';
import { useNavigate } from "react-router-dom";
import { Input } from '@mantine/core';



const options = [
    { value: 'Ontario', label: 'Ontario' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

function Navbar() {


    const [selectedOption, setSelectedOption] = useState({ value: 'Ontario', label: 'Ontario' });
    function Userlogin() {
    }
    const Navigate = useNavigate();
    function Login() {
        Navigate('/Login');
    }





    return (
        <>
            <div className="  hidden lg:flex flex-row-reverse  justify-between items-center px-24 py-1 bg-[#f4f4f4]">
                <div className=" flex flex-row justify-center items-center gap-3">
                    <div>
                        <i class="fa-brands  fa-facebook text-[16px] bg-primary p-[5px] px-1  text-white rounded-md"></i>
                    </div>
                    <div>

                        <i class="fa-brands fa-pinterest fa-twitter text-[16px] bg-primary p-[5px] px-1 text-white rounded-md"></i>
                    </div>
                    <div>
                        <i class="fa-brands fa-google-plus-g text-[16px] bg-primary p-[5px] px-[3px] text-white rounded-md"></i>
                    </div>
                    <div>
                        <i class="fa-brands fa-twitter text-[16px] bg-primary p-[5px] px-1 text-white rounded-md"></i>
                    </div>

                </div>
                <div className=" flex flex-row  text-seconday justify-center items-center gap-8 font-Montserrat ">

                    <p>Blog</p>
                    <p>Help</p>
                    <p>FAQs</p>
                    <div className=" text-primary  flex flex-row justify-center items-center gap-5 font-Montserrat text-[16px]">
                        <p>Login</p>
                        <img src="./img/userlogin.png" alt="asdf" className=" w-5" />
                    </div>
                </div>
            </div>


            <div className=" lg:flex  hidden justify-between items-center px-24 sticky  z-50 top-0 border-b-[1px] py-3 border-[#b9b9b95d] bg-[#ffffff27] backdrop-blur-md backdrop-filter">

                <NavLink to={'/'}>
                    <div><img src="./img/llogo.png" className=" h-[80px] w-[125px]" alt="Payday" title="Payday" /></div>
                </NavLink>

                <div className=" font-Montserrat md:text-[20px] flex justify-center items-center gap-16">
                    <NavLink to={'/'}>
                        <div>
                            <p className="   text-seconday hover:font-medium hover:text-primary text-subtitle cursor-pointer relative after:content-[''] after:w-0 after:h-[2px] after:absolute after:-bottom-[5px] after:left-0 after:bg-gradient-to-r after:from-gradfrom after:to-gradto after:transition-all after:duration-300 hover:after:w-full">Home</p>
                        </div>
                    </NavLink>
                    <NavLink to={"/about"}>
                        <div>
                            <p href="#" className="  text-seconday hover:font-medium hover:text-primary text-subtitle cursor-pointer relative after:content-[''] after:w-0 after:h-[2px] after:absolute after:-bottom-[5px] after:left-0 after:bg-gradient-to-r after:from-gradfrom after:to-gradto after:transition-all after:duration-300 hover:after:w-full">About</p>
                        </div>
                    </NavLink>

                    <NavLink to={'/contact'}>
                        <div>
                            <p href="#" className="  text-seconday hover:font-medium hover:text-primary text-subtitle cursor-pointer relative after:content-[''] after:w-0 after:h-[2px] after:absolute after:-bottom-[5px] after:left-0 after:bg-gradient-to-r after:from-gradfrom after:to-gradto after:transition-all after:duration-300 hover:after:w-full">Contact Us</p>
                        </div>
                    </NavLink>
                    <NavLink to={'/Loan'}>
                        <div>
                            <p href="#" className="  text-seconday hover:font-medium hover:text-primary text-subtitle cursor-pointer relative after:content-[''] after:w-0 after:h-[2px] after:absolute after:-bottom-[5px] after:left-0 after:bg-gradient-to-r after:from-gradfrom after:to-gradto after:transition-all after:duration-300 hover:after:w-full">Loan</p>
                        </div>
                    </NavLink>
                    <div className=" w-[200px] text-[16px] text-seconday flex flex-row items-center justify-center gap-2">
                        <img src="./img/flag.png" alt="canada" title="Canada" className="w-8 h-5" />

                        <Select
                            styles={{
                                container: (base) => ({
                                    ...base,
                                    border: `none`,
                                    borderRadius: "5px",
                                    height: '100%',
                                }),


                            }}
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                        />
                    </div>


                </div>
                <div>
                    <button onClick={Login} className=" font-Montserrat text-title transition-all  duration-300 text-white  hover:text-primary border-[2px] border-transparent  hover:border-[2px]  hover:border-primary  tracking-[1px] py-3 w-[180px] flex justify-center items-center rounded-lg bg-gradient-to-r  from-gradfrom to-gradto hover:bg-gradient-to-r  hover:from-[#ffffff] hover:to-[#ffffff]">
                        <p className="   ">LOG IN</p>
                    </button>
                </div>
            </div>







            {/* for mobile and tablet */}

            <div className="sticky  z-50 top-0 border-[#b9b9b95d] bg-[#ffffff27] backdrop-blur-md backdrop-filter">

                <div className="lg:hidden  flex items-center justify-between  px-7 md:px-16  py-3  ">

                    <NavLink to={'/'}>
                        <div className=" w-[100px]"><img src="./img/logo.png" className=" h-[55px] w-[180px]" alt="Payday" title="Payday" /></div>
                    </NavLink>



                    <div>
                        <button onClick={Login} className=" text-[16px] py-1  transition-all  duration-300 text-white  hover:text-primary border-[2px] border-transparent  hover:border-[2px]  hover:border-primary  tracking-[1px] w-[100px] flex justify-center items-center rounded-lg bg-gradient-to-r  from-gradfrom to-gradto hover:bg-gradient-to-r  hover:from-[#ffffff] hover:to-[#ffffff]">
                            LOG IN
                        </button>
                    </div>

                </div>


                <div className="lg:hidden flex items-center justify-center  border-b-[1px] py-3 border-[#b9b9b95d] ">

                    <div className=" font-Montserrat text-[16px] md:text-[20px] flex justify-around w-full md:justify-center items-center  md:gap-24">
                        <NavLink to={'/'}>
                            <div>
                                <p className=" text-seconday hover:underline-offset-3 hover:underline">Home</p>
                            </div>
                        </NavLink>
                        <NavLink to={"/about"}>
                            <div>
                                <p href="#" className=" text-seconday hover:underline-offset-3 hover:underline">About</p>
                            </div>
                        </NavLink>

                        <NavLink to={'/contact'}>
                            <div>
                                <p href="#" className=" text-seconday hover:underline-offset-3 hover:underline">Contact Us</p>
                            </div>
                        </NavLink>
                        <NavLink to={'/Loan'}>
                            <div>
                                <p href="#" className=" text-seconday hover:underline-offset-3 hover:underline">Loan</p>
                            </div>
                        </NavLink>
                    </div>

                </div>
            </div>

        


        </>
    )
}


export default Navbar;