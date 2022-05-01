import React, {useState } from "react";
import Signup from './Signup'
import { useHistory } from "react-router-dom";

function Login({setUser, setIsAuthenticated}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showForm, setShowForm] = useState(false);

  const [error, setError] = useState([])
  let history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      email,
      password
    }
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user }),
    })        
    .then(res =>  res.json())
    .then((user) => {
    setUser(user);
    // setIsAuthenticated(true);
    })
   
    history.push("/");
    }

function toggleSignup() {
  setShowForm((showForm) => !showForm);
}

  return (
    <>
    <div className="loginForm">
      <form onSubmit={handleSubmit} >
        <h3>Welcome Back! </h3>
       <p> Login Here</p>
      <label> Email:
      <br></br>
        <input 
          className= "loginBox"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br></br>
      <label> Password:
      <br></br>
        <input
          className= "loginBox"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br></br>
      <input className="submit" type="submit" value="Login!" />
      </form>
      {error?<div>{error}</div>:null}
      <p>New user?</p>
      <button className="submit" onClick={toggleSignup}>Sign Up</button>
      {showForm ? <Signup/> : null}
        </div> 
    </>
  );
    }

export default Login;
