import type { NextPage } from 'next'
import Hero1 from '../components/hero/Hero1'

const About: NextPage = () => {
  return (
    <>
      <h1 className="text-4xl mt-8 text-center font-black text-indigo-600">
        About Me
      </h1>
      <Hero1 />
    </>
  )
}

export default About
