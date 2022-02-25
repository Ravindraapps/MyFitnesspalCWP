import { PremiumCmp1 } from "../premiumCmp_1/PremiumCmp1"
import { PremiumCmp2 } from "../premiumCmp_2/PremiumCmp2"
import { PremiumQNA } from "../premium_qna/PremiumQna"
import { StorySlider } from "../storySlider/StorySlider"
import { SubscriptionCmp } from "../subscriptionPart/SubscriptionCmp"
import "./premium_main.css"

export const PremiunMain = ()=>{

    return (
        <>
        <div className="main_div">
            <PremiumCmp1/>
            <PremiumCmp2/>
            <StorySlider/>
            <PremiumQNA/>
            <SubscriptionCmp/>
        </div>
        </>
    )
}