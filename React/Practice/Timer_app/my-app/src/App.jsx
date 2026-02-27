import { useState , useEffect} from 'react'
import './App.css'

function App() {
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
  let timer;
  if (isRunning) {
    timer = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);
  }
  return () => clearInterval(timer);
  }, [isRunning]);

  function StartTimer(){
    return (
      setIsRunning(true)
    )
  }

  function StopTimer(){
    return (
      setIsRunning(false)
    )
  }

  function ResetTimer() {
    setSeconds(0);
    setIsRunning(false);
  }

  return (
    <div className='container'>
      <h2>{seconds} seconds</h2>
      <button onClick={StartTimer}>Start</button>
      <button onClick={StopTimer}>Stop</button>
      <button onClick={ResetTimer}>Reset</button>
    </div>
  )
}

export default App
