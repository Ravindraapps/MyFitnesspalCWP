import { TrialButton } from "../trial_button/TrialButton"
import "./premiumCmp1.css"

export const PremiumCmp1 = () => {

    return (
        <>
            <div className="cmp1div">
                <div className="cmp1_upper_content">

                    <div className="cmp1_left_div">
                        <div>
                            <div>Premium</div>
                        </div>
                        <h1>Start Your Free Trial Today</h1>
                        <p>Premium members are 65% more likely to reach their weight loss goal.</p>
                        <TrialButton />
                    </div>
                    <div className="cmp1_right_div">
                        <img src={require("../../assets/images/cpm1.png")} alt="" />
                    </div>
                </div>
                <div className="cmp1_lower_content">
                    <div className="cmp1_show_case">
                        <div className="showcase_img">
                            <img className="sci-img" src={require("../../assets/images/sc-img1.png")} alt="" />
                            <div className="mobile-screen-img">
                                <img src={require("../../assets/images/crown.png")} alt="" />
                            </div>
                            <div>

                                <h3>Meal Plans & Recipes</h3>
                                <p>Gain insight into your nutrition</p>
                            </div>

                        </div>
                    </div>
                    <div className="cmp1_show_case">
                        <div className="showcase_img">
                            <img className="sci-img" src={require("../../assets/images/sc-img2.png")} alt="" />
                            <div className="mobile-screen-img">
                                <img src={require("../../assets/images/crown.png")} alt="" />
                            </div>
                            <div>

                                <h3>Personalized Goals</h3>
                                <p>Get guidance & coaching tailored to you</p>
                            </div>

                        </div>
                    </div>
                    <div className="cmp1_show_case">
                        <div className="showcase_img">

                            <img className="sci-img" src={require("../../assets/images/sc-img3.png")} alt="" />

                            <div className="mobile-screen-img">

                                <img src={require("../../assets/images/crown.png")} alt="" />
                                </div>
                                <div>

                                <h3>Ad-Free Experience</h3>
                                <p>Focus on your goals without distraction</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}