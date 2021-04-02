import React from 'react';
import ExcelTable from './ExcelTable';

const ExcelTableField = ({
  excelObject,
  setExcelObject,
  excelData,
  setExcelData,
}) => {
  const saveExcelObject = () => {
    console.log('savey');
  };

  return (
    <div className="excelTableField">
      <h3>Excel Table Field</h3>
      <button onClick={() => saveExcelObject()}>Save excelObject</button>
      <ExcelTable
        excelObject={excelObject}
        setExcelObject={setExcelObject}
        excelData={excelData}
        setExcelData={setExcelData}
      />
    </div>
  );
};

export default ExcelTableField;
