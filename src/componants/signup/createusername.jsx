import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Navbar } from "../Navbar"
import "./createusername.css"

export const CreateUsername = () => {
    const [userName,setUsername] = useState("")

    return <>
    <Navbar/>

<div id="username">
        <div>
            <h2>Create a username.</h2>
            <input onChange={(e)=> setUsername(e.target.value)} className="usernameInp" type="text" placeholder="create username" />
        </div>
        <div id="btnDiv">
            <div className="btnDiv1"><Link className="backwardLink" to={"/Signup/welcome"}>BACK</Link></div>
            <button onClick={()=> {
                let data = {
                    username: userName
                }
                console.log(data)
                axios.post("http://localhost:3000/username",data)
            }} className="btnDiv2"><Link className="forwardLink" to={"/Login"}>FINISH</Link></button>
        </div>
    </div>
    </>

}