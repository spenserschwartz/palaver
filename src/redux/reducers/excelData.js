const excelDataReducer = (state = [], action) => {
  switch (action.type) {
    case 'UPDATEEXCELDATA': {
      return action.payload;
    }

    default:
      return state;
  }
};

export default excelDataReducer;
