import React, {useEffect , useRef} from "react";
// import { useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router';
import axios from "axios";



function Signup() {
    const navi = useNavigate();
    let Susername=useRef('');
    let Sphonenumber=useRef('');
    let Spassword=useRef('');
    let Semail=useRef('');
 


  

    function handleCancle() {
        navi('/');
    }
    function handleLogin() {
        navi('/Login');
     }

     const handleSubmit = (event) => {
        event.preventDefault();
    
        // const username = document.getElementById("username").value;
        // const fname = document.getElementById("firstname").value;
        // const lname = document.getElementById("lastname").value;
        // const email = document.getElementById("email").value;
        // const pass1 = document.getElementById("password-user").value;
        // const pass2 = document.getElementById("confirm").value;
    
        const formData = new FormData();
        formData.append("username", Susername.current.value);
        formData.append("fname", Susername.current.value);
        formData.append("email", Semail.current.value);
        formData.append("phone", Sphonenumber.current.value);
        formData.append("pass1", Spassword.current.value);
        formData.append("pass2", Spassword.current.value);
    
        axios({
          url: process.env.REACT_APP_SERVER + "/api/signup/",
          method: "POST",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          data: formData,
        })
          .then((res) => {
            //setLoading("hidden");
            alert(res["data"]["msg"]);
            window.location.reload();
          })
          .catch((err) => {
            //setLoading("hidden");
            alert(err);
          });
        // setTimeout(() => history("/inquiryfrom"));
      };

    
   


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);




    return (
        <>
            {/* // for login page start */}

            < div className="flex items-center top-0 left-0  bg-[#ffffffbb]    backdrop-blur-lg backdrop-filter fixed  z-90 justify-center  w-full h-[100vh] z-[900] text-seconday  px-4 md:px-0 "  >
                <div className="flex lg:h-[550px] w-full md:w-auto  flex-col-reverse lg:flex-row shadow-2xl rounded-2xl">

                    <div className='  h-full w-full  md:w-[450px] bg-white  rounded-2xl  flex flex-col md:flex-row items-center justify-center px-8'>
                        {/* left */}
                        <div className='w-full  md:w-auto'>
                            {/* Sign in */}
                            <div className="py-4  font-Montserrat text-[20px] font-semibold">
                                <p>Sign In</p>
                            </div>

                            {/* FullName */}
                            <div className="mb-4">
                                <label style={{ fontFamily: "Montserrat" }} htmlFor="username" className="block  font-bold">FullName:</label>
                                <input type="text" id="username" ref={Susername} name="username" className="w-full md:w-[350px] border-[1px] border-[#838383c9] rounded-[15px] px-3 py-2 mt-1 focus:outline-none " placeholder="Enter your FullName" required />
                            </div>

                            {/* email */}
                            <div className="mb-4">
                                <label style={{ fontFamily: "Montserrat" }} htmlFor="username" className="block  font-bold">email:</label>
                                <input type="email"   ref={Semail} name="email" className="w-full md:w-[350px] border-[1px] border-[#838383c9] rounded-[15px] px-3 py-2 mt-1 focus:outline-none " placeholder="Enter your FullName" required />
                            </div>



                            {/* Phone number */}
                            <div className="mb-4">
                                <label style={{ fontFamily: "Montserrat" }} htmlFor="username" className="block  font-bold">Phone Number:</label>
                                <input type="number" id="phonenumber" ref={Sphonenumber} name="phonenumber" className="w-full md:w-[350px] border-[1px] border-[#838383c9] rounded-[15px] px-3 py-2 mt-1 focus:outline-none " placeholder="Enter your PhoneNumber" required />
                            </div>


                            {/* Password */}
                            <div className="mb-4">
                                <label style={{ fontFamily: "Montserrat" }} htmlFor="password" className="block text-gray-700 font-bold">Password:</label>
                                <input type="password" id="password" name="password" ref={Spassword} className="w-full border-[1px] border-[#838383c9] rounded-[15px] px-3 py-2 mt-1 focus:outline-none " placeholder="Enter password" required />
                            </div>

                            {/* Confirm Password */}
                            <div>
                                <label style={{ fontFamily: "Montserrat" }} htmlFor="confirmpassword" className="block text-gray-700 font-bold"> Confirm Password:</label>
                                <input type="password" id="confirmpassword" name="confirmpassword" className="w-full border-[1px] border-[#838383c9] rounded-[15px] px-3 py-2 mt-1 focus:outline-none " placeholder="Confirm  Password" required />
                            </div>

                            <div>
                                <a href='/' className="hover:underline font-semibold">Forget Password?</a>
                            </div>

                            {/* Sign button */}
                            <div className=" ">
                                <button onClick={handleSubmit} className=" select-none  text-title transition-all  duration-300 text-white  hover:text-primary  border-transparent  hover:border-[2px]    hover:primary  tracking-[1px] py-2 lg:py-2 w-full lg:my-4 my-3 flex justify-center items-center   rounded-full bg-gradient-to-r   border-[2px] border-transparent from-gradfrom to-gradto hover:bg-gradient-to-r  hover:from-[#ffffff] hover:to-[#ffffff]">
                                    <p className="  ">SIGN IN</p>
                                </button>

                            </div>
                         
                        </div>
                    </div>


                    {/* Right */}
                    <div className=" flex w-full h-full md:w-[450px] text-[#f1f9ef]  bg-gradient-to-r  from-gradfrom to-gradto felx-row   justify-center  items-center   lg:rounded-r-2xl relative   rounded-t-2xl   lg:rounded-tl-[0px]   ">

                        <div className=" flex absolute w-full justify-end top-0 left-0 z-50 p-3 px-4 rounded-full ">
                            <button onClick={handleCancle}>
                                <i class="fa-solid fa-x"></i>
                            </button>
                        </div>
                        <div className="flex flex-col items-center lg:py-12 py-5  px-8  text-white">
                            <h1 style={{ fontFamily: "Montserrat" }} className=" md:block hidden select-none font-semibold font-Montserrat text-center text-[30px] ">Start new jorney with creating a Account</h1>

                            <a href='/' className="hover:underline"> Already Have Account?</a>


                            <button onClick={handleLogin} className=" select-none text-title transition-all  duration-300 text-white  hover:text-primary border-[2px] border-transparent  hover:border-[2px]  hover:border-primary  tracking-[1px] py-2  flex justify-center items-center rounded-[25px] bg-gradient-to-r px-10  from-gradfrom to-gradto hover:bg-gradient-to-r my-8  hover:from-[#ffffff] hover:to-[#ffffff]">
                                Log In
                            </button>

                        </div>
                    </div>
                </div>
            </div >
            {/* // for login page end */}
        </>
    )
}

export default Signup;