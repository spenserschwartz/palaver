import React, {useState} from 'react'
import {displayName} from '../../helpers/functions'
import './styles.css'

const InputRow = ({ row, index }) => {
  const [input, setInput] = useState('');

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