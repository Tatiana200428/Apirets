import './App.css'
import { Card } from './components/Card/Card'
import { animals } from './assets/animals'
import { useState } from 'react';

function App() {

  const [character,setCharacter] = useState([]);

  const getCharacter = () => {
    const URL = 'https://thesimpsonsquoteapi.glitch.me/quotes';
    fetch(URL)
    .then(response => response.json())
    .then(data => setCharacter(data[0]))
    .catch(err => console.error(err));
  }


  const objAnimals = animals();
  return(
    <div className="App">
      {/* {
        objAnimals.map( animal => <Card key={animal.id} animalName = {animal.name} animalId = {animal.id} animalImg = {animal.url} /> )
      } */}
      <Card characterName = {character.character} characterId = {character.character+character.characterDirection} characterImg = {character.image}  />
      <button onClick={getCharacter}>Click Me</button>
    </div>
  )
}

export default App
