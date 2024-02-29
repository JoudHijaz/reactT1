import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let name="Joud Hijaz";
  let age =21;
  return (
    <div>
      <h2>Hello {name}</h2>
      <h2>Your age is {age}</h2>
    </div>
  )
}

export default App
