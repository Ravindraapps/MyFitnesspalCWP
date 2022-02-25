import logo from './logo.svg';
import './App.css';
import { Navbar } from './componants/Navbar';
import {Routes,Route} from "react-router-dom"
import { Homepage } from './componants/Home';
import { Login } from './componants/Login';
import { Activity } from './componants/signup/activitylevelpage';
import { Welcome } from './componants/signup/Welcome';
import { Weightgoal } from './componants/signup/Weightgoal';
import { Detail } from './componants/signup/detailpage';
import { BodyDetail } from './componants/signup/BodyDetail';
import { WeeklyGoal } from './componants/signup/weeklyGoal';
import { CreateAccount } from './componants/signup/Createaccount';
import { CreateUsername } from './componants/signup/createusername';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Signup/welcome' element={<Welcome/>}></Route>
        <Route path='/Signup/weightgoal' element={<Weightgoal/>}></Route>
        <Route path='/Signup/activity' element={<Activity/>}></Route>
        <Route path='/Signup/activity/detail' element={<Detail/>}></Route>
        <Route path='/Signup/activity/detail/checkout' element={<BodyDetail/>}></Route>
        <Route path='/Signup/activity/detail/weeklygoal' element={<WeeklyGoal/>}></Route>
        <Route path='/Signup/activity/detail/weeklygoal/createaccount' element={<CreateAccount/>}></Route>
        <Route path='/Signup/createusername' element={<CreateUsername/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
