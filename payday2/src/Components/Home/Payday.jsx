import React, { useState } from "react";
import Select from 'react-select';
import { useNavigate } from "react-router";




const options = [
    { value: 'Ontario', label: 'Ontario' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];
const Payday = (props) => {
    const [range, setrange] = useState(100);
    const [selectedOption, setSelectedOption] = useState({ value: 'Ontario', label: 'Ontario' });

    // function pick(e) {
    //     // console.log(`pagey: ${e.pageY} screenY: ${e.screenY} clientY: ${e.clientY}`);
    //     setX(e.clientY-140)
    //     setY(e.clientX-40)
    // }


    const navi = useNavigate();




    return (
        <>




            <div>
                <div className="flex  relative  justify-start object-cover   bg-cover bg-center bg-[url(./../public/img/team.jpg)] items-center py-16 px-5 md:px-12 ">

                    <div className="bg-white flex flex-col  relative   shadow-xl rounded-lg  p-6 w-full md:w-[800px]  ">
                        <div className="  ">
                            <div>
                                <h2 className="md:text-[20px] lg:text-[30px]  font-Montserrat text-primary ">Get an online payday loan in Canada</h2>
                                <h2 className="md:text-[15px] lg:text-[25px] font-Montserrat text-seconday ">Borrow up to $10,000 today.</h2>
                            </div>
                            <div></div>
                        </div>
                        <div className=" py-4  text-[16px] px-10 w-full">
                            <input type="range" step={20} max={10000} min={0} value={range} onChange={(e) => {
                                setrange(e.target.value);
                            }} />
                        </div>

                        <div className="flex flex-col md:flex-row    justify-between  ">

                            <div className=" space-y-3">

                                <div className="flex flex-row items-center gap-x-1 md:gap-x-5">
                                    <h2 className="text-[16px] font-Montserrat md:text-[20px] lg:text-[25px] text-seconday ">I want to borrow</h2>
                                    <div className="space-x-3">
                                        <span className="text-[20px] md:text-[24px]  text-primary ">$</span>
                                        <input type="number" name="asd" value={range} id="asf" className="bg-[#f3f3f3] w-[100px] px-2  text-[20px]  font-Montserrat  py-[3px] rounded-[5px] text-[77bb1f] " />

                                    </div>
                                </div>

                                <div className=" lg:hidden flex justify-between font-Montserrat text-[16px] font-medium items-center ">

                                    <p>Select State:</p>

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



                                <div className="flex flex-row  gap-x-5    pt-3 ">
                                    <div>
                                        <div className="flex flex-row justify-start items-center">
                                            <img src="/img/Star.png" className="w-7" />
                                            <h1>Trustpilot</h1>
                                        </div>
                                        <img src="/img/Stars.png" className=" w-20 md:w-28 lg:w-30" />

                                    </div>
                                    <div className="w-20 md:w-28 lg:w-30 pt-3">
                                        <img src="/img/download.png" className="" />
                                    </div>
                                    <div className="w-20 md:w-28 lg:w-22">
                                        <img src="/img/download2.png" className="" />
                                    </div>
                                </div>
                            </div>


                            <div className="flex flex-col font-Montserrat gap-y-3 md:gap-y-4 py-4 md:py-0 ">
                                <button onClick={()=>{
                                    navi("/ApplyNow")
                                }} className=" border-[2px]  border-transparent   font-Montserrat bg-primary transition-all duration-300 hover:text-primary   py-3 md:h-[60px]  md:w-[210px] hover:bg-white hover:border-[2px]  hover:border-primary text-white rounded-lg text-[22px] ">Apply Now</button>


                                <button onClick={() => {
                                    navi("/Login")
                                }} className="flex font-Montserrat md:h-[60px]  md:py-0  py-2   md:w-[210px] flex-row text-primary justify-center items-center border-[2px] border-primary   text-[22px]  rounded-lg  gap-x-5">
                                    <img src="/img/userlogin.png" className="w-7 md:w-7 lg:w-10" />
                                    Login</button>
                            </div>
                            {/* <img src="/img/team.jpg" className="w-screen" /> */}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Payday;
