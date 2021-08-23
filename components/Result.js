import React from 'react'
import CountryCard from './CountryCard'
import Search from './Search'

const Result = ({ allCountries }) => {
  return (
    <div className=''>
      <div>
        <Search allCountries={allCountries} />
      </div>
      <div className='grid  mt-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto  gap-14   '>
        {allCountries.map(({ flag, name, population, region, capital }) => (
          <CountryCard
            key={name}
            flag={flag}
            name={name}
            population={population}
            region={region}
            capital={capital}
          />
        ))}
      </div>
    </div>
  )
}

export default Result
