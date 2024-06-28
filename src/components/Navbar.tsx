import React from 'react';
import SunIcon from '@/components/icons/SunIcon';

const Navbar = () => {
  return (
    <header className='flex items-center space-x-2 mb-10'>
      <h1 className='text-3xl font-bold text-white flex-grow'>devfinder</h1>
        <span className='uppercase text-white'>Light</span>
        <button>
          <SunIcon className='fill-white' width={25}/>
        </button>
    </header>
  )
}

export default Navbar;