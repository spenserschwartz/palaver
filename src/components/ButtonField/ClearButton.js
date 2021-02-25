

const ClearButton = () => {

  const clearLocalStorage =() => {
    localStorage.clear();
  }

  return (
    <div>
      <button onClick={() => clearLocalStorage()}>
        Clear Local Storage
      </button>
    </div>
  )
}

export default ClearButton;