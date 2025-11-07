import { useState } from 'react'
import { useStore } from './store/useStore'
import { DisplayUsername } from './components/DisplayUsername'
import './App.css'

function App() {
  const setUsername = useStore((state) => state.setUsername)
  const [value, setInputValue] = useState('')
  const handleSubmit  = ( p) => {
    p.preventDefault()
    setUsername(value)
    setInputValue('')
  }

  return (
    <div className="App">
      <h1>Username</h1>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter username"
        />
        <button type="submit">OK</button>
      </form>

      <DisplayUsername />
    </div>
  )
}

export default App
