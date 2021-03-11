import { inputObjectTemplate } from '../../../helpers';

const SaveButton = () => {
  const savetoLocalStorage = () => {
    // const testObject = {'companyName': 2, 'animal' : 'zebra', 'eat' : 'food'};
    // localStorage.setItem('Palaver', JSON.stringify(testObject));
    // setPalaverObject(localStorage.getItem('Palaver'));
    // console.table(JSON.parse(localStorage.getItem('Palaver')));

    // Save the current text in the textboxes to localStorage
    const newObject = inputObjectTemplate;
    for (let key in newObject) {
      let inputTextID = 'lsTextBox' + key;
      newObject[key] = document.getElementById(inputTextID).value;
      localStorage.setItem('Palaver', JSON.stringify(newObject));
    }
  };

  return (
    <div>
      <button onClick={() => savetoLocalStorage()}>
        Save to Local Storage
      </button>
    </div>
  );
};

export default SaveButton;
