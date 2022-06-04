import React from 'react'
import type { NextPage } from 'next'

const Apple1: NextPage = () => {
  return (
    <>
      <section className="w-full bg-white">
    <div className="py-10 mx-auto max-w-7xl md:px-8">

        <div className="flex flex-col-reverse items-center w-full p-10 bg-gray-100 md:rounded-xl sm:p-10 md:flex-row">

            <div className="w-full mt-16 md:w-1/2 md:mt-0">
                <img src="https://cdn.devdojo.com/images/april2021/apple-features-1.jpg" className="w-full" />
            </div>

            <div className="flex flex-col w-full space-y-6 text-center md:w-1/2 px-7 sm:px-0">
                <h2 className="max-w-md mx-auto text-3xl font-semibold md:text-4xl">Get 3% Daily Cash back with Apple Card.</h2>
                <p className="text-gray-600">And pay for your new Mac over 12 months, interest‑free when you choose Apple Card Monthly Installments.</p>
                <a href="#_" className="flex items-center w-auto mx-auto leading-tight text-center text-blue-600 hover:underline">
                    <span>Learn More</span>
                    <svg className="w-3 h-3 mt-0.5 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
            </div>

        </div>

        <div className="flex flex-col mt-10 md:flex-row md:mt-8 md:space-x-8">
            <div className="flex flex-col items-center justify-center flex-1 overflow-hidden text-center bg-gray-100 md:rounded-xl">
                <div className="flex flex-col px-10 pb-24 pt-14 sm:px-0">
                    <h3 className="text-xl font-semibold leading-none">Accessories</h3>
                    <p className="mt-5 text-3xl font-semibold leading-none tracking-normal md:text-4xl">Explore Mac accessories.</p>
                    <a href="#_" className="bg-blue-600 text-white mt-8 mx-auto inline-block rounded-full px-5 py-1.5">Shop</a>
                </div>
                <img src="https://cdn.devdojo.com/images/april2021/apple-features-2.jpg" />
            </div>
            <div className="relative flex flex-col items-center flex-1 mt-10 overflow-hidden text-center bg-gray-100 md:rounded-xl md:mt-0">
                <div className="flex flex-col px-10 pb-24 space-y-6 pt-14 md:px-24">
                    <h3 className="text-xl font-semibold leading-tight">Apple Trade In</h3>
                    <p className="text-3xl font-semibold leading-none md:text-4xl">Get credit toward a<br /> new Mac.</p>
                    <p className="font-light text-gray-600">Just trade in your eligible computer for credit or recycle it for free. It’s good for you and the planet.</p>
                    <a href="#_" className="flex items-center w-auto mx-auto leading-tight text-center text-blue-600 hover:underline">
                        <span>Find your trade‑in value</span>
                        <svg className="w-3 h-3 mt-0.5 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    </a>
                </div>
                <img src="https://cdn.devdojo.com/images/april2021/apple-features-3.jpg" className="bottom-0 w-1/2 md:absolute" />
            </div>
        </div>

    </div>
</section>
    </>
  )
}

export default Apple1
