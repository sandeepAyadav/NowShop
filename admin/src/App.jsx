import React from 'react'
import Home from './pages/Home';
import {Route, Routes} from 'react-router-dom'

import Orders from './pages/Orders';
import Lists from './pages/Lists';
import Add from './pages/Add';
import Login from './pages/Login';
function App(){
  return (    <>
  sandeep
  <Routes>
    <Route path = "/" element = {<Home/>}/>
    <Route path = "/login" element = {<Login/>}/>
    <Route path = "/orders" element = {<Orders/>}/>
    <Route path = "/lists" element = {<Lists/>}/>
    <Route path = "/add" element = {<Add/>}/>
  </Routes>
  
  </> );
}

export default App

