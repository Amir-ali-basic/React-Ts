import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import charactersReducer from '../reducer/reducer';

const store = createStore(charactersReducer, applyMiddleware(thunk));

export default store;
