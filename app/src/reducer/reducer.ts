import { FETCH_CHARACTERS_REQUEST, FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_FAILURE } from '../actions/actionsTypes';

const initialState = {
  characters: [],
  isLoading: false,
  error: ''
}

const charactersReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case FETCH_CHARACTERS_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        isLoading: false
      }
    case FETCH_CHARACTERS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }
    default: return state
  }
}

export default charactersReducer;
