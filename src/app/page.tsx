import React from 'react';
import SearchIcon from  "@/components/icons/searchIcon";

const Home = () => {
  return (
    <>
      <form className='flex flex-wrap items-center gap-2 bg-blue-900 p-2 rounded-xl'>
        <span className='min-w-[20px]'>
          <SearchIcon className='fill-sky-500'
          />
        </span>
        <input type='text' placeholder='Search Github username...' className='flex-1 h-14 p-2 rounded-lg 
        bg-transparent text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-sky-500'/>
        <button className='bg-sky-500 rounded-lg py-4 px-4 text-white font-bold'>Buscar</button>
      </form>
    </>
  )
}

export default Home