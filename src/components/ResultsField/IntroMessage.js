import React, { useState, useEffect } from 'react';
import './styles.css';
import CopyButton from '../../helpers/components/CopyButton';

import { useSelector } from 'react-redux';

const IntroMessage = () => {
  const [message, setMessage] = useState('');
  const [message2, setMessage2] = useState('');
  const [toggle, setToggle] = useState(false);

  const inputObject = useSelector((state) => state.inputObject);

  const template1 = `Hey ${inputObject.personName}! I saw a ${inputObject.jobTitle} position open up with ${inputObject.companyName} and wanted to connect with you. I'd love to have a chat about if I'm a good fit. Cheers, Spenser`;

  const template2 = `Hey ${inputObject.personName}! I saw a ${inputObject.jobTitle} position open up with ${inputObject.companyName} and wanted to connect with you. I'd love to hear about how you think about building user experiences with complex datasets. Do you have 15 minutes to talk this week or next? Cheers, Spenser`;

  useEffect(() => {
    const generateIntroMessage = async () => {
      try {
        const response = await inputObject;
        if (response.personName) {
          setMessage(template1);
          setMessage2(template2);
        }
      } catch (error) {
        console.log({ error });
      }
    };
    generateIntroMessage();
  }, [inputObject, template1, template2]);

  return (
    <div className="introMessageContainer">
      <h2>IntroMessage</h2>

      <CopyButton copyID="introMessage" />
      <textarea
        name="introMessage1"
        className="generatedMessage"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        id="introMessage"
      />

      {toggle ? (
        <div className="introMessageContainer">
          <CopyButton copyID="introMessage2" />
          <textarea
            name="introMessage2"
            className="generatedMessage"
            value={message2}
            onChange={(e) => setMessage2(e.target.value)}
            id="introMessage2"
            rows={1}
          />
        </div>
      ) : (
        <input
          type="button"
          className="button buttonAdd"
          value="+"
          onClick={() => setToggle(true)}
        />
      )}
    </div>
  );
};

export default IntroMessage;
