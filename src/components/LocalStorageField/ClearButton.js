

const ClearButton = () => {

  const clearLocalStorage =() => {
    if (window.confirm("Are you sure you want to clear Local Storage?")) localStorage.clear();
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