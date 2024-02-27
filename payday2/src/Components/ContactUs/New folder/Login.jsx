import React from 'react'

const Login = () => {
    return (
        <div className="flex items-center justify-center h-screen text-seconday">
            <div className="flex flex-col md:flex-row shadow-2xl rounded-2xl">
                <div className=' h-full w-full md:h-[350px] md:w-[400px]  flex flex-col md:flex-row items-center justify-center'>
                    {/* left */}
                    <div className=''>
                        {/* Sign in */}
                        <div className="py-4 font-bold">
                            <h1>Sign In</h1>
                        </div>

                        {/* userName */}
                        <div className="mb-4">
                            <label style={{ fontFamily: "Montserrat" }} htmlFor="username" className="block  font-bold">Username:</label>
                            <input type="text" id="username" name="username" className="w-full md:w-[350px] border-[1px] border-[#838383c9] rounded-[15px] px-3 py-2 mt-1 focus:outline-none " placeholder="Enter your username" required />
                        </div>

                        {/* Password */}
                        <div className="mb-4">
                            <label style={{ fontFamily: "Montserrat" }} htmlFor="password" className="block text-gray-700 font-bold">Password:</label>
                            <input type="password" id="password" name="password" className="w-full border-[1px] border-[#838383c9] rounded-[15px] px-3 py-2 mt-1 focus:outline-none " placeholder="Enter your password" required />
                        </div>
                        <div>
                            <button className="w-full my-4 bg-primary rounded-2xl text-white px-4 py-2   font-semibold focus:outline-none ">
                                SignIn
                            </button>
                        </div>
                    </div>
                </div>


                {/* Right */}
                <div className="  w-full md:h-[350px] md:w-[400px] text-[#def6da]  bg-gradient-to-r from-primary  to-[#2f8221] rounded-r-2xl ">

                    <div className="flex flex-col items-center py-24  px-8  text-white">
                        <h1 style={{ fontFamily: "Montserrat" }} className="font-bold text-3xl my-2">Welcome to login</h1>
                        <h2>dont you have an accout?</h2>
                        <button style={{ fontFamily: "Montserrat" }} type="Submit" className=" my-6 border-[1px] border-white
                        rounded-3xl text-white font-xl py-2 px-6  focus:outline-none focus:shadow-outline">SignUp</button>

                    </div>


                </div>


            </div>
        </div>
    )
}

export default Login;
