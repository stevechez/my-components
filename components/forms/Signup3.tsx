import React from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'

const Signup3: NextPage = () => {
  return (
    <>
      <section className="relative w-full bg-white">
        <div className="relative px-8 mx-auto max-w-7xl">
          <div className="absolute inset-0 flex justify-end w-full h-full bg-gray-100 opacity-10">
            <div className="absolute inset-0 w-full h-full bg-repeat opacity-40">
              <Image
                className=""
                src="https://cdn.devdojo.com/images/august2021/circuit.png"
                alt="img1"
                objectFit="cover"
                objectPosition="bottom"
                layout="fill"
              />
            </div>

            <div className="absolute w-full h-full bg-gradient-to-r from-white to-transparent"></div>
          </div>
          <div className="relative flex flex-wrap items-center">
            <div className="relative w-full px-4 mb-12 lg:w-5/12 lg:mb-0">
              <div className="relative py-20 text-center md:py-32 xl:py-40">
                <a
                  className="flex justify-center w-full mb-6 text-3xl font-bold lg:justify-start font-heading"
                  href="#"
                >
                  <svg
                    className="h-10"
                    viewBox="0 0 50 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5 2h21.08L22.083 24.973H1L16.5 2z"
                      className="ccompli1"
                      fill="#007AFF"
                    ></path>
                    <path
                      d="M17.422 27.102L11.42 36h22.082L49 13.027H32.702l-9.496 14.075h-5.784z"
                      className="ccustom"
                      fill="#312ECB"
                    ></path>
                  </svg>
                </a>
                <div className="flex flex-col mb-6 lg:items-start">
                  <span className="ml-1 font-medium text-indigo-500">
                    Sign Up
                  </span>
                  <h3 className="text-2xl font-bold">Join our community</h3>
                </div>
                <form>
                  <div className="relative flex items-center mb-4">
                    <svg
                      className="absolute ml-4 w-8 h-8 stroke-current text-gray-200 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <input
                      className="w-full py-5 border border-gray-200 rounded-md pl-14 bg-gray-50 focus:bg-white focus:ring-indigo-500 focus:ring-2 focus:ring-offset-2 focus:ring-opacity-90 focus:outline-none"
                      type="text"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="relative flex items-center mb-4">
                    <svg
                      className="absolute ml-4 w-8 h-8 stroke-current text-gray-200 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      ></path>
                    </svg>
                    <input
                      className="w-full py-5 border border-gray-200 rounded-md pl-14 bg-gray-50 focus:bg-white focus:ring-indigo-500 focus:ring-2 focus:ring-offset-2 focus:ring-opacity-90 focus:outline-none"
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="relative flex items-center mb-4">
                    <svg
                      className="absolute ml-4 w-8 h-8 stroke-current text-gray-200 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <input
                      className="w-full py-5 border border-gray-200 rounded-md pl-14 bg-gray-50 focus:bg-white focus:ring-indigo-500 focus:ring-2 focus:ring-offset-2 focus:ring-opacity-90 focus:outline-none"
                      type="password"
                      placeholder="Confirm Password"
                    />
                  </div>
                  <label className="flex items-center mt-1" htmlFor="terms">
                    <input className="mr-2" type="checkbox" />
                    <span className="text-xs text-gray-500">
                      By signing up, you agree to our Terms of Service
                    </span>
                  </label>
                  <button className="w-full px-8 py-3 mt-8 font-bold text-white uppercase bg-indigo-700 rounded-md md:mt-5 hover:bg-indigo-600 font-heading">
                    Join Today
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="top-0 bottom-0 right-0 hidden lg:block lg:absolute lg:w-3/6">
          <Image
            className=""
            src="https://cdn.devdojo.com/images/august2021/form-bg.jpeg"
            alt="img1"
            objectFit="cover"
            objectPosition="bottom"
            layout="fill"
          />
        </div>
      </section>
    </>
  )
}

export default Signup3
