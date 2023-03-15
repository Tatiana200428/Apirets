import React from 'react'
import './card.css'

export const Card = ({ characterName, characterId, characterImg }) => {
    
  return (
    <div className="container-card">
      <img src={characterImg} alt={characterName} />      
      <h2>{characterId}</h2>
      <h2>{characterName}</h2>
    </div>
  )
}
