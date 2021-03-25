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
  },
  {
    Header: 'Job Title',
    accessor: 'Job Title',
  },
];
