import React from 'react'
import "./Home.css"
import Navbar from "../../components/Navbar/Navbar"
import hero_banner from "../../assets/cards/hero_banner.jpg"
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png"
import info_icon from "../../assets/info_icon.png";
import TitleCards from '../../components/TitleCards/TitleCards';
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus
            ipsum sapien, sed laoreet tortor ultricies quis. Sed sit amet augue
            libero. Proin ut tellus luctus, auctor diam a, pellentesque augue.
            Nunc aliquet ipsum nec tortor rhoncus, non suscipit enim feugiat. Ut
            eleifend suscipit pulvinar.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
    </div>
  );
}

export default Home
