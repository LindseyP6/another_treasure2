import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
// {setUser, setIsAuthenticated}
function Signup() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [telephone, setTelephone] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])

    let history = useHistory();

    function handleSubmit(e){
        e.preventDefault()
        const newUser = {
            name, 
            email, 
            telephone, 
            password
        }
    
        console.log(newUser);

        fetch (`/users`, {
            method: "POST", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            if(json.errors) setErrors(Object.entries(json.errors))
            
        })
        history.push("/");
        // setName("")
        // setEmail("")
        // setTelephone("")
        // setPassword("")
    }

    return (
        <>
            <div className='signUp'>
                <h3 >Signup and Start Donating!</h3>
            <form onSubmit={handleSubmit} >
            <label>Name
            <br></br>

                <input
                    type="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <br></br>

            <label>Email
            <br></br>

                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br></br>

            <label>Telephone
            <br></br>

                <input
                    type="name"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)} />
            </label>
            <br></br>

            <label>Password
            <br></br>

                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <br></br>

            <button 
                type="submit"
                value="Join!"
                className="submit"> 
                <strong>Enter!</strong>
            </button>
            </form>
            </div>
            {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}

        </>
    )
}

export default Signup