import React from "react";
import {
  inputObjectTemplate,
  localStorageObjectTemplate,
} from "../../../helpers";

const ClearButton = () => {
  const clearLocalStorage = () => {
    if (window.confirm("Are you sure you want to clear Local Storage?")) {
      if (window.confirm("Are you absolutely sure?")) {
        localStorage.setItem("Palaver", JSON.stringify(inputObjectTemplate));

        // Clear current textbox values
        for (let key in localStorageObjectTemplate) {
          let inputTextID = "localStorageTextBox" + key;
          document.getElementById(inputTextID).value = "";
        }
      }
    }
  };

  return (
    <div>
      <button className="button" onClick={() => clearLocalStorage()}>
        Clear Local Storage
      </button>
    </div>
  );
};

export default ClearButton;
