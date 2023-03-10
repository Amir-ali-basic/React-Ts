import { ICharacter } from "../interfaces/ICharacter";
// A model is a representation of data or a business logic in an application.
// It contains the data and the logic for manipulating that data.
// It is responsible for handling data and providing it to the other components.
export class CharacterModel implements ICharacter {
  id: number | null;
  name: string | "";
  status: string | "";
  species: string | "";
  gender: string | "";
  image: string | "";

  constructor(data: ICharacter) {
    this.id = data.id ? data.id : null;
    this.name = data.name ? data.name : "";
    this.status = data.status ? data.status : "";
    this.species = data.species ? data.species : "";
    this.gender = data.gender ? data.gender : "";
    this.image = data.image ? data.image : "";
  }
}
