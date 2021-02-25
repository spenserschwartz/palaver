import '../styles.css'
import ClearButton from './ClearButton';
import SaveButton from './SaveButton';

const ButtonField = ({palaverObject, setPalaverObject}) => {

  const changeStuff = () => {
    console.table(JSON.parse(palaverObject));
  }

  return (
    <div className="buttonField">
      <h1>Button Field</h1>
      <SaveButton 
        palaverObject={palaverObject} setPalaverObject={setPalaverObject}
      />
      <ClearButton />
      <button onClick={() => changeStuff()}>Change Stuff</button>
    </div>
  )
}

export default ButtonField;