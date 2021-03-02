import '../styles.css'
import ClearButton from './ClearButton';
import SaveButton from './SaveButton';
import LocalStorageDisplay from './LocalStorageDisplay';
import {fetchLocalStorage} from '../../helpers/functions'

const LocalStorageField = ({inputObject, setInputObject}) => {
  const localObject = JSON.parse(fetchLocalStorage());
  // const object = {coffeeZ: 'cup', chicken: 'eggsf', number: 33}
  // localStorage.setItem('Palaver', JSON.stringify(object));\

  const fetchLocalStorage2 = () => {
    //console.table(JSON.parse(palaverObject));
  }


  return (
    <div className="buttonField">
      <h1>Local Storage Field</h1>
      <SaveButton 
      />
      <ClearButton />
      <button onClick={() => fetchLocalStorage2()}>Fetch Local Storage</button>

      <LocalStorageDisplay  localObject={localObject} />
    </div>
  )

}

export default LocalStorageField;