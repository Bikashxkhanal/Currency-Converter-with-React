import React from "react";
import '../../src/index.css'
import { useId } from "react";

//container with the ip field , curreyncy type etc(reusable component)
export function CurrencyContainer({ label, 
    amount,
    onAmtChange,
    currencyOptions = [],
    onCurrencyChange,
    selectedCurrency = "USD",
    amountDisabled = false,
})
    {
  const ipId = useId();
   
     

    return( 
        <>
        <div className="bg-white mt-2  mx-2 text-sm flex-col rounded-xl py-2 ">
           <div className="flex justify-between w-full px-5 text-black/50 "> 
            <label htmlFor={ipId}>{label}</label>
            <label htmlFor="">Currency Type</label>
           </div>
           <div className="flex justify-between w-full px-5">
            <input type="number" id={ipId} value={amount} disabled = {amountDisabled} 
            onChange={(e)=> onAmtChange && onAmtChange(Number(e.target.value))}
            className="outline-none  h-7 " /> 
           
                <select name="" id="" value={selectedCurrency} 
                onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value) }    
                className= "outline-none bg-gray-300 rounded-lg px-1" >
                    {currencyOptions.map((currency)=>(
                        <option key={currency}
                         value={currency}>{currency}</option>
                    ))} 
   
                </select>
            
           </div>

        </div>
        
        </>
    )
}

