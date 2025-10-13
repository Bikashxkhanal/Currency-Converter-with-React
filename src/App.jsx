import { useState } from "react";
import "./App.css";
import { CurrencyContainer } from "./components/currencybox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("npr");
  const [convertAmt, setConvertAmt] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const currencyoptions = Object.keys(currencyInfo);

  const convert = () => {
    setConvertAmt(amount * currencyInfo[to]);
  };

  function swap() {
    setFrom(to);
    setTo(from);
    setAmount(convertAmt);
    setConvertAmt(amount);
  }

  return (
    <>
      <div className=" fixed inset-0 bg-[url(./assets/image.jpg)] bg-cover bg-no-repeat flex flex-col justify-center items-center bg-center shadow-xl">
        <div className=" w-sm m-w-sm py-2 rounded-lg bg-white/30 shadow-md  ">
          <div className="relative flex flex-col gap-1">
            <CurrencyContainer
              label="From"
              amount={amount}
              currencyOptions={currencyoptions}
              onCurrencyChange={(currency) => setAmount(amount)}
              selectedCurrency={from}
              onAmtChange={(amount)=>setAmount(amount)}
            />
            <button
              className="absolute bg-blue-600 text-white px-2 rounded-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
              onClick={swap}
            >
              Swap
            </button>
            <CurrencyContainer
              label="To"
              amount={convertAmt}
              currencyOptions={currencyoptions}
              onCurrencyChange={() => setConvertAmt(convertAmt)}
              selectedCurrency={to}
              amountDisabled
              
            />
          </div>
          <button
            className="px-3 py-2 mt-5 mb-2 text-white border-2 bg-green-600  rounded-xl"
            onClick={convert}
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
