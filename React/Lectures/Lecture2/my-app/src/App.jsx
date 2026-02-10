import { useState } from 'react';
import UserCard from './components/UserCard';
import "./App.css"
import jeshika from './assets/jeshika.jpg'
import juhi from './assets/juhi.jpg'
import janvi from './assets/janvi.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <UserCard name = "Juhi" desc = "Description of Juhi" image ={juhi} style = {{"border-radius" : "10px"}}/>          {/* in html if we write name like this then we day it attribute but in JSX it is called as prop */}
      <UserCard name = "Janvi" desc = "Description of Janvi" image ={janvi} style = {{"border-radius" : "10px"}}/>
      <UserCard name = "Jasmeen" desc = "Description of Jasmeen" image ={jeshika} style = {{"border-radius" : "10px"}}/>
    </div>
  )
}

export default App
