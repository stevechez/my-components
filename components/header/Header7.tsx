import React from 'react'
import type { NextPage } from 'next'

const Header7: NextPage = () => {
  return (
    <>
      <section className="relative bg-white">
        <div className="flex items-center justify-between h-24 px-8 mx-auto max-w-7xl">
          <a
            href="#_"
            className="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-black select-none"
          >
            tails.
          </a>

          <nav className="items-center justify-center hidden space-x-8 text-gray-200 md:flex">
            {/* TODO FIX THIS   */}
            <a
              href="#_"
              x-data="{ hover: false }"
              className="relative inline-block text-base font-bold text-gray-700 uppercase transition duration-150 ease hover:text-gray-900"
            >
              <span className="block">Home</span>
              <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden">
                <span
                  x-show="hover"
                  className="absolute inset-0 inline-block w-full h-1 h-full transform border-t-2 border-blue-600"
                  x-transition:enter="transition ease-out duration-300"
                  x-transition:enter-start="-translate-x-full"
                  x-transition:enter-end="translate-x-0"
                  x-transition:leave="transition ease-out duration-300"
                  x-transition:leave-start="translate-x-0"
                  x-transition:leave-end="translate-x-full"
                ></span>
              </span>
            </a>
            <a
              href="#_"
              x-data="{ hover: false }"
              className="relative inline-block text-base font-bold text-gray-700 uppercase transition duration-150 ease hover:text-gray-900"
            >
              <span className="block">Features</span>
              <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden">
                <span
                  x-show="hover"
                  className="absolute inset-0 inline-block w-full h-1 h-full transform border-t-2 border-blue-600"
                  x-transition:enter="transition ease-out duration-300"
                  x-transition:enter-start="-translate-x-full"
                  x-transition:enter-end="translate-x-0"
                  x-transition:leave="transition ease-out duration-300"
                  x-transition:leave-start="translate-x-0"
                  x-transition:leave-end="translate-x-full"
                ></span>
              </span>
            </a>
            <a
              href="#_"
              x-data="{ hover: false }"
              className="relative inline-block text-base font-bold text-gray-700 uppercase transition duration-150 ease hover:text-gray-900"
            >
              <span className="block">Pricing</span>
              <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden">
                <span
                  x-show="hover"
                  className="absolute inset-0 inline-block w-full h-1 h-full transform border-t-2 border-blue-600"
                  x-transition:enter="transition ease-out duration-300"
                  x-transition:enter-start="-translate-x-full"
                  x-transition:enter-end="translate-x-0"
                  x-transition:leave="transition ease-out duration-300"
                  x-transition:leave-start="translate-x-0"
                  x-transition:leave-end="translate-x-full"
                ></span>
              </span>
            </a>
            <a
              href="#_"
              x-data="{ hover: false }"
              className="relative inline-block text-base font-bold text-gray-700 uppercase transition duration-150 ease hover:text-gray-900"
            >
              <span className="block">Blog</span>
              <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden">
                <span
                  x-show="hover"
                  className="absolute inset-0 inline-block w-full h-1 h-full transform border-t-2 border-blue-600"
                  x-transition:enter="transition ease-out duration-300"
                  x-transition:enter-start="-translate-x-full"
                  x-transition:enter-end="translate-x-0"
                  x-transition:leave="transition ease-out duration-300"
                  x-transition:leave-start="translate-x-0"
                  x-transition:leave-end="translate-x-full"
                ></span>
              </span>
            </a>
            <div className="w-0 h-5 border border-r border-gray-200"></div>
            <a
              href="#_"
              x-data="{ hover: false }"
              className="relative inline-block text-base font-bold text-gray-700 uppercase transition duration-150 ease hover:text-gray-900white"
            >
              <span className="block">Login</span>
              <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden">
                <span className="absolute inset-0 inline-block w-full h-1 h-full transform translate-x-0 border-t-2 border-gray-500"></span>
              </span>
              <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden">
                <span
                  x-show="hover"
                  className="absolute inset-0 inline-block w-full h-1 h-full transform border-t-2 border-blue-600"
                  x-transition:enter="transition ease-out duration-300"
                  x-transition:enter-start="-translate-x-full"
                  x-transition:enter-end="translate-x-0"
                  x-transition:leave="transition ease-out duration-300"
                  x-transition:leave-start="translate-x-0"
                  x-transition:leave-end="translate-x-full"
                ></span>
              </span>
            </a>
            <a
              href="#_"
              className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Signup
            </a>
          </nav>

          {/* <!-- Mobile Button --> */}
          <div className="flex items-center justify-center h-full md:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 8h16M4 16h16"
              ></path>
            </svg>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header7
