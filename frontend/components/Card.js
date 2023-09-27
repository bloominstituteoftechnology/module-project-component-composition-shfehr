import React from "react";
import Photo from './Photo'
import styled from 'styled-components'

const StyledApp = styled.div `
 h2 {
    color: green;
    text-align: center
 }
 p {
    background-color: grey;
    color: white
 }
 h3 {
    color: blue;
    text-align: center
 }
 h5 {
    font-style: italic;
 }
`

export default function Card({title, text, imageURL, copyright, date }) {
    return (
      <StyledApp>
       <h2>{title}</h2>
       <h3>{date}</h3>
       <p>{text}</p>
       <h5>Copyright: {copyright}</h5>
       <Photo
       imageURL={imageURL}
       />
       
    </StyledApp>
    )
  }






