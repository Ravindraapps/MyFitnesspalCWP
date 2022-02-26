import "./sliderTile.css"

export const SliderTile = ({ tileData }) => {
    // console.log(tileData)

    var slidernum = tileData.img_num;

    return (
        <div className="slider-tile">
            <img src={require(`../../../assets/images/slider-${slidernum}.jpg`)} alt="" />
            <div className="text-div">
                <h2>{tileData.name}</h2>
                <div>{tileData.desc}</div>
            </div>
        </div>
    )
}