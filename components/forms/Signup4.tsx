import React from 'react'
import type { NextPage } from 'next'

const Signup4: NextPage = () => {
  return (
    <>
      <section className="box-border relative block py-20 overflow-hidden leading-6 text-center text-indigo-900 bg-white bg-no-repeat bg-cover">
        <div className="w-full px-4 mx-auto leading-6 text-center xl:px-0">
          <div className="box-border flex flex-wrap justify-center -mx-4 text-indigo-900">
            <div className="relative w-full px-4 leading-6 text-center xl:flex-grow-0 xl:flex-shrink-0 lg:flex-grow-0 lg:flex-shrink-0">
              <h2 className="box-border mx-0 mt-0 mb-12 font-sans text-3xl font-bold text-black sm:text-4xl">
                Sign up today and get 50% off.
              </h2>
              <form
                method="post"
                className="box-border text-center text-indigo-900"
              >
                <div className="flex flex-col flex-wrap justify-center space-x-2 leading-6 text-indigo-900 md:flex-row">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="inline-block w-full h-16 px-6 py-0 mx-0 mt-0 mb-8 overflow-visible text-xl font-semibold text-gray-700 align-top bg-transparent border-2 border-gray-300 border-solid rounded-full resize-none md:w-auto focus:outline-none cursor-text md:text-left focus:ring-2 focus:ring-green-400 focus:border-green-500"
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Your password"
                    className="inline-block w-full h-16 px-6 py-0 mx-0 mt-0 mb-8 overflow-visible text-xl font-semibold text-gray-700 align-top bg-transparent border-2 border-gray-300 border-solid rounded-full resize-none md:w-auto focus:outline-none cursor-text md:text-left focus:ring-2 focus:ring-green-400 focus:border-green-400"
                  />
                  <button className="inline-block w-full h-16 px-10 py-0 m-0 overflow-visible text-xl font-semibold text-center text-white normal-case align-middle bg-green-400 border border-transparent border-solid rounded-full cursor-pointer select-none md:w-auto focus:outline-none focus:shadow-xs">
                    Sign Up
                  </button>
                </div>
                <div className="mt-3 leading-6 text-gray-400">
                  By signing up, you agree to the Terms of Service.
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Signup4
