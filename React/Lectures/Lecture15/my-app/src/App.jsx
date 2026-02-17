import { useCallback, useState } from 'react'
import './App.css'
import ChildComponent from './components/ChildComponent';
import ExpensiveComponent from './components/ExpensiveComponent';

function App() {
  const [count, setCount] = useState(0)

  // if we wrap it in useCallback then with every re-render its reference does not change bcz function gets freeze

  const handleClick = useCallback(() => {
    setCount(count+1);
  }, [count]);

  return (
    <div>
      <div>
        Count : {count}
      </div>
      <div>
        <button onClick={handleClick}>Increment </button>
      </div>
      <div>
        <ChildComponent buttonName = "Click me" handleClick = {handleClick}/>
      </div>

      <ExpensiveComponent />
    </div>
  )
}

export default App
