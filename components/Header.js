import React from 'react'

import { MoonIcon } from '@heroicons/react/outline'

const Header = () => {
  return (
    <div className='flex items-center justify-between p-8 shadow-md bg-white'>
      <div className='cursor-pointer'>
        <h1 className='font-bold'>Where in the World?</h1>
      </div>
      <div className='flex items-center space-x-2 cursor-pointer'>
        <MoonIcon className='h-5' />
        <p className='font-semibold '>Dark Mode</p>
      </div>
    </div>
  )
}

export default Header
