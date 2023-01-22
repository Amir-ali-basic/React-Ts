import { ICharacter } from '../interfaces/ICharacter';
import { FETCH_CHARACTERS_REQUEST, FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_FAILURE } from './actionsTypes';
// actions are payloads of information that send data from your application to your store. 
// They are the only source of information for the store. Actions are plain JavaScript objects 
// that must have a type property that indicates the type of action being performed.
export const fetchCharactersRequest = () => {
  return {
    type: FETCH_CHARACTERS_REQUEST
  }
}

export const fetchCharactersSuccess = (characters: ICharacter) => {
  return {
    type: FETCH_CHARACTERS_SUCCESS,
    payload: characters
  }
}

export const fetchCharactersFailure = (error:any) => {
  return {
    type: FETCH_CHARACTERS_FAILURE,
    payload: error
  }
}

