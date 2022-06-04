import React from 'react'
import type { NextPage } from 'next'

const Pricing1: NextPage = () => {
  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl px-8 mx-auto lg:px-4">
          <div className="mb-16 text-center">
            <h2 className="max-w-lg mx-auto mb-4 text-5xl font-bold text-gray-700 font-heading">
              <span>Simple</span>
              <span className="relative pl-2 mr-2 text-blue-600">
                <span className="relative z-10">Pricing</span>
                <span className="absolute bottom-0 left-0 w-full h-3 transform -skew-x-6 bg-blue-100"></span>
              </span>
              <span>Plans</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-500">
              Pricing for businesses of all sizes. No commitment. Cancel
              Anytime.
            </p>
          </div>
          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3 mb-6 md:w-1/2 lg:w-1/3">
              <div className="px-8 pt-12 pb-8 text-center bg-white rounded-lg shadow">
                <img
                  className="h-24 mx-auto mb-8"
                  src="https://cdn.devdojo.com/tails/icons/acorn.png"
                  alt="starter plan image"
                />
                <h3 className="mb-4 text-5xl font-bold font-heading">
                  Starter
                </h3>
                <span className="flex items-center justify-center text-4xl font-bold text-gray-900 font-heading">
                  $15<span className="ml-1 text-xs">/ mo</span>
                </span>
                <p className="mt-3 mb-8 text-sm text-gray-400">
                  This plan is ideal for startups and small companies or
                  organizations
                </p>
                <div className="flex flex-col items-center mb-8">
                  <ul className="text-gray-400">
                    <li className="flex mb-3">
                      <svg
                        className="w-6 h-6 mr-2 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <span>3 Projects</span>
                    </li>
                    <li className="flex mb-3">
                      <svg
                        className="w-6 h-6 mr-2 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <span>1 Admin User</span>
                    </li>
                    <li className="flex mb-3">
                      <svg
                        className="w-6 h-6 mr-2 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <span>Unlimited Domains</span>
                    </li>
                    <li className="flex">
                      <svg
                        className="w-6 h-6 mr-2 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <span>10 GB Storage</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <a
                    href="#_"
                    className="block px-6 py-5 mb-4 text-base font-semibold leading-none text-center text-white bg-blue-600 rounded-lg sm:mb-0 hover:bg-blue-700"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-3 mb-6 md:w-1/2 lg:w-1/3">
              <div className="px-8 pt-8 pb-8 text-center text-white transform scale-100 rounded-lg shadow-2xl lg:scale-105 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600">
                <img
                  className="h-24 mx-auto mb-8"
                  src="https://cdn.devdojo.com/tails/icons/cube-b.png"
                  alt="basic plan image"
                />
                <h3 className="mb-4 text-5xl font-bold font-heading">Basic</h3>
                <span className="flex items-center justify-center text-4xl font-bold text-white font-heading">
                  $25<span className="ml-1 text-xs">/ mo</span>
                </span>
                <p className="mt-4 mb-8 text-sm">
                  This plan is ideal for small to medium sized businesses and
                  organizations
                </p>
                <div className="flex flex-col items-center mb-8">
                  <ul>
                    <li className="flex items-center mb-3">
                      <svg
                        className="w-6 h-6 mr-2 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <span>6 Projects</span>
                    </li>
                    <li className="flex items-center mb-3">
                      <svg
                        className="w-6 h-6 mr-2 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <span>4 Admin Users</span>
                    </li>
                    <li className="flex items-center mb-3">
                      <svg
                        className="w-6 h-6 mr-2 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <span>Unlimited Domains</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-6 h-6 mr-2 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <span>35 GB Storage</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <a
                    href="#_"
                    className="block px-6 py-5 mb-4 text-base font-semibold leading-none text-center text-blue-600 rounded-lg bg-purple-50 hover:bg-white sm:mb-0 hover:text-blue-700"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-3 mb-6 lg:w-1/3">
              <div className="px-8 pt-8 pb-8 text-center bg-white rounded-lg shadow">
                <img
                  className="h-24 mx-auto mb-8"
                  src="https://cdn.devdojo.com/tails/icons/bucket-a.png"
                  alt="plus plan image"
                />
                <h3 className="mb-4 text-5xl font-bold font-heading">Plus</h3>
                <span className="flex items-center justify-center text-4xl font-bold text-gray-900 font-heading">
                  $50<span className="ml-1 text-xs">/ mo</span>
                </span>
                <p className="mt-4 mb-8 text-sm text-gray-400">
                  This plan is perfect for medium to larger sized companies and
                  organizations
                </p>
                <div className="flex flex-col items-center mb-8">
                  <ul className="text-gray-400">
                    <li className="flex mb-3">
                      <svg
                        className="w-6 h-6 mr-2 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <span>Unlimited Projects</span>
                    </li>
                    <li className="flex mb-3">
                      <svg
                        className="w-6 h-6 mr-2 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <span>Ulimited Users</span>
                    </li>
                    <li className="flex mb-3">
                      <svg
                        className="w-6 h-6 mr-2 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <span>Unlimited Domains</span>
                    </li>
                    <li className="flex">
                      <svg
                        className="w-6 h-6 mr-2 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <span>50 GB Storage</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <a
                    href="#_"
                    className="block px-6 py-5 mb-4 text-base font-semibold leading-none text-center text-white bg-blue-600 rounded-lg sm:mb-0 hover:bg-blue-700"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Pricing1
