import { Link } from "react-router-dom"
import "./Login.css"
import { Navbar } from "./Navbar"


export const Login = () => {

    return <>
    <Navbar/>

<div id="Login">
        <div>
            <h2>Member Login</h2>
            <input className="emailLogin" type="text" placeholder="enter your email" />
            <br />
            <input className="passLogin" type="password" placeholder="enter your password" />
        </div>
        <div className="forgetPass">
            <Link className="forgetPassLink" to="">Forget password?</Link>
        </div>
        <div id="btnDiv">
        <div className="ContinueCreateAcc1"><Link className="backwardLink" id="continueAcc" to={"/"}>CONTINUE</Link></div>
        </div>
        <p>Or</p>
        <div>
        <div className="ContinueWithFacebook1"><Link className="backwardLink" id="continueAcc1" to={"/"}>CONTINUE WITH FACEBOOK</Link></div>
        </div>
    </div>
    </>

}