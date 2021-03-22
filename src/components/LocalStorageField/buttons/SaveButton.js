import { localStorageObjectTemplate } from '../../../helpers';

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
    localStorage.setItem('Palaver', JSON.stringify(newObject));
  };

  return (
    <div>
      <button className="button" onClick={() => savetoLocalStorage()}>
        Save to Local Storage
      </button>
    </div>
  );
};

export default SaveButton;
