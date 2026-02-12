import React from 'react'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/DashBoard';
import AddNotes from './pages/AddNote';

import ProtectedRoutes from './components/ProtectedRoutes';

const App = () => {
  return (
   <Router>
    <Routes>
      {/* here are Public routes */}
      <Route path='/' element={<Login/>} />
      <Route path='/register' element={<Register/>} />

      {/* Here Private or Protected Routes */}
      <Route path='/dashboard' element={<ProtectedRoutes><Dashboard/></ProtectedRoutes>}  />
      <Route path='/add-note' element={<ProtectedRoutes><AddNotes/></ProtectedRoutes>}  />
      {/* <Route path='/edit-note' element={<ProtectedRoutes><EditNotes/></ProtectedRoutes>}  /> */}
    </Routes>
   </Router>
  )
}

export default App
