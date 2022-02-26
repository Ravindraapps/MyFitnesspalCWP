import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export const Slide =()=>{
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        nextArrow: <img style={{ position: 'absolute', zIndex: 10 }} src= "data:image/png;base64,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" alt="" style={{ position: 'absolute', zIndex: 10 }} />,
        prevArrow: <img src= "data:image/png;base64,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" alt="" />,
        slidesToShow: 5,
        slidesToScroll: 1
      }
      return (
        <div>
        <br />
          <Slider className="slider_articles" {...settings}>
            <div className="slider_div">
              <img className="sliding_img" src="https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/51980-featured-700x400.jpg" />
           <div className="sliding_text">How to Get Weight Loss Motivation Back in February</div>
            </div>
            <div className="slider_div">
              
              <img className="sliding_img" src="https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/51992-featured-700x400.jpg" />
           <div className="sliding_text">5 Active Winter Activities to Do With Friends and Family</div>
            </div>
            <div className="slider_div">
             
              <img className="sliding_img" src="https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/48779-featured-700x400.jpg" />
              <div className="sliding_text">Slow Cooker Italian Beef Stew</div>
            </div>
           
            <div className="slider_div">
              
              <img className="sliding_img" src="https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/51990-featured-700x400.jpg" />
              <div className="sliding_text">Is Wine Actually Good for You?</div>
            </div>
            <div className="slider_div">
             
              <img className="sliding_img" src="https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/51983-featured-700x400.jpg" />
              <div className="sliding_text">The Lunge Workout</div>
            </div>
            <div className="slider_div">
              
              <img className="sliding_img" src="https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/51987-featured-700x400.jpg" />
              <div className="sliding_text">Forget Salads: Ways to Get Your (Warm) Greens In</div>
            </div>
            <div className="slider_div">
                <img className="sliding_img" src="https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/27077-featured-700x400.jpg"/>
                <div className="sliding_text">Essential Guide to MyFitnessPal Premium</div>
            </div>
            <div className="slider_div">
                <img className="sliding_img" src="https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/48688-featured-700x400.jpg" />
                <div className="sliding_text">9 Habits to Supercharge Weight Loss the Right Way</div>
            </div>
            <div className="slider_div">
                <img className="sliding_img" src="https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/51767-featured-700x400.jpg" />
                <div className="sliding_text">5 Popular Weight-Loss Plans, Ranked By RDs</div> 
            </div>
            <div className="slider_div">
                <img className="sliding_img" src="https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/52003-featured-700x400.jpg" />
                <div className="sliding_text">After Losing 220 Pounds, JC Is Paying it Forward</div>
            </div>
            
            </Slider>
            <br />
        </div>
      );
    }
