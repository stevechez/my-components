import React from 'react'
import type { NextPage } from 'next'

const Cta4: NextPage = () => {
  return (
    <>
      <section className="py-5 sm:py-10 bg-white">
    <div className="max-w-5xl px-5 sm:px-10 mx-auto">
        <div className="pb-10 bg-gray-50 flex flex-col-reverse relative overflow-hidden items-start p-8 sm:p-16 rounded-2xl md:flex-row">
            <div className="flex-auto">
                <h3 className="mb-4 text-sm leading-tight font-semibold text-blue-500">New Features</h3>
                <p className="mb-2 text-xl font-semibold tracking-tight text-gray-900">Design in Real-time</p>
                <div className="mb-6 text-sm leading-6 text-gray-600 space-y-4">
                    <p>Join over 2,000 developers as we learn how to design better user experiences together. Our latest features allow you to design in real-time, making it easier to visualize your next masterpiece.</p>
                </div>
                <a href="#_" className="rounded-md bg-indigo-600 inline-block text-white px-4 text-sm font-medium hover:bg-indigo-500 py-2.5 md:w-auto w-full text-center">Learn More</a>
            </div>
            <div className="w-full flex-none md:mb-0 mb-8 md:ml-8 md:w-1/2">
                <div className="md:absolute max-w-lg md:pl-5">
                    <img src="https://cdn.sketchrepo.com/images/2x/stunning-dashboard-m7.jpg" className="rounded-xl transform translate-x-6" />
                </div>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default Cta4
