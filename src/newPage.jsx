import "./newPage.css";
import SearchIcon from "@mui/icons-material/Search";
const NewPage = () => {
  return (
    <div>
      <div className="logoN">
        <div className="logoNpDiv">
          <p className="logoNp">myfitnesspal</p>
        </div>
        <div className="logP">
          <p>Log In</p>
          <div className="borderDiv">
            <p className="logP1">Sign Up</p>
          </div>
        </div>
      </div>
      <nav className="navNik">
        <ul className="navNikul">
          <div className="liDivN">
            <li>ABOUT</li>
          </div>
          <div className="liDivN">
            <li>FOOD</li>
          </div>
          <div className="liDivN">
            <li>EXERCISE</li>
          </div>
          <div className="liDivN">
            <li>APPS</li>
          </div>
          <div className="liDivN">
            <li>COMMUNITY</li>
          </div>
          <div className="liDivN">
            <li>BLOG</li>
          </div>
          <div className="liDivN">
            <li>PREMIUM</li>
          </div>
        </ul>
      </nav>
      <div className="centerDiv">
        <img
          src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-collage-top-medium%402x.af485b9a.png&w=1080&q=75"
          alt=""
        />
        <p className="positionN">Fitness starts</p>
        <p className="positionN2">with what you</p>
        <p className="positionN3">eat.</p>
        <p className="positionN4">
          Take control of your goals. Track calories, break down ingredients,
          and log activities with MyFitnessPal.
        </p>
        <button className="positionN5">START FOR FREE</button>
        <p className="positionN6">
          Already have an account?<b>Login</b>
        </p>
      </div>
      <div className="downDiv">
        <div className="yellowB"></div>
        <img
          src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-collage-search-bottom-medium%402x.69b0792e.png&w=640&q=75"
          alt=""
        />
        <hr className="positionN7" />
        <p className="positionN8">Search over 11 million</p>
        <p className="positionN9">foods in our database.</p>
        <p className="positionN10">
          What's in your food? Learn about calorie count, nutrition information
          and serving size.
        </p>
        <input
          type="text"
          placeholder="Get the nutrition for any food, like an apple"
          className="positionN11"
        />
        <SearchIcon className="positionN12" fontSize="medium" />
      </div>
      <p className="positionN13">The Tools for Your Goals</p>
      <p className="positionN14">
        Trying to lose weight, tone up, lower your BMI, or invest in your
        overall health?
      </p>
      <p className="positionN14">
        We give you the right features to hit your goals.
      </p>
      <div className="learMain">
        <div>
          <img
            src="https://www.myfitnesspal.com/_next/static/media/diary.e6e4c438.svg"
            alt=""
          />
          <p className="titleN">Learn. Track. Improve.</p>
          <p>
            Keeping a food diary helps you understand your habits and increases
            your likelihood of hitting your goals.
          </p>
        </div>
        <div>
          <img
            src="https://www.myfitnesspal.com/_next/static/media/barcode.18277ae4.svg"
            alt=""
          />
          <p className="titleN">Logging Simplified</p>
          <p>
            Scan barcodes, save meals and recipes, and use Quick Tools for fast
            and easy food tracking.
          </p>
        </div>
        <div>
          <img
            src="https://www.myfitnesspal.com/_next/static/media/shoeblue.28e2684f.svg"
            alt=""
          />
          <p className="titleN">Stay Motivated</p>
          <p>
            Join the World’s Largest Fitness Community for advice, tips, and
            support 24/7.
          </p>
        </div>
      </div>
      <button className="journeyN">START YOUR JOURNEY TODAY</button>
      <p className="victory">Victory Stories</p>
      <p className="goalN">
        When you reach your goals, our whole community celebrates with you.
        That’s over 200 million members sharing in your victory—using it to
        inspire their own journey.
      </p>
      <p className="reciepe">Recipes & Inspiration</p>
      <p className="goalN">
        Get nutritionist-approved recipes and motivational workout tips from
        MyFitnessPal experts.
      </p>
      <div className="dishes">
        <div>
          <img src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbreakfast-300-calories.d991cc82.png&w=384&q=75"></img>
          <p className="miniDishes">What the 1,200-Calorie Diet Looks Like</p>
          <p className="miniDishes2">MyFitnessPal Blog</p>
        </div>
        <div>
          <img src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbreakfast-300-calories.d991cc82.png&w=384&q=75"></img>
          <p className="miniDishes">What the 1,200-Calorie Diet Looks Like</p>
          <p className="miniDishes2">MyFitnessPal Blog</p>
        </div>
        <div>
          <img src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbreakfast-300-calories.d991cc82.png&w=384&q=75"></img>
          <p className="miniDishes">What the 1,200-Calorie Diet Looks Like</p>
          <p className="miniDishes2">MyFitnessPal Blog</p>
        </div>
      </div>
      <p className="connect">Connect with over</p>
      <p className="connect">50 apps.</p>
      <p className="easily">
        Easily link your MyFitnessPal account with apps that support your
        healthier lifestyle. It’s not just about calories. It’s about feeling
        better, looking better, and living better.
      </p>
      <img
        className="fitApp"
        src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-apps%402x.85e549ef.png&w=1920&q=75"
        alt=""
      />
      <div className="storeN">
        <img
          src="https://www.myfitnesspal.com/_next/static/media/conversion-apple-app-store-logo.751bc42c.svg"
          alt=""
        />
        <img
          src="https://www.myfitnesspal.com/_next/static/media/conversion-google-play-store-logo.1c6369a1.svg"
          alt=""
        />
      </div>
      {/* FOOTER PART STARTS HERE */}
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
    </div>
  );
};

export default NewPage;
