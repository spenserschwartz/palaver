import { inputObjectTemplate } from '../../helpers';

const inputObjectReducer = (state = inputObjectTemplate, action) => {
  switch (action.type) {
    case 'GENERATEMESSAGE': {
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
