import { CharacterModel } from "../models/CharactersModel";
// A view model is a layer between the model and the view,
//  it handle the communication between the two.
//  It's responsible for providing the data to the view and updating the view when the model changes.
//  It also handle the validation, business logic and any other functionality that is required for the view.
//MVVM
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
    return this.allCharacters.filter(
      (character) => character.status === "Alive"
    );
  }
  setDeads() {
    return this.allCharacters.filter(
      (character) => character.status === "Dead"
    );
  }
  showMessage() {
    alert("Show message called");
  }
}
