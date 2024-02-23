import React from 'react'
import "./about.css"
import HeaderImage from "../../images/header_bg_1.jpg"
import StoryImage from "../../images/about1.jpg"
import VisionImage from "../../images/about2.jpg"
import MissionImage from "../../images/about3.jpg"
import Header from '../../components/Header'


const about = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Velit deserunt at minus, asperiores cum officiis aliquid placeat.
        Illo, minima eum.
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story " />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Fugiat vitae iure distinctio alias itaque quia hic vero
              reiciendis, sint neque.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Fugiat vitae iure distinctio alias itaque quia hic vero
              reiciendis, sint neque.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </section>

      <section className="about__Vision">
        <div className="container about__Vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Fugiat vitae iure distinctio alias itaque quia hic vero
              reiciendis, sint neque.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Fugiat vitae iure distinctio alias itaque quia hic vero
              reiciendis, sint neque.</p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision " />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission " />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Fugiat vitae iure distinctio alias itaque quia hic vero
              reiciendis, sint neque.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Fugiat vitae iure distinctio alias itaque quia hic vero
              reiciendis, sint neque.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default about