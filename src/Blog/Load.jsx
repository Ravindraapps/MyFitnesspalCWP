import { useState } from "react";

export const Load =()=>{
    const[show,setShow] = useState(true);

    if(show===false){
        return <div>
        <div className="grid_articles">
        <div className='grid_hover'>
            <img src="https://blog.myfitnesspal.com/wp-content/uploads/2021/02/5-RD-Approved-Chocolate-Bars-Worth-Trying-750x592.jpg" alt="" />
            <div>5 RD-Approved Chocolate Bars Worth Trying</div>
            <div className='grey_color'>JANUARY 11, 2022</div>
             </div>
        <div className='grid_hover'>
        <img src="https://blog.myfitnesspal.com/wp-content/uploads/2022/02/Blog-Hero-750x592.jpg" alt="" />
        <div>All About Alternatives: Bread</div>
        <div className='grey_color'>FEBRUARY 1, 2022</div>
        </div>
        <div className='grid_hover'>
        <img src="https://blog.myfitnesspal.com/wp-content/uploads/2021/01/How-to-Get-More-Deep-Sleep-750x592.jpg" alt="" />
        <div>How to Get More Deep Sleep</div>
        <div className='grey_color'>FEBRUARY 02, 2022</div>
         </div>
    </div>
  
    <br /> 
    <br />
  
    <div className="grid_articles">
        <div className='grid_hover'>
    <img src="https://blog.myfitnesspal.com/wp-content/uploads/2021/02/inline-18-750x592.jpg" alt="" />
    <div >Beginner’s Guide to Running For Weight Loss</div>
    <div className='grey_color'>FEBRUARY 11, 2022</div>
    </div>
    <div className='grid_hover'>
    <img src="https://blog.myfitnesspal.com/wp-content/uploads/2021/01/10-Ways-to-Lose-More-Weight-Walking-750x592.jpg" alt="" />
    <div>10 Ways to Lose More Weight Walking</div>
    <div className='grey_color'>FEBRUARY 11, 2022</div>
    </div>
    <div className='grid_hover'>
    <img src="https://blog.myfitnesspal.com/wp-content/uploads/2022/02/7-Healthy-Chocolate-Treats-to-Enjoy-on-Valentines-Day-750x592.jpg" alt="" />
    <div>7 Healthy Chocolate Treats to Enjoy </div>
    <div className='grey_color'>FEBRUARY 22, 2022</div>
        </div>
    </div>
<br />
<br />
    <button className="load_btn" onClick={()=> setShow(true)}>LOAD MORE</button>
    </div>
      }

return (
    <div>
        <div className="grid_articles">
              <div className='grid_hover'>
                  <img src="https://blog.myfitnesspal.com/wp-content/uploads/2021/06/Devils-Food-Cupcakes-750x592.jpg" alt="" />
                  <div>Devil’s Food Cupcakes</div>
                  <div className='grey_color'>JANUARY 12, 2022</div>
                   </div>
              <div className='grid_hover'>
              <img src="https://blog.myfitnesspal.com/wp-content/uploads/2020/02/12-Dinners-for-Two-Under-425-Calories-12-2-750x592.jpg" alt="" />
              <div>15 Dinners for Two Under 425 Calories</div>
              <div className='grey_color'>FEBRUARY 06, 2022</div>
              </div>
              <div className='grid_hover'>
              <img src="https://blog.myfitnesspal.com/wp-content/uploads/2022/02/VS-Blog-Featured-Image-Lexi-750x592.jpg" alt="" />
              <div>Lexi Lost 295 Pounds</div>
              <div className='grey_color'>FEBRUARY 14, 2022</div>
               </div>
          </div>
        
          <br /> 
          <br />
        
          <div className="grid_articles">
              <div className='grid_hover'>
          <img src="https://blog.myfitnesspal.com/wp-content/uploads/2021/01/Why-am-I-Stiff-and-Sore-When-I-Wake-Up_-750x592.jpg" alt="" />
          <div >Why am I Stiff and Sore When I Wake Up?</div>
          <div className='grey_color'>FEBRUARY 04, 2022</div>
          </div>
          <div className='grid_hover'>
          <img src="https://blog.myfitnesspal.com/wp-content/uploads/2021/01/What%E2%80%99s-Better-For-Weight-Loss_-HIIT-or-Incline-Walking_-750x592.jpg" alt="" />
          <div>What’s Better For Weight-Loss?</div>
          <div className='grey_color'>FEBRUARY 20, 2022</div>
          </div>
          <div className='grid_hover'>
          <img src="https://blog.myfitnesspal.com/wp-content/uploads/2022/02/Healthy-Ways-to-Satisfy-Your-Hot-Chocolate-Craving-750x592.jpg" alt="" />
          <div>Healthy Ways to Satisfy Chocolate Craving </div>
          <div className='grey_color'>FEBRUARY 16, 2022</div>
              </div>
    </div>
    <br />
    <br />
    <button className="load_btn" onClick={()=>setShow(false)} >LOAD MORE</button>
    </div>
)
      
};
