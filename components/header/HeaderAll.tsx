import React from 'react'
import type { NextPage } from 'next'

const HeaderAll: NextPage = () => {
  return (
    <>
      {/* <!-- Section 1 --> */}
      <section className="relative w-full px-8 text-gray-700 bg-white body-font">
        <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
          <a
            href="#_"
            className="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-black select-none"
          >
            tails.
          </a>

          <nav className="top-0 left-0 z-0 flex items-center justify-center w-full h-full py-5 -ml-0 space-x-5 text-base md:-ml-5 md:py-0 md:absolute">
            <a
              href="#_"
              className="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900"
              x-data="{ hover: false }"
            >
              <span className="block">Home</span>
              <span className="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden"></span>
            </a>
            <a
              href="#_"
              className="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900"
              x-data="{ hover: false }"
            >
              <span className="block">Features</span>
              <span className="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden"></span>
            </a>
            <a
              href="#_"
              className="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900"
              x-data="{ hover: false }"
            >
              <span className="block">Pricing</span>
              <span className="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden"></span>
            </a>
            <a
              href="#_"
              className="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900"
              x-data="{ hover: false }"
            >
              <span className="block">Blog</span>
              <span className="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden"></span>
            </a>
          </nav>

          <div className="relative z-10 inline-flex items-center space-x-3 md:ml-5 lg:justify-end">
            <a
              href="#"
              className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
            >
              Sign in
            </a>
            <span className="inline-flex rounded-md shadow-sm">
              <a
                href="#"
                className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign up
              </a>
            </span>
          </div>
        </div>
      </section>

      {/* <!-- Section 2 --> */}
      <section className="w-full px-8 text-gray-700 bg-white">
        <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
          <div className="relative flex flex-col md:flex-row">
            <a
              href="#_"
              className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
            >
              <span className="mx-auto text-xl font-black leading-none text-gray-900 select-none">
                tails<span className="text-indigo-600">.</span>
              </span>
            </a>
            <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
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
                className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
              >
                Blog
              </a>
            </nav>
          </div>

          <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
            <a
              href="#"
              className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900"
            >
              Sign in
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              Sign up
            </a>
          </div>
        </div>
      </section>

      {/* <!-- Section 3 --> */}
      <section className="w-full px-8 text-gray-700 bg-white body-font">
        <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
          <a
            href="#_"
            className="flex items-center order-first mb-4 font-medium text-gray-900 lg:order-none lg:w-auto title-font lg:items-center lg:justify-center md:mb-0"
          >
            <span className="text-xl font-black leading-none text-gray-900 select-none logo">
              tails<span className="text-indigo-600">.</span>
            </span>
          </a>

          <div className="relative flex flex-col md:flex-row">
            <nav className="flex flex-wrap items-center pt-3 pb-5 mb-4 text-base border-b border-gray-200 md:pt-0 md:mb-0 md:border-b-0 md:pr-3 md:mr-3 md:border-r md:pb-0">
              <a
                href="#_"
                className="mr-6 font-medium leading-6 text-gray-600 hover:text-gray-900"
              >
                Home
              </a>
              <a
                href="#_"
                className="mr-6 font-medium leading-6 text-gray-600 hover:text-gray-900"
              >
                Features
              </a>
              <a
                href="#_"
                className="mr-6 font-medium leading-6 text-gray-600 hover:text-gray-900"
              >
                Pricing
              </a>
              <a
                href="#_"
                className="font-medium leading-6 text-gray-600 md:mr-6 hover:text-gray-900"
              >
                Blog
              </a>
            </nav>
            <div className="inline-flex items-center justify-center ml-5 space-x-4 md:space-x-10 md:justify-end">
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
        </div>
      </section>

      {/* <!-- Section 4 --> */}
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

      {/* <!-- Section 5 --> */}
      <section className="w-full bg-white">
        <div className="container px-8 mx-auto max-w-7xl">
          <nav className="flex items-center py-6">
            <a
              href="#_"
              className="flex items-center text-3xl font-semibold leading-none"
            >
              <span className="text-xl font-black leading-none text-gray-900 select-none logo">
                tails<span className="text-blue-600">.</span>
              </span>
            </a>
            <div className="ml-auto">
              <a
                href="#_"
                className="inline-block px-4 py-3 mr-2 text-xs font-semibold leading-none text-blue-600 border border-blue-200 rounded hover:text-blue-700 hover:border-blue-300"
              >
                Log In
              </a>
              <a
                href="#_"
                className="inline-block px-4 py-3 text-xs font-semibold leading-none text-white bg-blue-600 rounded hover:bg-blue-700"
              >
                Sign Up
              </a>
            </div>
          </nav>
        </div>
      </section>

      {/* <!-- Section 6 --> */}
      <section className="box-border relative block w-full py-6 leading-10 text-center text-indigo-900 bg-white md:py-8">
        <div className="w-full px-4 mx-auto leading-10 text-center md:px-4 lg:px-6 max-w-7xl">
          <div className="box-border flex flex-col flex-wrap items-center justify-between text-indigo-900 md:flex-row">
            <div className="relative z-10 flex items-center w-auto px-4 leading-10 lg:flex-grow-0 lg:flex-shrink-0 lg:text-left">
              <a
                href="#_"
                className="box-border inline-block font-sans text-2xl font-bold text-left text-indigo-900 no-underline bg-transparent cursor-pointer focus:no-underline"
              >
                tails.
              </a>
            </div>
            <div className="relative left-0 z-0 flex justify-center w-full px-4 mt-4 space-x-6 font-medium leading-10 md:mt-0 md:absolute lg:space-x-8 md:flex-grow-0 md:text-left lg:text-center">
              <a
                href="#_"
                className="box-border inline-block text-center text-indigo-900 no-underline bg-transparent cursor-pointer hover:text-blue-700 focus:no-underline"
              >
                Home
              </a>
              <a
                href="#_"
                className="box-border inline-block text-center text-indigo-900 no-underline bg-transparent cursor-pointer hover:text-blue-700 focus:no-underline"
              >
                Features
              </a>
              <a
                href="#_"
                className="box-border inline-block text-center text-indigo-900 no-underline bg-transparent cursor-pointer hover:text-blue-700 focus:no-underline"
              >
                Pricing
              </a>
              <a
                href="#_"
                className="box-border inline-block text-center text-indigo-900 no-underline bg-transparent cursor-pointer hover:text-blue-700 focus:no-underline"
              >
                About
              </a>
            </div>
            <div className="relative px-4 mt-2 font-medium leading-10 md:flex-grow-0 md:flex-shrink-0 md:mt-0 md:text-right lg:flex-grow-0 lg:flex-shrink-0">
              <a
                href="#_"
                className="box-border inline-block mx-5 text-right text-indigo-900 no-underline bg-transparent cursor-pointer hover:text-blue-700 focus:no-underline"
              >
                Login
              </a>
              <a
                href="#_"
                className="box-border inline-flex items-center h-10 px-4 text-base text-center text-indigo-900 no-underline align-middle bg-transparent border border-gray-300 rounded cursor-pointer select-none hover:bg-gray-50 hover:text-blue-700 focus:shadow-xs focus:no-underline"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Section 7 --> */}
      <section className="box-border relative block w-full py-6 leading-10 text-center text-indigo-900 bg-black border-b border-gray-200 md:py-8">
        <div className="w-full px-6 mx-auto leading-10 text-center md:px-8 max-w-7xl">
          <div className="box-border flex flex-wrap items-center justify-between -mx-4 text-indigo-900">
            <div className="relative flex items-center w-auto px-4 leading-10 lg:flex-grow-0 lg:flex-shrink-0 lg:text-left">
              <a
                href="#_"
                className="box-border inline-block font-sans text-2xl font-bold text-left text-white no-underline bg-transparent cursor-pointer focus:no-underline"
              >
                tails.
              </a>
            </div>
            <div className="left-0 z-0 flex justify-start w-full px-4 mt-2 font-medium leading-10 md:mt-0 md:justify-center md:absolute md:flex-grow-0 md:text-left lg:text-center">
              <a
                href="#_"
                className="box-border inline-block mr-4 text-center text-gray-300 no-underline bg-transparent cursor-pointer hover:text-gray-200 focus:no-underline"
              >
                Home
              </a>
              <a
                href="#_"
                className="box-border inline-block mr-4 text-center text-gray-300 no-underline bg-transparent cursor-pointer hover:text-gray-200 focus:no-underline"
              >
                Features
              </a>
              <a
                href="#_"
                className="box-border inline-block mr-4 text-center text-gray-300 no-underline bg-transparent cursor-pointer hover:text-gray-200 focus:no-underline"
              >
                Pricing
              </a>
              <a
                href="#_"
                className="box-border inline-block mr-4 text-center text-gray-300 no-underline bg-transparent cursor-pointer hover:text-gray-200 focus:no-underline"
              >
                About
              </a>
            </div>
            <div className="relative flex items-center px-4 mt-2 font-medium leading-10 md:flex-grow-0 md:flex-shrink-0 md:mt-0 md:text-right lg:flex-grow-0 lg:flex-shrink-0">
              <a
                href="#_"
                className="box-border inline-block h-10 px-4 mr-3 text-right text-gray-200 no-underline bg-gray-800 rounded-lg cursor-pointer md:mr-0 md:bg-transparent hover:text-white focus:no-underline"
              >
                Login
              </a>
              <a
                href="#_"
                className="box-border inline-flex items-center h-10 px-4 text-base text-center text-gray-100 no-underline align-middle bg-gray-800 rounded-lg cursor-pointer select-none hover:bg-gray-50 hover:text-gray-900 focus:shadow-xs focus:no-underline"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Section 8 --> */}
      <section className="relative bg-white">
        <div className="flex items-center justify-between h-24 px-8 mx-auto max-w-7xl">
          <a
            href="#_"
            className="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-black select-none"
          >
            tails.
          </a>

          <nav className="items-center justify-center hidden space-x-8 text-gray-200 md:flex">
            <a
              href="#_"
              x-data="{ hover: false }"
              className="relative inline-block text-base font-bold text-gray-700 uppercase transition duration-150 ease hover:text-gray-900"
            >
              <span className="block">Home</span>
              <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden"></span>
            </a>
            <a
              href="#_"
              x-data="{ hover: false }"
              className="relative inline-block text-base font-bold text-gray-700 uppercase transition duration-150 ease hover:text-gray-900"
            >
              <span className="block">Features</span>
              <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden"></span>
            </a>
            <a
              href="#_"
              x-data="{ hover: false }"
              className="relative inline-block text-base font-bold text-gray-700 uppercase transition duration-150 ease hover:text-gray-900"
            >
              <span className="block">Pricing</span>
              <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden"></span>
            </a>
            <a
              href="#_"
              x-data="{ hover: false }"
              className="relative inline-block text-base font-bold text-gray-700 uppercase transition duration-150 ease hover:text-gray-900"
            >
              <span className="block">Blog</span>
              <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden"></span>
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
              <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden"></span>
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

      {/* <!-- Section 9 --> */}
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
              <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden"></span>
            </a>
            <a
              href="#_"
              x-data="{ hover: false }"
              className="relative inline-block text-base font-bold text-gray-200 uppercase transition duration-150 ease hover:text-white"
            >
              <span className="block">Features</span>
              <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden"></span>
            </a>
            <a
              href="#_"
              x-data="{ hover: false }"
              className="relative inline-block text-base font-bold text-gray-200 uppercase transition duration-150 ease hover:text-white"
            >
              <span className="block">Pricing</span>
              <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden"></span>
            </a>
            <a
              href="#_"
              x-data="{ hover: false }"
              className="relative inline-block text-base font-bold text-gray-200 uppercase transition duration-150 ease hover:text-white"
            >
              <span className="block">Blog</span>
              <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden"></span>
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
              <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden"></span>
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

      {/* <!-- Section 10 --> */}
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
              <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden"></span>
            </a>
            <a
              href="#_"
              x-data="{ hover: false }"
              className="relative inline-block text-sm font-bold text-gray-200 uppercase transition duration-150 lg:text-base ease hover:text-white"
            >
              <span className="block">Features</span>
              <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden"></span>
            </a>
            <a
              href="#_"
              x-data="{ hover: false }"
              className="relative inline-block text-sm font-bold text-gray-200 uppercase transition duration-150 lg:text-base ease hover:text-white"
            >
              <span className="block">Pricing</span>
              <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden"></span>
            </a>
            <a
              href="#_"
              x-data="{ hover: false }"
              className="relative inline-block text-sm font-bold text-gray-200 uppercase transition duration-150 lg:text-base ease hover:text-white"
            >
              <span className="block">Blog</span>
              <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden"></span>
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
              <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden"></span>
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

      {/* <!-- Section 11 --> */}
      <section className="relative w-full py-2 bg-blue-500">
        <div className="flex items-center justify-between h-16 px-8 mx-auto max-w-7xl">
          <a
            href="#_"
            className="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-white select-none"
          >
            tails.
          </a>
          <a
            href="#_"
            className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium leading-tight text-blue-500 whitespace-no-wrap border border-blue-300 rounded-full shadow-sm bg-blue-50 focus:ring-offset-blue-600 hover:bg-white hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-100"
          >
            Get Early Access
          </a>
        </div>
      </section>

      {/* <!-- Section 12 --> */}
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

      {/* <!-- Section 13 --> */}
      <section className="w-full pl-4 bg-gray-900">
        <div className="flex flex-col flex-wrap items-center justify-between h-12 mx-auto md:flex-row max-w-7xl">
          <a
            href="#_"
            className="flex items-center order-first h-12 font-medium text-gray-900 lg:order-none lg:w-auto title-font lg:items-center lg:justify-center md:mb-0"
          >
            <span className="text-xl font-black leading-none text-white select-none logo">
              tails
            </span>
          </a>

          <div className="relative flex-col hidden h-full md:flex md:flex-row">
            <nav className="flex flex-wrap items-center h-full pt-3 pb-5 mb-4 text-base border-b border-gray-800 md:pt-0 md:mb-0 md:border-b-0 md:pr-1 md:mr-1 md:border-r md:pb-0">
              <a
                href="#_"
                className="flex items-center h-full px-4 font-medium leading-6 text-gray-200 hover:text-gray-100 hover:bg-gray-800"
              >
                Home
              </a>
              <a
                href="#_"
                className="flex items-center h-full px-4 font-medium leading-6 text-gray-200 hover:text-gray-100 hover:bg-gray-800"
              >
                Features
              </a>
              <a
                href="#_"
                className="flex items-center h-full px-4 font-medium leading-6 text-gray-200 hover:text-gray-100 hover:bg-gray-800"
              >
                Pricing
              </a>
              <a
                href="#_"
                className="flex items-center h-full px-4 font-medium leading-6 text-gray-200 hover:text-gray-100 hover:bg-gray-800"
              >
                Blog
              </a>
            </nav>
            <div className="inline-flex items-center justify-center h-full md:justify-end">
              <a
                href="#"
                className="flex items-center h-full px-5 text-base font-medium leading-6 text-gray-200 whitespace-no-wrap transition duration-150 ease-in-out hover:bg-gray-800 hover:text-gray-100"
              >
                Sign in
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center h-full px-4 text-base font-medium leading-6 text-white whitespace-no-wrap transition duration-150 ease-in-out bg-pink-600 border border-transparent hover:bg-pink-500 focus:outline-none focus:border-pink-700 focus:shadow-outline-indigo active:bg-pink-700"
              >
                Sign up
              </a>
            </div>
          </div>
          <div className="absolute top-0 right-0 flex items-center justify-center h-full pr-4 cursor-pointer md:hidden">
            <svg
              className="w-6 h-6 text-gray-100"
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

      {/* <!-- Section 14 --> */}
      <section className="w-full bg-white gray-900">
        <div className="mx-auto flex max-w-7xl items-center h-16 py-1 box-content justify-between">
          <div className="flex items-center space-x-2 p-4">
            <button>
              <div className="flex w-5 h-5 relative justify-center items-start space-y-1 flex-col">
                <span className="w-full h-0.5 transition-all duration-300 rounded-full bg-gray-500"></span>
                <span className="w-5/6 h-0.5 transition-all duration-300 rounded-full bg-gray-500"></span>
                <span className="w-full h-0.5 transition-all duration-300 rounded-full bg-gray-500"></span>
              </div>
            </button>
            <a
              href="#_"
              className="text-gray-900 font-extrabold uppercase text-sm flex items-center"
            >
              <svg
                className="w-7 h-auto text-purple-600 mr-2"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <path d="M0 0h59.314v59.414H0z"></path>
                </defs>
                <g fill="none" fill-rule="evenodd">
                  <path
                    d="M9.343 40.713a9.28 9.28 0 0 0-6.606 2.736A9.28 9.28 0 0 0 0 50.055a9.28 9.28 0 0 0 2.737 6.607A9.28 9.28 0 0 0 9.343 59.4a9.279 9.279 0 0 0 6.607-2.737c3.643-3.643 3.643-9.57 0-13.213a9.279 9.279 0 0 0-6.607-2.736M70.329 39.07a9.28 9.28 0 0 0 6.606-2.736 9.28 9.28 0 0 0 2.737-6.607 9.279 9.279 0 0 0-2.737-6.606 9.281 9.281 0 0 0-6.606-2.737 9.282 9.282 0 0 0-6.607 2.736 9.281 9.281 0 0 0-2.737 6.607 9.28 9.28 0 0 0 2.737 6.607 9.28 9.28 0 0 0 6.607 2.736M50.029 81.37a9.28 9.28 0 0 0-6.607 2.736 9.28 9.28 0 0 0-2.736 6.606 9.28 9.28 0 0 0 2.736 6.607 9.28 9.28 0 0 0 6.607 2.736 9.28 9.28 0 0 0 6.607-2.736 9.28 9.28 0 0 0 2.736-6.607 9.28 9.28 0 0 0-2.736-6.606 9.28 9.28 0 0 0-6.607-2.736M70.329 61.041a9.267 9.267 0 0 0-6.304 2.462 13.65 13.65 0 0 1-2.104 1.43c-3.18 1.764-7.407 2.736-11.904 2.736s-8.724-.972-11.904-2.737a14.134 14.134 0 0 1-1.659-1.075 13.798 13.798 0 0 1-1.297-1.943c-1.765-3.179-2.736-7.407-2.736-11.903 0-4.497.971-8.725 2.736-11.904.462-.832.965-1.56 1.499-2.19a9.267 9.267 0 0 0 2.359-6.19 9.279 9.279 0 0 0-2.737-6.606 9.281 9.281 0 0 0-6.606-2.737 9.282 9.282 0 0 0-6.607 2.736 9.281 9.281 0 0 0-2.737 6.607c0 2.496.972 4.842 2.737 6.607.07.07.145.13.216.196.356.479.696 1.001 1.016 1.577 1.765 3.179 2.736 7.407 2.736 11.904 0 4.496-.971 8.724-2.736 11.903a13.887 13.887 0 0 1-1.24 1.873 9.28 9.28 0 0 0-2.729 6.598 9.28 9.28 0 0 0 2.737 6.605 9.28 9.28 0 0 0 6.607 2.737 9.273 9.273 0 0 0 6.478-2.62 13.791 13.791 0 0 1 1.963-1.314c3.18-1.765 7.407-2.737 11.904-2.737s8.725.972 11.904 2.737c.644.357 1.227.74 1.75 1.142.018.018.033.038.051.055a9.28 9.28 0 0 0 6.607 2.737 9.28 9.28 0 0 0 6.606-2.737 9.28 9.28 0 0 0 2.737-6.605 9.28 9.28 0 0 0-2.737-6.607 9.28 9.28 0 0 0-6.606-2.737"
                    fill="currentColor"
                    className=""
                  ></path>
                  <g transform="translate(40.686)">
                    <mask fill="currentColor"></mask>
                    <path
                      d="M56.578 43.45a9.28 9.28 0 0 0-6.607-2.737c-2.38 0-4.62.893-6.353 2.506-.605.5-1.294.974-2.079 1.41-3.18 1.764-7.407 2.736-11.904 2.736s-8.724-.972-11.903-2.737a14.126 14.126 0 0 1-1.66-1.075 13.797 13.797 0 0 1-1.296-1.942c-1.765-3.18-2.737-7.407-2.737-11.904s.972-8.725 2.737-11.904c.48-.865 1.004-1.62 1.562-2.268v-.012a9.267 9.267 0 0 0 2.349-6.18 9.28 9.28 0 0 0-2.737-6.606A9.28 9.28 0 0 0 9.343 0a9.28 9.28 0 0 0-6.606 2.737A9.28 9.28 0 0 0 0 9.343c0 2.302.836 4.471 2.35 6.18v.009a13.504 13.504 0 0 1 1.565 2.27c1.765 3.18 2.737 7.408 2.737 11.905 0 4.497-.972 8.724-2.737 11.904a13.502 13.502 0 0 1-1.566 2.272v.008A9.266 9.266 0 0 0 0 50.071c0 2.495.972 4.841 2.737 6.606a9.28 9.28 0 0 0 6.606 2.737 9.28 9.28 0 0 0 6.607-2.737c.023-.023.042-.048.064-.07a14.095 14.095 0 0 1 1.718-1.118c3.179-1.765 7.406-2.737 11.903-2.737 4.497 0 8.725.972 11.904 2.737.81.449 1.518.938 2.137 1.455A9.267 9.267 0 0 0 49.97 59.4a9.28 9.28 0 0 0 6.607-2.737 9.28 9.28 0 0 0 2.736-6.607 9.28 9.28 0 0 0-2.736-6.606"
                      fill="currentColor"
                    ></path>
                  </g>
                </g>
              </svg>
              <span className="">logo</span>
            </a>
          </div>
          <nav className="md:relative md:w-auto w-full md:mt-0 mt-16 translate-y-2 md:translate-y-0 top-0 md:pb-0 pb-3 bg-white md:bg-transparent absolute items-center md:space-x-2 text-sm font-medium text-gray-500 md:flex hidden">
            <a
              href="#_"
              className="md:rounded bg-white md:px-3 px-5 md:py-2 py-3 transition hover:bg-gray-100 md:inline block md:w-auto w-full"
            >
              Home
            </a>
            <a
              href="#_"
              className="md:rounded bg-white md:px-3 px-5 md:py-2 py-3 transition hover:bg-gray-100 md:inline block md:w-auto w-full"
            >
              Features
            </a>
            <a
              href="#_"
              className="md:rounded bg-white md:px-3 px-5 md:py-2 py-3 transition hover:bg-gray-100 md:inline block md:w-auto w-full"
            >
              Pricing
            </a>
            <a
              href="#_"
              className="md:rounded bg-white md:px-3 px-5 md:py-2 py-3 transition hover:bg-gray-100 md:inline block md:w-auto w-full"
            >
              About
            </a>
            <a
              href="#_"
              className="md:rounded bg-white md:px-3 px-5 md:py-2 py-3 transition hover:bg-gray-100 md:inline block md:w-auto w-full"
            >
              Blog
            </a>
          </nav>
          <div className="flex items-center space-x-2 text-sm pr-4 font-medium text-gray-800">
            <a
              href="#_"
              className="inline rounded bg-white px-3 py-2 text-gray-500 hover:text-gray-600 transition hover:bg-gray-100"
            >
              Login
            </a>
            <a
              href="#_"
              className="rounded bg-purple-600 px-3 py-2 text-white transition hover:bg-purple-500"
            >
              Sign Up
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeaderAll
