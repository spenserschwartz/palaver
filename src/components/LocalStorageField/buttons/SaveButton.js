import { localStorageObjectTemplate } from '../../../helpers';
import '../../../helpers/styles.css';

const SaveButton = () => {
  const savetoLocalStorage = () => {
    // const testObject = {'companyName': 2, 'animal' : 'zebra', 'eat' : 'food'};
    // localStorage.setItem('Palaver', JSON.stringify(testObject));
    // setPalaverObject(localStorage.getItem('Palaver'));
    // console.table(JSON.parse(localStorage.getItem('Palaver')));

    // Save the current text in the textboxes to localStorage
    const newObject = localStorageObjectTemplate;
    for (let key in newObject) {
      let inputTextID = 'localStorageTextBox' + key;
      newObject[key] = document.getElementById(inputTextID).value;
    }
    // Set localStorage after iterating through keys
    localStorage.setItem('Palaver', JSON.stringify(newObject));
  };

  return (
    <div className="saveButtonField">
      <button
        className="button button-green"
        onClick={() => savetoLocalStorage()}
      >
        Save to Local Storage
      </button>
    </div>
  );
};

export default SaveButton;
