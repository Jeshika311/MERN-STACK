import { useState } from 'react'
import './App.css'
import Count from './components/Count'

function App() {
  const [count, setCount] = useState(0)

  const increase = () => setCount((c) => c + 1);
  const decrease = () => setCount((c) => (c > 0 ? c - 1 : 0));

  return (
    <Count 
      Increase = {increase}
      Decrease = {decrease}
      Count = {count}
    />
  )
}

export default App
