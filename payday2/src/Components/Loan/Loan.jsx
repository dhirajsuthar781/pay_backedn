import React,{useEffect} from "react";
 
import Quickloan from "./Quickloan";
 


function Loan() {
    useEffect(()=>{
        window.scrollTo(0,0)
        },[])
    return (
        <>
 
            <Quickloan />

        </>
    )
}

export default Loan;