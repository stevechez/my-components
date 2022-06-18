import React from 'react'
import type { NextPage } from 'next'

const Title1: NextPage = () => {
  return (
    <>
      {/* <!-- Section 1 --> */}
      <section className="h-auto bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
            subtitle text
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Build your next great idea
          </p>
          <p className="max-w-3xl mt-5 mx-auto text-xl text-gray-500">
            Are you ready to start building the next great idea. You can start
            off by using our design components to help tell you story and
            showcase your great idea.
          </p>
        </div>
      </section>

      {/* <!-- Section 2 --> */}
      <section className="h-auto bg-white">
        <div className="px-4 py-24 mx-auto max-w-7xl">
          <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
            <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-7xl md:tracking-tight">
              {' '}
              The{' '}
              <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 lg:inline">
                Number One Source
              </span>{' '}
              for all your design needs.{' '}
            </h1>
            <p className="px-0 mb-6 text-lg text-gray-600 md:text-xl lg:px-24">
              {' '}
              Say hello to the number one source for all your design needs. Drag
              and drop designs, edit designs, and modify the components to help
              tell your story.{' '}
            </p>
          </div>
        </div>
      </section>

      {/* <!-- Section 3 --> */}
      <section className="h-auto bg-white py-20">
        <div className="text-center max-w-7xl mx-auto xl:px-0 px-5">
          <p className="font-medium text-[#27a69a] text-lg uppercase tracking-wide">
            Get Started for Free
          </p>
          <h1 className="text-4xl font-extrabold tracking-normal text-gray-900 sm:text-5xl md:text-7xl md:leading-none">
            Turbo-Charge your Website
          </h1>
          <p className="max-w-lg mx-auto mt-3 text-xl font-normal text-gray-500 sm:mt-5 sm:text-xl md:mt-5 md:text-2xl md:max-w-4xl">
            Hand-crafted and beautiful design elements to help you design and
            build quicker.
          </p>
        </div>
      </section>

      {/* <!-- Section 4 --> */}
      <section className="h-auto bg-[#f9f8f5] py-20">
        <div className="text-center max-w-7xl mx-auto xl:px-0 px-5">
          <div className="inline rounded-full uppercase tracking-white py-2 px-3 bg-gray-800 text-xs font-medium text-white">
            Get started for free
          </div>
          <h1 className="font-thin text-8xl mt-10">Hand-crafted Templates</h1>
          <div className="w-full max-w-7xl h-px bg-gradient-to-r my-5 from-white via-gray-300 to-white mx-auto"></div>
          <p className="font-light text-gray-500 text-xl">
            Check out our beautifully hand-crafted templates and use them in
            your next website or project.
          </p>
        </div>
      </section>
    </>
  )
}

export default Title1
