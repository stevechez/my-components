import React from 'react'
import type { NextPage } from 'next'

const Cta10: NextPage = () => {
  return (
    <>
      <section className="relative w-full bg-white">
        <div className="absolute bottom-0 left-0 w-full bg-purple-700 h-1/2"></div>
        <div className="relative px-10 py-20 mx-auto max-w-7xl">
          <div className="relative flex flex-col items-center w-full h-full px-10 py-16 bg-purple-100 sm:px-12 md:px-16 lg:py-20 rounded-2xl">
            <div className="absolute inset-0 bg-cover"></div>
            {/* style="background-image:url('https://uploads-ssl.webflow.com/5f303e34821294abdf7d62ec/5f303e34e2c77b2a0817092a_Pattern%20Shape.svg')" */}
            <div className="relative flex flex-col items-center justify-between w-full h-full lg:flex-row">
              <h2 className="max-w-lg mb-5 text-2xl font-semibold text-center text-purple-900 md:leading-tight lg:mb-0 lg:text-left md:text-4xl sm:text-3xl">
                Meet your new design system, crafted for the best conversion.
              </h2>
              <div className="flex flex-col h-auto transform translate-y-2">
                <a
                  href="#_"
                  className="inline-flex items-start h-auto px-8 py-4 font-medium text-center text-white rounded-lg bg-gradient-to-br from-yellow-500 via-red-500 to-pink-600"
                >
                  Start Your <span className="hidden sm:inline">14-day</span>{' '}
                  Free Trial
                </a>
                <p className="w-full mt-3 text-sm text-center text-gray-500">
                  Then, only $9/mo. after your trial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cta10
