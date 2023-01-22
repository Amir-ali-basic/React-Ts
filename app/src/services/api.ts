import {
  fetchCharactersRequest,
  fetchCharactersSuccess,
  fetchCharactersFailure,
} from "../actions/actions";
// Services are a way of abstracting away the logic for interacting with an API or any other external resource.
// Services typically handle the logic for making API calls, caching data, and handling errors,
// and then return the data in a format that is easy for the rest of the application to use.
const fetchCharactersAPI = () => {
  return async (dispatch: any) => {
    try {
      dispatch(fetchCharactersRequest());
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const data = await res.json();
      dispatch(fetchCharactersSuccess(data.results));
    } catch (error) {
      dispatch(fetchCharactersFailure(error));
    }
  };
};

export default fetchCharactersAPI;
