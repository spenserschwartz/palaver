import React from 'react';
import { fetchLocalStorage } from '../../../helpers/functions';

const FetchLocalStorageButton = ({ setLocalStorageDisplay }) => {
  // Async to allow document.getElementById below to have a value
  const buttonClick = async () => {
    // Turn setLocalStorageDisplay to true to display LocalStorageDisplay
    setLocalStorageDisplay(true);

    // Fill in text boxes from localStorage values
    const newObject = await fetchLocalStorage();
    console.log('no: ', newObject);
    for (let key in newObject) {
      let inputTextID = 'localStorageTextBox' + key;
      //document.getElementById(inputTextID).value = newObject[key];
    }
  };

  return (
    <div>
      <button className="button" onClick={() => buttonClick()}>
        Fetch Local Storage
      </button>
    </div>
  );
};

export default FetchLocalStorageButton;
