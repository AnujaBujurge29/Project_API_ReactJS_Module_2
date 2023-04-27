import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <div>
      {/* <p>This is Nav Page</p> */}
      <div className='nav'>
        <Link to='/Home'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/Search'>Search</Link>
      </div>
    </div>
  )
}
