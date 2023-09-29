import React, { useEffect, useState } from "react";

function TestComponents() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch("https://rickandmortyapi.com/api/character/");
        const data = await response.json();
        setCharacters(data.results);
        setIsLoaded(true);
      } catch (error) {
        setError(error);
        setIsLoaded(true);
      }
    };

    fetchCharacters();
  }, []);

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {
    return (
      <div>
        {characters.map((character, index) => (
          <div key={index} className="card" style={{ width: "18em", margin: "1em" }}>
            <img src={character.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{character.name}</h5>
              <p className="card-text">{character.location.name}</p>
              <a href="#" className="btn btn-dark">
                Détails
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default TestComponents;
