
import Home from './pages/home/Home'
import List from './pages/list/List';
import New from './pages/new/New';
import Login from './pages/login/Login';
import Single from './pages/single/Single';
import React from 'react'
import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element = {<Home />} />
          <Route path='login' element = {<Login />} />
          
          <Route path='user'>
            <Route index element={<List />} />
            <Route path=':userid' element =  {<Single />} />
            <Route path='new' element = {<New />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    
      
    </div>
  )
}

export default App
