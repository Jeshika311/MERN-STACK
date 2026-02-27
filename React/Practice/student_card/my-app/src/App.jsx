import { useState } from 'react'
import './App.css'
import Book from './components/Book'
import harsh from "./assets/boy_pick.jpg";
import om from "./assets/boy2_pick.jpeg";
import riya from "./assets/girl_pick.jpeg";

const students = [
  { name: "Harsh", age: 21 , course: "B.Tech" , image: harsh },
  { name: "Riya", age: 20 , course: "BCA" , image: riya },
  { name: "Om", age: 22 , course: "BA" , image: om }
];

function App() {
  return (
    <div className='App'>
      {students.map((student) => (
        <Book 
        Name = {student.name}
        Age = {student.age}
        Course = {student.course}
        Image = {student.image}
        />
      ))}
    </div>
  )
}

export default App
