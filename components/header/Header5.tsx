import React from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'

const Header5: NextPage = () => {
  return (
    <>
      {/* <!-- Section 1 --> */}
      <section className="relative py-2 bg-gray-900">
        <div className="flex items-center justify-between h-20 px-8 mx-auto max-w-7xl">
          <a
            href="#_"
            className="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-white select-none"
          >
            tails.
          </a>

          <nav className="items-center justify-center hidden space-x-8 text-gray-200 md:flex">
            <a
              href="#_"
              x-data="{ hover: false }"
              className="relative inline-block text-base font-bold text-gray-200 uppercase transition duration-150 ease hover:text-white"
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
            {/* mouse enter TODO
             */}
            <a
              href="#_"
              x-data="{ hover: false }"
              className="relative inline-block text-base font-bold text-gray-200 uppercase transition duration-150 ease hover:text-white"
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
              className="relative inline-block text-base font-bold text-gray-200 uppercase transition duration-150 ease hover:text-white"
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
              className="relative inline-block text-base font-bold text-gray-200 uppercase transition duration-150 ease hover:text-white"
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
            <div className="w-0 h-5 border border-r border-gray-700"></div>
            <a
              href="#_"
              x-data="{ hover: false }"
              className="relative inline-block ml-5 text-base font-bold text-gray-200 uppercase transition duration-150 ease hover:text-white"
            >
              <span className="block">Login</span>
              <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden">
                <span className="absolute inset-0 inline-block w-full h-1 h-full transform translate-x-0 border-t-2 border-gray-100"></span>
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
              className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm focus:ring-offset-gray-900 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Signup
            </a>
          </nav>

          {/* <!-- Mobile Button --> */}
          <div className="flex items-center justify-center h-full text-white md:hidden">
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

      {/* <!-- Section 2 --> */}
      <section className="relative py-2 bg-gradient-to-br from-purple-600 via-indigo-00 to-blue-500">
        <div className="flex items-center justify-between h-20 px-8 mx-auto max-w-7xl">
          <a
            href="#_"
            className="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-white select-none"
          >
            tails.
          </a>

          <nav className="items-center justify-center hidden space-x-8 text-gray-200 md:flex">
            <a
              href="#_"
              x-data="{ hover: false }"
              className="relative inline-block text-sm font-bold text-gray-200 uppercase transition duration-150 lg:text-base ease hover:text-white"
            >
              <span className="block">Home</span>
              <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden">
                <span
                  x-show="hover"
                  className="absolute inset-0 inline-block w-full h-full transform border-t-2 border-blue-200"
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
              className="relative inline-block text-sm font-bold text-gray-200 uppercase transition duration-150 lg:text-base ease hover:text-white"
            >
              <span className="block">Features</span>
              <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden">
                <span
                  x-show="hover"
                  className="absolute inset-0 inline-block w-full h-1 h-full transform border-t-2 border-blue-200"
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
              className="relative inline-block text-sm font-bold text-gray-200 uppercase transition duration-150 lg:text-base ease hover:text-white"
            >
              <span className="block">Pricing</span>
              <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden">
                <span
                  x-show="hover"
                  className="absolute inset-0 inline-block w-full h-1 h-full transform border-t-2 border-blue-200"
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
              className="relative inline-block text-sm font-bold text-gray-200 uppercase transition duration-150 lg:text-base ease hover:text-white"
            >
              <span className="block">Blog</span>
              <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden">
                <span
                  x-show="hover"
                  className="absolute inset-0 inline-block w-full h-1 h-full transform border-t-2 border-blue-200"
                  x-transition:enter="transition ease-out duration-300"
                  x-transition:enter-start="-translate-x-full"
                  x-transition:enter-end="translate-x-0"
                  x-transition:leave="transition ease-out duration-300"
                  x-transition:leave-start="translate-x-0"
                  x-transition:leave-end="translate-x-full"
                ></span>
              </span>
            </a>
            <div className="w-0 h-5 border border-r border-blue-700"></div>
            <a
              href="#_"
              x-data="{ hover: false }"
              className="relative inline-block ml-5 text-base font-bold text-gray-200 uppercase transition duration-150 ease hover:text-white"
            >
              <span className="block">Login</span>
              <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden">
                <span className="absolute inset-0 inline-block w-full h-1 h-full transform translate-x-0 border-t-2 border-blue-200"></span>
              </span>
              <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden">
                <span
                  x-show="hover"
                  className="absolute inset-0 inline-block w-full h-1 h-full transform border-t-2 border-white"
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
              className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-blue-500 whitespace-no-wrap border border-blue-300 rounded-md shadow-sm bg-blue-50 focus:ring-offset-blue-600 hover:bg-white hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-100"
            >
              Signup
            </a>
          </nav>

          {/* <!-- Mobile Button --> */}
          <div className="flex items-center justify-center h-full text-white md:hidden">
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

      {/* <!-- Section 3 --> */}
      <section className="relative py-2 bg-gradient-to-br from-purple-600 to-indigo-600">
        <div className="flex items-center justify-between h-20 px-8 mx-auto max-w-7xl">
          <a
            href="#_"
            className="relative z-10 flex items-center w-auto text-2xl font-black leading-none text-white select-none"
          >
            tails.
          </a>

          <nav className="items-center justify-center hidden space-x-5 text-gray-200 lg:space-x-8 md:flex">
            <a
              href="#_"
              x-data="{ hover: false }"
              className="relative inline-block px-0.5 lg:px-1 text-base font-bold text-gray-200 uppercase transition duration-150 ease hover:text-white"
            >
              <span className="block">Home</span>
              <span className="absolute bottom-0 left-0 inline-block w-full h-2 -mb-2 overflow-hidden">
                <span
                  x-show="!hover"
                  className="absolute inset-0 inline-block w-full h-full transform translate-x-0 bg-purple-600"
                  x-transition:enter="transition ease-out duration-300"
                  x-transition:enter-start="-translate-x-full"
                  x-transition:enter-end="translate-x-0"
                  x-transition:leave="transition ease-out duration-300"
                  x-transition:leave-start="translate-x-0"
                  x-transition:leave-end="translate-x-full"
                ></span>
                <svg
                  className="w-auto h-full text-pink-400 fill-current"
                  viewBox="0 0 84 6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g stroke="none" stroke-width="1" fill-rule="evenodd">
                    <g transform="translate(-8)" fill-rule="nonzero">
                      <path d="M90.3.9c-1.8 0-2.8.7-3.6 1.4-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.9 1-1.2 1.5.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9.6 0 1-.4 1-1s-.5-1-1-1z"></path>
                    </g>
                  </g>
                </svg>
              </span>
            </a>
            <a
              href="#_"
              x-data="{ hover: false }"
              className="relative inline-block px-0.5 lg:px-1 text-base font-bold text-gray-200 uppercase transition duration-150 ease hover:text-white"
            >
              <span className="block">Features</span>
              <span className="absolute bottom-0 left-0 inline-block w-full h-2 -mb-2 overflow-hidden">
                <span
                  x-show="!hover"
                  className="absolute inset-0 inline-block w-full h-full transform translate-x-0 bg-purple-600"
                  x-transition:enter="transition ease-out duration-300"
                  x-transition:enter-start="-translate-x-full"
                  x-transition:enter-end="translate-x-0"
                  x-transition:leave="transition ease-out duration-300"
                  x-transition:leave-start="translate-x-0"
                  x-transition:leave-end="translate-x-full"
                ></span>
                <svg
                  className="w-auto h-full text-pink-400 fill-current"
                  viewBox="0 0 84 6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g stroke="none" stroke-width="1" fill-rule="evenodd">
                    <g transform="translate(-8)" fill-rule="nonzero">
                      <path d="M90.3.9c-1.8 0-2.8.7-3.6 1.4-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.9 1-1.2 1.5.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9.6 0 1-.4 1-1s-.5-1-1-1z"></path>
                    </g>
                  </g>
                </svg>
              </span>
            </a>
            <a
              href="#_"
              x-data="{ hover: false }"
              className="relative inline-block px-0.5 lg:px-1 text-base font-bold text-gray-200 uppercase transition duration-150 ease hover:text-white"
            >
              <span className="block">Pricing</span>
              <span className="absolute bottom-0 left-0 inline-block w-full h-2 -mb-2 overflow-hidden">
                <span
                  x-show="!hover"
                  className="absolute inset-0 inline-block w-full h-full transform translate-x-0 bg-purple-600"
                  x-transition:enter="transition ease-out duration-300"
                  x-transition:enter-start="-translate-x-full"
                  x-transition:enter-end="translate-x-0"
                  x-transition:leave="transition ease-out duration-300"
                  x-transition:leave-start="translate-x-0"
                  x-transition:leave-end="translate-x-full"
                ></span>
                <svg
                  className="w-auto h-full text-pink-400 fill-current"
                  viewBox="0 0 84 6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g stroke="none" stroke-width="1" fill-rule="evenodd">
                    <g transform="translate(-8)" fill-rule="nonzero">
                      <path d="M90.3.9c-1.8 0-2.8.7-3.6 1.4-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.9 1-1.2 1.5.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9.6 0 1-.4 1-1s-.5-1-1-1z"></path>
                    </g>
                  </g>
                </svg>
              </span>
            </a>
            <a
              href="#_"
              x-data="{ hover: false }"
              className="relative inline-block px-0.5 lg:px-1 text-base font-bold text-gray-200 uppercase transition duration-150 ease hover:text-white"
            >
              <span className="block">Blog</span>
              <span className="absolute bottom-0 left-0 inline-block w-full h-2 -mb-2 overflow-hidden">
                <span
                  x-show="!hover"
                  className="absolute inset-0 inline-block w-full h-full transform translate-x-0 bg-purple-600"
                  x-transition:enter="transition ease-out duration-300"
                  x-transition:enter-start="-translate-x-full"
                  x-transition:enter-end="translate-x-0"
                  x-transition:leave="transition ease-out duration-300"
                  x-transition:leave-start="translate-x-0"
                  x-transition:leave-end="translate-x-full"
                ></span>
                <svg
                  className="w-auto h-full text-pink-400 fill-current"
                  viewBox="0 0 84 6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g stroke="none" stroke-width="1" fill-rule="evenodd">
                    <g transform="translate(-8)" fill-rule="nonzero">
                      <path d="M90.3.9c-1.8 0-2.8.7-3.6 1.4-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.9 1-1.2 1.5.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9.6 0 1-.4 1-1s-.5-1-1-1z"></path>
                    </g>
                  </g>
                </svg>
              </span>
            </a>
            <div className="w-0 h-5 border border-r border-purple-300 opacity-25"></div>
            <a
              href="#_"
              x-data="{ hover: false }"
              className="relative inline-block px-0.5 lg:px-1 text-base font-bold text-gray-200 uppercase transition duration-150 ease hover:text-white"
            >
              <span className="block">Login</span>
              <span className="absolute bottom-0 left-0 inline-block w-full h-2 -mb-2 overflow-hidden">
                <span
                  x-show="!hover"
                  className="absolute inset-0 inline-block w-full h-full transform translate-x-0 bg-purple-600"
                  x-transition:enter="transition ease-out duration-300"
                  x-transition:enter-start="-translate-x-full"
                  x-transition:enter-end="translate-x-0"
                  x-transition:leave="transition ease-out duration-300"
                  x-transition:leave-start="translate-x-0"
                  x-transition:leave-end="translate-x-full"
                ></span>
                <svg
                  className="w-auto h-full text-pink-400 fill-current"
                  viewBox="0 0 84 6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g stroke="none" stroke-width="1" fill-rule="evenodd">
                    <g transform="translate(-8)" fill-rule="nonzero">
                      <path d="M90.3.9c-1.8 0-2.8.7-3.6 1.4-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.9 1-1.2 1.5.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9.6 0 1-.4 1-1s-.5-1-1-1z"></path>
                    </g>
                  </g>
                </svg>
              </span>
            </a>
            <a
              href="#_"
              className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-pink-400 border border-pink-400 rounded-md shadow-sm focus:ring-offset-blue-600 hover:bg-pink-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-400"
            >
              Signup
            </a>
          </nav>

          {/* <!-- Mobile Button --> */}
          <div className="flex items-center justify-center h-full text-white md:hidden">
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

export default Header5
