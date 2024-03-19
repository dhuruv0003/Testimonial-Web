import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="">
        <h1>Our Testimonial</h1>
        <div className=""></div>
        <Testimonial></Testimonial>
      </div>
    </div>
  )
}

export default App
