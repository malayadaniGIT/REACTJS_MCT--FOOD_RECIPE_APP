import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "../Css/Nav.css"
function Nav() {
  const navigate=useNavigate()
  return (
    <div className='navcontainer'>
      <div className='logodiv'>
        <img onClick={()=>navigate("")} src="https://food2forks.netlify.app/static/media/logo.cc3fff7e.svg" alt="logo" />
      </div>
      <div className='navlinkdiv'>
        <NavLink className="navlink"  to="">Home</NavLink>
        <NavLink className="navlink" to="/Recipes">Recipes</NavLink>
      </div>
    </div>
  )
}

export default Nav
