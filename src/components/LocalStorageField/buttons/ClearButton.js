import React from 'react';
import { inputObjectTemplate } from '../../../helpers';

const ClearButton = () => {
  const clearLocalStorage = () => {
    if (window.confirm('Are you sure you want to clear Local Storage?'))
      //localStorage.clear();
      localStorage.setItem('Palaver', JSON.stringify(inputObjectTemplate));
  };

  return (
    <div>
      <button onClick={() => clearLocalStorage()}>Clear Local Storage</button>
    </div>
  );
};

export default ClearButton;
