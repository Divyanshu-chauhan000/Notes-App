import React from 'react'
import { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import NoteCard from '../components/NoteCard'
import axios from 'axios';

const DashBoard = () => {
   const [notes, setNotes] = useState([]);
   const[editId, setEditId] = useState(null);
   const[editTitle , setEditTitle] = useState("");
   const[editContent , setEditContent] = useState("");

   useEffect(()=>{
    const fetchNotes =  async () =>{
      try{
        const token = localStorage.getItem('token');

        const res = await axios.get(
          "http://localhost:5000/api/notes",
          {
            headers : {
                Authorization :`Bearer ${token}`,
          },
          }
        );
        setNotes(res.data);
      }catch(error){
        console.log(error.response?.data || error.message)
      }
    };
      fetchNotes();
   },[]);

   const handleDelete = async (id)=>{
      try{
        const token = localStorage.getItem('token');

        await axios.delete(
            `http://localhost:5000/api/notes/${id}`,
            {
              headers : {
                Authorization : `Bearer ${token}`,
              },
            }
        );
        setNotes(notes.filter((note) => note._id !== id));
      }catch(error){
        console.log(error.response?.data || error.message);
      }
   }

   const handleEdit = (note)=>{
       setEditId(note._id);
       setEditTitle(note.title);
       setEditContent(note.content);
   }
   const handleUpdate = async (id) => {
  try {
    const token = localStorage.getItem("token");

    const res = await axios.put(
      `http://localhost:5000/api/notes/${id}`,
      {
        title: editTitle,
        content: editContent,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setNotes(
      notes.map((note) =>
        note._id === id ? res.data : note
      )
    );

    setEditId(null);

  } catch (error) {
    console.log(error.response?.data || error.message);
  }
};

 const handleCancel= ()=>{
  setEditId(null);
 }
   

  return (
    <div className='min-h-screen bg-gray-100 '>
      <NavBar/>
      <div className='p-6 grid md:grid-cols-3 gap-6'>
       {notes.map((note)=>(
        <NoteCard key={note._id} note={note} onEdit={handleEdit} onDelete={handleDelete} editId={editId} editTitle={editTitle} editContent={editContent} setEditTitle={setEditTitle} setEditContent={setEditContent} onUpdate = {handleUpdate} />
       ))}
      </div>
      
    </div>
  )
}

export default DashBoard
