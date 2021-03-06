import React, { useState, useEffect } from "react";
import { displayName } from "../../helpers/functions";
import CopyButton from "../../helpers/components/CopyButton";
import "./styles.css";

const LocalStorageTextBox = ({ localObjectKey, localObject }) => {
  const [input, updateInput] = useState("");
  const textBoxID = "localStorageTextBox" + localObjectKey;

  useEffect(() => {
    updateInput(localObject[localObjectKey]);
  }, [localObject, localObjectKey]);

  return (
    <div className="localStorageTextBox">
      <h3>{displayName(localObjectKey)}</h3>
      <textarea
        className="localStorageText"
        value={input}
        onChange={(e) => updateInput(e.target.value)}
        id={textBoxID}
      />
      <CopyButton copyID={textBoxID} />
    </div>
  );
};

export default LocalStorageTextBox;
