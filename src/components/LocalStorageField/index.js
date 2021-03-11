import React, { useState, useEffect } from 'react';
import '../styles.css';
import { ClearButton, SaveButton, FetchLocalStorageButton } from './buttons';
import LocalStorageDisplay from './LocalStorageDisplay';
import { inputObjectTemplate } from '../../helpers';
import { fetchLocalStorage } from '../../helpers/functions';

const LocalStorageField = ({ inputObject, setInputObject }) => {
  //let localObject = JSON.parse(fetchLocalStorage());

  // Check to match template. If Palaver key in localStorage does not have the template keys, localObject is reset to the template
  // for (let key in inputObjectTemplate) {
  //   if (!localObject[key]) {
  //     localObject = Object.assign({}, inputObjectTemplate);
  //     break;
  //   }
  // }

  const [localObject, setLocalObject] = useState(
    JSON.parse(fetchLocalStorage())
  );
  useEffect(() => {
    for (let key in inputObjectTemplate) {
      if (!localObject[key]) {
        setLocalObject(inputObjectTemplate);
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
      <FetchLocalStorageButton />

      <LocalStorageDisplay localObject={localObject} />
    </div>
  );
};

export default LocalStorageField;
