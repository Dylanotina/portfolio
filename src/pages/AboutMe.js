import React from 'react'
import "../styles/AboutMe.css";
import Image from '../assets/me.jpg'


function AboutMe() {
  return (
    <div className="container">
    <div className="title">
      <h1>About me</h1>
      <h5>Learn a bit more about me: </h5>
    </div>
    <div className='about-description'>
<div className='about-text'>
    <p>
        As a newly graduated student from my Bachelor of Science in Computer
        Science, I seek to gain employment where I can use my skills in computer
        programming and web design. By the way, check out my awesome work.
      </p>
      <p>
        My educational background entails object-oriented programming and web
        programming, both of which enable me to develop my skills in programming
        languages like JavaScript, PHP, HTML, CSS. Moreover, I have much
        exposure to web frameworks like React and VueJS throughout multiple
        personal projects. I am also adept in computer language use such as
        Java, Python. Furthermore, my internship at the end of my technical
        degree allowed me to put theory into practice.
      </p>
      <p>
        I am a dependent collaborator who works well in teams, and I quickly and
        easily adapt to the technological work environment, Therefore, I am
        enthused about using my skills at this position so that I can have an
        impact in the field of computer science.
      </p>
      </div>
      <div className='about-image'>
        <img alt="me" src={Image}/> 
      </div>
    </div>
    </div>
  )
}

export default AboutMe