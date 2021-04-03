const selectedFileReducer = (state = 'noFileSelected', action) => {
  switch (action.type) {
    case 'SELECTFILE': {
      return action.payload;
    }
    default:
      return state;
  }
};

export default selectedFileReducer;
