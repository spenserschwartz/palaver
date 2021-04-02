import counterReducer from './counter';
//import loggedReducer from './isLogged';
import arrayReducer from './arrayReducer';
import inputObjectReducer from './inputObject';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
  counter: counterReducer,
  //isLogged: loggedReducer
  arrayz: arrayReducer,
  inputObjectZ: inputObjectReducer,
});

export default allReducers;
