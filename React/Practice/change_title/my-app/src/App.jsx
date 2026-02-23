import { useState , useEffect } from 'react'
import './App.css'

function App() {
  const [title, settitle] = useState("")

  useEffect(() => {
    document.title = title || "Default Title";
  }, [title]);

  return (
    <div>
      <h1>Title changer</h1>
      <input
      type='text'
      placeholder='Enter title here....'
      value={title}
      onChange={(e) => settitle(e.target.value)}
      />    
    </div>
  )
}

export default App
