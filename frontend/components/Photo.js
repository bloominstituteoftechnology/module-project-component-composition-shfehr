import React from "react";
import styled from 'styled-components'

const StyledPhoto = styled.figure




export default function Photo ({imageURL}) {
    return (
      <figure>
        <img src={imageURL}/>
      </figure>
    )
  }