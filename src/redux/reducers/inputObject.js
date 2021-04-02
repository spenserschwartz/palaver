import { inputObjectTemplate } from '../../helpers';

const inputObjectReducer = (state = inputObjectTemplate, action) => {
  switch (action.type) {
    case 'GENERATEMESSAGE': {
      // return state + action.payload; // action.payload is the number parameter from actions/index.js
      const newState = Object.assign({}, state);
      newState.jobTitle = 'heck yeah';
      return newState;
    }
    default:
      return state;
  }
};

export default inputObjectReducer;
