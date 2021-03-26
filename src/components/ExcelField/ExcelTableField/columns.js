import { NumberRangeColumnFilter } from '../../../helpers/excel/excelFunctions';

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
    Cell: ({ row: { original } }) => (
      <div>
        Taking out Cell will go back to normal
        <button onClick={() => console.log(original)}>Button text</button>
      </div>
    ),
  },
  {
    Header: 'Job Title',
    accessor: 'Job Title',
  },
];
