import { CharacterModel } from "../models/CharactersModel";

export class CharacterViewModel {
    allCharacters = [] as CharacterModel[];
    aliveCharacters = [] as CharacterModel[];
    deadCharacters = [] as CharacterModel[];
    isLoading = true;
  
    constructor(characters: CharacterModel[]) {
        this.allCharacters = characters;
        this.setAlives();
        this.setDeads();
        this.isLoading = false;
    }
    setAlives() {
        this.aliveCharacters = this.allCharacters.filter((character) => character.status === "Alive");
    }
    setDeads() {
        this.deadCharacters = this.allCharacters.filter((character) => character.status === "Dead");
    }
}


