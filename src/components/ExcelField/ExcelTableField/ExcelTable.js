// https://codesandbox.io/s/gw0ih
import './table.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateExcelData, updateTable } from '../../../redux/actions';

import { COLUMNS } from './columns';
import { Table } from '../../../helpers/excel/components';

const ExcelTable = () => {
  const columns = React.useMemo(() => COLUMNS, []);
  const excelObject = useSelector((state) => state.excelObject);
  const dispatch = useDispatch();

  const [data, setData] = React.useState([]);
  //const [originalData, setOriginalData] = React.useState(data);

  //testy ExcelTable
  //dispatch(updateExcelData([44]));
  const dataZ = useSelector((state) => state.excelData);
  console.log('dataZ: ', dataZ);
  //

  useEffect(() => {
    if (excelObject['Applications']) {
      setData(excelObject['Applications']);
      //setOriginalData(excelObject['Applications']);

      dispatch(updateExcelData(excelObject['Applications']));
    }
  }, [dispatch, excelObject]);

  // We need to keep the table from resetting the pageIndex when we
  // Update data. So we can keep track of that flag with a ref.
  const skipResetRef = React.useRef(false);

  // When our cell renderer calls updateMyData, we'll use
  // the rowIndex, columnId and new value to update the
  // original data
  const updateMyData = (rowIndex, columnId, value) => {
    // Update excelObject when function is ran (onBlur)
    const newExcelObject = Object.assign({}, excelObject);
    newExcelObject['Applications'][rowIndex][columnId] = value;
    dispatch(updateTable(newExcelObject));
    //setExcelObject(newExcelObject);

    // We also turn on the flag to not reset the page
    skipResetRef.current = true;
    setData((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...row,
            [columnId]: value,
          };
        }
        return row;
      })
    );
  };

  // After data changes, we turn the flag back off
  // so that if data actually changes when we're not
  // editing it, the page is reset
  React.useEffect(() => {
    skipResetRef.current = false;
  }, [data]);

  // Let's add a data resetter/randomizer to help
  // illustrate that flow...
  const resetData = () => {
    // Don't reset the page when we do this
    skipResetRef.current = true;

    const dummyData = [
      {
        Status: 'dummyData',
        'Date Submitted': 22000,
        'Company Name': 'booga',
        'Job Title': 'bum bum',
      },
    ];
    //setData(originalData);
    setData(dummyData);

    const newExcelObject = Object.assign({}, excelObject);
    newExcelObject['Applications'] = dummyData;
    dispatch(updateTable(newExcelObject));
  };

  return (
    <div className="excelTable">
      <button onClick={() => resetData()}>Reset Data</button>
      <Table
        columns={columns}
        data={data}
        updateMyData={updateMyData}
        skipReset={skipResetRef.current}
      />
    </div>
  );
};

export default ExcelTable;
