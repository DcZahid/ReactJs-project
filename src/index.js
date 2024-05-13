import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Pages/Home';
import About from './Pages/About';
import Causes from './Pages/Causes';
import Contact from './Pages/Contact';
import Events from './Pages/Events';
import EventDetails from './Pages/EventDetails';
import Elements from './Pages/Elements';
import Blog from './Pages/Blog';
import BlogDetails from './Pages/BlogDetails';
import Nopage from './Pages/Nopage';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Headers from './Component/Headers';
import Footer from './Component/Footer';

import Admin_index2 from './Component/Admin_index2';



import CauseAdmin from './Component/admin2_components/admin_page/cause/CauseAdmin';
import AddCause from './Component/admin2_components/admin_page/cause/AddCause';
import UpdateCause from './Component/admin2_components/admin_page/cause/UpdateCause';

import AddDonation from './Component/admin2_components/admin_page/donation/AddDonation';
import DonationList from './Component/admin2_components/admin_page/donation/DonationList';
import UpdateDonation from './Component/admin2_components/admin_page/donation/UpdateDonation';

import AddTeam from './Component/admin2_components/admin_page/team/AddTeam';
import TeamList from './Component/admin2_components/admin_page/team/TeamList';
import UpdateTeam from './Component/admin2_components/admin_page/team/UpdateTeam';

import AddStory from './Component/admin2_components/admin_page/story/AddStory';
import StoryList from './Component/admin2_components/admin_page/story/StoryList';
import UpdateStory from './Component/admin2_components/admin_page/story/UpdateStory';

import AddEvent from './Component/admin2_components/admin_page/event/AddEvent';
import EventList from './Component/admin2_components/admin_page/event/EventList';
import UpdateEvent from './Component/admin2_components/admin_page/event/UpdateEvent';

import AddVolunteer from './Component/admin2_components/admin_page/volunteer/AddVolunteer';
import VolunteerList from './Component/admin2_components/admin_page/volunteer/VolunteerList';
import UpdateVolunteer from './Component/admin2_components/admin_page/volunteer/UpdateVolunteer';

import AddBanner from './Component/admin2_components/admin_page/banner/AddBanner';
import BannerList from './Component/admin2_components/admin_page/banner/BannerList';
import UpdateBanner from './Component/admin2_components/admin_page/banner/UpdateBanner';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   {/* <App /> */}
  //   <Home/>
  // </React.StrictMode>
<>

  <BrowserRouter>
  {/* <Headers/> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/causes' element={<Causes/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/eventdetails' element={<EventDetails/>}/>
      <Route path='/elements' element={<Elements/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/blogdetails' element={<BlogDetails/>}/>
    
      <Route path='/admin' element={<Admin_index2/>}/>
      
      <Route path='*' element={<Nopage/>}/>

      <Route path='/admin/cause' element={<CauseAdmin/>}/>
      <Route path='/admin/addcause' element={<AddCause/>}/>
      <Route path='/admin/updatecause/:id' element={<UpdateCause/>}/>

      <Route path='/admin/adddonation' element={<AddDonation/>}/>
      <Route path='/admin/donationlist' element={<DonationList/>}/>
      <Route path='/admin/updatedonation/:id' element={<UpdateDonation/>}/>

      <Route path='/admin/addteam' element={<AddTeam/>}/>
      <Route path='/admin/teamlist' element={<TeamList/>}/>
      <Route path='/admin/updateteam/:id' element={<UpdateTeam/>}/>

      <Route path='/admin/addstory' element={<AddStory/>}/>
      <Route path='/admin/storylist' element={<StoryList/>}/>
      <Route path='/admin/updatestory/:id' element={<UpdateStory/>}/>

      <Route path='/admin/addevent' element={<AddEvent/>}/>
      <Route path='/admin/eventlist' element={<EventList/>}/>
      <Route path='/admin/updateevent/:id' element={<UpdateEvent/>}/>

      <Route path='/admin/addvolunteer' element={<AddVolunteer/>}/>
      <Route path='/admin/volunteerlist' element={<VolunteerList/>}/>
      <Route path='/admin/updatevolunteer/:id' element={<UpdateVolunteer/>}/>

      <Route path='/admin/addbanner' element={<AddBanner/>}/>
      <Route path='/admin/bannerlist' element={<BannerList/>}/>
      <Route path='/admin/updatebanner/:id' element={<UpdateBanner/>}/>

    </Routes>
    {/* <Footer/> */}
   </BrowserRouter>
</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
