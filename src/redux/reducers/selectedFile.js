const selectedFileReducer = (state = 'noFileSelected', action) => {
  switch (action.type) {
    case 'SELECTFILE': {
      console.log('this: ', action.payload);
      return action.payload;
    }
    default:
      return state;
  }
};

export default selectedFileReducer;
