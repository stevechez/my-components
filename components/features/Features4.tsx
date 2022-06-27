import React from 'react'
import type { NextPage } from 'next'

const Features4: NextPage = () => {
  return (
    <>
{/* <!-- Section 1 --> */}
<section className="w-full py-20 bg-black">
    <div className="max-w-5xl mx-auto md:px-8 xl:px-0">

        {/* <!-- Top Headline --> */}
        <div className="relative z-20 flex flex-col max-w-lg mx-auto text-center">
            <img src="https://cdn.devdojo.com/images/april2021/m1.jpg" className="w-24 h-24 mx-auto" />
            <h1 className="inline-block w-auto font-bold text-transparent bg-gradient-to-r text-7xl from-gray-500 via-gray-200 to-gray-900 bg-clip-text">Welcome to the future of Mac.</h1>
            <a href="#_" className="flex items-center w-auto mx-auto mt-5 text-lg leading-tight text-center text-blue-600 hover:underline">
                <span>Learn more about M1</span>
                <svg className="w-3 h-3 mt-0.5 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </a>
        </div>

        {/* <!-- Feature 1 --> */}
        <div className="flex flex-col-reverse w-full py-20 md:flex-row">
            <div className="relative z-20 flex flex-col items-center w-full space-y-1 transform md:w-1/2 lg:w-1/3 md:items-start md:translate-x-16">
                <p className="text-2xl font-bold text-yellow-600">New</p>
                <h2 className="text-5xl font-bold text-white">MacBook Air</h2>
                <h3 className="text-2xl font-medium text-white">Power. It's in the Air.</h3>
                <div className="flex flex-col items-center pt-4 space-y-4 md:items-start">
                    <p className="text-center text-white md:text-left">From $999 or <br />$83.25/mo. for 12 mo.**</p>
                    <a href="#_" className="bg-blue-600 text-white mt-8 inline-block md:mx-0 mx-auto rounded-full px-5 py-1.5">Shop</a>
                    <a href="#_" className="flex items-center w-auto mx-auto mt-5 text-lg leading-tight text-center text-blue-600 hover:underline sm:mx-0">
                        <span>Learn more</span>
                        <svg className="w-3 h-3 mt-0.5 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    </a>
                </div>
            </div>
            <div className="relative z-10 w-full md:w-1/2 lg:w-2/3">
                <img src="https://cdn.devdojo.com/images/april2021/macbook-air.jpg" className="w-full origin-center transform scale-125 md:scale-150 md:origin-top-right lg:translate-x-48 lg:-translate-y-16" />
            </div>
        </div>

        {/* <!-- Feature 2 --> */}
        <div className="flex flex-col w-full py-8 -mt-6 md:flex-row">
            <div className="relative z-10 w-full md:w-1/2 lg:w-2/3">
                <img src="https://cdn.devdojo.com/images/april2021/macbook-pro.jpg" className="w-full origin-center transform scale-110 md:scale-125 md:origin-top-right md:translate-x-20" />
            </div>
            <div className="relative z-20 flex flex-col items-center w-full space-y-1 transform md:w-1/2 lg:w-1/3 md:items-start md:translate-x-16">
                <p className="text-2xl font-bold text-yellow-600">New</p>
                <h2 className="text-5xl font-bold text-white">MacBook Pro</h2>
                <h3 className="text-2xl font-medium text-white">All systems Pro.</h3>
                <div className="flex flex-col items-center pt-4 space-y-4 md:items-start">
                    <p className="text-center text-white md:text-left">From $1299 or <br />$108.25/mo. for 12 mo.**</p>
                    <a href="#_" className="bg-blue-600 text-white mt-8 inline-block md:mx-0 mx-auto rounded-full px-5 py-1.5">Shop</a>
                    <a href="#_" className="flex items-center w-auto mx-auto mt-5 text-lg leading-tight text-center text-blue-600 hover:underline sm:mx-0">
                        <span>Learn more</span>
                        <svg className="w-3 h-3 mt-0.5 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    </a>
                </div>
            </div>
        </div>

        {/* <!-- Feature 3 --> */}
        <div className="flex flex-col-reverse w-full pt-20 pb-10 md:flex-row sm:pt-40 sm:pb-20">
            <div className="relative z-20 flex flex-col items-center w-full space-y-1 transform md:w-1/2 lg:w-1/3 md:items-start md:translate-x-16">
                <p className="text-2xl font-bold text-yellow-600">New</p>
                <h2 className="text-5xl font-bold text-white">Mac mini</h2>
                <h3 className="text-2xl font-medium text-white">New guts. More glory.</h3>
                <div className="flex flex-col items-center pt-4 space-y-4 md:items-start">
                    <p className="text-center text-white md:text-left">From $699 or <br />$58.25/mo. for 12 mo.**</p>
                    <a href="#_" className="bg-blue-600 text-white mt-8 inline-block md:mx-0 mx-auto rounded-full px-5 py-1.5">Shop</a>
                    <a href="#_" className="flex items-center w-auto mx-auto mt-5 text-lg leading-tight text-center text-blue-600 hover:underline sm:mx-0">
                        <span>Learn more</span>
                        <svg className="w-3 h-3 mt-0.5 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    </a>
                </div>
            </div>
            <div className="relative z-10 w-full md:w-1/2 lg:w-2/3">
                <img src="https://cdn.devdojo.com/images/april2021/mac-mini.jpg" className="w-full origin-center transform scale-90 md:scale-110 md:origin-center " />
            </div>
        </div>

    </div>
</section>

{/* <!-- Section 2 --> */}
<section className="px-0 py-10 mx-auto space-y-10 max-w-7xl md:px-10">
    {/* <!-- Block 1 --> */}
    <div className="flex flex-col items-center h-full py-10 overflow-hidden md:rounded-xl bg-gradient-to-tr from-purple-900 via-indigo-800 to-pink-600 md:flex-row">
        <div className="flex flex-col items-center justify-center w-full h-full py-5 pl-16 pr-16 mb-10 md:w-1/2 md:mb-0 md:items-start md:pl-10 lg:pl-16 lg:pr-10">
            <h2 className="inline-block mx-auto text-5xl font-bold leading-tight text-transparent sm:text-6xl lg:text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 md:mx-0">8-core CPU</h2>
            <h3 className="text-5xl font-bold leading-none text-indigo-100 sm:text-6xl lg:text-7xl">We're on a <br />power chip.</h3>
            <p className="max-w-sm my-8 text-center text-white opacity-75 md:text-left lg:text-lg md:max-w-none">The M1 chip makes MacBook Pro outrageously fast and powerful. Its 8‑core CPU rips through complex workflows and heavy workloads, with up to 2.8x faster processing performance.</p>
            <a href="#_" className="px-6 py-2 text-lg font-medium text-white border-2 border-white rounded-full">Learn More</a>
        </div>

        <div className="flex justify-end w-full pl-6 overflow-hidden md:w-1/2 md:pl-0">
            <img src="https://cdn.devdojo.com/images/april2021/mb-1.png" className="object-cover w-full h-full transform translate-x-0 md:translate-x-0" />
        </div>
    </div>

    {/* <!-- Block 2 --> */}
    <div className="flex flex-col items-center h-full py-10 overflow-hidden md:rounded-xl bg-gradient-to-tr from-blue-900 via-indigo-700 to-green-700 md:flex-row">
        <div className="flex justify-start w-full pr-6 overflow-hidden md:w-1/2 md:pr-0">
            <img src="https://cdn.devdojo.com/images/april2021/mb-2.png" className="object-cover w-full h-full transform translate-x-0 md:translate-x-0" />
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full py-5 pl-16 pr-12 mb-10 md:w-1/2 md:mb-0 md:items-start md:pl-16 lg:pl-10 lg:pr-12">
            <h2 className="inline-block pb-2 mx-auto text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 md:mx-0">16-core Neural Engine.</h2>
            <h3 className="text-5xl font-bold leading-none text-indigo-50">Smarts, meet speed. </h3>
            <p className="max-w-sm my-8 text-center text-white opacity-75 md:text-left lg:text-lg md:max-w-none">Machine learning (ML) brings task‑smashing speed and automation to video analysis, voice recognition, image processing, and more. 16‑core Neural Engine and full stack of technologies takes ML performance to the stratosphere.</p>
            <a href="#_" className="px-6 py-2 text-lg font-medium text-white border-2 border-white rounded-full">Learn More</a>
        </div>
    </div>

    {/* <!-- Block 3 --> */}

    {/* style="background-image:url('https://cdn.devdojo.com/images/april2021/background.jpg')" */}

    <div className="flex flex-col items-center h-full py-10 overflow-hidden bg-gray-900 bg-cover md:rounded-xl md:flex-row">
        <div className="flex flex-col items-center justify-center w-full h-full py-5 pl-16 pr-16 mb-10 md:w-1/2 md:mb-0 md:items-start md:pl-10 lg:pl-16 lg:pr-0">
            <h2 className="inline-block mx-auto text-5xl font-bold leading-tight text-transparent sm:text-6xl lg:text-7xl bg-clip-text bg-gradient-to-r from-purple-200 to-pink-100 md:mx-0">The power of </h2>
            <h3 className="max-w-lg text-5xl font-bold leading-tight text-white">macOS Big Sur on M1.</h3>
            <p className="max-w-sm my-8 text-center text-white opacity-75 md:text-left lg:text-lg md:max-w-none">Developed to unlock the potential of the M1 chip, macOS Big Sur transforms Mac with major performance benefits and so much more. Powerful updates for apps. A beautiful new design. Industry-leading privacy features and best‑in‑className security.</p>
            <a href="#_" className="px-6 py-2 text-lg font-medium text-white border-2 border-white rounded-full">Learn More</a>
        </div>

        <div className="flex justify-end w-full pl-6 overflow-hidden md:w-1/2 md:pl-0">
            <img src="https://cdn.devdojo.com/images/april2021/macbook.png" className="object-cover w-full h-full transform translate-x-0 md:translate-x-0" />
        </div>
    </div>
</section>

{/* <!-- Section 3 --> */}
<div className="py-10 bg-black sm:py-12 lg:py-16">
    <div className="px-12 pb-5 mx-auto max-w-screen-2xl md:px-16">
        <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-3xl font-bold text-left text-gray-100 lg:text-5xl md:text-center md:mb-10">Our <span className="relative inline-block text-transparent bg-gradient-to-br from-indigo-300 via-blue-300 to-green-300 bg-clip-text">Awesome
                    <svg className="absolute hidden w-2/3 h-auto mt-1 text-gray-100 transform translate-x-8 fill-current md:block" viewBox="0 0 76 12" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero"><path d="M71.531 4.853c-2.199-.224-4.183-.188-6.265-.193-4.063-.011-8.125-.88-12.188-.85-9.099.079-18.339-.421-27.47.402-2.697.239-5.391.442-8.061.786-.256.031-.51.063-.767.099-2.505.328-5.775.136-8.265.48-2.192.457-3.891 1.03-5.99.874-.557-.108-1.15-.303-1.484-.698C.312 4.905-.027 4.129.326 3.482c.115-.213.313-.432.527-.629.417-.366.917-.653 1.189-.678 4.692-.5 10.015-.594 14.255-.683 2.093-.042 4.254-.099 6.896-.208 6.104-.156 15.729-.256 21.839-.406 5.339-.135 10.692.609 15.979 1.162 2.01.209 3.276.209 5.078.266.301.004.641.015.99.025 1.781.057 4.989-.224 6.025.317 1.037.547 1.761.604 2.667 1.609.048.991-.317 1.449-.78 1.615-1.079.396-2.068.839-2.907.975-.983.156-1.776.162-1.937-.213-.156-.376-.068-.609.088-.781.271-.281.76-.589 1.198-.797l.098-.203Z"></path><path d="M28.744 9.336c1.677-.088 3.364-.203 5.036-.142 2.115.074 3.907.314 6.006.281.708-.009 5.016.005 5.604-.004 1.833-.032 3.636-.026 5.464.025 1.213.036 2.432.109 3.636.251 2.833.333 5.76.557 8.547 1.192.708.162 1.432.297 2.145.167.708-.125 1.792-.5 1.719-1.276-.083-.907-.833-2.036-1.735-2.322-.276-.084-.911-.475-1.192-.533-.265-.052-.5-.238-.745-.27-.578-.078-1.011.188-1.547.318-.625.151-1.979-.272-2.625-.287-2.281-.057-3.609.525-5.891.505-1.348-.01-2.703-.052-4.052-.074-1.295-.021-2.593.017-3.885-.052-.902-.046-1.792-.292-2.687-.312-.767-.016-1.543.125-2.297.276-.645.135-1.355.078-2.01.083-.599.011-1.333-.14-1.891 0-.719.183-1.517.188-2.25.26-1.38.136-2.074-.109-3.448.063-.855.104-1.486.432-2.339.313-.437-.063-1.557.219-1.994.172-.449-.042-.48.28-.885.333-.491.061-.986.047-1.475.067-.208.011-.766-.011-.911.152-.204.224.203.687.509.818 1.121.489 2.74.098 3.922.057.422-.014.845-.035 1.271-.061Z"></path></g></svg>
                </span> Features</h2>

            <p className="max-w-screen-md mx-auto text-left text-gray-300 md:text-lg md:text-center">
                We pride ourselves in the features that our application provides. We have been trusted by over 500+ companies to take their business to the next level.
            </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3 md:gap-12">
            {/* <!-- feature - start --> */}
            <div className="flex gap-4 md:gap-5 bg-gradient-to-br group from-yellow-400 via-red-400 to-pink-400 rounded-2xl p-0.5">
                <div className="flex gap-4 p-5 bg-gray-900 md:gap-5 bg-opacity-5 rounded-2xl">
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-white rounded-full md:w-14 md:h-14 bg-gradient-to-br from-yellow-300 via-red-300 to-pink-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                        </svg>
                    </div>

                    <div>
                        <h3 className="mb-2 text-lg font-semibold text-white md:text-xl">Analytics</h3>
                        <p className="mb-2 text-sm text-red-50">Full analytics so you can get insight to what your customers and users are doing.</p>
                    </div>
                </div>
            </div>
            {/* <!-- feature - end --> */}

            {/* <!-- feature - start --> */}
            <div className="flex gap-4 md:gap-5 cursor-pointer bg-gradient-to-br from-green-400 via-blue-400 to-indigo-400 rounded-2xl p-0.5">
                <div className="flex gap-4 p-5 bg-gray-900 md:gap-5 bg-opacity-5 rounded-xl">
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-white rounded-full md:w-14 md:h-14 bg-gradient-to-br from-green-300 via-blue-300 to-indigo-300">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                    </div>

                    <div>
                        <h3 className="mb-2 text-lg font-semibold text-white md:text-xl">Messaging</h3>
                        <p className="mb-2 text-sm text-blue-50">Messaging system where your users can communicate and interact together.</p>
                    </div>
                </div>
            </div>
            {/* <!-- feature - end --> */}

            {/* <!-- feature - start --> */}
            <div className="flex gap-4 md:gap-5 cursor-pointer bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-2xl p-0.5">
                <div className="flex gap-4 p-5 bg-gray-900 md:gap-5 bg-opacity-5 rounded-xl">
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-white rounded-full md:w-14 md:h-14 bg-gradient-to-br from-blue-300 via-purple-300 to-pink-300">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path></svg>
                    </div>

                    <div>
                        <h3 className="mb-2 text-lg font-semibold text-white md:text-xl">Insights</h3>
                        <p className="mb-2 text-sm text-blue-50">Gain insights into all the events that are fired in your web and mobile applications.</p>
                    </div>
                </div>
            </div>
            {/* <!-- feature - end --> */}

            {/* <!-- feature - start --> */}
            <div className="flex gap-4 md:gap-5 cursor-pointer bg-gradient-to-br from-indigo-400 via-blue-400 to-green-400 rounded-2xl p-0.5">
                <div className="flex gap-4 p-5 bg-gray-900 md:gap-5 bg-opacity-5 rounded-xl">
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-white rounded-full md:w-14 md:h-14 bg-gradient-to-br from-indigo-300 via-blue-300 to-green-300">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
                    </div>

                    <div>
                        <h3 className="mb-2 text-lg font-semibold text-white md:text-xl">Payments</h3>
                        <p className="mb-2 text-sm text-blue-50">Easily accept payments easily within your applications using our intuitive API.</p>
                    </div>
                </div>
            </div>
            {/* <!-- feature - end --> */}

            {/* <!-- feature - start --> */}
            <div className="flex gap-4 md:gap-5 cursor-pointer bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 rounded-2xl p-0.5">
                <div className="flex gap-4 p-5 bg-gray-900 md:gap-5 bg-opacity-5 rounded-xl">
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-white rounded-full md:w-14 md:h-14 bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clip-rule="evenodd"></path></svg>
                    </div>

                    <div>
                        <h3 className="mb-2 text-lg font-semibold text-white md:text-xl">Customizations</h3>
                        <p className="mb-2 text-sm text-blue-50">You can customize the look and feel of every aspect inside your customer portal.</p>
                    </div>
                </div>
            </div>
            {/* <!-- feature - end --> */}

            {/* <!-- feature - start --> */}
            <div className="flex gap-4 md:gap-5 bg-gradient-to-br group from-pink-400 via-red-400 to-yellow-400 rounded-2xl p-0.5">
                <div className="flex gap-4 p-5 bg-gray-900 md:gap-5 bg-opacity-5 rounded-xl">
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-white rounded-full md:w-14 md:h-14 bg-gradient-to-br from-yellow-300 via-red-300 to-pink-300">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"></path></svg>
                    </div>

                    <div>
                        <h3 className="mb-2 text-lg font-semibold text-white md:text-xl">Plugins</h3>
                        <p className="mb-2 text-sm text-red-50">Hundreds of plug-ins for you to use to modify the functionality of your application.</p>
                    </div>
                </div>
            </div>
            {/* <!-- feature - end --> */}

        </div>
    </div>
</div>

    </>
  )
}

export default Features4
