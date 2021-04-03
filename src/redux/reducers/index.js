import counterReducer from './counter';
import arrayReducer from './arrayReducer';

import excelObjectReducer from './excelObject';
import inputObjectReducer from './inputObject';
import selectedFileReducer from './selectedFile';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
  counter: counterReducer,
  arrayz: arrayReducer,
  excelObject: excelObjectReducer,
  inputObject: inputObjectReducer,
  selectedFile: selectedFileReducer,
});

export default allReducers;
