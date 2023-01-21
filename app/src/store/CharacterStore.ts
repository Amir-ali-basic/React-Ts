import { CharacterModel } from "../models/CharactersModel";
class Store {
    state = {
      characters: [] as CharacterModel[],
    };
  
    async fetchCharacters() {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const data = await res.json();
      return data.results;
    }
  }
  
  const useCharacters = new Store();
  
  export default useCharacters;