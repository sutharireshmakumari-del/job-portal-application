import React from 'react'
import { Link} from 'react-router-dom'

const Navbar = () => {
  return (
  <nav>
     <Link to="/">Home</Link>
     <Link to="/about">About</Link>
     <Link to="/contact">Contact</Link>
     <Link to="/student1/1/reshma/reshma@gmail.com">Reshma</Link>
      <Link to="/student2/2/esha/esha@gmail.com">esha</Link>
      <Link to="/login">Login</Link>

      <Link to="/dashboradd">Dashboard</Link>


     
  </nav>
  )
}

export default Navbar