import React from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'

const Content5: NextPage = () => {
  return (
    <>
      <section className="w-full px-10 py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="w-full mb-4 font-serif text-3xl text-left sm:text-4xl md:text-center lg:text-5xl">
            All the tools you know and love
          </h2>
          <p className="w-full mb-12 text-lg font-light text-left text-gray-700 md:text-center md:text-xl lg:text-2xl">
            Our application seemlessly integrates with the tools you already
            know and love. <br className="hidden md:block" />
            Why learn another tool when you can integrate all your favorites
            with us.
          </p>
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            <div className="flex items-center justify-center py-8 bg-white shadow-sm rounded-xl">
              <img
                src="https://cdn.devdojo.com/images/october2021/figma-dynamic-color.png"
                className="w-24 h-24"
              />
            </div>
            <div className="flex items-center justify-center py-8 bg-white shadow-sm rounded-xl">
              <img
                src="https://cdn.devdojo.com/images/october2021/blender-dynamic-color.png"
                className="w-24 h-24"
              />
            </div>
            <div className="flex items-center justify-center py-8 bg-white shadow-sm rounded-xl">
              <img
                src="https://cdn.devdojo.com/images/october2021/flash-dynamic-color.png"
                className="w-24 h-24"
              />
            </div>
            <div className="flex items-center justify-center py-8 bg-white shadow-sm rounded-xl">
              <img
                src="https://cdn.devdojo.com/images/october2021/notebook-dynamic-color.png"
                className="w-24 h-24"
              />
            </div>
            <div className="flex items-center justify-center py-8 bg-white shadow-sm rounded-xl">
              <img
                src="https://cdn.devdojo.com/images/october2021/paint-kit-dynamic-color.png"
                className="w-24 h-24"
              />
            </div>
            <div className="flex items-center justify-center py-8 bg-white shadow-sm rounded-xl">
              <img
                src="https://cdn.devdojo.com/images/october2021/rocket-dynamic-color.png"
                className="w-24 h-24"
              />
            </div>
          </div>
          <div className="w-full mt-10 text-center">
            <a
              href="#_"
              className="inline-block font-medium text-gray-400 underline"
            >
              View All Our Integrations
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Content5
