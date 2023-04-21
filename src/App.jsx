import { useState } from 'react'
import PostsList from './PostsList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App"> 
    <h1 className='titulo'> Parcial 2</h1>
    <h3 className='picha'>Juan Fernando Aldana-2201173</h3>
    <PostsList/>
  </div>
  )
}

export default App