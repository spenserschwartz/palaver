import XLSX from 'xlsx';
import { excelObjectTemplate } from '../../helpers';

const excelObjectReducer = (state = excelObjectTemplate, action) => {
  switch (action.type) {
    case 'UPLOADTABLE': {
      return action.payload;
    }
    default:
      return state;
  }
};

export default excelObjectReducer;
