import React from 'react'
import { useState  } from 'react'
import { useNavigate , Link } from 'react-router-dom'
import API from '../services/api'

const Login = () => {
  const navigate = useNavigate();

  const[formData, setFormData] = useState({
    email : "",
    password : "",
  });

  const[loading , setLoading ] = useState(false);
  const[error , setError] = useState('');

  // handleChange of input

  const handleChange = (e) =>{
    setFormData({
      ...formData,
      [e.target.name] : e.target.value,
    });
  }

  // handleSubmit for submit button of form 
  const handleSubmit = async (e) =>{
    e.preventDefault();
    setLoading(true);
    setError('');

    try{
      const res = await API.post('/auth/login' , formData);

      localStorage.setItem('token' , res.data.token);

      navigate('/dashboard');
    }catch(error){
      setError.apply(error.response?.data?.message || 'login Failed');
    }finally{
      setLoading(false);
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <form action="" onSubmit={handleSubmit} className='bg-white p-8 rounded-lg shadow-md w-96'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Login</h2>
        {error && (
          <p className='text-red-500 text-sm mb-4'>{error}</p>
        )}

        <input type="email" name='email' placeholder='Email' value={formData.email} onChange={handleChange} required className='w-full p-2 mb-4 border rounded'/>
        <input type="password" name='password' placeholder='Password' value={formData.password} required onChange={handleChange} className='w-full p-2 mb-4 border rounded'/>
        <button type='submit' disabled={loading} className='w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 '>
        {loading ? "Logging in..." : "Login"}
        </button>

        <p>Don't have an account?{" "}
          <Link to='/register' className="text-blue-600">
          Register
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Login
