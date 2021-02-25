const copyText = () => {
  let text = document.getElementById("myInput");
  text.select();
  document.execCommand("copy");
  alert("Copied!");
}

export {copyText}