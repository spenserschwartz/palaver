const arrayReducer = (state = [4, 5, 'icecubes'], action) => {
  switch (action.type) {
    case 'PUSHNUMBER': {
      const newState = state.slice();
      newState.push(7);
      return newState;
      //return [5, 6];
    }

    default:
      return state;
  }
};

export default arrayReducer;
