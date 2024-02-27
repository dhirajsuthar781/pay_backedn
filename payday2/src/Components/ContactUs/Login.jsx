import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const Login = () => {
  const lname = useRef("");
  const lpass = useRef("");
  const lphone = useRef("");
  // let sa = document.getElementsByName('username')[0];
  // let sb = document.getElementsByName('password')[0];

  const navi = useNavigate();

  function handleCancle() {
    navi("/");
  }
  function handleSignup() {
    navi("/Signup");
  }

  const login = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", lname.current.value);
    formData.append("phone", lphone.current.value);
    formData.append("pass1", lpass.current.value);
    axios({
      url: process.env.REACT_APP_SERVER + "/api/login/",
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
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* // for login page start */}

      <div className="flex items-center top-0 left-0  bg-[#ffffffbb]    backdrop-blur-lg backdrop-filter fixed  z-90 justify-center  w-full h-[100vh] z-[900] text-seconday">
        <div className="flex flex-col-reverse lg:flex-row shadow-2xl rounded-2xl">
          <div className=" h-auto w-auto md:h-[370px] md:w-[450px] bg-white  rounded-2xl  flex flex-col md:flex-row items-center justify-center px-8">
            {/* left */}
            <div className="">
              {/* Sign in */}
              <div className="py-4  font-Montserrat text-[20px] font-semibold">
                <p>Log In</p>
              </div>

              {/* userName */}
              <div className="mb-4">
                <label
                  style={{ fontFamily: "Montserrat" }}
                  htmlFor="username"
                  className="block  font-bold"
                >
                  Username:
                </label>
                <input
                  type="text"
                  id="username"
                  ref={lname}
                  name="username"
                  className="w-full md:w-[350px] border-[1px] border-[#838383c9] rounded-[15px] px-3 py-2 mt-1 focus:outline-none "
                  placeholder="Enter your username"
                  required
                />
              </div>

              {/* Password */}
              <div className="mb-4">
                <label
                  style={{ fontFamily: "Montserrat" }}
                  htmlFor="password"
                  className="block text-gray-700 font-bold"
                >
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  ref={lpass}
                  name="password"
                  className="w-full border-[1px] border-[#838383c9] rounded-[15px] px-3 py-2 mt-1 focus:outline-none "
                  placeholder="Enter your password"
                  required
                />
              </div>

              {/* Phone */}
              <div className="mb-4">
                <label
                  style={{ fontFamily: "Montserrat" }}
                  htmlFor="phone"
                  className="block text-gray-700 font-bold"
                >
                  Phone:
                </label>
                <input
                  type="Phone"
                  id="Phone"
                  ref={lphone}
                  name="Phone"
                  className="w-full border-[1px] border-[#838383c9] rounded-[15px] px-3 py-2 mt-1 focus:outline-none "
                  placeholder="Enter your Phone"
                  required
                />
              </div>

              <div>
                <a href="/" className="hover:underline font-semibold">
                  Forget Password?
                </a>
              </div>

              {/* Sign button */}
              <div className=" ">
                <button
                  onClick={login}
                  className=" select-none  text-title transition-all  duration-300 text-white  hover:text-primary  border-transparent  hover:border-[2px]    hover:border-primary  tracking-[1px] py-2 w-full my-4 flex justify-center items-center   rounded-full bg-gradient-to-r   border-[2px] border-transparent from-gradfrom to-gradto hover:bg-gradient-to-r  hover:from-[#ffffff] hover:to-[#ffffff]"
                >
                  <p className="  ">LOG IN</p>
                </button>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className=" block w-full  lg:h-[370px] md:w-[450px] text-[#f1f9ef]  bg-gradient-to-r  from-gradfrom to-gradto   lg:rounded-r-2xl   rounded-t-2xl   lg:rounded-tl-[0px]   ">
            <div className=" flex w-full justify-end p-3 px-4 rounded-full ">
              <button onClick={handleCancle}>
                <i class="fa-solid fa-x"></i>
              </button>
            </div>
            <div className="flex flex-col items-center lg:py-12 py-2  px-8  text-white">
              <h1
                style={{ fontFamily: "Montserrat" }}
                className=" select-none font-semibold font-Montserrat text-[30px]  my-2"
              >
                Welcome to login
              </h1>

              <a href="/" className="hover:underline">
                {" "}
                dont you have an accout?
              </a>

              <button
                onClick={handleSignup}
                className=" select-none text-title transition-all  duration-300 text-white  hover:text-primary border-[2px] border-transparent  hover:border-[2px]  hover:border-primary  tracking-[1px] py-2  flex justify-center items-center rounded-[25px] bg-gradient-to-r px-10  from-gradfrom to-gradto hover:bg-gradient-to-r my-8  hover:from-[#ffffff] hover:to-[#ffffff]"
              >
                SIGN UP
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* // for login page end */}
    </>
  );
};

export default Login;
