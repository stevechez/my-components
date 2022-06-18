import React from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'

const Hero7: NextPage = () => {
  return (
    <>
      <section className="relative w-full pt-20 bg-gradient-to-b from-purple-900 via-blue-900 to-purple-500">
        <div className="relative top-0 left-0 z-0 h-full mx-auto opacity-25">
          <div className="relative opacity-50">
            <div className="absolute left-0 w-full h-56 -mt-20 -mt-48 -ml-48 transform -rotate-45 bg-purple-200 rounded-l-lg opacity-25 sm:-ml-56"></div>
            <div className="absolute w-full h-64 min-w-full -mt-2 -ml-6 transform -rotate-45 bg-indigo-200 rounded-l-lg opacity-25 sm:-ml-32 sm:mt-20"></div>
            <div className="absolute left-0 w-full h-64 mt-24 ml-64 transform -rotate-45 bg-blue-200 rounded-lg rounded-l-lg opacity-25 third"></div>
          </div>
        </div>
        <div className="relative z-10 max-w-3xl px-12 mx-auto space-y-5 text-center lg:px-0">
          <h1 className="text-6xl font-black text-white lg:text-7xl">
            Design. Build. Deploy.
          </h1>
          <p className="text-lg font-medium text-gray-200">
            The perfect starting point for your next project. These templates
            and designs have been crafted to help you get the best conversion
            rate possible. Design, build, and ship 🚀.
          </p>
          <a
            href="#_"
            className="py-3.5 inline-block uppercase px-8 bg-gradient-to-br from-pink-400 to-pink-600 text-white rounded-full font-medium text-lg"
          >
            Join Today
          </a>
        </div>
        <div className="relative z-30 max-w-4xl px-4 mx-auto mt-16 lg:px-0">
          <img
            className="rounded-t-lg shadow-2xl"
            src="https://cdn.devdojo.com/images/june2021/hero-banner.jpg"
          />
        </div>
      </section>
    </>
  )
}

export default Hero7
