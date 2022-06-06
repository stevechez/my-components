import React from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'

const Header3: NextPage = () => {
  return (
    <>
      <header>
        <div className="flex flex-col flex-wrap items-center px-8 py-6 mx-auto max-w-7xl md:flex-row">
          <a
            href="#_"
            className="flex items-center order-first mb-4 font-medium text-gray-900 lg:order-none lg:w-auto title-font lg:items-center lg:justify-center md:mb-0"
          >
            <span className="text-xl font-black leading-none text-gray-900 select-none logo">
              tails<span className="text-indigo-500">.</span>
            </span>
          </a>
          <nav className="flex flex-wrap items-center justify-center text-base font-bold tracking-tight md:ml-auto">
            <a href="#_" className="mr-5 hover:text-gray-900">
              Home
            </a>
            <a href="#_" className="mr-5 hover:text-gray-900">
              Features
            </a>
            <a href="#_" className="mr-5 hover:text-gray-900">
              Pricing
            </a>
            <a href="#_" className="mr-5 hover:text-gray-900">
              Blog
            </a>
          </nav>
          <button className="inline-flex items-center px-3 py-2 mt-4 text-sm font-bold text-gray-700 bg-gray-200 border-0 rounded focus:outline-none hover:bg-gray-300 md:mt-0">
            Try For Free
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  )
}

export default Header3
