import './App.css'
import {Routes, Route} from 'react-router-dom';

import HomePage from './Pages/Home'
import Navbar from './Components/Navbar';
import AboutUs from './Pages/About';
import LoginPage from './Pages/Login';
import SignUpPage from './Pages/Signup';
import EventDetailsPage from './Pages/Details';
import EditEventPage from './Pages/EditEvent';




import Donatinons from './Pages/Donations';

import Events from './Pages/Events/Events';

function App() {
  return (
    <div className="App">
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/donations' element={<Donatinons/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/events/edit/:eventId' element={<EditEventPage/>}/>
        <Route path='/events/:eventId' element={<EventDetailsPage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </div>
  )
}

export default App
