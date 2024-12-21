import React from 'react'

const Home = () => {
  return (
    <div className='h-screen flex justify-center items-center p-3 md:p-5 bg-[#f0f4f9]'>
        <div className='h-full flex flex-col justify-between md:justify-center items-center gap-4'>
           <div className='flex flex-col justify-center items-center gap-3'>
               <h1 className='w-full text-5xl lg:text-7xl text-left md:text-center bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent'>Password Reset <span className='text-neutral-700'>Application</span></h1>
               <p className='text-sm text-left md:text-center w-full md:w-[80%] lg:w-[70%] tracking-wide leading-6 text-neutral-800'>The task is to implement a correct password reset flow with email verification and proper update of the new password in the database for the web app.</p>
           </div>
           <div className='w-full flex flex-col md:flex-row justify-center items-center gap-3 md:gap-8'>
               <button className='w-full md:w-fit border border-blue-500 bg-blue-500 text-white rounded-xl px-5 py-2 md:py-2.5 text-sm tracking-widest hover:transition duration-200 ease-linear md:hover:scale-105 hover:shadow-btn'>Sign Up</button>
               <button className='w-full md:w-fit border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-xl px-5 py-2 md:py-2.5 text-sm tracking-widest hover:transition duration-200 ease-linear md:hover:scale-105 hover:shadow-btn'>Sign In</button>
           </div>
        </div>
    </div>
  )
}

export default Home