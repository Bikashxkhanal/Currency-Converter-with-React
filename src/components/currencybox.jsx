import React from "react";
import '../../src/index.css'

export function CurrencyContainer({status}){
 console.log(status);
 
 
    return(
        <>
        <div className="bg-white mt-2  mx-2 text-sm flex-col rounded-xl py-2 ">
           <div className="flex justify-between w-full px-5 text-black/50 "> 
            <label htmlFor="">{status}</label>
            <label htmlFor="">Currency Type</label>
           </div>
           <div className="flex justify-between w-full px-5">
            <input type="number" className="outline-none  h-7 " /> 
           
                <select name="" id="" className="bg-gray-300 rounded-lg px-1" >
                    <option value="">USD</option>
                </select>
            
           </div>

        </div>
        
        </>
    )
}

