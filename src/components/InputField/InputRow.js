import React, {useState} from 'react'
import './styles.css'

const InputRow = ({ row, index }) => {
  const [input, setInput] = useState('');

  // Change the row attribute to a presentable display name e.g. companyName >> Company Name
  const displayName = name => {
    let newName = '';
    for (let el of name) {
      if (!newName) newName += el.toUpperCase();
      else if (el === el.toUpperCase()) newName += ' ' + el;
      else newName += el
    }
    return newName;
  }

  const inputProps = {
  }

  inputProps.required = row === 'personalIn' ? false : true;

  return (
    <div className="inputRow">
      <div className="inputLabel">{displayName(row)}</div>
      <textarea className="smallInput"
        value={input} onChange={e => setInput(e.target.value)}
        id={row}
        {...inputProps}
      />
    </div>
  )
}

export default InputRow