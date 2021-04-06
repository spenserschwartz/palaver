import { excelObjectTemplate } from '../../helpers';

const excelObjectReducer = (state = excelObjectTemplate, action) => {
  switch (action.type) {
    case 'UPLOADTABLE': {
      return action.payload;
    }
    case 'UPDATETABLE': {
      return action.payload;
    }
    case 'ADDTOTABLE': {
      const newExcelObject = Object.assign({}, state);
      const data = newExcelObject['Applications'];
      console.log('Add: ', Date.now());
      const date = Date.now();
      const companyName = document.getElementById('inputTextBoxcompanyName')
        .value;
      const jobTitle = document.getElementById('inputTextBoxjobTitle').value;
      const newRow = [
        {
          Status: 'Initial Connect',
          'Date Submitted': date,
          'Company Name': companyName,
          'Job Title': jobTitle,
        },
      ];
      const newData = data.concat(newRow);
      newExcelObject['Applications'] = newData;
      return newExcelObject;
    }

    default:
      return state;
  }
};

export default excelObjectReducer;
