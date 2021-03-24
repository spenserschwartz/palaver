import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import { COLUMNS } from './columns';
import './table.css';

const BasicTable = ({ excelObject }) => {
  console.log('bt: ', excelObject['Applications']);

  // useMemo ensures data isn't recreated on every render
  const columns = useMemo(() => COLUMNS, []);
  const tdata = useMemo(() => excelObject['Applications'], [excelObject]) || [];
  console.log('tdata: ', tdata);
  const data = [];

  const tableInstance = useTable({
    columns: columns,
    data: tdata,
  });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <div className="basicTableContainer">
      <h5>Basic Table</h5>

      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BasicTable;
