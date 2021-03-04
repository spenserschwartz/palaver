import React from 'react';
import './styles.css';
import LocalStorageTextBox from './LocalStorageTextBox';
import { inputObjectTemplate } from '../../helpers';

const LocalStorageDisplay = ({ localObject }) => {
  console.log('localObject in LocalStorageDisplay: ', localObject);
  //const object = {coffeeZ: 'cup', chicken: 'eggsf', number: 33}
  // localStorage.setItem('Palaver', JSON.stringify(object))

  const localStorageObject = localObject.companyName
    ? localObject
    : inputObjectTemplate;

  return (
    <div>
      <h2>Local Storage Display</h2>
      <div className="localStorageDisplay">
        {Object.keys(localStorageObject).map((localStorageObjectKey, i) => (
          <LocalStorageTextBox
            key={i}
            localStorageObjectKey={localStorageObjectKey}
            localStorageObject={localStorageObject}
          />
        ))}
      </div>
    </div>
  );
};

export default LocalStorageDisplay;
