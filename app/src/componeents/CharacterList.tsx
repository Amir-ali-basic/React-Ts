import React, { useEffect, useState } from "react";
import fetchCharactersAPI from "../services/api";
import { CharacterViewModel } from "../viewModels/CharactrsVm";
import { useSelector, useDispatch } from 'react-redux';


function CharacterList ()  {
    const characters = useSelector((state:any) => state.characters);
    const isLoading = useSelector((state:any) => state.isLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCharactersAPI() as any);
    }, [dispatch]);
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    const viewModel = new CharacterViewModel(characters);
    const { allCharacters, aliveCharacters, deadCharacters } = viewModel;
  
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
