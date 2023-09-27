import React from "react";
import Photo from './Photo'

export default function Card({title, text, imageURL, copyright, date }) {
    return (
      <div className='photo-card'>
      <h2>{title}</h2>
      <h3>{date}</h3>
      <p>{text}</p>
      <Photo
       imageURL={imageURL}
      />
      <h4>{copyright}</h4>
    </div>
    )
  }






