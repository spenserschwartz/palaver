import counterReducer from './counter';
import arrayReducer from './arrayReducer';

import excelDataReducer from './excelData';
import excelObjectReducer from './excelObject';
import inputObjectReducer from './inputObject';
import selectedFileReducer from './selectedFile';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
  counter: counterReducer,
  arrayz: arrayReducer,
  excelData: excelDataReducer,
  excelObject: excelObjectReducer,
  inputObject: inputObjectReducer,
  selectedFile: selectedFileReducer,
});

export default allReducers;
