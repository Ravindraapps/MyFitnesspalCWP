import { useState } from "react"
import { Link } from "react-router-dom"
import "./weightgoal.css";
import axios from "axios"
import { Navbar } from "../Navbar";

export const Weightgoal = () => {
    const [goal,setGoal] = useState("");

    return <>
    <Navbar/>
    
    <div id="weightGoal">
        <div><h3 className="firstQues">What is your weight goal?</h3></div>
        <div id="options">
            <div className="weightGoalChoose">
                <input className="inputBox" 

                    type="radio"
                    name="radio"
                    id="radio1"
                    value="Lose Weight"
                    required
                    onChange={(e)=>setGoal(e.target.value)}
                />

                <label className="weightGoalLable" for="radio1">Lose Weight</label>
            </div>
            <div className="weightGoalChoose">
                <input className="inputBox" 

                    type="radio"
                    name="radio"
                    id="radio2"
                    value="Maintain Weight"
                    required
                    onChange={(e)=>setGoal(e.target.value)}
                />

                <label className="weightGoalLable" for="radio2">Maintain Weight</label>
            </div>
            <div className="weightGoalChoose">
                <input className="inputBox" 

                    type="radio"
                    name="radio"
                    id="radio3"
                    required
                    value="Gain Weight"
                    onChange={(e)=>setGoal(e.target.value)}
                />

                <label className="weightGoalLable" for="radio3">Gain Weight</label>
            </div>
        </div>
        <div id="btnDiv">
            <div className="btnDiv1"><Link className="backwardLink" to={"/Signup/welcome"}>BACK</Link></div>
            <div className="btnDiv2"><Link className="forwardLink" to={"/Signup/activity"} onClick={()=> {
                let data = {
                    Goal:goal
                }
                axios.post(" http://localhost:3000/goal",data)
            }}>NEXT</Link></div>
        </div>
        
    </div>

    </>
}