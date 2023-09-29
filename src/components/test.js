import React, { useEffect, useState } from "react";

function TestComponents() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [character, setCharacter] = useState(null);
  var i = 1
  
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/"+i)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCharacter(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []); // [] to execute only once on mount

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {
    return (
    <div class="card" style={{width: 18 + 'em'}}>
      <img src={character.image} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{character.name}</h5>
        <p class="card-text">{character.location.name}</p>
        <a href="#" class="btn btn-dark">Go somewhere</a>
      </div>
    </div>
    )
    var i = i + 1
  }
}

export default TestComponents;
