import React, {useState, useEffect} from 'react'
import './styles.css'

import {introMessageTemplate1} from '../../helpers';
import {copyText} from '../../helpers/functions';

const IntroMessage = ({ inputObject }) => {
  const [message, setMessage] = useState('');
  const [message2, setMessage2] = useState('');
  const [toggle, setToggle] = useState(false);

  const template1 = `Hey ${inputObject.personName}! I saw a ${inputObject.jobTitle} position open up with ${inputObject.companyName} and wanted to connect with you. I'd love to have a chat about if I'm a good fit. Cheers, Spenser`

  const template2 = `Hey ${inputObject.personName}! I saw a ${inputObject.jobTitle} position open up with ${inputObject.companyName} and wanted to connect with you. I'd love to hear about how you think about building user experiences with complex datasets. Do you have 15 minutes to talk this week or next? Cheers, Spenser
  aasdfasdfadf`


  useEffect(() => {
    const generateIntroMessage = async() => {
      try {
        const response = await inputObject;
        //console.log('This is response: ', response);
        if (inputObject.personName) {
          setMessage(template1);
          setMessage2(template2);
}
        
      } catch (error) {
        console.log({error})
      }
    }
    generateIntroMessage();
  }, [inputObject, template1, template2])


  return (
    <div className="introMessageContainer">
      <h2>IntroMessage</h2>
      
      <textarea name="introMessage1"
        className="generatedMessage" 
        value={message} 
        onChange={e => setMessage(e.target.value)}
        id="myInput"
        onClick={() => copyText()}
      />

      {toggle ? <textarea name="introMessage2"
                  className="generatedMessage" 
                  value={message2} 
                  onChange={e => setMessage2(e.target.value)}
                  id="myInput"
                  rows={1}
                />
              : <input type="button" className="button buttonAdd"
                  value="+"
                  onClick={() => setToggle(true)}
                />
              }
      
    </div>
  )
}

export default IntroMessage
