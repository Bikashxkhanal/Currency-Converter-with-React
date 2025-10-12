
import './App.css'
import {CurrencyContainer} from './components/currencybox'

function App() {
  
  
  return (
    <>
     <div className=' fixed inset-0 bg-[url(./assets/image.jpg)] bg-cover bg-no-repeat flex flex-col justify-center items-center bg-center shadow-xl'>
      <div className=' w-sm m-w-sm py-2 rounded-lg bg-white/30 shadow-md  '>
        <div className='relative flex flex-col gap-1'>
        < CurrencyContainer status = "From" />
        <button className='absolute bg-blue-600 text-white px-2 rounded-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>Swap</button>
        < CurrencyContainer status= "To" />
        </div >
        <button className='px-3 py-2 mt-5 mb-2 text-white border-2 bg-green-600  rounded-xl'>Convert USD to INR</button>
         </div>
     </div>
    </>
  )
}

export default App
