import './App.css'
import {Routes, Route} from 'react-router-dom';

import HomePage from './Pages/Home'
import Navbar from './Components/Navbar';
import AboutUs from './Pages/About';



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

      </Routes>
    </div>
  )
}

export default App
