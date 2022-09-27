import React from 'react'
import Flickity from 'react-flickity-component'
import "../styles/flickity.css"
function Carousel({arrayImages}) {
  return (
    <Flickity options={ {"wrapAround" : true, "autoPlay" : true, "prevNextButtons" : false, "pageDots" : false} }>
        {arrayImages?.map((img, index) => <img src={img} alt='project' key={index}/>  )}
    </Flickity>
  )
}

export default Carousel