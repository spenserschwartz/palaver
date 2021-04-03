import React, { useState, useEffect } from 'react';
import CopyButton from '../../helpers/components/CopyButton';

import { useSelector } from 'react-redux';

const CoverLetter = () => {
  const inputObject = useSelector((state) => state.inputObject);

  const [message, setMessage] = useState('');
  const textBoxID = 'coverLetterTextBox';

  const template =
    `Hi ${inputObject.companyName} - your ${inputObject.jobTitle} role caught my eye.\n\n` +
    (inputObject.personalIn ? inputObject.personalIn + '\n\n' : '') +
    'My work is in Javascript (React/Node, but I’m framework agnostic). More broadly, I like diving deep into understanding how different frameworks shape a user’s experience and I recently gave a talk on Optimization for Web Frameworks: Next.js and Gatsby to explore the possibilities of using different frameworks for different applications.' +
    '\n\nI’d love to talk more about your current approach for state management and scalability. I am free next Tuesday or Thursday afternoon or let me know a time that works best for you.' +
    '\n\nCheers, \nSpenser Schwartz';

  useEffect(() => {
    const generateCoverLetter = async () => {
      try {
        const response = await inputObject;
        if (response.personName) setMessage(template);
      } catch (error) {
        console.log(error);
      }
    };
    generateCoverLetter();
  }, [inputObject, template]);

  return (
    <div>
      <h2>Cover Letter</h2>
      <CopyButton copyID={textBoxID} />
      <textarea
        rows="20"
        className="generatedMessage"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        id={textBoxID}
      />
    </div>
  );
};

export default CoverLetter;
