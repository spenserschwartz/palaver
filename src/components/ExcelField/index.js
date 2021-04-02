import React from 'react';
import '../styles.css';
import '../../helpers/styles.css';

import {
  ConvertField,
  CreateExcelField,
  DownloadTemplateField,
  ExcelTableField,
} from './fields';

// https://www.youtube.com/watch?v=tKz_ryychBY
// https://www.npmjs.com/package/xlsx

const ExcelField = ({
  excelObject,
  setExcelObject,
  excelData,
  setExcelData,
}) => {
  return (
    <div className="excelField">
      <h1>Excel Field</h1>

      <CreateExcelField excelObject={excelObject} />

      <DownloadTemplateField />

      <ConvertField
        excelObject={excelObject}
        setExcelObject={setExcelObject}
        excelData={excelData}
        setExcelData={setExcelData}
      />

      <ExcelTableField
        excelObject={excelObject}
        setExcelObject={setExcelObject}
        excelData={excelData}
        setExcelData={setExcelData}
      />
    </div>
  );
};

export default ExcelField;
