import { sliderData } from "./sliderData"
import { SliderTile } from "./sliderTile/SliderTile"
import "./storySlider.css"

export const StorySlider = () => {

    return (
        <>
            <div className="slider-div">
                <div className="story-head">
                    <h1>Victory Stories</h1>
                    <p>Your victories are our victories and we want to share them with the world.</p>
                </div>
                <div className="slider-content">

                    <div className="left-slide"> &lsaquo; </div>
                    <div className="slider">
                        {sliderData.map((tileData) => (
                            <SliderTile tileData={tileData} key={tileData.id} />
                        ))}
                    </div>
                    <div className="right-slide"> &rsaquo; </div>
                </div>
            </div>
        </>
    )
}