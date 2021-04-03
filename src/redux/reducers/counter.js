const counterReducer = (state = 12, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      console.log('Increment action: ', action);
      return state + action.payload; // action.payload is the number parameter from actions/index.js
    }

    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
