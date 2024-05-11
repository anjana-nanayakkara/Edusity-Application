import React from 'react'
import "./Hero.css";
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We ensure better education for a better world</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quos qui eveniet eligendi architecto numquam dolores quas earum a voluptates, tempore, sequi corporis et ea?</p>

        <button className='btn'>Explore more <img src={dark_arrow}/></button>


      </div>
    </div>
  )
}

export default Hero