import React from 'react'
import "./Home.css"
import Navbar from "../../components/Navbar/Navbar"
import hero_banner from "../../assets/cards/hero_banner.jpg"
import hero_title from "../../assets/hero_title.png";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p>
            {" "}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              cursus ipsum sapien, sed laoreet tortor ultricies quis. Sed sit
              amet augue libero. Proin ut tellus luctus, auctor diam a,
              pellentesque augue. Nunc aliquet ipsum nec tortor rhoncus, non
              suscipit enim feugiat. Ut eleifend suscipit pulvinar.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home
