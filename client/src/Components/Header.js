import React from 'react'
import { NavLink, Route } from "react-router-dom"



function Header({isAuthenticated, setIsAuthenticated}) {

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  function onLogout(){
  setIsAuthenticated (isAuthenticated => !isAuthenticated)
  }
  return (
    <div >
        <img className='headerPic' src = "https://thumbs.dreamstime.com/b/donation-charity-logo-label-hand-holding-heart-icon-vector-symbol-isolated-white-background-97894491.jpg"></img>
        <h1 className='headerText'>Another'sTreasure: Your Donations Really Matter!</h1>
       <div className="header">
        <Route >
        
        <NavLink className="links" exact to="/signup">Sign Up  </NavLink>
        <NavLink className="links" exact to="/login">Login </NavLink>
        <NavLink className="links" exact to='/items'> Items </NavLink>
        <NavLink className="links" exact to="/">Main</NavLink>
        </Route>
        {/* <button onClick={handleLogout}>Logout</button> */}

        </div>
        

    </div>
  )
}

export default Header