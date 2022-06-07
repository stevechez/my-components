import React from 'react'
import type { NextPage } from 'next'

const Cta5: NextPage = () => {
  return (
    <>
      <section className="pt-20 pb-32 bg-gray-900">
    <div className="max-w-3xl px-12 mx-auto space-y-8 text-left lg:px-0 md:text-center">
        <p className="mx-auto text-lg font-medium text-blue-300">Prices now start at just $15/month</p>
        <h2 className="max-w-2xl mx-auto text-5xl font-bold text-white md:text-6xl">The Ultimate Designs for <span className="text-blue-300">TailwindCSS</span></h2>
        <p className="max-w-xl mx-auto text-lg text-gray-200 opacity-80">Your users deserve a design and an experience that will help them understand the passion behind your idea.</p>
        <div className="flex flex-col items-center justify-start w-full space-y-5 md:flex-row md:space-y-0 md:space-x-5 md:justify-center">
            <a href="#_" className="w-full px-10 py-4 font-medium text-center text-white bg-blue-300 rounded-lg md:w-auto">Get Started Free</a>
            <a href="#_" className="w-full px-10 py-4 font-medium text-center text-gray-200 border border-gray-600 rounded-lg md:w-auto">Learn More</a>
        </div>
    </div>
</section>
    </>
  )
}

export default Cta5
