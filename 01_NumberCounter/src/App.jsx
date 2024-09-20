import { useState } from 'react'
import './App.css'

function App() {
   const [counter, setCounter] = useState(0)

   const addValue = () => {
      setCounter(counter + 1)
  }

  const removeValue = () => {
   

    if (counter > 0) {
      setCounter(counter - 1)
    } else {
      setCounter(counter = 0)
    }
  }

  return (
    <>
        <h1>Add or Remove number.</h1>
          <h3>{counter}</h3>

        <button
        onClick={addValue}
        >Add Number</button>
        <br />
        <br />

        <button
        onClick={removeValue}
        >Remove Number</button>

    </>
  )
}

export default App
