import React from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'

const Signup6: NextPage = () => {
  return (
    <>
      <section className="relative py-0 bg-white lg:py-20">
        <div className="flex flex-col items-center justify-between px-10 mx-auto max-w-7xl xl:px-5 lg:flex-row">
          <div className="flex flex-col items-center w-full px-10 pt-5 pb-20 lg:pt-20 lg:flex-row">
            <div className="relative w-full max-w-md bg-cover lg:max-w-2xl lg:w-7/12">
              <Image
                className=""
                src="https://cdn.devdojo.com/images/december2020/taxi-programming.png"
                alt="img1"
                objectFit="cover"
                objectPosition="bottom"
                width={900}
                height={900}
              />
              <div className="relative flex flex-col items-center justify-center w-full h-full lg:pr-10"></div>
            </div>

            <div className="relative z-10 w-full max-w-2xl mt-20 lg:mt-0 lg:w-5/12">
              <div className="relative z-10 flex flex-col items-start justify-start p-10 bg-white shadow-2xl rounded-xl">
                <h4 className="w-full font-serif text-4xl font-medium leading-snug">
                  Schedule a Demo <br />
                  of our product
                </h4>
                <div className="relative w-full mt-6 space-y-8">
                  <div className="relative">
                    <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                      placeholder="John"
                    />
                  </div>
                  <div className="relative">
                    <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                      placeholder="Doe"
                    />
                  </div>
                  <div className="relative">
                    <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">
                      Email Address
                    </label>
                    <input
                      type="text"
                      className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                      placeholder="janedoe@email.com"
                    />
                  </div>
                  <div className="relative">
                    <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">
                      Phone
                    </label>
                    <input
                      type="number"
                      className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="relative">
                    <a
                      href="#_"
                      className="inline-block w-full px-5 py-4 text-xl font-medium text-center text-white transition duration-200 bg-yellow-300 rounded-lg hover:bg-yellow-400 ease"
                    >
                      Submit
                    </a>
                  </div>
                </div>
              </div>
              <svg
                className="absolute top-0 left-0 z-0 w-32 h-32 -mt-12 -ml-12 text-gray-200 fill-current"
                viewBox="0 0 91 91"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g stroke="none" stroke-width="1" fill-rule="evenodd">
                  <g fill-rule="nonzero">
                    <g>
                      <g>
                        <circle cx="3.261" cy="3.445" r="2.72"></circle>
                        <circle cx="15.296" cy="3.445" r="2.719"></circle>
                        <circle cx="27.333" cy="3.445" r="2.72"></circle>
                        <circle cx="39.369" cy="3.445" r="2.72"></circle>
                        <circle cx="51.405" cy="3.445" r="2.72"></circle>
                        <circle cx="63.441" cy="3.445" r="2.72"></circle>
                        <circle cx="75.479" cy="3.445" r="2.72"></circle>
                        <circle cx="87.514" cy="3.445" r="2.719"></circle>
                      </g>
                      <g transform="translate(0 12)">
                        <circle cx="3.261" cy="3.525" r="2.72"></circle>
                        <circle cx="15.296" cy="3.525" r="2.719"></circle>
                        <circle cx="27.333" cy="3.525" r="2.72"></circle>
                        <circle cx="39.369" cy="3.525" r="2.72"></circle>
                        <circle cx="51.405" cy="3.525" r="2.72"></circle>
                        <circle cx="63.441" cy="3.525" r="2.72"></circle>
                        <circle cx="75.479" cy="3.525" r="2.72"></circle>
                        <circle cx="87.514" cy="3.525" r="2.719"></circle>
                      </g>
                      <g transform="translate(0 24)">
                        <circle cx="3.261" cy="3.605" r="2.72"></circle>
                        <circle cx="15.296" cy="3.605" r="2.719"></circle>
                        <circle cx="27.333" cy="3.605" r="2.72"></circle>
                        <circle cx="39.369" cy="3.605" r="2.72"></circle>
                        <circle cx="51.405" cy="3.605" r="2.72"></circle>
                        <circle cx="63.441" cy="3.605" r="2.72"></circle>
                        <circle cx="75.479" cy="3.605" r="2.72"></circle>
                        <circle cx="87.514" cy="3.605" r="2.719"></circle>
                      </g>
                      <g transform="translate(0 36)">
                        <circle cx="3.261" cy="3.686" r="2.72"></circle>
                        <circle cx="15.296" cy="3.686" r="2.719"></circle>
                        <circle cx="27.333" cy="3.686" r="2.72"></circle>
                        <circle cx="39.369" cy="3.686" r="2.72"></circle>
                        <circle cx="51.405" cy="3.686" r="2.72"></circle>
                        <circle cx="63.441" cy="3.686" r="2.72"></circle>
                        <circle cx="75.479" cy="3.686" r="2.72"></circle>
                        <circle cx="87.514" cy="3.686" r="2.719"></circle>
                      </g>
                      <g transform="translate(0 49)">
                        <circle cx="3.261" cy="2.767" r="2.72"></circle>
                        <circle cx="15.296" cy="2.767" r="2.719"></circle>
                        <circle cx="27.333" cy="2.767" r="2.72"></circle>
                        <circle cx="39.369" cy="2.767" r="2.72"></circle>
                        <circle cx="51.405" cy="2.767" r="2.72"></circle>
                        <circle cx="63.441" cy="2.767" r="2.72"></circle>
                        <circle cx="75.479" cy="2.767" r="2.72"></circle>
                        <circle cx="87.514" cy="2.767" r="2.719"></circle>
                      </g>
                      <g transform="translate(0 61)">
                        <circle cx="3.261" cy="2.846" r="2.72"></circle>
                        <circle cx="15.296" cy="2.846" r="2.719"></circle>
                        <circle cx="27.333" cy="2.846" r="2.72"></circle>
                        <circle cx="39.369" cy="2.846" r="2.72"></circle>
                        <circle cx="51.405" cy="2.846" r="2.72"></circle>
                        <circle cx="63.441" cy="2.846" r="2.72"></circle>
                        <circle cx="75.479" cy="2.846" r="2.72"></circle>
                        <circle cx="87.514" cy="2.846" r="2.719"></circle>
                      </g>
                      <g transform="translate(0 73)">
                        <circle cx="3.261" cy="2.926" r="2.72"></circle>
                        <circle cx="15.296" cy="2.926" r="2.719"></circle>
                        <circle cx="27.333" cy="2.926" r="2.72"></circle>
                        <circle cx="39.369" cy="2.926" r="2.72"></circle>
                        <circle cx="51.405" cy="2.926" r="2.72"></circle>
                        <circle cx="63.441" cy="2.926" r="2.72"></circle>
                        <circle cx="75.479" cy="2.926" r="2.72"></circle>
                        <circle cx="87.514" cy="2.926" r="2.719"></circle>
                      </g>
                      <g transform="translate(0 85)">
                        <circle cx="3.261" cy="3.006" r="2.72"></circle>
                        <circle cx="15.296" cy="3.006" r="2.719"></circle>
                        <circle cx="27.333" cy="3.006" r="2.72"></circle>
                        <circle cx="39.369" cy="3.006" r="2.72"></circle>
                        <circle cx="51.405" cy="3.006" r="2.72"></circle>
                        <circle cx="63.441" cy="3.006" r="2.72"></circle>
                        <circle cx="75.479" cy="3.006" r="2.72"></circle>
                        <circle cx="87.514" cy="3.006" r="2.719"></circle>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <svg
                className="absolute bottom-0 right-0 z-0 w-32 h-32 -mb-12 -mr-12 text-yellow-400 fill-current"
                viewBox="0 0 91 91"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g stroke="none" stroke-width="1" fill-rule="evenodd">
                  <g fill-rule="nonzero">
                    <g>
                      <g>
                        <circle cx="3.261" cy="3.445" r="2.72"></circle>
                        <circle cx="15.296" cy="3.445" r="2.719"></circle>
                        <circle cx="27.333" cy="3.445" r="2.72"></circle>
                        <circle cx="39.369" cy="3.445" r="2.72"></circle>
                        <circle cx="51.405" cy="3.445" r="2.72"></circle>
                        <circle cx="63.441" cy="3.445" r="2.72"></circle>
                        <circle cx="75.479" cy="3.445" r="2.72"></circle>
                        <circle cx="87.514" cy="3.445" r="2.719"></circle>
                      </g>
                      <g transform="translate(0 12)">
                        <circle cx="3.261" cy="3.525" r="2.72"></circle>
                        <circle cx="15.296" cy="3.525" r="2.719"></circle>
                        <circle cx="27.333" cy="3.525" r="2.72"></circle>
                        <circle cx="39.369" cy="3.525" r="2.72"></circle>
                        <circle cx="51.405" cy="3.525" r="2.72"></circle>
                        <circle cx="63.441" cy="3.525" r="2.72"></circle>
                        <circle cx="75.479" cy="3.525" r="2.72"></circle>
                        <circle cx="87.514" cy="3.525" r="2.719"></circle>
                      </g>
                      <g transform="translate(0 24)">
                        <circle cx="3.261" cy="3.605" r="2.72"></circle>
                        <circle cx="15.296" cy="3.605" r="2.719"></circle>
                        <circle cx="27.333" cy="3.605" r="2.72"></circle>
                        <circle cx="39.369" cy="3.605" r="2.72"></circle>
                        <circle cx="51.405" cy="3.605" r="2.72"></circle>
                        <circle cx="63.441" cy="3.605" r="2.72"></circle>
                        <circle cx="75.479" cy="3.605" r="2.72"></circle>
                        <circle cx="87.514" cy="3.605" r="2.719"></circle>
                      </g>
                      <g transform="translate(0 36)">
                        <circle cx="3.261" cy="3.686" r="2.72"></circle>
                        <circle cx="15.296" cy="3.686" r="2.719"></circle>
                        <circle cx="27.333" cy="3.686" r="2.72"></circle>
                        <circle cx="39.369" cy="3.686" r="2.72"></circle>
                        <circle cx="51.405" cy="3.686" r="2.72"></circle>
                        <circle cx="63.441" cy="3.686" r="2.72"></circle>
                        <circle cx="75.479" cy="3.686" r="2.72"></circle>
                        <circle cx="87.514" cy="3.686" r="2.719"></circle>
                      </g>
                      <g transform="translate(0 49)">
                        <circle cx="3.261" cy="2.767" r="2.72"></circle>
                        <circle cx="15.296" cy="2.767" r="2.719"></circle>
                        <circle cx="27.333" cy="2.767" r="2.72"></circle>
                        <circle cx="39.369" cy="2.767" r="2.72"></circle>
                        <circle cx="51.405" cy="2.767" r="2.72"></circle>
                        <circle cx="63.441" cy="2.767" r="2.72"></circle>
                        <circle cx="75.479" cy="2.767" r="2.72"></circle>
                        <circle cx="87.514" cy="2.767" r="2.719"></circle>
                      </g>
                      <g transform="translate(0 61)">
                        <circle cx="3.261" cy="2.846" r="2.72"></circle>
                        <circle cx="15.296" cy="2.846" r="2.719"></circle>
                        <circle cx="27.333" cy="2.846" r="2.72"></circle>
                        <circle cx="39.369" cy="2.846" r="2.72"></circle>
                        <circle cx="51.405" cy="2.846" r="2.72"></circle>
                        <circle cx="63.441" cy="2.846" r="2.72"></circle>
                        <circle cx="75.479" cy="2.846" r="2.72"></circle>
                        <circle cx="87.514" cy="2.846" r="2.719"></circle>
                      </g>
                      <g transform="translate(0 73)">
                        <circle cx="3.261" cy="2.926" r="2.72"></circle>
                        <circle cx="15.296" cy="2.926" r="2.719"></circle>
                        <circle cx="27.333" cy="2.926" r="2.72"></circle>
                        <circle cx="39.369" cy="2.926" r="2.72"></circle>
                        <circle cx="51.405" cy="2.926" r="2.72"></circle>
                        <circle cx="63.441" cy="2.926" r="2.72"></circle>
                        <circle cx="75.479" cy="2.926" r="2.72"></circle>
                        <circle cx="87.514" cy="2.926" r="2.719"></circle>
                      </g>
                      <g transform="translate(0 85)">
                        <circle cx="3.261" cy="3.006" r="2.72"></circle>
                        <circle cx="15.296" cy="3.006" r="2.719"></circle>
                        <circle cx="27.333" cy="3.006" r="2.72"></circle>
                        <circle cx="39.369" cy="3.006" r="2.72"></circle>
                        <circle cx="51.405" cy="3.006" r="2.72"></circle>
                        <circle cx="63.441" cy="3.006" r="2.72"></circle>
                        <circle cx="75.479" cy="3.006" r="2.72"></circle>
                        <circle cx="87.514" cy="3.006" r="2.719"></circle>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Signup6
