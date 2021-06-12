import "./intro.scss";
import { init } from "ityped";
import React, { useState, useEffect, useRef } from "react";
import { useTransition, animated } from 'react-spring'
import { IndeterminateCheckBoxOutlined } from "@material-ui/icons";

function FadeIn(){
  const image = ["assets/justme.png", "assets/man.png"];
  const [images, set] = useState([1]);

  const transitions = useTransition(image[images], {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 2000 }
  });
  
  useEffect(() => {
    setInterval(() => {
      set(images => (images === 0 ? 1 : 0));
    }, 4000);
  }, []);
  
  return transitions(({ opacity }, item) => (
    <animated.img
      src={item}
      overflow="hidden"
      style={{
        opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
        position: "absolute",
        width:"inherit",
        height:"inherit",
        borderRadius: "50%",
      }} />
  ));
}

export default function Intro() {
  const textRef = useRef();
  
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Game Designer", "Game Programmer", "Pixel Artist", "Animator?"],
    });
  }, []);

  return (
    <div className="intro" id="intro ">
      <div class="video-container">
          <div class="color-overlay"></div>
            <video autoPlay loop muted >
              <source src="assets/videoDemos/KidoGame2.mp4" type="video/mp4" />
            </video>
      </div>
      <div className="left">
        <div className="imgContainer">
          <FadeIn />
        </div>
        
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Teo Yan Xue</h1>
          <h3>
            I'm a <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#works">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
