import React from 'react'
import Image from 'next/image'

const CountryCard = ({ flag, name, population, region, capital }) => {
  return (
    <div className='shadow-md   rounded-md bg-white  pb-4 max-w-xs  '>
      <div className='relative h-40 w-auto'>
        <Image src={flag} objectFit='' layout='fill' className='rounded-md' />
      </div>
      <h1 className='font-bold text-center pt-6 pb-6'>{name}</h1>
      <div className=' grid text-left ml-6 gap-y-2'>
        <p>
          <span className='font-semibold'>Population</span>: {population}
        </p>
        <p>
          <span className='font-semibold'>Region</span>: {region}
        </p>
        <p>
          <span className='font-semibold'>Capital</span>: {capital}
        </p>
      </div>
    </div>
  )
}

export default CountryCard
