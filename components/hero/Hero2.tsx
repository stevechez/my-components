import React from 'react'
import type { NextPage } from 'next'

const Hero2: NextPage = () => {
  return (
    <>
      <section className="w-full py-20 bg-white">
        <div className="flex flex-col items-center px-12 mx-auto max-w-7xl lg:flex-row">
          <div className="relative z-20 flex flex-col items-start justify-center w-full h-full lg:w-5/12">
            <p className="pb-5 text-sm font-medium tracking-wide text-pink-500 uppercase">
              crafted with Love 🥰
            </p>
            <h1 className="text-5xl font-bold xl:text-6xl pb-7 ">
              The Ultimate <br />
              Design Collection
            </h1>
            <p className="text-lg text-gray-500 pb-7">
              We've handcrafted the ultimate design collection that we think you
              are going to love. Each template and design has been built with
              clean and functional TailwindCSS Awesomeness.
            </p>
            <div className="flex flex-col items-center w-full sm:w-auto sm:flex-row sm:space-x-10">
              <a
                href="#_"
                className="px-7 sm:w-auto justify-center w-full flex items-center overflow-hidden group relative py-3.5 text-xl font-medium text-white bg-gray-900 rounded-full"
              >
                <span className="absolute inset-0 w-full h-0 transition-all duration-300 ease-out bg-pink-500 group-hover:h-full"></span>
                <span className="relative">Get Started</span>
              </a>
              <a
                href="#_"
                className="flex items-center mt-10 text-xl font-medium underline transition duration-150 ease-out hover:text-pink-500 sm:mt-0"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Learn More</span>
              </a>
            </div>
          </div>

          <div className="relative z-10 w-full h-full my-16 lg:my-0 lg:w-7/12">
            <img
              className="relative z-40 w-full h-full"
              src="https://cdn.devdojo.com/images/june2021/home-hero.png"
            />
            <div className="box-content absolute inset-0 z-30 hidden scale-150 translate-x-40 translate-y-10 rounded-full w-80 lg:block h-80 xl:w-96 xl:h-96 bg-pink-50"></div>
            <div className="absolute bottom-0 left-0 z-20 hidden -translate-x-3 -translate-y-12 rounded-full opacity-50 w-72 lg:block h-72 bg-yellow-50"></div>
            <div className="absolute top-0 left-0 z-20 hidden -translate-x-12 -translate-y-12 rounded-full opacity-50 w-72 lg:block h-72 bg-blue-50"></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero2
