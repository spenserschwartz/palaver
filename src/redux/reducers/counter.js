const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.payload; // action.payload is the number parameter from actions/index.js
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;