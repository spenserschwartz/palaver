

const ClearButton = () => {

  const clearLocalStorage =() => {
    if (window.confirm("Are you sure?")) localStorage.clear();
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