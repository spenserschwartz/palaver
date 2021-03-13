import React from 'react';

const CopyButton = ({ copyID }) => {
  const copyText = () => {
    let text = document.getElementById(copyID);
    text.select();
    document.execCommand('copy');
  };

  return (
    <div>
      <button className="button" onClick={() => copyText()}>
        Copy Me
      </button>
    </div>
  );
};

export default CopyButton;
