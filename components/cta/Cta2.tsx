import React from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'

const Cta2: NextPage = () => {
  return (
    <>
      <section className="relative py-24 bg-white">
        <Image
          className=""
          src="https://cdn.devdojo.com/images/december2020/cta-bg.jpeg"
          alt="img1"
          objectFit="cover"
          objectPosition="bottom"
          layout="fill"
        />
        <div className="absolute inset-0 block w-full h-full opacity-25 bg-gradient-to-br from-transparent via-black to-transparent lg:hidden"></div>
        <div className="flex flex-col items-center justify-between px-10 mx-auto max-w-7xl xl:px-12 lg:flex-row">
          <div className="relative mb-6 lg:mb-0">
            <h2 className="w-full mx-auto mb-2 text-4xl font-extrabold leading-none text-center text-white md:text-5xl xl:text-6xl lg:text-left">
              Designed with you in mind.
            </h2>
            <p className="w-full max-w-3xl mx-auto text-base text-center text-gray-100 xl:text-xl lg:text-left">
              We have hand-crafted the best designs and templates, optimized for
              conversion.
            </p>
          </div>
          <a
            href="#_"
            className="relative flex-shrink-0 px-10 py-5 text-xl font-medium text-center text-white bg-blue-600 rounded-lg lg:text-2xl focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 focus:outline-none"
          >
            Sign Up Today
          </a>
        </div>
      </section>
    </>
  )
}

export default Cta2
