import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import charactersReducer from '../reducer/reducer';
// The store is the JavaScript object that holds the application's state 
// and provides a way for the application to dispatch actions and subscribe to changes in the state. 
// It is created by passing the root reducer to the createStore() function from the redux library.

const store = createStore(charactersReducer, applyMiddleware(thunk));

export default store;
