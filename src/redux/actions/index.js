export const increment = (number) => {
  return {
    type: 'INCREMENT',
    payload: number,
  };
};

export const decrement = () => {
  return {
    type: 'DECREMENT',
  };
};

export const pushNum = () => {
  return {
    type: 'PUSHNUMBER',
  };
};

export const generateMessage = () => {
  return {
    type: 'GENERATEMESSAGE',
  };
};

export const uploadTable = (excelObject) => {
  return {
    type: 'UPLOADTABLE',
    payload: excelObject,
  };
};

export const updateTable = (excelObject) => {
  return {
    type: 'UPDATETABLE',
    payload: excelObject,
  };
};

export const selectFile = (selected) => {
  return {
    type: 'SELECTFILE',
    payload: selected,
  };
};
