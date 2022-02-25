import { useMemo, useState } from "react"
import countryList from "react-select-country-list";
import "./detail.css";
import Select from "react-select";
import { Link } from "react-router-dom";
import axios from "axios";
import { Navbar } from "../Navbar";

export const Detail = () => {
    const options = useMemo(() => countryList().getData(),[]);
    const [value,setValue] = useState("");
    const [gender,setGender] = useState("");
    const [dob,setDob] = useState("");
    const [country,setCountry] = useState("");
    const [zip,setZip] = useState(null);

    return <>
    <Navbar/>

<div id="details">
        <div id="firstDiv">
            <h3>Please select which sex we should use to calculate your calorie needs.</h3>
            <div id="sexDiv">
                <label>
                    <input onChange={(e) => setGender(e.target.value)} type="radio" name="radio" value="male"/>Male
                </label>
                <label>
                <input onChange={(e) => setGender(e.target.value)} type="radio" name="radio" value="female"/>Female
                </label>
            </div>
            <div id="bornDiv">
                <h3>When were you born?</h3>
                <input onChange={(e) => setDob(e.target.value)} className="date" type="date" />
            </div>
            <div id="country">
                <div className="detail">
                    <h3>Where do you live?</h3>
                    <Select
                        className="textbox"
                        options={options}
                        value={value}

                        placeholder="country"
                        size="lg"
                        onChange={(e) => setCountry(e.target.value)}
                    />
                </div>
                <div className="detail">
                    <input
                        className=" pin1"
                        type="number"
                        placeholder="Zipcode "
                        required
                        onChange={(e) => setZip(e.target.value)}
                    />
                </div>
            </div>
            <div id="btnNext">
                <p>We use this information to calculate an accurate calorie goal for you.</p>
                <div id="btnDiv">
                    <div className="btnDiv1"><Link className="backwardLink" to={"/Signup/activity"}>BACK</Link></div>
                    <div onClick={()=> {
                        let data = {
                            gender:gender,
                            DOB:dob,
                            country: country,
                            zip: zip
                        }
                        axios.post(" http://localhost:3000/details", data)
                    }} className="btnDiv2"><Link className="forwardLink" to={"/Signup/activity/detail/checkout"}>NEXT</Link></div>
                </div>
            </div>
        </div>
    </div>

    </>

}