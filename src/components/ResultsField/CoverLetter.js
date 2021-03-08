import React, { useState, useEffect } from 'react';

const CoverLetter = ({ inputObject }) => {
  const [message, setMessage] = useState('');

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

  const copyText = () => {
    let text = document.getElementById('myInput');
    text.select();
    document.execCommand('copy');
    alert('Copied!');
  };

  return (
    <div>
      <h2>Cover Letter</h2>

      <textarea
        rows="20"
        className="generatedMessage"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        id="myInput"
        onDoubleClick={() => copyText()}
      />
    </div>
  );
};

export default CoverLetter;
