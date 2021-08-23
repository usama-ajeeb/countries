import React from 'react'
import { SearchIcon } from '@heroicons/react/outline'

const Search = ({ allCountries }) => {
  return (
    <div className='flex items-center  justify-between  py-3  '>
      <div className='flex  items-center  h-10 bg-white pl-3 shadow-md'>
        <SearchIcon className='h-5 bg-white flex-grow text-gray-500 cursor-pointer ' />
        <input
          type='text'
          placeholder='Search for Country'
          className='outline-none pl-2  '
        />
      </div>
      <div className=''>
        <select name='' id='' className='px-10 outline-none h-10'>
          {allCountries.map(({ region }) => (
            <option value=''>{region}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Search
