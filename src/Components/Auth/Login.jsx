import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../utils/supabaseClient';
import { toast } from 'react-toastify';

const Login = () => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(false);
  const Navigate = useNavigate();
  const emailref = useRef();
  const passwordref = useRef();
  const handlesubmit = () => {
    Navigate("/signup");
  }
  const handlelogin = async () => {
    try {
      const email = emailref.current.value;
      const password = passwordref.current.value;
      if (!email || !password) {
        toast.error("Please fill all the fields");
        return;
      }
      setloading(true);
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (error) {
        setloading(false);
        toast.error("Invalid email or passw")
        return;
      }
      setuser(data.user);
      toast.success("Login Successfull");
      setTimeout(() => {
        setloading(false);
        Navigate("/dashboard");
      }, 1200);

    } catch (err) {
      setloading(false);
      toast.error("Error in Login")
      return;
    }
  }

  if(loading || user){
    return (
       <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-xl font-semibold text-gray-700 animate-pulse">Loading...</div>
      </div>
    );
  }
 
  return (

    <div className="login min-h-screen bg-gray-100 flex items-center justify-center ">
      <div className="item p-[20px] border-2 w-full max-w-md space-y-8 bg-white rounded-2xl shadow-lg">
        <div className="text-center">
          <h1 className='text-2xl font-bold'>Welcome</h1>
          <p className="mt-2 text-gray-600">Please sign in to your account</p>
        </div>
        
        <form className='space-y-4 mt-8'>
          <div className='flex flex-col m-2.5'>
            <label htmlFor="email" className='text-gray-900'>Email</label>
            <input ref={emailref} type="email" name='email' id='email' placeholder='email12@gamil.com'
              className='border border-gray-400 mt-1 px-2 py-2 rounded-[5px] focus:outline-blue-300'
            />
          </div>
          <div className='flex flex-col mt-6 m-2.5'>
            <label htmlFor="password" className='text-gray-900'>Password</label>
            <input ref={passwordref} type="password" name='password' id='password' placeholder='********'
              className='border border-gray-400 mt-1 p-[8px] rounded-[5px] focus:outline-blue-300 '
            />
          </div>
          <div className='flex items-center justify-between mt-4 m-2.5 p-2'>
            <div className='flex items-center justify-center'>
              <input type="checkbox" />
              <span className='ml-2 text-gray-700'>Remember me</span>
            </div>
            <div>
              <a href="#" className='text-blue-500 hover:underline'>Forgot password?</a>
            </div>
          </div>
          <div className='mt-6'>
            <button
              onClick={handlelogin}
              type='button' className=' w-full flex items-center justify-center bg-purple-600 p-[6px] rounded-[6px] hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-300'>Login</button>
          </div>
        </form>
        <div>
          <p className='text-center text-gray-500'>Don't have an account? <a onClick={handlesubmit} className='text-purple-500 hover:underline cursor-pointer'>Sign up</a></p>
        </div>

      </div>
    </div>





  )
}

export default Login