import { PremiumCmp1 } from "../premiumCmp_1/PremiumCmp1"
import { PremiumCmp2 } from "../premiumCmp_2/PremiumCmp2"
import { PremiumQNA } from "../premium_qna/PremiumQna"
import { StorySlider } from "../storySlider/StorySlider"
import { SubscriptionCmp } from "../subscriptionPart/SubscriptionCmp"
import { Navbar } from "../../componants/Navbar"
import "./premium_main.css"

export const PremiumMain = ()=>{

    return (
        <>
        <Navbar/>
        <div className="main_div">
            <PremiumCmp1/>
            <PremiumCmp2/>
            <StorySlider/>
            <PremiumQNA/>
            <SubscriptionCmp/>
        </div>
        <div className="footer">
        <div className="footer2">
          <p>Calorie Counter</p>
          <p>Blog</p>
          <p>Terms</p>
          <p>Privacy</p>
          <p>Contact Us</p>
          <p>API</p>
          <p>Jobs</p>
          <p>Feedback</p>
          <p>Community Guidelines</p>
          <p>Ad Choices</p>
          <p>Do Not Sell My Personal Information</p>
        </div>
        <p>© 2022 MyFitnessPal, Inc.</p>
      </div>
        </>
    )
}