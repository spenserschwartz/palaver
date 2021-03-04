import React from 'react';
import { fetchLocalStorage } from '../../../helpers/functions';

const FetchLocalStorageButton = () => {
  const buttonClick = () => {
    console.log('Fetchy');

    const localObject = JSON.parse(fetchLocalStorage());
    console.log('LO: ', localObject);
  };

  return (
    <div>
      <button onClick={() => buttonClick()}>Fetch Local Storage</button>
    </div>
  );
};

export default FetchLocalStorageButton;
