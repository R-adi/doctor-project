//import React from 'react'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Contact from '../pages/Contact'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Doctors from '../pages/Doctors/Doctors'
import DoctorDet from '../pages/Doctors/DoctorDet'
import MyAccount from '../Dashboard/useraccount/MyAccount'
import Dashboard from '../Dashboard/doctoraccount/Dashboard'
import Protectedroute from './Protectedroute'

import {Routes, Route} from 'react-router-dom'

const Routers = () => {
  return (
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/doctors' element={<Doctors/>}></Route>
    <Route path='/doctors/:id' element={<DoctorDet/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/register' element={<Signup/>}></Route>
    <Route path='/services' element={<Services/>}></Route>
    <Route path='/user/profile/me' element={<Protectedroute allowedRoles={['patient']}><MyAccount></MyAccount></Protectedroute>}></Route>
    <Route path='/doctors/profile/me' element={<Protectedroute allowedRoles={['doctor']}><Dashboard></Dashboard></Protectedroute>}></Route>
   </Routes>
  )
}

export default Routers