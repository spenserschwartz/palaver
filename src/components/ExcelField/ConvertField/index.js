import React from 'react';
import XLSX from 'xlsx';

import { useSelector, useDispatch } from 'react-redux';
import { selectFile, uploadTable } from '../../../redux/actions';

const ConvertField = ({
  excelObject,
  setExcelObject,
  excelData,
  setExcelData,
}) => {
  const dispatch = useDispatch();
  const selectedFile = useSelector((state) => state.selectedFile);

  const fileUpload = (e) => {
    dispatch(selectFile(e.target.files[0]));
  };

  const uploadExcel = () => {
    if (selectedFile !== 'noFileSelected') {
      console.log('selectedFile has been changed!');
      var fileReader = new FileReader();
      fileReader.onload = function (event) {
        var data = event.target.result;

        var workbook = XLSX.read(data, {
          type: 'binary',
        });

        const newExcelObject = Object.assign({}, excelObject);
        workbook.SheetNames.forEach((sheet) => {
          let rowObject = XLSX.utils.sheet_to_row_object_array(
            workbook.Sheets[sheet]
          );
          //let jsonObject = JSON.stringify(rowObject);
          //document.getElementById('jsonData').innerHTML = jsonObject;
          newExcelObject[sheet] = rowObject;
        });
        // Set excelObject that will be displayed in ExcelTableField
        setExcelObject(newExcelObject);
        dispatch(uploadTable(3, 4));
      };
      fileReader.readAsBinaryString(selectedFile);
    }
  };

  return (
    <div>
      <h2>ConvertField</h2>
      <input
        type="file"
        id="fileUpload"
        accept=".xls,.xlsx"
        onChange={(e) => fileUpload(e)}
      />
      <button type="button" id="uploadExcel" onClick={() => uploadExcel()}>
        Convert
      </button>
      <pre id="jsonData"></pre>
    </div>
  );
};

export default ConvertField;
