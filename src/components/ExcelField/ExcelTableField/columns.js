import {
  ExcelRowModal,
  NumberRangeColumnFilter,
} from '../../../helpers/excel/components';
import React from 'react';

export const COLUMNS = [
  {
    Header: 'Status',
    accessor: 'Status',
    aggregate: 'count',
    Aggregated: ({ value }) => `${value} Names`,
  },
  {
    Header: 'Date Submitted',
    accessor: 'Date Submitted',
    Filter: NumberRangeColumnFilter,
    filter: 'between',
    // Aggregate the sum of all dates (?)
    aggregate: 'sum',
    Aggregated: ({ value }) => `${value} (total)`,
  },
  {
    Header: 'Company Name',
    accessor: 'Company Name',
    filter: 'fuzzyText',
    aggregate: 'uniqueCount',
    Aggregated: ({ value }) => `${value} Unique Names`,
  },
  {
    Header: 'Job Title',
    accessor: 'Job Title',
  },
  {
    Header: 'TestyColumn',
    Cell: ({ row: { original } }) => {
      return (
        <div>
          <button onClick={() => console.log(original)}>Origin AL</button>
          <ExcelRowModal rowData={original} />
        </div>
      );
    },
  },
  {
    Header: 'OriginalColumn',
    Cell: ({ row: { original } }) => (
      <div>
        <button onClick={() => console.log('Original: ', original)}>
          Original text
        </button>
      </div>
    ),
  },
  {
    Header: 'DataColumn',
    Cell: ({ data }) => (
      <div>
        <button onClick={() => console.log('DC: ', data)}>Data text</button>
      </div>
    ),
  },
];
