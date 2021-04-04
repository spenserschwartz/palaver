import React from 'react';
import XLSX from 'xlsx';
import { useDispatch, useSelector } from 'react-redux';
import { updateExcelData, updateTable } from '../../redux/actions';

const AddToTableButton = () => {
  const dispatch = useDispatch();
  const excelObject = useSelector((state) => state.excelObject);
  const selectedFile = useSelector((state) => state.selectedFile);

  const addToExcelTable = () => {
    // Add new row to excelObject
    const inputCompanyName = document.getElementById('inputTextBoxcompanyName');
    const newRow = {
      Status: 'Initial Contact',
      'Date Submitted': Date.now(),
      'Company Name': inputCompanyName,
    };

    const newExcelObject = Object.assign({}, excelObject);
    newExcelObject['Applications'].push(newRow);
    //dispatch(updateTable(newExcelObject));
    dispatch(updateExcelData(newExcelObject['Applications']));
  };

  return (
    <div>
      <button className="button" onClick={() => addToExcelTable()}>
        Add to Table
      </button>
    </div>
  );
};

export default AddToTableButton;
