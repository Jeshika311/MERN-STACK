import { useState , useMemo, useCallback, useEffect, useRef } from 'react'

const ExpensiveComponent = () => {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")
  const previousFunction = useRef(null);

  const expensiveCalculation = useCallback(() => {
    console.log("Running expensive calculation...");
    let result = 0;
    for(let i=0; i<=1000000000; i++) {
        result+=i
    }
    return result;
  },[count])       // only when count update the function becomes re create and new reference created

  useEffect(() => {
    if(previousFunction.current){
        if(previousFunction.current === expensiveCalculation){
            console.log("Function not re created")
        }
        else{
            console.log("Function got re created")
        }
    }
  }, [expensiveCalculation])

  return (
    <div>
      <input
      type='text'
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder='Type something'
      />
      <p>Expensive Calculation result : {expensiveCalculation()}</p>
      <button onClick={() => setCount(count+1)}>Increment Count</button>
    </div>
  )
} 

export default ExpensiveComponent
