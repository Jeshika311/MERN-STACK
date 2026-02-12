import { useState } from 'react'
import './App.css'
import Cards from './components/Cards'

function App() {
  const [name, setname] = useState()

  return (
    <div>
      <Cards title = "card1" name = {name} setName = {setname}/>
      <Cards title = "card2" name = {name} setName = {setname}/>
      <p>Name State value inside parent : {name}</p>
    </div>
  )
}

export default App
