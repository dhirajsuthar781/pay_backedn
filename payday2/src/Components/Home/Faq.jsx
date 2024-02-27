import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { IoIosRemoveCircleOutline, IoMdAddCircleOutline } from "react-icons/io";
import { FaPlus, FaMinus } from "react-icons/fa";

const Faq = (props) => {
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  const faqData = [
    {
      title: `What is a payday loan?`,
      describe: `GoDay provides Canadians with online payday loans. Our payday loans are not intended to provide a long-term financial solution. Rather, they are intended to solve urgent but temporary cash-flow needs. `,
    },
    {
      title: `How can I get a loan from Canuckcash?`,
      describe: `GoDay provides Canadians with online payday loans. Our payday loans are not intended to provide a long-term financial solution. Rather, they are intended to solve urgent but temporary cash-flow needs. `,
    },
    {
      title: `Can I have multiple loans with Canuckcash at the same time?`,
      describe: `GoDay provides Canadians with online payday loans. Our payday loans are not intended to provide a long-term financial solution. Rather, they are intended to solve urgent but temporary cash-flow needs. `,
    },
    {
      title: `How long does it take to get a loan from Canuckcash?`,
      describe: `GoDay provides Canadians with online payday loans. Our payday loans are not intended to provide a long-term financial solution. Rather, they are intended to solve urgent but temporary cash-flow needs. `,
    },
    {
      title: `What do I need to apply for a loan with Canuckcash?`,
      describe: `GoDay provides Canadians with online payday loans. Our payday loans are not intended to provide a long-term financial solution. Rather, they are intended to solve urgent but temporary cash-flow needs. `,
    },
    {
      title: `How can I get a loan from Canuckcash?`,
      describe: `GoDay provides Canadians with online payday loans. Our payday loans are not intended to provide a long-term financial solution. Rather, they are intended to solve urgent but temporary cash-flow needs. `,
    },
    {
      title: `Can debt consolidation help with payday loans?`,
      describe: `GoDay provides Canadians with online payday loans. Our payday loans are not intended to provide a long-term financial solution. Rather, they are intended to solve urgent but temporary cash-flow needs. `,
    },
  ];

  return (
    <>

      <h1 className="md:py-3  lg:px-44  font-Montserrat  text-[18px] md:text-[25px]  text-center lg:text-left lg:text-[30px] font-semibold leading-[100%]  text-primary">
        FAQs About Payday Loans
      </h1>

      <div className="  flex   flex-col justify-center py-4 md:py-7      md:items-center items-center  ">
        <div className="  border-t-[1px]">

          {faqData.map((data, index) => {
            return (
              <FaqItem
                key={index}
                open={index === open}
                title={data.title}
                desc={data.describe}
                style={data.style}
                toggle={() => toggle(index)}
                theme={props.theme}
              />
            );
          })}
        </div>
      </div>
      <div
        className="circle hidden lg:block  bottom-[0%] md:block right-0 z-20"
        style={{
          background:
            props.theme === "light"
              ? "linear-gradient(130.35deg, rgba(252, 70, 107, 0.30), rgba(63, 94, 251, 0.30)"
              : "linear-gradient(130.35deg, rgba(252, 70, 107, 0.10), rgba(63, 94, 251, 0.10)",
        }}
      />
      <div
        className="circle  hidden lg:block md:block top-[0%] left-0 z-20"
        style={{
          background:
            props.theme === "light"
              ? "linear-gradient(130.35deg, rgba(63, 94, 251, 0.30), rgba(63, 94, 251, 0.30)"
              : "linear-gradient(130.35deg, rgba(63, 94, 251, 0.10), rgba(63, 94, 251, 0.10)",
        }}
      />

    </>
  );
};

export default Faq;

const FaqItem = ({ open, toggle, title, desc, style, theme }) => {
  return (
    <div className=" z-30   border-[#414141] ">
      <div
        className={
          "p-[2px]  border-b-[1px] border-x-[1px] border-[#414141] cursor-pointer  bg-[#FFF] " +
          (theme === "light" ? "glassmorphism-3" : "glassmorphism")
        }
        onClick={toggle}
      >
        <div className="px-[20px] py-[10px] rounded-md w-[17.5rem] lg:w-[70rem] md:w-[42rem] ">
          <div className="flex  items-center gap-x-4 ">
            <div
              className="text-subtitle border-black lg:text-title rounded-full p-1 "
            >
              {open ? (
                <FaMinus color="#414141" size={"16px"} />
              ) : (
                <FaPlus color="#414141" size={"16px"} />
              )}
            </div>
            <p className="      text-justify  md:text-[14px] lg:text-[18px] text-[10px]   font-Montserrat text-seconday not-italic font-medium leading-[normal]">{title}</p>

          </div>
          <Collapse isOpened={open}>
            <div className="mt-5 font-Varela text-[12px] text-start md:text-justify  text-seconday  lg:text-[18px] font-Lexend not-italic font-medium leading-[normal]">{desc}</div>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

