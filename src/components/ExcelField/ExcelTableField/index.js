import React from 'react';
import ExcelTable from './ExcelTable';

const ExcelTableField = ({ excelObject, setExcelObject }) => {
  console.log('neO: ', excelObject);
  return (
    <div>
      <h3>Excel Table Field</h3>
      <ExcelTable excelObject={excelObject} />
    </div>
  );
};

export default ExcelTableField;
