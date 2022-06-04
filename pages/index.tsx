import type { NextPage } from 'next'
import Footer1 from '../components/footer/Footer1'
import Hero1 from '../components/hero/Hero1'
import Header1 from '../components/header/Header1'
import Features1 from '../components/features/Features1'

const Home: NextPage = () => {
  return (
    <>
      <Hero1 />
      <Features1 />
    </>
  )
}

export default Home
