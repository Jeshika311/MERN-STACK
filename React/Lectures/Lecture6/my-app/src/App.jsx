import { useState } from 'react'
import './App.css'
import { use } from 'react'
import LogoutBtn from './components/LogoutBtn';
import LoginBtn from './components/LoginBtn';

function App() {
  const[isLoggedin , setLoggedIn] = useState(true);
  
  // with the help of if else 

  // if(isLoggedin){
  //   return (
  //     <LogoutBtn />
  //   )
  // }
  // else{
  //   return(
  //     <LoginBtn />
  //   )
  // }


  // with the help of ternary operator

  // return(
  //   <div>
  //     {isLoggedin ? <LogoutBtn /> : <LoginBtn />}
  //   </div>
  // )


  // with the help of logical operator

  // return (
  //   <div>
  //     <h1>Welcome everyone</h1>
  //     <div>
  //       {isLoggedin && <LogoutBtn />}
  //     </div>
  //   </div>
  // )


  // using early return

  if(!isLoggedin){
    return (
      <LoginBtn />
    )
  }
  return (
    <div>
      <h1>Welcome everyone</h1>
      <div>
        {isLoggedin && <LogoutBtn />}
      </div>
    </div>
  )
}

export default App
