
const SaveButton = ({ palaverObject, setPalaverObject }) => {

  const savetoLocalStorage = () => {
    
    const testObject = {'two': 2, 'animal' : 'zebra', 'eat' : 'food'};
    

    localStorage.setItem('Palaver', JSON.stringify(testObject));
    setPalaverObject(localStorage.getItem('Palaver'));
    console.table(JSON.parse(localStorage.getItem('Palaver')));
  }

  return (
    <div>
      <button onClick={() => savetoLocalStorage()}>         
        Save to Local Storage
      </button>
    </div>
  )
}

export default SaveButton;