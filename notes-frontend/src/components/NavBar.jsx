import React from 'react'
import { NavLink , useNavigate } from 'react-router-dom'


const NavBar = () => {
const navigate = useNavigate();

const handleLogout = ()=> {
  localStorage.removeItem('token');
  navigate('/')
  
}
  return (
    <div className='bg-white shadow p-4 flex justify-between items-center'>
      {/* Logo here */}
      <h1 onClick={()=>navigate('dashboard')} className='text-xl font-bold cursor-pointer'>NotesZilla</h1>
       {/* links  */}
        <div className='flex items-center gap-4'>
          <NavLink to='/dashboard' className={({isActive}) => isActive ? "bg-blue-500 text-white px-3 py-2" : "px-3 py-2 rounded hover:bg-gray-200 transition"}>DashBoard</NavLink>
          <NavLink to='/add-note' className={({isActive}) => isActive ? "bg-blue-500 text-white px-3 py-2" : "px-3 py-2 rounded hover:bg-gray-200 transition"}>Add Notes</NavLink>
        </div>

        <button onClick={handleLogout} className=' bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 transition'>
          Logout
        </button>
    </div>
  )
}

export default NavBar
