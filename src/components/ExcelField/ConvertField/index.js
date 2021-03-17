import React, { useState } from 'react';
import { OutTable, ExcelRenderer } from 'react-excel-renderer';
import XLSX from 'xlsx';

const ConvertField = () => {
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);

  const onChange = (e) => {
    console.log('EE: ', e.target.files[0]);
  };

  const fileHandler = (event) => {
    let fileObj = event.target.files[0];
    console.log('This is fileObj: ', fileObj);

    //just pass the fileObj as parameter
    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        // this.setState({
        //   cols: resp.cols,
        //   rows: resp.rows,
        // });
        console.log('hey');
        setColumns(resp.cols);
        setRows(resp.rows);
      }
    });
  };

  return (
    <div id="wrapper">
      <input
        type="file"
        onChange={(e) => fileHandler(e)}
        style={{ padding: '10px' }}
      />
      <OutTable
        data={rows}
        columns={columns}
        tableClassName="ExcelTable2007"
        tableHeaderRowClass="heading"
      />
    </div>
  );
};

export default ConvertField;
