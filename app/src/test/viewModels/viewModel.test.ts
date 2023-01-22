import { CharacterModel } from "../../models/CharactersModel";
import { CharacterViewModel } from "../../viewModels/CharactrsVm";

describe("CharacterViewModel", () => {
  let characters: any;
  let viewModel: any;

  beforeEach(() => {
    characters = [
      { id: 1, name: "Rick", status: "Alive" },
      { id: 2, name: "Morty", status: "Alive" },
      { id: 3, name: "Summer", status: "Alive" },
      { id: 4, name: "Beth", status: "Dead" },
      { id: 5, name: "Jerry", status: "Dead" },
    ];
    viewModel = new CharacterViewModel(characters);
  });

  it("should set allCharacters to the characters passed in the constructor", () => {
    expect(viewModel.allCharacters).toEqual(characters);
  });

  it('should set aliveCharacters to characters with status "Alive"', () => {
    expect(viewModel.aliveCharacters).toEqual([
      { id: 1, name: "Rick", status: "Alive" },
      { id: 2, name: "Morty", status: "Alive" },
      { id: 3, name: "Summer", status: "Alive" },
    ]);
  });

  it('should set deadCharacters to characters with status "Dead"', () => {
    expect(viewModel.deadCharacters).toEqual([
      { id: 4, name: "Beth", status: "Dead" },
      { id: 5, name: "Jerry", status: "Dead" },
    ]);
  });
});
