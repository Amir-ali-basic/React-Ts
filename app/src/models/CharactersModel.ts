import { ICharacter } from "../interfaces/ICharacter";

export class CharacterModel implements ICharacter{
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;

    constructor(data:ICharacter){
        this.id = data.id;
        this.name = data.name;
        this.status = data.status;
        this.species = data.species;
        this.gender = data.gender
    }
}