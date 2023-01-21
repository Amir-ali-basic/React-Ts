import { CharacterModel } from "../models/CharactersModel";

export class CharacterViewModel {
    allCharacters = [] as CharacterModel[];
    aliveCharacters = [] as CharacterModel[];
    deadCharacters = [] as CharacterModel[];
    isLoading = true;
  
    constructor(characters: CharacterModel[]) {
        this.allCharacters = characters;
        this.aliveCharacters = this.setAlives();
        this.deadCharacters = this.setDeads();
        this.isLoading = false;
    }
    setAlives() {
        return this.allCharacters.filter((character) => character.status === "Alive");
    }
    setDeads() {
        return this.allCharacters.filter((character) => character.status === "Dead");
    }
}


