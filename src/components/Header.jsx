import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import '../styles/Header.css'

function Header() {
  return (
    <>
        <div className='HeaderFrame1'>
         <Link to="/"><h6>Dylan Otina</h6></Link>
         <div className='HeaderFrame2'>
            <Link to="/aboutme"><h6>About me</h6></Link>
            <Link to="/projects"><h6>My Projects</h6></Link>
            <Link to="/contact"><h6>Contact</h6></Link>
            </div>
            <a href="https://github.com/Dylanotina?tab=repositories"><FaGithub/></a> 
        </div>
    </>
  )
}

export default Header