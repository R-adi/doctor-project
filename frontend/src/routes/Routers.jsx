//import React from 'react'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Contact from '../pages/Contact'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Doctors from '../pages/Doctors/Doctors'
import DoctorDet1 from '../pages/Doctors/DoctorDet1'
import DoctorDet2 from '../pages/Doctors/DoctorDet2'
import DoctorDet3 from '../pages/Doctors/Doctordet3'

import {Routes, Route} from 'react-router-dom'

const Routers = () => {
  return (
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/doctors' element={<Doctors/>}></Route>
    <Route path='/doctordet1' element={<DoctorDet1/>}></Route>
    <Route path='/doctordet2' element={<DoctorDet2/>}></Route>
    <Route path='/doctordet3' element={<DoctorDet3/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/register' element={<Signup/>}></Route>
    <Route path='/services' element={<Services/>}></Route>
   </Routes>
  )
}

export default Routers