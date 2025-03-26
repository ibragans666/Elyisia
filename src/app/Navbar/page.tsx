'use client'

import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 h-full z-10 bg-white shadow-lg'>
        <ul className='flex flex-col space-y-8 justify-center pt-3'>
            <li className='px-4 py-2'>1</li>
            <li className='px-4 py-2'>2</li>
            <li className='px-4 py-2'>3</li>
            <li className='px-4 py-2'>4</li>
        </ul>
    </div>
  )
}

export default Navbar