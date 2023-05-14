import React, { useState } from 'react'
import './Home.css'
import img from "./dummy.jpg"
import Linkresult from './Linkresult'

const Home = () => {
    const [inputValue, setInputValue] = useState("")
    const [value, setValue] = useState("")

    const handleClick = () =>{
        setInputValue(value)
        setValue(value)
    }

  return (
    <div className='home'>
      <div className="banner-div">
        <div className="heading">
            <h1>More than just shorter links</h1>
            <p>Build your brand's recognition and get details insights on how your links are performing.</p>
        </div>
        <img src={img} alt="" />
      </div>
      <div className="input">
        <input 
            type="text" 
            placeholder='Shorten a link here...'
            value={value}
            onChange={(e)=>setValue(e.target.value)}
            />
        <button onClick={handleClick}>Shorten It!</button>
      </div>
      <div className="result">
        <Linkresult inputValue ={inputValue} />
      </div>
    </div>
  )
}

export default Home
