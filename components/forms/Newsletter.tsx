import React from 'react'
import type { NextPage } from 'next'

const Newsletter: NextPage = () => {
  return (
    <>
      <section className="py-24 bg-white">
        <div className="max-w-3xl px-10 mx-auto xl:px-5">
          <div className="flex flex-col justify-center space-y-8">
            <h2 className="w-full mx-auto text-4xl font-extrabold leading-none text-left text-gray-900 sm:text-5xl md:text-7xl">
              Weekly Newsletter
            </h2>
            <p className="w-full max-w-3xl mx-auto text-xl text-left text-gray-500 md:text-2xl">
              Get the latest trends and updates in your inbox each week. We will
              provide you with top notch designs and resources.
            </p>

            <div className="flex flex-col w-full mx-auto space-y-5 md:space-y-0 md:space-x-5 md:flex-row">
              <input
                type="text"
                className="flex-1 w-full px-5 py-5 text-2xl bg-gray-200 border border-gray-300 rounded-lg focus:ring-4 focus:border-blue-600 focus:ring-blue-600 focus:ring-opacity-50 focus:outline-none"
                placeholder="Email Address"
              />
              <a
                href="#_"
                className="flex-shrink-0 px-10 py-5 text-2xl font-medium text-center text-white bg-blue-600 rounded-lg focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 focus:ring-offset-2 focus:outline-none"
              >
                Sign Up
              </a>
            </div>
            <p className="text-gray-400">
              <span className="font-medium text-gray-700">Trusted by</span> over
              27,000 subscribers.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Newsletter
