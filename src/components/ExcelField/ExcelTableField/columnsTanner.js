export const COLUMNSTANNER = [
  {
    Header: 'Status',
    accessor: 'Status',
    aggregate: 'count',
    Aggregated: ({ value }) => `${value} Names`,
  },
  {
    Header: 'Date Submitted',
    accessor: 'Date Submitted',
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
