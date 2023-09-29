import React, { useEffect, useState } from "react";

function TestComponents() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [episode, setEpisode] = useState(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode/1")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setEpisode(result);
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
      <div>
        <h1>{episode.name}</h1>
        <p>Date de diffusion : {episode.air_date}</p>
        <p>Épisode : {episode.episode}</p>
        <h2>Personnages :</h2>
        <ul>
          {episode.characters.map((charUrl, index) => (
            <li key={index}>
              <a href={charUrl} target="_blank" rel="noopener noreferrer">
                Personnage {index + 1}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TestComponents;
