import React from 'react'
import type { NextPage } from 'next'

const Cta6: NextPage = () => {
  return (
    <>
      <section className="w-full sm:p-8">
    <div className="flex flex-col items-center px-8 py-20 mx-auto bg-black max-w-7xl sm:rounded-xl sm:px-16 lg:px-32 md:flex-row">
        <div className="w-full mb-10 md:w-1/2 lg:pl-6 xl:pl-24 md:mb-0">
            <img src="https://cdn.devdojo.com/images/april2021/apple-watch.jpg" className="w-1/2 mx-auto md:w-5/6" />
        </div>

        <div className="flex flex-col items-center justify-center w-full text-center text-white md:w-1/2">
            <img src="https://cdn.devdojo.com/images/april2021/watch-series-6.png" className="w-auto h-10 mt-8 md:h-14" />
            <h2 className="mt-8 text-2xl font-semibold md:text-4xl">The future of health <br />is on your wrist.</h2>
            <p className="mt-6 text-lg font-semibold md:text-xl">From $399</p>
            <div className="flex flex-col items-center justify-center mt-8 mb-8 sm:flex-row sm:space-x-5">
                <a href="#_" className="bg-blue-600 text-white inline-block md:mx-0 sm:mb-0 mb-5 mx-auto rounded-full px-5 py-1.5">Buy Now</a>
                <a href="#_" className="flex items-center w-auto mx-auto text-lg leading-tight text-center text-blue-600 hover:underline sm:mx-0">
                    <span>Learn more</span>
                    <svg className="w-4 h-4 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default Cta6
