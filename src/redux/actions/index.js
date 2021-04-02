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
