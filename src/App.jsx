
import Home from './pages/home/Home'
import List from './pages/list/List';
import New from './pages/new/New';
import Login from './pages/login/Login';
import Single from './pages/single/Single';
import "./style/dark.scss"
import React from 'react'
import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { productInputs, userInputs } from './formSource';



function App() {
  return (
    <div className="App dark">
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element = {<Home />} />
          <Route path='login' element = {<Login />} />
          
          <Route path='user'>
            <Route index element={<List />} />
            <Route path=':userid' element =  {<Single />} />
            <Route path='new' element = {<New inputs = {userInputs} title = "Add New User"/>} />
          </Route>
          <Route path='products'>
            <Route index element={<List />} />
            <Route path=':userid' element =  {<Single />} />
            <Route path='new' element = {<New  inputs = {productInputs} title = "Add New Products"/>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    
      
    </div>
  )
}

export default App
