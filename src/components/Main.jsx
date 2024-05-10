import React from 'react'
import {Link} from 'react-router-dom'
function Main() {
  return (
    <>
    
    <Link to="/">
        <div>Products</div>
    </Link>
    
    <Link to="/profile">
        <div>Profile</div>
    </Link>
    
    <Link to="/about">
        <div>About</div>
    </Link>
    
    </>
  )
}

export default Main