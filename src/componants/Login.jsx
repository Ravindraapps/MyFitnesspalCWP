import { Link } from "react-router-dom"
import "./Login.css"
import { Navbar } from "./Navbar"
import {useState} from "react"
import axios from "axios"

export const Login = () => {
    const [email,setEmail] = useState("")


    return <>
    <Navbar/>

<div id="Login">
        <div>
            <h2>Member Login</h2>
            <input onChange={(e)=>setEmail(e.target.value)} className="emailLogin" type="text" placeholder="enter your email" />
            <br />
            <input className="passLogin" type="password" placeholder="enter your password" />
        </div>
        <div className="forgetPass">
            <Link className="forgetPassLink" to="">Forget password?</Link>
        </div>
        <div id="btnDiv">
        <div className="ContinueCreateAcc1"><Link onClick={()=>{
            let data = {
                email:email
            }
            axios.post("http://localhost:3000/emails",data)
        }} className="backwardLink" id="continueAcc" to={"/home"}>CONTINUE</Link></div>
        </div>
        <p>Or</p>
        <div>
        <div className="ContinueWithFacebook1"><Link className="backwardLink" id="continueAcc1" to={"/home"}>CONTINUE WITH FACEBOOK</Link></div>
        </div>
    </div>
    </>

}