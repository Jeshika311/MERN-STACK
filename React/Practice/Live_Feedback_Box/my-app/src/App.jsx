import { useState } from 'react'
import './App.css'
import Opinion from './components/Opinion'

function App() {
  const [text, settext] = useState()

  return (
    <div className='container'>
      <Opinion Text = {text} setText = {settext}/>
    </div>
  )
}

export default App
