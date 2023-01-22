import React from "react";
import { CharacterModel } from "../models/CharactersModel";

interface CharacterProps {
  characters: CharacterModel[];
  isDisabled: Boolean;
}
const Character: React.FC<CharacterProps> = ({ characters, isDisabled }) => {
  return (
    <div>
      {characters.map((character) => (
        <div key={character.id} className="character">
          <div className={isDisabled ? "disabled" : ""}></div>
          <img src={character.image} alt={character.name} />
          <p>{character.name}</p>
          <p>Status: {character.status}</p>
        </div>
      ))}
    </div>
  );
};
export default Character;
