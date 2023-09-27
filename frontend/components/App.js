import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card'

export default function App() {
  
  const [photoInfo, setPhotoInfo] = useState()

  useEffect(() => {
    function getPhoto() {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(res => {
        console.log(res.data)
        setPhotoInfo(res.data)
      })    
      .catch(err => console.error(err))
    }
    getPhoto()
    // setPhotoInfo({
    //   "copyright": "\nAntoine & Dalia Grelin\n",
    //       "date": "2023-09-26",
    //       "explanation": "Do you see the horse's head?   What you are seeing is not the famous Horsehead nebula toward Orion, but rather a fainter nebula that only takes on a familiar form with deeper imaging.  The main part of the here-imaged molecular cloud complex is  reflection nebula IC 4592.  Reflection nebulas are made up of very fine dust that normally appears dark but can look quite blue when reflecting the visible light of energetic nearby stars.  In this case, the source of much of the reflected light is a sta...",
    //       "hdurl": "https://apod.nasa.gov/apod/image/2309/BlueHorse_Grelin_9342.jpg",
    //       "media_type": "image",
    //       "service_version": "v1",
    //       "title": "IC 4592: The Blue Horsehead Reflection Nebula",
    //       "url": "https://apod.nasa.gov/apod/image/2309/BlueHorse_Grelin_1080.jpg"
    // })
      
  }, [])

  if (!photoInfo) return 'Grabbing the NASA photo of the day!!!'
  return (
    <section>
      <Card
      title={photoInfo.title}
      text={photoInfo.explanation}
      imageURL={photoInfo.url}
      date={photoInfo.date}
      />
     {/* <div className='photo-card'>
    <h2>{photoInfo.title}</h2>
    <h3>{photoInfo.date}</h3>
    <p>{photoInfo.explanation}</p>
    <figure>
      <img src={photoInfo.url} />
    </figure>
    <h4>{photoInfo.copyright}</h4>
  </div> */}
    </section>

    
  )
}


