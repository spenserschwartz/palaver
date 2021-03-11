// Function to auto-copy the text to your clipboard
const copyText = () => {
  let text = document.getElementById('myInput');
  text.select();
  document.execCommand('copy');
  alert('Copied!');
};

// Change the row attribute to a presentable display name e.g. companyName >> Company Name
const displayName = (name) => {
  let newName = '';
  for (let el of name) {
    if (!newName) newName += el.toUpperCase();
    else if (el === el.toUpperCase()) newName += ' ' + el;
    else newName += el;
  }
  return newName;
};

// Fetch Palaver key from localStorage and return a JSON parsed object (if it exists)
const fetchLocalStorage = () => {
  let data = localStorage.getItem('Palaver');
  return data ? JSON.parse(data) : {};
};

export { copyText, displayName, fetchLocalStorage };
