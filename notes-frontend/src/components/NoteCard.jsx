import React from 'react'

const NoteCard = ({note , onEdit, onDelete , editId, editTitle , editContent, setEditTitle , setEditContent, onUpdate, onCancel }) => {
  const isEditing = editId === note._id;
  return (
    <div>
      {
        isEditing ? (
          <>
          <input type="text" className='border p-2 w-full mb-2 '  value={editTitle} onChange={(e)=>setEditTitle(e.target.value)} />
          <textarea name="" className='border p-2 w-full mb-2 ' value={editContent} onChange={(e) =>setEditContent(e.target.value)} id=""></textarea>
          <div className='flex gap-2 mt-4'>
            <button className='bg-gray-400 rounded p-1 px-2' onClick={()=>onUpdate(note._id)}>Save</button>
            <button className='bg-gray-400 rounded p-1 px-2' onClick= {onCancel}>Cancel</button>

          </div>
          </>
        ):(
      
          <div className='bg-white p-5 rounded -xl shadow '>
        <h2 className='text-lg font-semibold'>
          {note.title}
        </h2>
        <p className='text-gray-600 text-sm'>
          {note.content}
        </p>
         <div className='flex gap-2 mt-4'>
          <button className='bg-gray-400 rounded p-1 px-2' onClick={() => onEdit(note)}>
            Edit
          </button>
          <button className='bg-gray-400 rounded p-1 px-2' onClick={()=>onDelete(note._id)}>
            Delete
          </button>
         </div>
      </div>
        )}
    </div>
  )
}

export default NoteCard
