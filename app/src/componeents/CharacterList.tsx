import React, { useEffect, useState } from "react";
import { CharacterModel } from "../models/CharactersModel";
import useCharacters from "../store/CharacterStore";
import { CharacterViewModel } from "../viewModels/CharactrsVm";

interface Props {}

const CharacterList: React.FC<Props> = () => {
  const [allCharacters, setAllCharacters] = useState([] as CharacterModel[]);
  const [aliveCharacters, setAliveCharacters] = useState(
    [] as CharacterModel[]
  );
  const [deadCharacters, setDeadCharacters] = useState([] as CharacterModel[]);
  const [isLoading, setLoading] = useState(true as Boolean);

  useEffect(() => {
    const fetchData = async () => {
      const characters = await useCharacters.fetchCharacters();
      setAllCharacters(characters);
      const viewModel = new CharacterViewModel(characters);
      setAliveCharacters(viewModel.aliveCharacters);
      setDeadCharacters(viewModel.deadCharacters);
      setLoading(viewModel.isLoading);
    };
    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h2>All Characters</h2>
          {allCharacters.length !== 0 &&
            allCharacters.map((character) => (
              <div key={character.id}>
                <p>{character.name}</p>
                <p>Status: {character.status}</p>
              </div>
            ))}
          <h2>Alive Characters</h2>
          {aliveCharacters.length !== 0 &&
            aliveCharacters.map((character) => (
              <div key={character.id}>
                <p>{character.name}</p>
                <p>Status: {character.status}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default CharacterList;
