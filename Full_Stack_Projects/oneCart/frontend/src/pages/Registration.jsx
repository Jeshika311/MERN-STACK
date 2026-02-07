import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import google from '../assets/google.png'
import { authDataContext } from '../context/authContext'
import axios from 'axios'

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false)
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let {serverUrl} = useContext(authDataContext)
  let navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(`${serverUrl}/api/auth/register`, {
        name,
        email,
        password
      }, { withCredentials: true })
      console.log(result.data)
    }
    catch(error) {
      console.log(error)
    }
  }

  return (
    <div className='w-[100vw] h-[100vh] bg-gradient-to-b from-[#141414] to-[#0c2025] text-[white] flex flex-col items-center justify-start'>
      <div className='w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer' onClick={() => navigate('/')}>
        <img src="/vcart-logo.png" alt="logo" className='w-[30px] h-[30px]' />
        <h1 className='text-[22px] font-sans'>OneCart</h1>
      </div>

      <main className='flex-1 w-full flex flex-col items-center justify-center gap-6 px-4'>
        <div className='text-center'>
          <h2 className='text-[25px] font-semibold'>Registration Page</h2>
          <p className='text-[16px]'>Welcome to OneCart, Place your order</p>
        </div>

        <div className='max-w-[500px] w-[90%] bg-[#00000025] border-[1px] border-[#96969635] backdrop-blur-2xl rounded-lg shadow-lg flex items-center justify-center p-8'>
          <form className='w-full flex flex-col items-center justify-start gap-5' action="" onSubmit={handleSignup}>
            <div className='w-full'>
              <label className='block text-sm font-medium mb-2'>Username</label>
              <input type='text' placeholder='Enter your username' className='w-full px-4 py-2 bg-[#1a1a1a] border border-[#96969635] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#42656cae]' onChange={(e) => setName(e.target.value)} value={name}
              />
            </div>

            <div className='w-full'>
              <label className='block text-sm font-medium mb-2'>Email</label>
              <input type='email' placeholder='Enter your email' className='w-full px-4 py-2 bg-[#1a1a1a] border border-[#96969635] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#42656cae]' onChange={(e) => setEmail(e.target.value)} value={email}
              />
            </div>

            <div className='w-full'>
              <label className='block text-sm font-medium mb-2'>Password</label>
              <div className='relative'>
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  placeholder='Enter your password' 
                  className='w-full px-4 py-2 pr-10 bg-[#1a1a1a] border border-[#96969635] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#42656cae]' 
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <button 
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#42656cae] cursor-pointer'
                >
                  {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                </button>
              </div>
            </div>

            <button type='submit' className='w-full h-11 bg-[#42656cae] rounded-lg flex items-center justify-center gap-2 cursor-pointer text-white text-[16px] font-medium hover:bg-[#5a7a8f] transition mt-2'>
              Create Account
            </button>

            <div className='relative w-full h-px bg-[#96969635] my-2'>
              <span className='absolute left-1/2 transform -translate-x-1/2 -top-3 bg-[#0c2025] px-2 text-xs text-gray-400'>Or</span>
            </div>

            <button type='button' className='w-full h-11 bg-[#42656cae] rounded-lg flex items-center justify-center gap-3 cursor-pointer text-white text-[16px] hover:bg-[#5a7a8f] transition'>
              <img src={google} alt='Google Logo' className='w-5 h-5' />
              <span>Sign up with Google</span>
            </button>

            <div className='w-full text-center text-sm text-gray-400 mt-4'>
              Do you have any account? <span className='text-[#5a7a8f] cursor-pointer hover:text-[#5a7a8f]' onClick={() => navigate('/login')}>Login</span>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Registration
