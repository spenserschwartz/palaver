import React from 'react';
import '../styles.css';

import IntroMessage from './IntroMessage';
import CoverLetter from './CoverLetter';

const ResultsField = () => {
  return (
    <div className="resultsField">
      <h1>Results Field</h1>

      <IntroMessage />

      <CoverLetter />
    </div>
  );
};

export default ResultsField;
