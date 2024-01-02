import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Images from './components/Images'
import Footer from './components/Footer'



function App() {
  const [images, setImages] = useState([])

  const fetchImages = (sol, camera) => {
   
  //https://mars-backend.onrender.com
    fetch(`/api/photos?sol=${sol}&camera=${camera}`)
    .then((data) => data.json())
    .then((data) => setImages(data))
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <div id="main-container">
      <h1>Mars Photo API</h1>
      <h2>Curiosity</h2>
      <Form fetchImages={fetchImages} />
      <Images images={images} />
      <Footer />
    </div>
  )
}

export default App
