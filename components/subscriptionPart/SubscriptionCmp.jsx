import "./subscriptionCmp.css"

import { subsArray } from "./subscriptionData"
import { SubscriptionTile } from "./subsTile/SubscriptionTile"

export const SubscriptionCmp = ()=>{
    console.log(subsArray);
    return (
        <div className="subs-div">
            <div className="subs11">
                <div>1-month free</div>
            </div>
            <div className="subs12">
                <h2>Go Premium, Get Results</h2>
            </div>
            <div className="subs13">
                <p>"Choose a MyFitnessPal Premium plan to start your 1-month free trial. You will be charged after the trial has ended—cancel anytime."</p>
            </div>

            <div className="subs-tile-div">
                    {subsArray.map((ele)=>(
                        <SubscriptionTile ele = {ele} key = {ele.id} />
                    ))}
            </div>

        </div>
    )
}