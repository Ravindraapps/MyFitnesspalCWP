import { Link } from "react-router-dom"
import { Navbar } from "../Navbar"
import "./createaccount.css"

export const CreateAccount = () => {

    return <>
    <Navbar/>
<div id="createAccountDiv">
        <div>
            <h2>Almost there! Create your account.</h2>
            <input className="emailInp" type="email" placeholder="Email address" />
            <br />
            <input className="passInp" type="password" placeholder="Create password" />
            <p className="passSpecification">Must be at least 10 characters, no spaces.</p>
        </div>
        <div>
            <p className="policy">By signing up for MyFitnessPal, you are agreeing to our <span><a className="privacyPol" href="">Privacy Policy</a></span> and <span><a className="privacyPol" href="">Terms</a></span>.</p>
            <div className="ContinueCreateAcc"><Link className="backwardLink" id="continueAcc" to={"/Signup/createusername"}>CONTINUE</Link></div>
        </div>
        <p>Or</p>
        <div>
            <div className="ContinueWithFacebook"><Link className="backwardLink" id="continueAcc" to={"/Signup/createusername"}>CONTINUE WITH FACEBOOK</Link></div>
            <p>We will never post anything without your permission</p>
            <p>This site is protected by reCAPTCHA and the Google <span><a className="privacyPol" href="">Privacy Policy</a></span> and <span><a className="privacyPol" href="">Terms</a></span> apply.</p>
        </div>
    </div>
    </>

}