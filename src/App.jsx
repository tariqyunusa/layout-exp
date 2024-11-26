import React, {useEffect} from 'react'
import './App.css'
import Nav from './Nav'
import gsap from 'gsap'
import image1 from './assets/image-010.jpg'
import image2 from './assets/image-011.jpg'
import image3 from './assets/image-012.jpg'
import image4 from './assets/image-013.jpg'
import image5 from './assets/image-015.jpg'
import image6 from './assets/image-016.jpg'



function App() {
  useEffect(() => {
    gsap.from(".img__wrapper", {
      y: window.innerHeight,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1
    }) 
  },[])
 
const images = [image1, image2, image3, image4, image5, image6 ]
  return (
    <>
      <section className="wrapper">
      <Nav />
      <div className="images__showcase">
        {images.map((img, index) => (
          <div className='img__wrapper' key={index} data-animation="image">
            <img src={img} alt={`image ${index + 1}`}  />
          </div>
        ))}
      </div>
      </section>
    </>
  )
}

export default App
