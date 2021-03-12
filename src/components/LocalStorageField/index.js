import React, { useState, useEffect } from 'react';
import '../styles.css';
import { ClearButton, SaveButton, FetchLocalStorageButton } from './buttons';
import LocalStorageDisplay from './LocalStorageDisplay';
import { localStorageObjectTemplate } from '../../helpers';
import { fetchLocalStorage } from '../../helpers/functions';

const LocalStorageField = ({ inputObject, setInputObject }) => {
  const [localObject, setLocalObject] = useState(fetchLocalStorage());
  const [localStorageDisplay, setLocalStorageDisplay] = useState(false);

  useEffect(() => {
    // Check to match template. If Palaver key in localStorage does NOT have template keys, reset localObject to template
    for (let key in localStorageObjectTemplate) {
      if (!localObject[key]) {
        setLocalObject(localStorageObjectTemplate);
        break;
      }
    }
  }, [localObject]);

  // const object = { coffeeZ: 'cup', chicken: 'eggsf', number: 33 };
  // localStorage.setItem('Palaver', JSON.stringify(object));

  return (
    <div className="buttonField">
      <h1>Local Storage Field</h1>
      <SaveButton />
      <ClearButton />
      <FetchLocalStorageButton
        setLocalStorageDisplay={setLocalStorageDisplay}
      />

      {localStorageDisplay ? (
        <LocalStorageDisplay localObject={localObject} />
      ) : null}
    </div>
  );
};

export default LocalStorageField;
