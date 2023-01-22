// interface is a contract that defines the properties and methods that a class must implement.
// An interface defines the blueprint for a class,
// but does not provide any implementation for the methods or properties.
export interface ICharacter {
  id: number | null;
  name: string | "";
  status: string | "";
  species: string | "";
  gender: string | "";
  image: string | "";
}
