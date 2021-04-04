import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTable } from '../../redux/actions';

const AddToTableButton = () => {
  const dispatch = useDispatch();
  const excelObject = useSelector((state) => state.excelObject);

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
    dispatch(updateTable(newExcelObject));
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
