import React from 'react';
import { fetchLocalStorage } from '../../../helpers/functions';

const FetchLocalStorageButton = ({
  setLocalStorageDisplay,
  localObject,
  setLocalObject,
}) => {
  // Async to allow document.getElementById below to have a value
  const buttonClick = async () => {
    const newObject = await fetchLocalStorage();
    setLocalObject(newObject);

    // Turn setLocalStorageDisplay to true to display LocalStorageDisplay
    setLocalStorageDisplay(true);
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
