import { Link } from "react-router-dom"
import { Navbar } from "../Navbar"
import "./weeklyGoal.css"


export const WeeklyGoal = () => {

    return <>
    <Navbar/>

<div id="weeklyGoal">
        <div id="weeklyQuesDiv">
            <h3 className="weeklyGoalques">What is your weekly goal?</h3>
            <p className="weeklyGoalPara">Let's break down your overall health goal into a weekly one you can maintain. Slow-and-steady is best!</p>
        </div>
        <div className="OptionWeklyDiv">
            <div className="optionsAnsDiv1">
                <label className="weightsel_type_label" for="radio2">
                    <input className="weightsel_type_input"type="radio"value="2"name="radio"id="radio2"/>
                Lose 0.25 kilograms per week.
                </label>
            </div>
            <div className="optionsAnsDiv">
                <label className="weightsel_type_label" for="radio2">
                    <input className="weightsel_type_input"type="radio"value="2"name="radio"id="radio2"/>
                    Lose 0.5 kilograms per week (Recommeneded).
                </label>
            </div >
            <div className="optionsAnsDiv">
                <label className="weightsel_type_label" for="radio2">
                    <input className="weightsel_type_input"type="radio"value="2"name="radio"id="radio2"/>
                    Lose 0.75 kilograms per week.
                </label>
            </div>
            <div className="optionsAnsDiv">
                <label className="weightsel_type_label" for="radio2">
                    <input className="weightsel_type_input"type="radio"value="2"name="radio"id="radio2"/>
                Lose 1 kilograms per week.
                </label>
            </div>
        </div>
        <div id="btnDiv">
            <div className="btnDiv1"><Link className="backwardLink" to={"/Signup/activity"}>BACK</Link></div>
            <div className="btnDiv2"><Link className="forwardLink" to={"/Signup/activity/detail/weeklygoal/createaccount"}>NEXT</Link></div>
        </div>
    </div>


    </>
}