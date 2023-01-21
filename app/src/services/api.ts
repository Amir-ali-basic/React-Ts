import {fetchCharactersRequest, fetchCharactersSuccess, fetchCharactersFailure} from '../actions/actions'

const fetchCharactersAPI = () => {
    return async (dispatch:any) => {
        try {
            dispatch(fetchCharactersRequest());
            const res = await fetch("https://rickandmortyapi.com/api/character");
            const data = await res.json();
            dispatch(fetchCharactersSuccess(data.results));
        } catch (error) {
            dispatch(fetchCharactersFailure(error));
        }
    }
}

export default fetchCharactersAPI
