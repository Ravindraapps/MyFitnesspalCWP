import "./subscriptionTile.css"


export const SubscriptionTile = ({ ele }) => {
    return (

        <div className={ele.offer !== "" ? "sbs-tile-div offer" : "sbs-tile-div"} >
            {/* {ele.offer!== ""? (<div className="offer-div">{ele.offer}</div>):<></>} */}
            <div className="tile-content">

                <h2>{ele.title}</h2>
                <h1><span> &#36; {ele.price}</span> {ele.type === "yearly" ? "Per Year" : "Per Month"}</h1>

                <p>{ele.desc}</p>
                <button className={ele.type === "yearly" ? "sbs-btn yearly-btn " : "sbs-btn monthly-btn"} >SUBSCRIBE</button>
            </div>
        </div>
    )
}