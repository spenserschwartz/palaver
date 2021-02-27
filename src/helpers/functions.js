// Function to auto-copy the text to your clipboard
const copyText = () => {
  let text = document.getElementById("myInput");
  text.select();
  document.execCommand("copy");
  alert("Copied!");
}

// Change the row attribute to a presentable display name e.g. companyName >> Company Name
const displayName = name => {
  let newName = '';
  for (let el of name) {
    if (!newName) newName += el.toUpperCase();
    else if (el === el.toUpperCase()) newName += ' ' + el;
    else newName += el
  }
  return newName;
}

export {copyText, displayName}