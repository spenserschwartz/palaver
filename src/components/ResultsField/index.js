import React from 'react'
import '../styles.css'

import IntroMessage from './IntroMessage';
import CoverLetter from './CoverLetter';

const ResultsField = ({inputObject, setInputObject}) => {
  return (
    <div className="resultsField">
      <h1>Results Field</h1>

      <IntroMessage inputObject={inputObject} />

      <CoverLetter inputObject={inputObject} setInputObject={setInputObject} />
    </div>
  )
}

export default ResultsField
