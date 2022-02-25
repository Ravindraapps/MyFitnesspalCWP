import { useState } from "react"
import { Link } from "react-router-dom"
import "./activitylevel.css";
import axios from "axios"
import { Navbar } from "../Navbar";


export const Activity = () => {

    const [activity,setActivity] = useState("")

    return <>
    <Navbar/>
    
    <div id="baselineActivity">
        <div id="question">
            <h2>What is your baseline activity level?</h2>
            <p>Not including workouts-we count that seperately.</p>
        </div>
        <div id="optionsActivity">
            <div className="firstOption">
                <label className="activityLabel" for="firstOption1">Not Very Active</label>
                <input onChange={(e)=> setActivity(e.target.value)} className="activityInp" id="firstOption1" value="Not Very Active" type="radio" />
                <p className="pTag">Spend most of the day siting (e.g.,bankteller,desk job)</p>
            </div>
            <div className="firstOption" >
                <label className="activityLabel" for="firstOption2">Lightly Active</label>
                <input onChange={(e)=> setActivity(e.target.value)} className="activityInp" id="firstOption2" value="Lightly Active" type="radio" />
                <p className="pTag">Spend a good part of the day on your feet (e.g.,teacher,salesperson)</p>
            </div>
            <div  className="firstOption">
                <label className="activityLabel" for="firstOption3"> Active</label>
                <input onChange={(e)=> setActivity(e.target.value)} className="activityInp" id="firstOption3" value="Active" type="radio" />
                <p className="pTag">Spend a good part of the day doing some physical activity (e.g.,food server,postal carrier)</p>
            </div>
            <div  className="firstOption">
                <label className="activityLabel" for="firstOption4"> Very Active</label>
                <input onChange={(e)=> setActivity(e.target.value)} className="activityInp" id="firstOption4" value="Very Active" type="radio" />
                <p className="pTag">Spend a good part of the day doing some physical activity (e.g.,carpenter,bike messsenger)</p>
            </div>
            <div id="btnDiv">
                <div className="btnDiv1"><Link className="backwardLink" to={"/Signup/welcome"}>BACK</Link></div>
                <div onClick={()=> {
                    let data = {
                        level:activity
                    }
                    axios.post("http://localhost:3000/baselineActivityLevel",data)
                }} className="btnDiv2"><Link className="forwardLink" to={"/Signup/activity/detail"}>NEXT</Link></div>
            </div>
        </div>
    </div>

    </>
}