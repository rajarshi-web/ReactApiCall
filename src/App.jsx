import { useState } from 'react'
import { Jokes } from './component/jokes/Jokes'
import './App.css'

function App() {
  return (
    <div className="App">
      <Jokes/>
    <p>Every page reload a new jokes will apear</p>
    </div>
  )
}

export default App
