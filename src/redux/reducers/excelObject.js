import XLSX from 'xlsx';

const excelObjectReducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPLOADTABLE': {
      return state;
    }
    default:
      return state;
  }
};

export default excelObjectReducer;
