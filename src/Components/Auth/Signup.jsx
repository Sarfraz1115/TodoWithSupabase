import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../utils/supabaseClient';
import { toast } from 'react-toastify';


const Signup = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [fullName, setName] = useState('');
  const Navigate = useNavigate();

  const handlesignup = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });
    if (error) {
      console.log("Error in Singup", error.message);
      // alert("Error in Signup");
      toast.error("Email already used, please use another email")
      return;
    }
    if (data) {
      console.log("Signup Successfull", data);
      toast.success("Signup Successfull, Please check your email for verification link")
      Navigate("/login");
    }
    const usermeta = await supabase.auth.getUser();
    const user = usermeta.data.user;
    console.log("User Metadata", user.user_metadata);

  }

  const handlelogin = () => {
    Navigate("/login");
  }
  return (
    <div className="login min-h-screen bg-gray-100 flex items-center justify-center ">
      <div className="item p-[20px] border-2 w-full max-w-md space-y-8 bg-white rounded-2xl shadow-lg">
        <div className="text-center">
          <h1 className='text-2xl font-bold'>Welcome To TaskMaster</h1>
          <p className="mt-2 text-gray-600">Please Create an Account</p>
        </div>



        <form className='space-y-4 mt-8'>
          <div className='flex flex-col m-2.5'>
            <label htmlFor='text' className='text-gray-900'>Name</label>
            <input type="text" name='text' id='name' placeholder='Syed Sarfraz'
              value={fullName} onChange={(e) => setName(e.target.value)}
              className='border border-gray-400 mt-1 px-2 py-2 rounded-[5px] focus:outline-blue-300'
            />
          </div>
          <div className='flex flex-col m-2.5'>
            <label htmlFor="email" className='text-gray-900'>Email</label>
            <input type="email" name='email' id='email' placeholder='email12@gamil.com'
              value={email} onChange={(e) => setemail(e.target.value)}
              className='border border-gray-400 mt-1 px-2 py-2 rounded-[5px] focus:outline-blue-300'
            />
          </div>
          <div className='flex flex-col mt-6 m-2.5'>
            <label htmlFor="password" className='text-gray-900'>Password</label>
            <input type="password" name='password' id='password' placeholder='********'
              value={password} onChange={(e) => setpassword(e.target.value)}
              className='border border-gray-400 mt-1 p-[8px] rounded-[5px] focus:outline-blue-300 '
            />
          </div>
          <div className='mt-6'>
            <button type='button' className=' w-full flex items-center justify-center bg-purple-600 p-[6px] rounded-[6px] hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-300'
              onClick={handlesignup}
            >Submit</button>
          </div>
        </form>



        <div>
          <p className='text-center text-gray-600'>Already have an account? <a onClick={handlelogin} className='text-purple-500 hover:underline cursor-pointer'>Login</a></p>


        </div>

      </div>
    </div>

  )
}

export default Signup