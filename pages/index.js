import Head from 'next/head'
import Header from '../components/Header'
import Result from '../components/Result'

// end points: https://restcountries.eu/#api-endpoints-all

export default function Home({ allCountries }) {
  return (
    <div className='bg-gray-100'>
      <Header />
      <main className=' flex  flex-col max-w-7xl mt-6 gap-5 mx-auto '>
        <Result allCountries={allCountries} />
      </main>

      {/* Results */}
    </div>
  )
}

export async function getStaticProps() {
  const allCountries = await fetch('https://restcountries.eu/rest/v2/all').then(
    (res) => res.json()
  )

  return {
    props: {
      allCountries: allCountries,
    },
  }
}
