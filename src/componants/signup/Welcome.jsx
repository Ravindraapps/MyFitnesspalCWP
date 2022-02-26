import { Link } from "react-router-dom"
import { Navbar } from "../Navbar"
import "./welcome.css"

export const Welcome = () => {

    return <>
        <Navbar/>
        <div id="welcomeDiv">
            <div id="welcomeMsg"><h2>Welcome! Just a few quick questions so we can customize MyFitnessPal for you.</h2></div>
            <div className="welcomeContBtn"><Link className="Btn" to={"/Signup/weightgoal"}>CONTINUE</Link></div>
        </div>
    </>

}