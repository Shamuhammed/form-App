import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import calendarReducer from './calendarReducer';
import formReducer from './formReducer';

let reducers = combineReducers({
   form: formReducer,
   calendar: calendarReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store