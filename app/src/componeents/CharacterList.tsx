import React, { useEffect, useState } from "react";
import fetchCharactersAPI from "../services/api";
import { CharacterViewModel } from "../viewModels/CharactrsVm";
import { useSelector, useDispatch } from "react-redux";
import Character from "./Character";

function CharacterList() {
  const characters = useSelector((state: any) => state.characters);
  const isLoading = useSelector((state: any) => state.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharactersAPI() as any);
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const viewModel = new CharacterViewModel(characters);
  const { allCharacters, aliveCharacters, deadCharacters } = viewModel;
  console.log("allCharacters", viewModel);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="characters d-flex flex-row justify-content-center gap-10">
          <div className="alive">
            <h2>Alive Characters</h2>
            <Character characters={aliveCharacters} isDisabled={false} />
          </div>
          <div className="dead">
            <h2>Dead Characters</h2>
            <Character characters={deadCharacters} isDisabled={true} />
          </div>
        </div>
      )}
    </div>
  );
}

export default CharacterList;
