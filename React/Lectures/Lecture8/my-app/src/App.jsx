import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'

function App() {
  const [count , setCount] = useState(0);
  const [total , setTotal] = useState(1);

  // first :- side effect function. main logic is written in this
  // second :- clean up function. 
  // third :- comma seperated dependency list. some entities are mention. on the bais of this side effects are called

  // variation1 :- runs on every render
  // this runs 2 times bcz in main.jsx file it is in strict mode or development mode
  
  // useEffect(() => {
  //   alert("I will run on each render")
  // })             

  
  // variation2 :- runs on only 1st render
  // this contain empty dependency list
  
  // useEffect(() => {
  //   alert("I will run on only 1st render")
  // }, [])             
  
  
  // variation3 :- does not contain empty dependency list

  // useEffect(() => {
  //   alert("I will run every time when count is updated")
  // }, [count])


  // variation4 :- multiple dependencies

  // useEffect(() => {
  //   alert("I will run every time when count/total is updated")
  // }, [count , total])
  

  // variation5 :- lets add cleanup function

  useEffect(() => {
    alert("Count is updated")

    return () => {
      alert("Count is unmounted from UI")
    }
  }, [count])
  
  

  function handleClick(){
    setCount(count+1);
  }

  function handleClickTotal(){
    setTotal(total+1);    
  }

  return (
    <div>
      <button onClick={handleClick}>
        Update count
      </button>
      <br/> 
      Count is : {count}

      <br/>

      <button onClick={handleClickTotal}>
        Update total
      </button>
      <br/> 
      Total is : {total}
    </div>
  )
}

export default App
