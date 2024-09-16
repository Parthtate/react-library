import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [value, setCounter] = useState(10);

  const addvalue = () => {
    if (value == 20) {
      setCounter(value = 20)
    } else {
      setCounter(value++)
    }
  }

  const removeValue = () => {
    if (value > 0) {
      setCounter(value - 1)
    } else {
      setCounter(value = 0)
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h3>Counter value: {value}</h3>

      <button
      onClick={addvalue}
      >Add value</button>
    <br />
      <button
      onClick={removeValue}
      >Remove value: {value}</button>
      <p>value {value}</p>
    </>
  )
}

export default App
