import { ICharacter } from '../interfaces/ICharacter';
import { FETCH_CHARACTERS_REQUEST, FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_FAILURE } from './actionsTypes';

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

