import { useState } from 'react'
import './App.css'
import reviews from './data'
import Testimonial from './components/Testimonials'

function App() {
  

  return (
    <div>
      <div className="">
        <h1>Our Testimonial</h1>
        <div className=""></div>
        <Testimonial reviews={reviews}></Testimonial>
      </div>
    </div>
  )
}

export default App
