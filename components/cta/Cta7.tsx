import React from 'react'
import type { NextPage } from 'next'

const Cta7: NextPage = () => {
  return (
    <>
      <section className="w-full pt-20 bg-black">
    <div className="flex flex-col items-center justify-center max-w-6xl px-16 mx-auto text-center text-white sm:px-0">

        <h2 className="text-5xl font-bold mb-1.5">iPhone 12 Pro</h2>
        <p className="mb-3 text-3xl font-medium">It's a leap year.</p>
        <p className="inline-block text-base text-gray-500 sm:block">From $41.62/mo. for 24 mo. or $999 before trade‑in.<br className="hidden sm:block" /> Buy directly from Apple with special carrier offers.</p>
        <p className="inline-block text-base text-gray-500 sm:block"></p>

        <div className="flex flex-col items-center justify-center mt-8 mb-8 sm:flex-row sm:space-x-5">
            <a href="#_" className="bg-blue-600 text-white inline-block md:mx-0 sm:mb-0 mb-5 mx-auto rounded-full px-5 py-1.5">Buy Now</a>
            <a href="#_" className="flex items-center w-auto mx-auto text-lg leading-tight text-center text-blue-600 hover:underline sm:mx-0">
                <span>Learn more</span>
                <svg className="w-4 h-4 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </a>
        </div>
        <img src="https://cdn.devdojo.com/images/april2021/iphone-12.jpg" className="w-full" />

    </div>
</section>
    </>
  )
}

export default Cta7
