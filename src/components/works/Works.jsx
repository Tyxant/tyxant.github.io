import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      title: "Touhou Platform Fighter",
      desc:
        "A 2D platform fighter similar to Smash, intended to be a fangame of the Touhou Project series that began its development sometime during January 2020. There will be plans of completing the game and publishing it to the public.",
      img:
        "https://www.youtube.com/embed/6IcyIrNR4zw",
    },
    {
      id: "2",
      title: "Tutorial Game",
      desc:
        "A game made for the purpose of teaching complete beginners on how to use the Unity Game Engine.",
      img:
        "https://www.youtube.com/embed/_bZ5vjDOsGE",
    },
    {
      id: "3",
      title: "High Mobility Egg",
      desc:
        "An early prototype. Features a running and jumping egg that can wall jump and wall run, the egg began its development on the December 2018 to February 2019 and was the testing grounds of implementing a 3D platformer with a great flow of movement.",
      img:
        "https://www.youtube.com/embed/R37rg-IneYs",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <h1>Game Projects</h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                </div>
              </div>
              <div className="right">
                <iframe
                  src={d.img}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
