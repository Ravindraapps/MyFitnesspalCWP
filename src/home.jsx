import "./home.css";
import EmailIcon from "@mui/icons-material/Email";
const Home = () => {
  return (
    <div>
      {/* navbar part starts here */}
      <nav className="navN">
        <ul className="navNul">
          <div className="liDiv">
            <li>MY HOME</li>
          </div>
          <li>FOOD</li>
          <li>EXERCISE</li>
          <li>REPORTS</li>
          <li>APPS</li>
          <li>COMMUNITY</li>
          <li>BLOG</li>
          <li>PREMIUM</li>
        </ul>
      </nav>
      <nav className="navN2">
        <ul className="navNul2">
          <li>MY HOME</li>
          <li>FOOD</li>
          <li>EXERCISE</li>
          <li>REPORTS</li>
          <li>APPS</li>
          <li>COMMUNITY</li>
          <li>BLOG</li>
          <li>PREMIUM</li>
        </ul>
      </nav>
      {/* navbar down part starts here */}
      <div className="containerMainN">
        <div className="containerN">
          <div className="miniN">
            <p>Your Daily Summary</p>
            <p className="streak">Your Streak</p>
          </div>
          <div className="summaryN">
            <div className="mini2">
              <div>
                <p>No photo provided</p>
                <p className="photo">Upload photo</p>
              </div>
            </div>
            <div className="caloriesN">
              <div className="boxN">
                <p>
                  Calories Remaining{" "}
                  <b style={{ color: "rgb(0,102,238)" }}>Change</b>
                </p>
                <p className="rate">1810</p>
                <div className="buttonWrapper">
                  <button>Add Exercise</button>
                  <button>Add Food</button>
                </div>
              </div>
              <div className="boxN2">
                <div className="tracker">
                  <p>1810</p>
                  <p className="goalN">Goal</p>
                </div>
                <div className="tracker">
                  <p>0</p>
                  <p className="goalN">Food</p>
                </div>
                <h2>-</h2>
                <div className="tracker">
                  <p>0</p>
                  <p className="goalN">Exercise</p>
                </div>
                <h2>=</h2>
                <div className="tracker">
                  <p>0</p>
                  <p className="goalN">Net</p>
                </div>
              </div>
            </div>
            <div className="lastN">
              <div className="lastN1">
                <p className="kg">0kg</p>
                <p className="lost">Lost</p>
              </div>
              <img
                className="checkIn"
                src="data:image/png;base64,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"
                alt=""
              />
              <div className="progressBar"></div>
            </div>
          </div>
        </div>
        <div className="forum">
          <p>Recent Forum Topics</p>
          <p>View All</p>
          <hr />
          <ul>
            <li>Daily Journal Streak</li>
            <li>What worked for you today?</li>
            <li>For the first time in 2 and a half decades, I'm under 200</li>
            <li>What Mini Goal is motivating you right now!</li>
            <li>What Mini Goal is motivating you right now!</li>
          </ul>
        </div>
      </div>
      {/* EMAIL PART STARTS HERE */}
      <div className="email">
        <div>
          <img
            className="envelope"
            src="data:image/png;base64,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"
            alt=""
          />
        </div>
        <div className="notification">
          <p>Don't forget to verify your email.</p>
          <p>We sent an email to:</p>
          <p>nt5059485@gmail.com</p>
        </div>
        <div className="changeN">
          <button>Resend Email</button>
          <p>or,change your email address</p>
        </div>
      </div>
      {/* NEWSFEED START HERE */}
      <div className="newsFeed">
        <div className="news1">
          <p>News Feed</p>
        </div>
        <div className="textarea">
          <input type="text" placeholder="What's on your mind?" />
          <button>Share</button>
        </div>
      </div>
      {/* INVITE PART START HERE */}
      <div className="inviteFlex">
        <div className="invite">
          <p>Add Friends to help you reach your goals!</p>
          <p>
            Lose up to 3x more with the support of friends, than those who diet
            alone.
          </p>
          <div className="inviteIcon">
            <EmailIcon className="iconNik" />
            <p>Invite By Email</p>
          </div>
        </div>
        <div className="forum2">
          <img
            src="https://d34yn14tavczy0.cloudfront.net/ember-cli/fe8debda5e8d/images/widgets/ic_hellohealthy.png"
            alt=""
          />
          <p>View All</p>
          <hr />
          <ul>
            <li>
              3-Ingredient Low-Carb Pancakes A perfect easy breakfast, these
              protein-packed flapjacks are perfect topped with fresh fruit. Read
              More
            </li>
            <li>
              Instant Pot Rotini With Chicken and Bell Peppers The Instant Pot
              is the key to getting this healthy pasta dish on the table in 35
              minutes flat. Read More
            </li>
            <li>
              After Losing 220 Pounds, JC Is Paying it Forward JC turned his
              transformation into a WBFF title, and now he’s helping others
              achieve weight-loss success. Read More
            </li>
          </ul>
        </div>
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

export default Home;
