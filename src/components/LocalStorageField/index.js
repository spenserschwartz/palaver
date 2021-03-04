import '../styles.css';
import { ClearButton, SaveButton, FetchLocalStorageButton } from './buttons';
import LocalStorageDisplay from './LocalStorageDisplay';
import { fetchLocalStorage } from '../../helpers/functions';

const LocalStorageField = ({ inputObject, setInputObject }) => {
  const localObject = JSON.parse(fetchLocalStorage());
  // const object = {coffeeZ: 'cup', chicken: 'eggsf', number: 33}
  // localStorage.setItem('Palaver', JSON.stringify(object));\

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
