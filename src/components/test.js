import React, { useEffect, useState } from "react";

function TestComponents() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [character, setcharacter] = useState(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/1")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setcharacter(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []); // [] pour exécuter une seule fois au montage

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {
    return (
      <div class="text-danger">
        <p>Name : {character.name}</p>
      </div>
    );
  }
}

export default TestComponents;
