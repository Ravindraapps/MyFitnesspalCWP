import "./InNavbar.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios";

export const InNavbar = () => {
    const [username,setUsername] = useState([{username: "User"}]);

    useEffect(()=>{
        axios.get("http://localhost:3000/username")
        .then((d)=>{
            setUsername(d.data)
        })
    },[])
    
    return <div>
         <div id="upperNav">
           <Link id="webLogo" to="/"><h1>myfitnesspal</h1></Link>
           <div id="detailDiv">
                <div id="userNameHiDiv">
                    <p className="usernameHome">Hi, <span className="usernameOnHome">{username[username.length-1].username}</span></p>
                </div>
                <div className="verticalBorder">
                    
                </div>
                <div id="userNameHiDiv">
                    <p className="usernameHome"><span className="help">Help</span></p>
                </div>
                <div className="verticalBorder">
                    
                </div>
                <div id="userNameHiDiv">
                    <p className="usernameHome"><span className="help">Setting</span></p>
                </div>
                <div className="verticalBorder">
                    
                </div>
                <div id="userNameHiDiv">
                    <p className="usernameHome"><span className="help">Logout</span></p>
                </div>
                <div className="verticalBorder">
                    
                </div>
           </div>
        </div>
        <div id="lowerNav">
            <div className="innerCatDiv"><Link className="category" to="/">HOME </Link></div>
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