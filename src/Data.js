const fetchLocalStorage = () => {
   let data = localStorage.getItem('Palaver');
  return data ? data : {};
}


export default fetchLocalStorage; 