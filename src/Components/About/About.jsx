import React from 'react'
import "./About.css"
import about_img from '../../assets/about.png'
import play_icon from "../../assets/play-icon.png";

const About = ({setPlayState}) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea delectus
          possimus non voluptas voluptatem? Amet, voluptatibus est explicabo
          ullam totam, provident expedita hic velit, magnam reiciendis dolores
          debitis labore?
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea delectus
          possimus non voluptas voluptatem? Amet, voluptatibus est explicabo
          ullam totam, provident expedita hic velit, magnam reiciendis dolores
          debitis labore? Laboriosam, quo dolorum! Unde beatae consequatur
          pariatur excepturi reprehenderit, similique accusamus tempora, placeat
          totam obcaecati quisquam tempore numquam laboriosam inventore
          doloribus!
        </p>
      </div>
    </div>
  );
};

export default About