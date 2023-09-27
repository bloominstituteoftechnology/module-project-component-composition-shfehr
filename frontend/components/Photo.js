import React from "react";


export default function Photo ({imageURL}) {
    return (
      <figure>
        <img src={imageURL} />
      </figure>
    )
  }