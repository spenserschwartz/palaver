import React, { useState } from 'react';
import XLSX from 'xlsx';

const ConvertField = () => {
  // const [selectedFile, setSelectedFile] = useState(null);

  // const convert = () => {
  //   document.getElementById('input').addEventListener('change', (event) => {
  //     setSelectedFile(event.target);
  //   });

  //   if (selectedFile) {
  //     let fileReader = new FileReader();
  //     fileReader.readAsBinaryString(selectedFile);
  //     fileReader.onload = (event) => {
  //       console.log(event.target.result);
  //     };
  //   }
  // };

  // return (
  //   <div className="convertField">
  //     <h4>Convert Field</h4>
  //     <input id="input" type="file" accept=".xls,.xlsx" />
  //     <button id="button" onClick={() => convert()}>
  //       Convert
  //     </button>
  //   </div>
  // );

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);
      fileReader.onLoad = (e) => {
        console.log('fr');
        const bufferArray = e.target.results;

        const wb = XLSX.read(bufferArray, { type: 'buffer' });
        const wsName = wb.SheetNames[0];

        const ws = wb.Sheets[wsName];
        console.log('hey from onLoad');

        const data = XLSX.utils.sheet_to_json(ws);

        resolve(data);
      };
      fileReader.onerror = (error) => {
        console.log('error?');
        reject(error);
      };
    });

    promise.then((d) => {
      console.log(d);
    });
  };

  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }}
      />
    </div>
  );
};

export default ConvertField;
