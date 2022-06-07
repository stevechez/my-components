import React from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'

const Header4: NextPage = () => {
  return (
    <>
      <section className="w-full px-8 text-gray-700 bg-white body-font">
        <div className="container flex flex-col flex-wrap items-center py-5 mx-auto max-w-7xl md:flex-row">
          <nav className="flex flex-wrap items-center pb-5 text-base md:w-2/5 md:pb-0">
            <a
              href="#_"
              className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
            >
              Home
            </a>
            <a
              href="#_"
              className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
            >
              Features
            </a>
            <a
              href="#_"
              className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
            >
              Pricing
            </a>
            <a
              href="#_"
              className="font-medium leading-6 text-gray-600 md:mr-5 hover:text-gray-900"
            >
              Blog
            </a>
          </nav>
          <a
            href="#_"
            className="flex items-center order-first mb-6 font-medium text-gray-900 md:order-none md:w-1/5 title-font md:items-center md:justify-center md:mb-0"
          >
            <span className="text-xl font-black leading-none text-gray-900 select-none logo">
              tails<span className="text-indigo-600">.</span>
            </span>
          </a>
          <div className="inline-flex items-center space-x-6 md:w-2/5 md:justify-end">
            <a
              href="#_"
              className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900"
            >
              Sign in
            </a>
            <a
              href="#_"
              className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              Sign up
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header4
