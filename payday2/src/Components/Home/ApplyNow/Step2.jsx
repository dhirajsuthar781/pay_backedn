import React, { useState, useEffect, useRef } from "react";
import { Input, Select, Checkbox } from '@mantine/core';
import axios from "axios";

function Step2() {
    const [title, setTitle] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [year, setYear] = useState('');
    const [martialStatus, setMartialStatus] = useState('');
    const [checked, setChecked] = useState(false);


    const Address = useRef();
    const Fname = useRef();
    const Appartment = useRef();
    const PostalCode = useRef();
    const Lname = useRef();
    const City = useRef();
    const Email = useRef();
    const YearsAtAddress = useRef();
    const MonthsAtAddress = useRef();
    const CellPhone = useRef();
    const Alternate = useRef();
    const Sin = useRef();
    const Amount = useRef();


    


    // async function handlesubmit(e) {

    //     if (Address.current.value!= "" && Fname.current.value!= "" && Appartment.current.value!= "" && PostalCode.current.value!= "" && Lname.current.value!= "" && City.current.value!= "" && Email.current.value!= "" && YearsAtAddress.current.value!= "" && MonthsAtAddress.current.value!= "" && CellPhone.current.value!= "" && Sin.current.value!= "" && Amount.current.value!= "" && month!= "" && day!= "" && year!= "") {


    //         e.preventDefault();

    //         let ob = {
    //             Address: Address.current.value,
    //             Fname: Fname.current.value,
    //             Appartment: Appartment.current.value,
    //             PostalCode: PostalCode.current.value,
    //             Lname: Lname.current.value,
    //             City: City.current.value,
    //             Email: Email.current.value,
    //             YearsAtAddress: YearsAtAddress.current.value,
    //             MonthsAtAddress: MonthsAtAddress.current.value,
    //             CellPhone: CellPhone.current.value,
    //             Alternate: Alternate.current.value,
    //             Sin: Sin.current.value,
    //             title,
    //             month,
    //             day,
    //             year,
    //             martialStatus,
    //             Amount: Amount.current.value
    //         }
    //         const response = await fetch("/loanAmount", {
    //             method: "POST",

    //             body: JSON.stringify(ob),


    //             headers: {
    //                 "Content-Type": "application/json",
    //             },

    //         });

    //         const result = await response.json();

    //         if (!response.ok) {
    //             console.log(result.error);

    //         }

    //         if (response.ok) {
    //             console.log(result);

    //         }
    //     }
    //     else {
    //         alert("Please Fill All the Details")
    //     }


    // }

    const adddata = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append("fname", Fname.current.value);
        formData.append("lname", Lname.current.value);
        formData.append("appartment", Appartment.current.value);
        formData.append("postalCode", PostalCode.current.value);
        formData.append("city", City.current.value);
        formData.append("email", Email.current.value);
        formData.append("yearsAtAddress", YearsAtAddress.current.value);
        formData.append("monthsAtAddress", MonthsAtAddress.current.value);
        formData.append("cellPhone", CellPhone.current.value);
        formData.append("alternate", Alternate.current.value);
        formData.append("sin", Sin.current.value);
        formData.append("title", title);
        formData.append("month", month);
        formData.append("day", day);
        formData.append("year", year);
        formData.append("martialStatus", martialStatus);
        formData.append("amount", Amount.current.value);
        formData.append("address", Address.current.value);
        axios({
          url: process.env.REACT_APP_SERVER + "/api/addinquiry/",
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
            <div className=" w-full  items-center px-5 md:px-10  lg:px-44 py-5 md:py-10 lg:py-24   flex flex-col justify-center  gap-7 bg-onhov ">

                <div className=" bg-white rounded-2xl border-[1px] flex flex-col justify-center   border-[#bababa] shadow-xl w-full p-7">
                    <p className=" font-Montserrat text-[16px] md:text-[20px] text-[#808080]">Receive an instant decision in approximately <span className=" text-primary">4 minutes</span>.</p>
                    <div className=" flex flex-row justify-start gap-5  pt-4">
                        <p className=" font-Montserrat text-[16px] md:text-[20px] text-[#808080]">You're applying to borrow .  </p>
                        <Input placeholder="Enter the Amount" type="number" ref={Amount} />
                    </div>

                </div>

                <div className=" w-full  flex flex-col md:flex-row  justify-between items-center">

                    <div className=" bg-white rounded-2xl border-[1px] flex flex-col justify-center items-start gap-5 border-[#bababa] shadow-xl w-full px-8 py-5">


                        <div className=" flex flex-row  gap-4 items-center">
                            <div className=" w-10 h-10 rounded-lg  bg-gradient-to-tr from-primary  to-seconday flex justify-center items-center text-[18px] text-white">
                                1
                            </div>
                            <p className=" text-primary font-Montserrat text-[20px]">Personal Information</p>
                        </div>


                        <div className="  w-full flex flex-col  justify-between  font-Montserrat  items-center gap-6 ">

                            <div className=" w-full px-3 md:px-3  md:gap-0 gap-5 lg:px-16 flex flex-col md:flex-row  justify-between items-center">
                                <div className=" text-seconday">
                                    <Select className='  w-[270px] md:w-[280px]  lg:w-[290px] '
                                        styles={{
                                            input: {
                                                "background": "#ffffff81",
                                                "padding": "4px",
                                                "font-size": "16px"
                                            },
                                            label: {
                                                "font-size": "16px",
                                                "padding": "0px 0px"
                                            },

                                            option: {
                                                "padding": "5px",
                                                "font-size": "16px"
                                            },
                                            section: {
                                                "height": "10px",
                                                "padding": "16px 0px"


                                            }

                                        }}
                                        size="32px"
                                        label="Title "
                                        placeholder=""
                                        data={["A", 'B']}

                                        searchValue={title}
                                        onSearchChange={setTitle}
                                        clearable
                                    />
                                </div>

                                <div className="  w-[270px] md:w-[280px]  lg:w-[290px] ">
                                    <Input.Wrapper label="Address"   >
                                        <Input
                                            ref={Address}
                                            name="Address"
                                            styles={{
                                                input: {
                                                    "background": "#ffffff81",
                                                    "padding": "4px",
                                                    "font-size": "16px"
                                                },
                                                label: {
                                                    "font-size": "17px",
                                                    "padding": "0px 0px"
                                                },

                                                option: {
                                                    "padding": "5px",
                                                    "font-size": "16px"
                                                },
                                                section: {
                                                    "height": "10px",
                                                    "padding": "16px 0px"
                                                },

                                            }}
                                            size="32px" />
                                    </Input.Wrapper>
                                </div>





                            </div>

                            <div className=" w-full px-3 md:px-3  md:gap-0 gap-5 lg:px-16 flex flex-col md:flex-row justify-between items-center">

                                <div className="  w-[270px] md:w-[280px]  lg:w-[290px] ">
                                    <Input.Wrapper label="FirstName"  >
                                        <Input
                                            ref={Fname}
                                            name="FirstName"
                                            styles={{
                                                input: {
                                                    "background": "#ffffff81",
                                                    "padding": "4px",
                                                    "font-size": "16px"
                                                },
                                                label: {
                                                    "font-size": "17px",
                                                    "padding": "0px 0px"
                                                },

                                                option: {
                                                    "padding": "5px",
                                                    "font-size": "16px"
                                                },
                                                section: {
                                                    "height": "10px",
                                                    "padding": "16px 0px"
                                                },

                                            }}
                                            size="32px" />
                                    </Input.Wrapper>
                                </div>

                                <div className="  flex flex-col md:flex-row gap-4 w-[270px] md:w-[280px]  lg:w-[290px] ">
                                    <div>

                                        <Input.Wrapper label="Appartment"  >
                                            <Input
                                                ref={Appartment}
                                                name="Appartment"
                                                styles={{
                                                    input: {
                                                        "background": "#ffffff81",
                                                        "padding": "4px",
                                                        "font-size": "16px"
                                                    },
                                                    label: {
                                                        "font-size": "17px",
                                                        "padding": "0px 0px"
                                                    },

                                                    option: {
                                                        "padding": "5px",
                                                        "font-size": "16px"
                                                    },
                                                    section: {
                                                        "height": "10px",
                                                        "padding": "16px 0px"
                                                    },

                                                }}
                                                size="32px" />
                                        </Input.Wrapper>
                                    </div>
                                    <div>
                                        <Input.Wrapper label="Postal Code"  >
                                            <Input
                                                ref={PostalCode}
                                                type="number"
                                                name="PostalCode"
                                                styles={{
                                                    input: {
                                                        "background": "#ffffff81",
                                                        "padding": "4px",
                                                        "font-size": "16px"
                                                    },
                                                    label: {
                                                        "font-size": "17px",
                                                        "padding": "0px 0px"
                                                    },

                                                    option: {
                                                        "padding": "5px",
                                                        "font-size": "16px"
                                                    },
                                                    section: {
                                                        "height": "10px",
                                                        "padding": "16px 0px"
                                                    },

                                                }}
                                                size="32px" />
                                        </Input.Wrapper>
                                    </div>
                                </div>





                            </div>

                            <div className=" w-full px-3 md:px-3  md:gap-0 gap-5 lg:px-16 flex flex-col md:flex-row justify-between items-center">
                                <div className="  w-[270px] md:w-[280px]  lg:w-[290px] ">
                                    <Input.Wrapper label="Last Name"  >
                                        <Input
                                            ref={Lname}
                                            name="LastName"
                                            styles={{
                                                input: {
                                                    "background": "#ffffff81",
                                                    "padding": "4px",
                                                    "font-size": "16px"
                                                },
                                                label: {
                                                    "font-size": "17px",
                                                    "padding": "0px 0px"
                                                },

                                                option: {
                                                    "padding": "5px",
                                                    "font-size": "16px"
                                                },
                                                section: {
                                                    "height": "10px",
                                                    "padding": "16px 0px"
                                                },

                                            }}
                                            size="32px" />
                                    </Input.Wrapper>
                                </div>
                                <div className="  w-[270px] md:w-[280px]  lg:w-[290px] ">
                                    <Input.Wrapper label="City"  >
                                        <Input
                                            ref={City}
                                            name="City"
                                            styles={{
                                                input: {
                                                    "background": "#ffffff81",
                                                    "padding": "4px",
                                                    "font-size": "16px"
                                                },
                                                label: {
                                                    "font-size": "17px",
                                                    "padding": "0px 0px"
                                                },

                                                option: {
                                                    "padding": "5px",
                                                    "font-size": "16px"
                                                },
                                                section: {
                                                    "height": "10px",
                                                    "padding": "16px 0px"
                                                },

                                            }}
                                            size="32px" />
                                    </Input.Wrapper>
                                </div>





                            </div>

                            <div className=" w-full px-3 md:px-3  md:gap-0 gap-5 lg:px-16 flex flex-col md:flex-row justify-between items-center">
                                <div className="  w-[270px] md:w-[280px]  lg:w-[290px] ">
                                    <Input.Wrapper label="Email"  >
                                        <Input
                                            ref={Email}
                                            name="Email"
                                            type="email"
                                            styles={{
                                                input: {
                                                    "background": "#ffffff81",
                                                    "padding": "4px",
                                                    "font-size": "16px"
                                                },
                                                label: {
                                                    "font-size": "17px",
                                                    "padding": "0px 0px"
                                                },

                                                option: {
                                                    "padding": "5px",
                                                    "font-size": "16px"
                                                },
                                                section: {
                                                    "height": "10px",
                                                    "padding": "16px 0px"
                                                },

                                            }}
                                            size="32px" />
                                    </Input.Wrapper>
                                </div>

                                <div className="  flex flex-col md:flex-row gap-4 w-[270px] md:w-[280px]  lg:w-[290px] ">
                                    <div>
                                        <Input.Wrapper label="Years At Address"  >
                                            <Input
                                                ref={YearsAtAddress}
                                                name="YearAtAddress"
                                                type="number"
                                                styles={{
                                                    input: {
                                                        "background": "#ffffff81",
                                                        "padding": "4px",
                                                        "font-size": "16px"
                                                    },
                                                    label: {
                                                        "font-size": "17px",
                                                        "padding": "0px 0px"
                                                    },

                                                    option: {
                                                        "padding": "5px",
                                                        "font-size": "16px"
                                                    },
                                                    section: {
                                                        "height": "10px",
                                                        "padding": "16px 0px"
                                                    },

                                                }}
                                                size="32px" />
                                        </Input.Wrapper>
                                    </div>
                                    <div className="">
                                        <Input.Wrapper label="Months At Address"  >
                                            <Input
                                                ref={MonthsAtAddress}
                                                name="MonthAtAddress"
                                                type="number"
                                                styles={{
                                                    input: {
                                                        "background": "#ffffff81",
                                                        "padding": "4px",
                                                        "font-size": "16px"
                                                    },
                                                    label: {
                                                        "font-size": "17px",
                                                        "padding": "0px 0px"
                                                    },

                                                    option: {
                                                        "padding": "5px",
                                                        "font-size": "16px"
                                                    },
                                                    section: {
                                                        "height": "10px",
                                                        "padding": "16px 0px"
                                                    },

                                                }}
                                                size="32px" />
                                        </Input.Wrapper>
                                    </div>

                                </div>
                            </div>



                            <div className=" w-full px-3 md:px-3  md:gap-0 gap-5 lg:px-16 flex flex-col md:flex-row justify-between items-center">
                                <div className=" flex flex-row  justify-center items-center gap-3 text-seconday">
                                    <div className=" ">
                                        <Select className=' w-[83px] '
                                            styles={{
                                                input: {
                                                    "background": "#ffffff81",
                                                    "padding": "4px",
                                                    "font-size": "16px"
                                                },
                                                label: {
                                                    "font-size": "16px",
                                                    "padding": "0px 0px"
                                                },

                                                option: {
                                                    "padding": "5px",
                                                    "font-size": "16px"
                                                },
                                                section: {
                                                    "height": "10px",
                                                    "padding": "16px 0px"


                                                }

                                            }}
                                            size="32px"
                                            label="Month"
                                            placeholder=""
                                            data={["1", '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']}

                                            searchValue={month}
                                            onSearchChange={setMonth}
                                            clearable
                                        />
                                    </div>
                                    <div>
                                        <Select className=' w-[83px] '
                                            styles={{
                                                input: {
                                                    "background": "#ffffff81",
                                                    "padding": "4px",
                                                    "font-size": "16px"
                                                },
                                                label: {
                                                    "font-size": "16px",
                                                    "padding": "0px 0px"
                                                },

                                                option: {
                                                    "padding": "5px",
                                                    "font-size": "16px"
                                                },
                                                section: {
                                                    "height": "10px",
                                                    "padding": "16px 0px"


                                                }

                                            }}
                                            size="32px"
                                            label="Days "
                                            placeholder=""
                                            data={["1", '2', "3", '4']}

                                            searchValue={day}
                                            onSearchChange={setDay}
                                            clearable
                                        />
                                    </div>
                                    <div>
                                        <Select className=' w-[83px] '
                                            styles={{
                                                input: {
                                                    "background": "#ffffff81",
                                                    "padding": "4px",
                                                    "font-size": "16px"
                                                },
                                                label: {
                                                    "font-size": "16px",
                                                    "padding": "0px 0px"
                                                },

                                                option: {
                                                    "padding": "5px",
                                                    "font-size": "16px"
                                                },
                                                section: {
                                                    "height": "10px",
                                                    "padding": "16px 0px"


                                                }

                                            }}
                                            size="32px"
                                            label="Year "
                                            placeholder=""
                                            data={["1990", "1991", "1992", "1993", "1994", "1996"]}

                                            searchValue={year}
                                            onSearchChange={setYear}
                                            clearable
                                        />
                                    </div>

                                </div>

                                <div className=" flex flex-col md:flex-row gap-4  w-[270px] md:w-[280px]  lg:w-[290px] ">
                                    <div>
                                        <Input.Wrapper label="Cell Phone"  >
                                            <Input
                                                ref={CellPhone}
                                                name="CellPhone"
                                                type="number"
                                                styles={{
                                                    input: {
                                                        "background": "#ffffff81",
                                                        "padding": "4px",
                                                        "font-size": "16px"
                                                    },
                                                    label: {
                                                        "font-size": "17px",
                                                        "padding": "0px 0px"
                                                    },

                                                    option: {
                                                        "padding": "5px",
                                                        "font-size": "16px"
                                                    },
                                                    section: {
                                                        "height": "10px",
                                                        "padding": "16px 0px"
                                                    },

                                                }}
                                                size="32px" />
                                        </Input.Wrapper>
                                    </div>
                                    <div>
                                        <Input.Wrapper label="Alternate"  >
                                            <Input
                                                ref={Alternate}
                                                name="AlternatePhone"
                                                type="number"
                                                styles={{
                                                    input: {
                                                        "background": "#ffffff81",
                                                        "padding": "4px",
                                                        "font-size": "16px"
                                                    },
                                                    label: {
                                                        "font-size": "17px",
                                                        "padding": "0px 0px"
                                                    },

                                                    option: {
                                                        "padding": "5px",
                                                        "font-size": "16px"
                                                    },
                                                    section: {
                                                        "height": "10px",
                                                        "padding": "16px 0px"
                                                    },

                                                }}
                                                size="32px" />
                                        </Input.Wrapper>
                                    </div>

                                </div>





                            </div>

                            <div className=" w-full px-3 md:px-3  md:gap-0 gap-5 lg:px-16 flex flex-col md:flex-row justify-between items-center">
                                <div className="  text-seconday">

                                    <Select className=' w-[270px] md:w-[280px]  lg:w-[290px] '
                                        styles={{
                                            input: {
                                                "background": "#ffffff81",
                                                "padding": "4px",
                                                "font-size": "16px"
                                            },
                                            label: {
                                                "font-size": "16px",
                                                "padding": "0px 0px"
                                            },

                                            option: {
                                                "padding": "5px",
                                                "font-size": "16px"
                                            },
                                            section: {
                                                "height": "10px",
                                                "padding": "16px 0px"


                                            }

                                        }}
                                        size="32px"
                                        label="Martial Status "
                                        placeholder=""
                                        data={["Married", "UnMarried", "Single"]}

                                        searchValue={martialStatus}
                                        onSearchChange={setMartialStatus}
                                        clearable
                                    />


                                </div>

                                <div className="   w-[270px] md:w-[280px]  lg:w-[290px] ">

                                    <Input.Wrapper label="SIN"  >
                                        <Input
                                            ref={Sin}
                                            name="sin"
                                            type="number"
                                            styles={{
                                                input: {
                                                    "background": "#ffffff81",
                                                    "padding": "4px",
                                                    "font-size": "16px"
                                                },
                                                label: {
                                                    "font-size": "17px",
                                                    "padding": "0px 0px"
                                                },

                                                option: {
                                                    "padding": "5px",
                                                    "font-size": "16px"
                                                },
                                                section: {
                                                    "height": "10px",
                                                    "padding": "16px 0px"
                                                },

                                            }}
                                            size="32px" />
                                    </Input.Wrapper>



                                </div>

                            </div>

                        </div>

                        <div className=" px-5 md:px-16 w-full flex flex-row py-3  justify-start items-start gap-3">
                            <Checkbox
                                checked={checked}
                                onChange={(event) => setChecked(event.currentTarget.checked)}
                            />
                            <p className=" relative  -top-1">By checking the box and clicking "Submit", you consent to GoDay's collection, use and disclosure of your personal information as described in our Privacy Policy.</p>
                        </div>

                        <div className=" flex justify-end flex-row w-full px-3 md:px-3 lg:px-16 pt-5 pb-5">
                            <button onClick={adddata} className={!checked ? "hidden" : '' + `  text-[16px] md:text-[18px] font-medium w-[100px] md:w-[120px] text-white  font-Montserrat py-1 md:py-1  rounded-full bg-gradient-to-r  border-[2px] border-transparent transition-all duration-300 from-gradfrom to-gradto hover:from-white  hover:tp-white hover:border-[2px] hover:border-primary  hover:text-primary`}>Next</button>
                            <button className={checked ? 'hidden' : "" + ` text-[16px] md:text-[18px] font-medium w-[100px] md:w-[120px] text-white  font-Montserrat py-1 md:py-1  rounded-full bg-gradient-to-r  border-[2px] border-transparent transition-all duration-300 from-[#c7c7c7] to-[#c7c7c7]    `}>Next</button>

                        </div>


                    </div>

                    <div className=" md:hidden lg:block h-full md:pt-0 pt-10 self-start md:pl-6 md:w-[380px]">

                        <div className=" scroll-container  md:h-[580px] overflow-auto  ">
                            <div className="space-y-5">

                                <Testimonial />
                                <Testimonial />
                                <Testimonial />
                            </div>
                        </div>
                        <div className=" mt-5 p-5 bg-white rounded-2xl  border-[3px] border-primary ">Have you taken out a GoDay Loan in the last 9 months? Click here to visit the Express Loan Application!</div>
                    </div>


                </div>

            </div>

        </>
    )
}



export default Step2;


function Testimonial() {
    return (
        <>
            <div class="flex flex-col  rounded-xl hover:bg-[#f4f9ff] transition-all duration-300 overflow-hidden justify-between flex-1 md:p-3 p-4 lg:p-3 bg-white shadow-lg lg:py-5 lg:px-5">
                <div class="flex-1 ">
                    <div class="flex items-center">
                        <svg class="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                        </svg>
                        <svg class="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                        </svg>
                        <svg class="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                        </svg>
                        <svg class="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                        </svg>
                        <svg class="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                        </svg>
                    </div>

                    <blockquote class="flex-1 mt-2">
                        <p class="  md:text-[14px] lg:text-[14px] lg:text-lg leading-relaxed  text-ellipsis font-Montserrat text-gray-900 ">“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.”</p>
                    </blockquote>
                    <p class=" lg:text-[16px] md:text-[14px]   font-bold font-Varela uppercase text-gray-900 font-pj">Leslie Alexander</p>
                </div>


                {/* <div class="flex items-center mt-4">
                    <img class="flex-shrink-0 object-cover rounded-full lg:w-11 lg:h-11  w-8 h-8" src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png" alt="" />
                    <div class="ml-4">
                       
                        <p class="mt-0.5  lg:text-[16px]  md:text-[14px] font-Varela  font-pj text-seconday">Freelance React Developer</p>
                    </div>
                </div> */}
            </div>

        </>
    )

}
