import React from 'react';
import { fetchLocalStorage } from '../../../helpers/functions';

const FetchLocalStorageButton = () => {
  const buttonClick = () => {
    console.log('Fetchy');

    const localObject = fetchLocalStorage();
    console.log('LO from FetchButton: ', localObject);
  };

  return (
    <div>
      <button onClick={() => buttonClick()}>Fetch Local Storage</button>
    </div>
  );
};

export default FetchLocalStorageButton;
