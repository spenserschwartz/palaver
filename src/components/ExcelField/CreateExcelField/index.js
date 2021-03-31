import React from 'react';
const xlsx = require('xlsx');

const CreateExcelField = ({ excelObject }) => {
  console.log('CEF eO: ', excelObject);

  const createExcelFromExcelObject = () => {
    if (excelObject['Applications']) {
      const wb = xlsx.utils.book_new(); // Create a new workbook
      wb.Props = {
        Title: 'Palaver Database',
        Subject: 'Palaver Database',
        //Author: 'Red Stapler',
        CreatedDate: new Date(),
      };

      wb.SheetNames.push('Applications'); // Assign a new sheet name and push to SheetNames array
      const applicationsWS = xlsx.utils.json_to_sheet(
        excelObject['Applications']
      );

      wb.Sheets['Applications'] = applicationsWS;
      xlsx.writeFile(wb, 'testyEO.xlsx');
    } else {
      window.alert('You need something in excelObject');
    }
  };

  return (
    <div className="createExcelField">
      <h3>Create Excel Field</h3>
      <button
        className="button green"
        onClick={() => createExcelFromExcelObject()}
      >
        Create from excelObject
      </button>
    </div>
  );
};

export default CreateExcelField;
