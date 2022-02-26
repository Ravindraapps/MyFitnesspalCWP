import { Container } from 'react-bootstrap'
import { AddGoogle } from './AddGoogle';
import './Blog.css';
import {Link} from "react-router-dom"



export const Article = ()=>{


    return <div>
  <br />
     
        
        
  <Link className='HomeIcon' to={"/home"}><span> <img  className='top_home_icon' src='https://www.kindpng.com/picc/m/240-2408438_simple-blue-house-svg-clip-arts-clipart-green.png' alt=''/><div className='home_small_text'> <strong> &#62;  </strong> blog</div></span></Link>
   

      
     <span> <img className='top_logo_img' src='https://blog.myfitnesspal.com/wp-content/uploads/2021/03/logo-1.png' alt=''/> <button className='top_logo_button'>Article</button></span>

      <div className='social_icon_flex'>
          <img className='top_small_icon' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEU6WJf////29/oeRo4sTpKwudAyU5S6wtV3iLJ7i7MtT5M2VZYYQ40oTJG3v9WIl7tIY57t7/RRaqHN0+Ll6fBid6nDydva3unS1+Rsf6yosstYb6Nne6qGlbmapsTd4eqjrclDX5uRnr8SQIwxY1ZKAAAEQUlEQVR4nO3dUXOiMBSG4dCEVAkBBMRqu7V2//9/XLC1i1OtQUpyDvO9V72pwzMYIIAgon51lq8LwblinWf1mUn0/o4LqbQJvYwjM1rJIr4ojJXlrjtlrIq/CVelDb1cv5otV+fCSs5l/Z0ysuoLmzT0Ak1Q2vwXVnMEtsTqJFzJ0MsyUXL1KSznNgZPmfJDGM9rK9rPxkehCr0cE6Y64YxX4XEliqiY6yjsMkUk6rluSD+StcjmPAzbgZiJXIdeiEnTuVjPeRi2A3EteE94bzd3H0IIIYQQQgh9ZbROEmW75LHjn1aphP3s3ejEyjQpt39ed1lTPW32+7qu9/vN5qlqmizeLTgTW1xaLN+a/UN0vUeuZ0KNtnK7e/qBxluo5eHVQcdVaGzyvnfjsRRq+dw48xgKjVxvhvjYCW3hOPqYCo3cDfXxEqqvu0NmKpT5HT5OwjS7C8hHmA7aRTAU3g3kIpR3fkXZCNV9Gxk+wuNdPbMWyvo2hLXQvo0AchCaYgyQg1AOPthmJtTbUUAGwnTMZoaDUC/HAekL03tmTJyEejESSF4oB56VYSccdbzGQmjvn1MwEcrRQOLC0bsK8kJbzV44HkhbOPhLWje7fPt80N2FYKsP5csif/tD+QqpfRygW8XbRNok0eZ0z7YxRie0r3JL9yO26kUq0paLuU9962fJj9eWvDsCH1OmPyawjmeBX9n+pMdxGL6zBQrtBMwYA51O0NSMf5+cvLoIn5luZLqc9vcV3+9oK3S5Z+aF5X7wM/nT3WqfPTAehW4Ti4byxOFWTqdo3pLQizkip/OIpKdGt3I6KmX969bE5arhgbNQuZxI5LyhcZtZcN7fC+twYfSBt9DhigXvp+a43IDB+3EWLvPfDestjYvwibfQ4cC7gpB0LkLWUws3IesH57gISV9XuhmEXbwf7wRhVwwhjfTl/roI5ZV/7hX+LIBZXm7rsj9cXPnnXuFP5SS3IaMKf9wztTD8PhNCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBDCuQjDX10zy8XFnK6Qbi//by8CV0jnf5X7WjO6U+FKEEJIPwghpB+EENIPQgjpByGE9IMQQvpBCCH9IISQfhBCSD8IIaQfhBDSD0II6QchhPSDEEL6QQgh/SCEkH4QQkg/CCGkH4QQ0g9CCOkHIYT0gxBC+kEI4aCKX/qcQXkUFiLIj/b9Cc1a5CHeMuhPqHMR5DUS/oQqE0Fe/uVPKGsRFQEGojehKSIRxQGegOJNaONWGAUYiN6EKuqEAVaiL2G7CjthVHofiZ6Ex9cOd0L/b4v0JDy+hLATRpXvN2D7EaZVdBJGjWeiF2H68cLaD2FUSa9j0YPQyCrqC6NV6XOLOr3QlqcXgYreJ1pv63FiobHdbuKbsP3Mg1R+HhA2odBoJQ9x73PE2afWWb72MSWeTlis8+z8ZcP/AC0iUZUBTQitAAAAAElFTkSuQmCC' alt=''/>
          <img className='top_small_icon' src='data:image/png;base64,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' alt=''/>
          <img className='top_small_icon' src='https://www.citypng.com/public/uploads/preview/-11594994348nwzybixhji.png' alt=''/>
          <img className='top_small_icon' src='https://qph.fs.quoracdn.net/main-qimg-cf4366b1fc27463b06f5a9b623724628' alt=''/>
     <div>|</div>
      </div>
      
 


<div >
 <Container className="Blog_top_navbar">
 <p>RECIPES</p>
 <p>NUTRITION</p>
 <p>WEIGHT LOSS</p>
 <p>FITNESS</p>
 <p>INSPIRATION</p>
 <p>ESSENTIALS</p>
 <p>VIDEO</p>
 </Container>
</div>




<br />



        <Container className='full_container_article'>
            {/* ----------------------left side-------------------------*/ }
            <div>
            <p className='top_line_article'><strong className='home_text_blue'>Home </strong>» After Losing 220 Pounds, JC Is Paying it Forward</p>
            <h1 className='top_headline_article'>After Losing 220 Pounds, JC Is Paying it Forward</h1>

            <div className='top_author_logo_comment'>
            <img className='logo_dp_author' src="https://blog.myfitnesspal.com/wp-content/uploads/2018/07/Michael-headshot-72x72.jpg" alt="" />
       
        <p className='author_line_article'>BY <strong className='home_text_blue'>MICHAEL NYSTROM</strong> FEBRUARY 21, 2022 <strong className='home_text_blue'>NO COMMENTS</strong></p>
        </div>
        
        <div className='social_icon_flex'>
        <div className='share_it_text'>SHARE IT:</div>
             <img className='top_small_icon' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEU6WJf////29/oeRo4sTpKwudAyU5S6wtV3iLJ7i7MtT5M2VZYYQ40oTJG3v9WIl7tIY57t7/RRaqHN0+Ll6fBid6nDydva3unS1+Rsf6yosstYb6Nne6qGlbmapsTd4eqjrclDX5uRnr8SQIwxY1ZKAAAEQUlEQVR4nO3dUXOiMBSG4dCEVAkBBMRqu7V2//9/XLC1i1OtQUpyDvO9V72pwzMYIIAgon51lq8LwblinWf1mUn0/o4LqbQJvYwjM1rJIr4ojJXlrjtlrIq/CVelDb1cv5otV+fCSs5l/Z0ysuoLmzT0Ak1Q2vwXVnMEtsTqJFzJ0MsyUXL1KSznNgZPmfJDGM9rK9rPxkehCr0cE6Y64YxX4XEliqiY6yjsMkUk6rluSD+StcjmPAzbgZiJXIdeiEnTuVjPeRi2A3EteE94bzd3H0IIIYQQQgh9ZbROEmW75LHjn1aphP3s3ejEyjQpt39ed1lTPW32+7qu9/vN5qlqmizeLTgTW1xaLN+a/UN0vUeuZ0KNtnK7e/qBxluo5eHVQcdVaGzyvnfjsRRq+dw48xgKjVxvhvjYCW3hOPqYCo3cDfXxEqqvu0NmKpT5HT5OwjS7C8hHmA7aRTAU3g3kIpR3fkXZCNV9Gxk+wuNdPbMWyvo2hLXQvo0AchCaYgyQg1AOPthmJtTbUUAGwnTMZoaDUC/HAekL03tmTJyEejESSF4oB56VYSccdbzGQmjvn1MwEcrRQOLC0bsK8kJbzV44HkhbOPhLWje7fPt80N2FYKsP5csif/tD+QqpfRygW8XbRNok0eZ0z7YxRie0r3JL9yO26kUq0paLuU9962fJj9eWvDsCH1OmPyawjmeBX9n+pMdxGL6zBQrtBMwYA51O0NSMf5+cvLoIn5luZLqc9vcV3+9oK3S5Z+aF5X7wM/nT3WqfPTAehW4Ti4byxOFWTqdo3pLQizkip/OIpKdGt3I6KmX969bE5arhgbNQuZxI5LyhcZtZcN7fC+twYfSBt9DhigXvp+a43IDB+3EWLvPfDestjYvwibfQ4cC7gpB0LkLWUws3IesH57gISV9XuhmEXbwf7wRhVwwhjfTl/roI5ZV/7hX+LIBZXm7rsj9cXPnnXuFP5SS3IaMKf9wztTD8PhNCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBDCuQjDX10zy8XFnK6Qbi//by8CV0jnf5X7WjO6U+FKEEJIPwghpB+EENIPQgjpByGE9IMQQvpBCCH9IISQfhBCSD8IIaQfhBDSD0II6QchhPSDEEL6QQgh/SCEkH4QQkg/CCGkH4QQ0g9CCOkHIYT0gxBC+kEI4aCKX/qcQXkUFiLIj/b9Cc1a5CHeMuhPqHMR5DUS/oQqE0Fe/uVPKGsRFQEGojehKSIRxQGegOJNaONWGAUYiN6EKuqEAVaiL2G7CjthVHofiZ6Ex9cOd0L/b4v0JDy+hLATRpXvN2D7EaZVdBJGjWeiF2H68cLaD2FUSa9j0YPQyCrqC6NV6XOLOr3QlqcXgYreJ1pv63FiobHdbuKbsP3Mg1R+HhA2odBoJQ9x73PE2afWWb72MSWeTlis8+z8ZcP/AC0iUZUBTQitAAAAAElFTkSuQmCC' alt=''/>
             <img className='top_small_icon' src='data:image/png;base64,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' alt=''/>
             <img className='top_small_icon' src='https://www.citypng.com/public/uploads/preview/-11594994348nwzybixhji.png' alt=''/>
             <img className='top_small_icon' src='https://www.nicepng.com/png/detail/90-903560_e-mail-png-pic-email-logo-icon-png.png' alt=''/>
       
         </div>

         <img className='article_main_img' src='https://blog.myfitnesspal.com/wp-content/uploads/2022/02/VS-Blog-Featured-Image-Jeancarlo-1024x643.jpg' alt=''/>
<div className='article_paragraph'>
   
          <p>Sometimes a little “nudge” is all it takes to completely change the trajectory of your life.</p>
          
<p>For Miami real estate broker <strong className='highlight_blue_text_article'>Jeancarlo Danies</strong>, also known as JC, a fateful trip to a cardiologist lit the fire he needed to dramatically alter lifelong habits.</p>

<p>JC tipped the scales at 431 pounds in February 2019. His doctor put it bluntly: He was only expected to live two more years in his current situation. He left the office with tears in his eyes — with the recent birth of his son, he knew he had to save his own life for his son’s sake.</p>

<p>“He used the power of my child to put the fear in me, then from there, I knew I had to change my lifestyle completely,” he says. “There’s no diet, it’s a lifestyle, and it has to be forever.”</p>
<p>And change he did.</p>
<p>JC immediately started researching what diet would work best for him long term, and he began replacing his go-to unhealthy favorites like soda, white rice, fast food and chips, with cleaner, healthier options that fit into a modified Paleo diet including nuts, seeds, fruits, vegetables and clean proteins.</p>
<p>“Before I was eating about 6,000 calories a day, and I’d eat whatever I wanted — it was the typical disaster diet,” he says. “I made the effort to choose something that I could sustain, and I didn’t want to eat six or seven small meals a day, I wanted to eat like a normal person, so I could maintain it for the rest of my life.”</p>
<p>His wife turned him on to MyFitnessPal, and he started tracking his macros while making sure he was hitting his weekly calorie goals. This, combined with walking and kickboxing for cardio, helped him start dropping weight and seeing muscle, which led to a new goal.</p>
<p>“I was laser-jet focused, and I knew I wanted to save my life, but when I found out about the transformation show, that became my dream,” JC says, referring to the competition hosted by the World Beauty, Fitness and Fashion (WBFF) organization. “I thought, I’d love to be onstage with muscles — I’ve always been fat, and the thought of being onstage with abs was very motivating.”</p>
<p>WBFF shows are generally known for their bodybuilding category, where men and women hit the stage in the best shape of their lives and are judged on muscle development and overall physique. The “transformation” division celebrates people who are on a journey to be more healthy and is about that story as much as their physical transformation.</p>
<p>To get to the point where he felt comfortable onstage, JC hired a coach and upped his weight-training and cardio routine. He also continued his modified Paleo diet and used MyFitnessPal as a plateau breaker when he wasn’t seeing the results he expected. He’d check his macros and temporarily drop some fats or carbs from his weekly plan if needed.</p>
<p>After losing 222 pounds in 20 months, JC realized his dream and became world champion in the WBFF transformation division in August 2021.</p>
<p>“A regular bodybuilder does a 16-week prep for a show, but I prepped for almost two years,” says JC. “This for me was all about health. It was about being alive and being with my kid — the pivotal moment was when I won the competition in August: I gave my son the medal.”</p>
<p>His goal now is to maintain an athletic physique year-round. To him, this means having some biceps, some chest muscle and slightly seeing his abs. But more importantly, he’s created a nonprofit called <strong className='highlight_blue_text_article'>Fat Free Foundation</strong> Fat Free Foundation where he shares his free diet tips and workout routines with people who want to lose weight but need a little guidance and motivation.</p>
<p>“I want that 500 pounder to know that if I could do it, he can do it too,” he says. “I’m no better, I just had something that motivated the living hell out of me to get it done. I’m not an Olympian, but it’s everything I personally did to succeed.”</p>
<p>His biggest lesson learned is this: Weight loss isn’t about perfection, it’s about consistency.</p>
<p>“It’s a process that’s going to take time, so don’t expect fast results,” he says. “I tell people that they’re worth a million, and to never give up. No matter how down you are in the hole, there’s always a way out — if you follow a plan, it works 100 percent.”</p>
</div>
<p className='strong_italic_text'>Ready to take the next step? <strong className='highlight_blue_text_article'> Unlock MyFitnessPal Premium</strong>  to access custom goal settings, quick-log recipes, and guided plans from a registered dietitian. Premium users are 65% more likely to reach their weight loss goals!</p>

<button className='save_btn_below'><img className='pinerest_btn_red' src='https://pngimg.com/uploads/pinterest/pinterest_PNG60.png'alt=''/> Save</button>
<br />
<br />
<br />
<div className='about_author_div'>
<div className='about_author_headline'>ABOUT THE AUTHOR</div> 
<div className='plain_line'></div>
</div>
<br />
<div className='author_description_div'>
<img className='author_botoom_pic' src="https://blog.myfitnesspal.com/wp-content/uploads/2018/07/Michael-headshot-150x150.jpg" alt="" />
<div>
<p><strong className='highlight_blue_text_article'>MICHAEL NYSTROM </strong></p>
<p>Michael is a Los Angeles-based writer, two-time IRONMAN triathlon finisher and breakfast burrito connoisseur. When not swimming, cycling or running, he’s catching some waves or chasing his dog, Dingo. You can follow Michael on <strong className='highlight_blue_text_light'>Instagram</strong>.</p>
    </div>
</div>

<br />

<div className='about_author_div'>
<div className='about_author_headline'>RELATED</div> 
<div className='plain_line_longer'></div>
</div>
<br />
<button className="comment_btn">VIEW COMMENTS</button>

<p></p>
<p></p>

            </div>

{/* ----------------------right side-------------------------*/ }

            <div>

               
               
                <div className='about_author_div'>
<div className='about_author_headline'>TRENDING</div> 
<div className='plain_line_right'></div>
</div>
            


  

   <div className='right_article_div'>
       <img className='right_side_article_img' src='https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/11031-featured-700x400.jpg' alt=''/>
       <p>3-Ingredient Low-Carb Pancakes</p>
   </div>

   <div className='right_article_div'>
       <img className='right_side_article_img' src='https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/29556-featured-700x400.jpg' alt=''/>
       <p>Instant Pot Rotini With Chicken and Bell Peppers</p>
   </div>

   <div className='right_article_div'>
       <img  className='right_side_article_img'src='https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/51987-featured-700x400.jpg' alt=''/>
       <p>Forget Salads: Ways to Get Your (Warm) Greens In</p>
   </div>

   <div className='right_article_div'>
       <img className='right_side_article_img' src='https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/27077-featured-700x400.jpg' alt=''/>
       <p>Essential Guide to MyFitnessPal Premium</p>
   </div>

   <div className='right_article_div'>
       <img className='right_side_article_img' src='https://blog.myfitnesspal.com/wp-content/uploads/2022/01/Ultimate-Grocery-Guide-Budget-Friendly-750x592.jpg.webp' alt=''/>
       <p>Ultimate Grocery Guide: Budget-Friendly</p>
   </div>

   <div className='right_article_div'>
       <img className='right_side_article_img' src='https://blog.myfitnesspal.com/wp-content/uploads/2020/09/6-Common-Walking-Myths-Busted-750x592.jpg.webp' alt=''/>
       <p>6 Common Walking Myths, Busted</p>
   </div>

   <div className='right_article_div'>
       <img className='right_side_article_img' src='https://blog.myfitnesspal.com/wp-content/uploads/2017/09/Are-You-Eating-Enough-Protein_2-750x592.jpg' alt=''/>
       <p>Are You Eating Enough Protein?</p>
   </div>



   <AddGoogle/>


   </div>
        </Container>
        <br />


        

<div className='bottom_blog'>
    <br />
    <br />
    <img src='https://blog.myfitnesspal.com/wp-content/uploads/2021/03/logo-1.png' alt=''/>
    <br/>
    <br />
    <div className='blue_color_light'>MyFitnessPal</div>
    <div className='last_para'>is the leading app for tracking—and conquering—your nutrition and fitness goals. Log meals from a database of 14 million foods, track physical activity, and learn how to build healthy habits that stick. With more than 500 recipes, 150 workout routines, and a variety of expert-guided meal and workout plans, you’ll have the support you need for your entire health and fitness journey.</div>
    <br/>
    <br />
    <p className='blue_color_bold'>MyFitnessPal</p>
    
    <p className='grey_color'>© 2022MyFitnessPal™  |  Privacy Policy  |  Terms  |</p>
    <br />
    <br />
</div>   



    </div>
}