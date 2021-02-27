import React from 'react'
import {displayName} from '../../helpers/functions'
import './styles.css'

const LocalStorageTextBox = ({localStorageObjectKey, localStorageObject}) => {

  return (
    <div className="localStorageTextBox">
      <h3>{displayName(localStorageObjectKey)}</h3>
      <textarea 
        className="localStorageText"
        value={localStorageObject[localStorageObjectKey]}
      />
    </div>
  )
}

export default LocalStorageTextBox
