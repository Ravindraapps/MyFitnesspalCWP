import { useState } from 'react';

export const AddGoogle = () =>{
    const[addshow,setAddshow] = useState(true);
    const[deleteadd,setDeleteadd] = useState(false);


    if(addshow===false){
        return <div className='stop_add_div'>
        

<img onClick={()=> setAddshow(true)} className='back_google_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Grey_close_x.svg/1200px-Grey_close_x.svg.png" alt="" />
<br />
<h2 className='ad_stop_text'>Ads by <strong>Google</strong></h2>
<button onClick={()=> setDeleteadd(true)} className='stop_ad_btn'>Stop seeing this ad</button>
<br />
<button className='why_ad_btn'>Why this ad? <span><img className='inform_google_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Information-icon.svg/800px-Information-icon.svg.png" alt="" /></span></button>

        </div>
      }
    
if(deleteadd===true){
    return <div>

    </div>

}

      return (
        <div className='advertisement_article_div'>

    <img onClick={()=>setAddshow(false)} className='closing_ad_icon' src='https://www.freeiconspng.com/thumbs/close-icon/close-icon-29.png' alt='' />
    <img className='right_side_article_img' src='https://www.simplilearn.com/ice9/free_resources_article_thumb/Best_Work_From_Home_Jobs.jpg' alt=''/>

    <h1 className='ad_heading_line'>Work From Home Jobs</h1>
    <h3 className='ad_heading_des'>Looking for Professional Jobs in USA with company ratings & salaries. Best in Industry</h3>
   <br />
    <h3 className='ad_title'>Receptix</h3>

    <br />
    <h3 className='blue_text_open'>Open &#62;</h3>
    

</div>
      );
}

/*



function App() {
    const[addshow,setAddshow] = useState(true);

if(addshow===false){
  return <div className="App">
    <button onClick={()=> setAddshow(true)}>addshow</button>
  </div>
}


  return (
    <div className="App">
   <div>
     <h1>harish</h1>
     <h1>address</h1>
   </div>
   <button onClick={()=>setAddshow(false)} >hide</button>

  
    </div>
  );
}

export default App;
*/