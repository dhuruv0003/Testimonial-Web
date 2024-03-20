import { useState } from 'react'
import './App.css'
import reviews from './data'
import Testimonial from './components/Testimonials'

function App() {
  

  return (
    <div className='flex flex-col  w-[100vw] h-[100vh] justify-center items-center bg-[#14213d]'>
      <div className="text-center">
        <h1 className='text-4xl text-[#fffcf2] font-bold'>Our Testimonial</h1>
        <div className=" bg-[#ffa20e] h-[4px]  
        w-1/5 mx-auto mt-3"></div>
        <Testimonial reviews={reviews}></Testimonial>
      </div>
    </div>
  )
}

export default App
