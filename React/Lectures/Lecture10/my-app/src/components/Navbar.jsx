import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
            <NavLink to = '/' className={({isActive}) => isActive ? "Active-link" : ""}>Home</NavLink>
        </li>
        <li>
            <NavLink to='/about' className={({isActive}) => isActive ? "Active-link" : ""}>About</NavLink>
        </li>
        <li>
            <NavLink to='/dashboard' className={({isActive}) => isActive ? "Active-link" : ""}>Dashboard</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
