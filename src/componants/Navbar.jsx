import "./Navbar.css";
import {Link} from "react-router-dom"

export const Navbar = () => {

    return <div id="navbar">
        <div id="upperNav">
           <Link id="webLogo" to="/"><h1>myfitnesspal</h1></Link>
           <div id="accDiv">
                <Link id="login" to="/Login">Log in </Link>
                <Link id="signup" to="/Signup/welcome"> Sign up</Link> 
           </div>
        </div>
        <div id="lowerNav">
            <div className="innerCatDiv"><Link className="category" to="/">ABOUT </Link></div>
            <div className="innerCatDiv"><Link className="category" to="/Food">FOOD</Link></div>
            <div className="innerCatDiv"><Link className="category" to="/Exercise">EXERCISE </Link></div>
            <div className="innerCatDiv"><Link className="category" to="/Reports">REPORTS</Link></div>
            <div className="innerCatDiv"><Link className="category" to="/Apps">APPS </Link></div>
            <div className="innerCatDiv"><Link className="category" to="/Community">COMMUNITY</Link></div>
            <div className="innerCatDiv"><Link className="category" to="/Blog">BLOG</Link></div>
            <div className="innerCatDiv"><Link className="category" to="/Premium">PREMIUM</Link></div>
        </div>
    </div>

}