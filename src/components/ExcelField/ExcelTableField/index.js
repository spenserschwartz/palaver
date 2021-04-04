import React from 'react';
import ExcelTable from './ExcelTable';
import '../../styles.css';

const ExcelTableField = () => {
  const saveExcelObject = () => {
    console.log('savey');
  };

  return (
    <div className="excelTableField">
      <h3>Excel Table Field</h3>
      <button onClick={() => saveExcelObject()}>Save excelObject</button>
      <ExcelTable />
    </div>
  );
};

export default ExcelTableField;
