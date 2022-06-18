import React from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'

const Content7: NextPage = () => {
  return (
    <>
      <section className="flex items-center justify-center py-10 text-white bg-white sm:py-16 md:py-24 lg:py-32">
        <div className="relative max-w-3xl px-10 text-center text-white auto lg:px-0">
          <div className="flex flex-col w-full md:flex-row">
            {/* <!-- Top Text --> */}
            <div className="flex justify-between">
              <h1 className="relative flex flex-col text-6xl font-extrabold text-left text-black">
                Crafting
                <span>Powerful</span>
                <span>Experiences</span>
              </h1>
            </div>
            {/* <!-- Right Image --> */}
            <div className="relative top-0 right-0 h-64 mt-12 md:-mt-16 md:absolute md:h-96">
              <img
                src="https://cdn.devdojo.com/images/december2020/designs3d.png"
                className="object-cover mt-3 mr-5 h-80 lg:h-96"
              />
            </div>
          </div>

          {/* <!-- Separator --> */}
          <div className="my-16 border-b border-gray-300 lg:my-24"></div>

          {/* <!-- Bottom Text --> */}
          <h2 className="text-left text-gray-500 xl:text-xl">
            Building beautiful designs for your next project. We've unlocked the
            secret to converting visitors into customers. Download our re-usable
            and extandable components today.
          </h2>
        </div>
      </section>
    </>
  )
}

export default Content7