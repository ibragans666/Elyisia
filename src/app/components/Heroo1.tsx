'use client'
import React from 'react';

const Heroo1 = () => {
  return (
    <div className='relative flex items-center justify-center h-screen mb-12 overflow-hidden'>
        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50 z-20'></div>
        <div className='relative z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl'>
            <h1>Welcome to flamechaser</h1>
            <h1>Elysia</h1>
        </div>
        <video autoPlay loop muted className='absolute z-10 w-auto min-w-full min-h-full max-w-none'>
            <source src='/Herrscher of human ego.mp4'/>
        </video>
    </div>
  );
}

export default Heroo1;