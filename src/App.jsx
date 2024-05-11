import React, { useState } from "react";
import Nevbar from "./Components/Nevbar/Nevbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";

const App = () => {

  const [playState, setPlayState] = useState(false);
  return (
    <>
      <div>
        <Nevbar></Nevbar>
        <Hero></Hero>
        <div className="container">
          <Title subTitle="our PROGRAMS" title="What We Offer" />
          <Programs></Programs>

          <About setPlayState={setPlayState} />

          <Title subTitle="GALLERY" title="Campus Photos" />
          <Campus />

          <Title subTitle="TESTIMONIALS" title=" What Student Say" />
          <Testimonials />

          <Title subTitle="Contact Us" title=" Get in Touch" />
          <Contact />

          <Footer />
        </div>
      </div>

      <VideoPlayer playState={playState} setPlayState={setPlayState}></VideoPlayer>
    </>
  );
};

export default App;
