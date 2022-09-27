import React, {useState, useEffect} from 'react'
import Flickity from 'react-flickity-component'
import MoonLoader from 'react-spinners/MoonLoader'
import "../styles/flickity.css"
function Carousel({arrayImages}) {

const [loading, setLoading] = useState(false)


useEffect( () => {
  setLoading(true)
  setTimeout(() => setLoading(false), 2000)
}, [])

  return (
    loading ? 
      <MoonLoader color='#5366aa'/> :
      <Flickity options={ {"wrapAround" : true, "autoPlay" : true, "prevNextButtons" : false, "pageDots" : false} }>
        { arrayImages?.map((img, index) => <img src={img} alt='project' key={index}/>  )}
    </Flickity>
  
  )
}

export default Carousel