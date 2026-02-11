import React from 'react'
import NavBar from '../components/NavBar'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddNote = () => {

  const[title , setTitle] = useState("");
  const[description , setDesc] = useState("");

  const navigate = useNavigate();

  const handleSubmit =  async (e) =>{
    e.preventDefault();
    try{
      const token = localStorage.getItem('token');
      
      await axios.post(
        "http://localhost:5000/api/notes",
        {title ,content :  description},
        {
            headers : {
              Authorization : `Bearer ${token}`,
           }
        }
      );
      navigate('/dashboard');
    }
    catch(error){
      console.log(error.response?.data || error.message);
    }
  }

  return (
    <div className='min-h-screen bg-gray-100 '>
      <NavBar/>
      <div className='min-h-screen flex justify-center items-center'>
          <form action="" onSubmit={handleSubmit}>
            <h2>Add New Note</h2>
            <input type="text" placeholder='Title' className='w-full border p-2 mb-3' value={title} onChange={(e)=> setTitle(e.target.value)} />
            <textarea name="" placeholder='Description ' className='w-full border p-2 mb-3' id="" value={description} onChange={(e) =>setDesc(e.target.value)}></textarea>
            <button className='w-full bg-green-500 text-white py-2 rounded' type='submit'>
              Save Note
            </button>
          </form>
      </div>
      
    </div>
  )
}

export default AddNote
