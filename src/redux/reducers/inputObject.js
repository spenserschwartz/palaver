import { inputObjectTemplate } from '../../helpers';

const inputObjectReducer = (state = inputObjectTemplate, action) => {
  switch (action.type) {
    case 'GENERATEMESSAGE': {
      // return state + action.payload; // action.payload is the number parameter from actions/index.js
      // const newState = Object.assign({}, state);
      // newState.jobTitle = 'JOBBY';
      // return newState;
      const newObject = Object.assign({}, state);
      for (let key in newObject) {
        let inputTextID = 'inputTextBox' + key;
        newObject[key] = document.getElementById(inputTextID).value;
      }
      return newObject;
    }
    default:
      return state;
  }
};

export default inputObjectReducer;
