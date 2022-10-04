import React from 'react'
import "../styles/Project.css";
import Carousel from './Carousel';

function Project({title, description, image, conditionalStyle, homepage }) {
  return (
    <div className={"container-" + (conditionalStyle ? 'row' : 'reverse') }>
        <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={homepage} className="myButton">Go to website</a>
        </div>
        
        <div className='images'>
          {Array.isArray(image) ? 
          <Carousel arrayImages={image}/>
           : <img src={image} alt='project' className='imagesProjects'></img>}
            
        </div>
    </div>
  )
}

export default Project