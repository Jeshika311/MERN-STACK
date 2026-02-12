import { useState } from 'react'
import Card from './components/Card'
import './App.css'
import Button from './components/Button'

function App() {
  const [count , setCount] = useState(0);

  function handleClick(){
    setCount(count+1);
  }

  return (
    <div>

      <Button incrementCount = {handleClick}
        text = "Click Me">
        <h1>{count}</h1>    
      </Button>

      <Card name = "Jeshika">
        <h1>Best Web Dev course</h1>
        <p>Trying to be consistent in this</p>
        <p>Will complete the course soon</p>
      </Card>

      <Card children = "Hey, i completed this course" />
    </div>
  )
}

export default App
