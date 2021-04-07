import React from "react";
import XLSX from "xlsx";
import { useDispatch, useSelector } from "react-redux";
import {
  updateExcelData,
  updateTable,
  uploadTable,
  addToTable,
} from "../../redux/actions";

const AddToTableButton = () => {
  const dispatch = useDispatch();
  const excelObject = useSelector((state) => state.excelObject);
  const selectedFile = useSelector((state) => state.selectedFile);

  const addToExcelTable = () => {
    // Add new row to excelObject
    // const inputCompanyName = document.getElementById('inputTextBoxcompanyName');
    // const newRow = {
    //   Status: 'Initial Contact',
    //   'Date Submitted': Date.now(),
    //   'Company Name': inputCompanyName,
    // };

    const dummyData = [
      {
        Status: "dummyData",
        "Date Submitted": 33000,
        "Company Name": "hop hop",
        "Job Title": "rabbit",
      },
      {
        Status: "dummyData",
        "Date Submitted": 33000,
        "Company Name": "hop hop",
        "Job Title": "rabbit",
      },
    ];

    const newExcelObject = Object.assign({}, excelObject);
    //! Works to populate with dummyData
    // newExcelObject['Applications'] = dummyData;
    // dispatch(updateTable(newExcelObject));

    //! Works to add dummy on top KEEP THIS UNTIL REAL THING WORKS
    // const newData = newExcelObject['Applications'];
    // console.log('ND: ', newData);
    // const afterData = newData.concat(dummyData);
    // console.log('After concat: ', afterData);
    // newExcelObject['Applications'] = afterData;
    // dispatch(updateTable(newExcelObject));

    // const data = newExcelObject['Applications'];
    // const newData = data.concat(dummyData);
    // newExcelObject['Applications'] = newData;
    // dispatch(updateTable(newExcelObject));

    dispatch(addToTable());
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
