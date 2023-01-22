import {
  FETCH_CHARACTERS_REQUEST,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAILURE,
} from "../actions/actionsTypes";
// The reducer is a pure function that takes the current state of the application and an action,
// and returns the next state of the application.
// It is responsible for updating the store based on the actions it receives.
// It receives the current state and an action, and returns the next state.
const initialState = {
  characters: [],
  isLoading: false,
  error: "",
};

const charactersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_CHARACTERS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        isLoading: false,
      };
    case FETCH_CHARACTERS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default charactersReducer;
