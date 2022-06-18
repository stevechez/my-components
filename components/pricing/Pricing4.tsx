import React from 'react'
import type { NextPage } from 'next'

const Pricing4: NextPage = () => {
  return (
    <>
      <section
        className="overflow-hidden text-gray-700 bg-white"
        x-data="{ billing: 'Monthly', basic: {'Monthly' : '19', 'Yearly' : '180'}, plus: {'Monthly' : '29', 'Yearly' : '270' }, pro: {'Monthly' : '49', 'Yearly' : '450' }, accronym: {'Monthly' : 'mo', 'Yearly' : 'yr' }}"
      >
        <div className="container px-5 pt-20 pb-24 mx-auto">
          <div className="flex flex-col w-full mb-20 text-center">
            <h1 className="mb-2 text-3xl font-medium text-gray-900 sm:text-4xl">
              Pricing Plans
            </h1>
            <p className="mx-auto text-lg leading-relaxed text-gray-500 lg:w-2/3">
              We have fine tuned our pricing to fit businesses of any size.
            </p>
            <div className="flex justify-center mt-6">
              {/* <nav className="relative inline-flex overflow-hidden text-sm border border-gray-300 rounded-lg">
                  <div className="absolute w-1/2 h-full transition-all duration-150 ease-out bg-blue-600" :className="{ 'left-0' : billing == 'Monthly', 'left-1/2' : billing == 'Yearly' }"></div>
                  <button @click="billing='Monthly'" className="relative z-20 px-5 py-3 font-bold focus:outline-none" :className="{ 'text-white' : billing == 'Monthly', 'text-gray-600 hover:text-gray-700' : billing == 'Yearly' }">
                      Monthly Plan
                  </button>
                  <button @click="billing='Yearly'" className="relative z-20 px-6 py-3 font-bold focus:outline-none" :className="{ 'text-white' : billing == 'Yearly', 'text-gray-600 hover:text-gray-700' : billing == 'Monthly' }">
                      Yearly Plan
                  </button>
              </nav> */}
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-full p-2 xl:w-1/4 md:w-1/2">
              <div className="relative flex flex-col justify-between h-full p-6 overflow-hidden border border-gray-300 rounded-lg justify">
                <div className="relative flex flex-col w-full">
                  <h2 className="mb-1 text-sm font-medium tracking-widest uppercase">
                    Starter
                  </h2>
                  <h1 className="pb-4 mb-4 text-5xl leading-none text-gray-900 border-b border-gray-200">
                    Free
                  </h1>
                  <p className="flex items-center mb-2 text-gray-600">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Standard Account
                  </p>
                  <p className="flex items-center mb-2 text-gray-600">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Access to Public Forums
                  </p>
                  <p className="flex items-center mb-6 text-gray-600">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    View Some Premium Content
                  </p>
                </div>
                <div className="w-full">
                  <button className="inline-flex items-center justify-center w-full px-4 py-3 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
                    Get Started
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                  <p className="mt-3 text-xs text-center text-gray-500">
                    All plans include a free onboarding call.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full p-2 xl:w-1/4 md:w-1/2">
              <div className="relative flex flex-col justify-between h-full p-6 overflow-hidden border border-blue-600 rounded-lg">
                <span className="absolute top-0 right-0 px-3 py-1 text-xs tracking-widest text-white bg-blue-600 rounded-bl">
                  POPULAR
                </span>
                <div className="relative flex flex-col w-full">
                  <h2 className="mb-1 text-sm font-medium tracking-widest uppercase">
                    Basic
                  </h2>
                  <h1 className="flex items-center pb-4 mb-4 text-5xl leading-none text-gray-900 border-b border-gray-200">
                    <span>
                      $<span x-text="basic[billing]"></span>
                    </span>
                    <span className="ml-1 text-lg font-normal text-gray-500">
                      /<span x-text="accronym[billing]"></span>
                    </span>
                  </h1>
                  <p className="flex items-center mb-2 text-gray-600">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Everything in Starter
                  </p>
                  <p className="flex items-center mb-2 text-gray-600">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Access to All Forums
                  </p>
                  <p className="flex items-center mb-2 text-gray-600">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Access to our Private Slack
                  </p>
                  <p className="flex items-center mb-6 text-gray-600">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    View All Premium Content
                  </p>
                </div>
                <div className="w-full">
                  <button className="inline-flex items-center justify-center w-full px-4 py-3 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Get Started
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                  <p className="mt-3 text-xs text-center text-gray-500">
                    All plans include a free onboarding call.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full p-2 xl:w-1/4 md:w-1/2">
              <div className="relative flex flex-col justify-between h-full p-6 overflow-hidden border border-gray-300 rounded-lg">
                <div className="flex flex-col w-full">
                  <h2 className="mb-1 text-sm font-medium tracking-widest uppercase">
                    Plus
                  </h2>
                  <h1 className="flex items-center pb-4 mb-4 text-5xl leading-none text-gray-900 border-b border-gray-200">
                    <span>
                      $<span x-text="plus[billing]"></span>
                    </span>
                    <span className="ml-1 text-lg font-normal text-gray-500">
                      /<span x-text="accronym[billing]"></span>
                    </span>
                  </h1>
                  <p className="flex items-center mb-2 text-gray-600">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Everything in Basic
                  </p>
                  <p className="flex items-center mb-2 text-gray-600">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Monthly Consultations
                  </p>
                  <p className="flex items-center mb-2 text-gray-600">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Unlimited Admin Accounts
                  </p>
                  <p className="flex items-center mb-2 text-gray-600">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Faster Build Times
                  </p>
                  <p className="flex items-center mb-6 text-gray-600">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Premium Support
                  </p>
                </div>
                <div className="w-full">
                  <button className="inline-flex items-center justify-center w-full px-4 py-3 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
                    Get Started
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                  <p className="mt-3 text-xs text-center text-gray-500">
                    All plans include a free onboarding call.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full p-2 xl:w-1/4 md:w-1/2">
              <div className="relative flex flex-col justify-between h-full p-6 overflow-hidden border border-gray-300 rounded-lg">
                <div className="flex flex-col w-full">
                  <h2 className="mb-1 text-sm font-medium tracking-widest uppercase">
                    Pro
                  </h2>
                  <h1 className="flex items-center pb-4 mb-4 text-5xl leading-none text-gray-900 border-b border-gray-200">
                    <span>
                      $<span x-text="pro[billing]"></span>
                    </span>
                    <span className="ml-1 text-lg font-normal text-gray-500">
                      /<span x-text="accronym[billing]"></span>
                    </span>
                  </h1>
                  <p className="flex items-center mb-2 text-gray-600">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Everything in Plus
                  </p>
                  <p className="flex items-center mb-2 text-gray-600">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Weekly Consultations
                  </p>
                  <p className="flex items-center mb-2 text-gray-600">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Ulimited Team Accounts
                  </p>
                  <p className="flex items-center mb-2 text-gray-600">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Priority Server Build Times
                  </p>
                  <p className="flex items-center mb-6 text-gray-600">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    24/7 Customer Service Support
                  </p>
                </div>
                <div className="w-full">
                  <button className="inline-flex items-center justify-center w-full px-4 py-3 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
                    Get Started
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                  <p className="mt-3 text-xs text-center text-gray-500">
                    All plans include a free onboarding call.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Pricing4
