import { Link } from "react-router-dom"
import { Navbar } from "../Navbar"
import "./BodyDetail.css"

export const BodyDetail = () => {

    return <>
    <Navbar/>

<div id="bodyDetail">
            <div className="tallQues">
                <h3 id="ques">How tall are you?</h3>
                <div id="inputForMes">
                    <input className="height" type="text" placeholder="Height (Feet) ft" />
                    <input className="height" type="text" placeholder="Height (inches) in"/>
                </div>
            </div>
            <div className="tallQues">
                <div className="weight">
                    <h3 id="ques">How much do you weigh?</h3>
                    <p id="wtExpln">It's OK to estimate. You can update this later.</p>
                </div>
                <div id="inputForWt">
                    <input className="height" type="text" placeholder="current weight (lbs)" />
                </div>
            </div>
            <div className="tallQues">
                <div className="weight">
                    <h3 id="ques">What's your goal weight?</h3>
                    <p id="wtExpln">Don't worry, you can always change it later.</p>
                </div>
                <div id="inputForWt">
                    <input className="height" type="text" placeholder="Goal weight (lbs)" />
                </div>
            </div>
            <div id="btnDiv">
                <div className="btnDiv1"><Link className="backwardLink" to={"/Signup/welcome"}>BACK</Link></div>
                <div className="btnDiv2"><Link className="forwardLink" to={"/Signup/activity/detail/weeklygoal"}>NEXT</Link></div>
            </div>
    </div>


    </>
}