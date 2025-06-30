import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Doctors from './pages/doctors' 
import Contact from './pages/contact'
import Login from './pages/login'
import Myprofile from './pages/myprofile'
import Myappointment from './pages/Myappointment'
import Appointments from './pages/Appointments'
import Navbar from './components/navbar'
const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
        <Navbar />
<Routes>
  <Route>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About/>} />
    <Route path='/doctors' element={<Doctors />} />
    <Route path='/doctors/:speciality' element={<Doctors />} />
    <Route path='/login' element={<Login/>} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/My-Profile' element={<Myprofile/>} />
    <Route path='/My-appointments' element={<Myappointment/>} />
    <Route path='/Appointments' element={<Appointments/>} />
  </Route>
</Routes>
    </div>
  )
}


export default App