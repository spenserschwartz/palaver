import React from 'react';
import BasicTable from './BasicTable';
import SortTable from './SortTable';
import TannerTable from './TannerTable';

const ExcelTableField = ({ excelObject, setExcelObject }) => {
  console.log('neO: ', excelObject);
  return (
    <div>
      <h3>Excel Table Field</h3>
      {/* <BasicTable excelObject={excelObject} /> */}
      {/* <SortTable excelObject={excelObject} /> */}
      <TannerTable excelObject={excelObject} />
    </div>
  );
};

export default ExcelTableField;
