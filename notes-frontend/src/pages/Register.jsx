import React from 'react'
import { useState } from 'react'
import { useNavigate , Link } from 'react-router-dom'
import API from '../services/api'
const Register = () => {
  const navigate = useNavigate();

  const[formData , setFormData] =useState({
    name : "",
    email: "",
    password : "",
  })

  const[loading , setLoading ] = useState(false);
  const[error , setError] = useState(" ");
  const[sucess , setSuccess] = useState(" ");


  // Form data handleCHange

  const handleChange = (e) =>{
   setFormData({
    ...formData,
    [e.target.name] : e.target.value,
       });
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();
    setLoading(true);
    setError(" ");
    setSuccess(" ");

    try{
      const res = await API.post('/auth/register' , formData);
      setSuccess(res.data.message);

      setTimeout(()=>{
        navigate('/');
      }, 1500);
    }catch(error){
      setError(error.response?.data?.message || "Registration failed");
    } finally{
      setLoading(false);
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <form action="" onSubmit={handleSubmit} className='bg-white p-8 rounded-lg shadow-md w-96'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Register</h2>
        {error &&(
          <p className='text-red-500 text-sm mb-4'>{error}</p>
        )}
        {
          sucess && (
            <p className='text-green-600 text-sm mb-4'>{sucess}</p>
          )
        }

        <input type='text' name='name' placeholder='Full Name ' value={formData.name} onChange={handleChange} required className='w-full p-2 mb-4 border rouded' />
        <input type='email' name='email' placeholder='Email ' value={formData.email} onChange={handleChange} required className='w-full p-2 mb-4 border rouded' />
        <input type='password' name='password' placeholder='Password ' value={formData.password} onChange={handleChange} required className='w-full p-2 mb-4 border rouded' />

        <button type='submit' disabled={loading} className='w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 '>
           {loading ? "Registering..." : "Register"}

           <p>Already have an acount? {' '}
            <Link to='/login' className='text-blue-600 '>Login</Link>
           </p>
        </button>
      </form>
    </div>
  )
}

export default Register
