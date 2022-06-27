import React from 'react'
import type { NextPage } from 'next'

const Features5: NextPage = () => {
  return (
    <>
{/* <!-- Section 1 --> */}
<section className="pt-20 pb-32 bg-white">
    <div className="px-20 mx-auto max-w-7xl">
        <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">Features</h2>
        <p className="mb-16 text-lg text-gray-500">Here is our list of our powerful and award-winning features.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-16 lg:gap-x-24 gap-y-20">
            <div>
                <div className="flex items-center justify-center w-12 h-12 mb-4 text-red-600 bg-red-100 rounded-full">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                    </svg>
                </div>
                <h3 className="mb-2 text-base font-semibold leading-tight text-gray-900 lg:text-lg">Processing</h3>
                <p className="text-sm text-gray-500 lg:text-base">Faster processing to help you build your applications quicker and with more efficiency.</p>
            </div>

            <div>
                <div className="flex items-center justify-center w-12 h-12 mb-4 text-green-600 bg-green-100 rounded-full">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                </div>
                <h3 className="mb-2 text-base font-semibold leading-tight text-gray-900 lg:text-lg">Configuration</h3>
                <p className="text-sm text-gray-500 lg:text-base">Faster processing to help you build your applications quicker and with more efficiency.</p>
            </div>

            <div>
                <div className="flex items-center justify-center w-12 h-12 mb-4 text-blue-600 bg-blue-100 rounded-full">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                    </svg>
                </div>
                <h3 className="mb-2 text-base font-semibold leading-tight text-gray-900 lg:text-lg">Bundling</h3>
                <p className="text-sm text-gray-500 lg:text-base">Bundling functionality to help you build your application with ease and sustainability.</p>
            </div>

            <div>
                <div className="flex items-center justify-center w-12 h-12 mb-4 text-purple-600 bg-purple-100 rounded-full">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
                    </svg>
                </div>
                <h3 className="mb-2 text-base font-semibold leading-tight text-gray-900 lg:text-lg">Database</h3>
                <p className="text-sm text-gray-500 lg:text-base">Take advantage of unlimited storage and data retrieval from our global CDN data centers.</p>
            </div>

            <div>
                <div className="flex items-center justify-center w-12 h-12 mb-4 text-indigo-600 bg-indigo-100 rounded-full">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path>
                    </svg>
                </div>
                <h3 className="mb-2 text-base font-semibold leading-tight text-gray-900 lg:text-lg">Integrations</h3>
                <p className="text-sm text-gray-500 lg:text-base">Simple and configuration intregrations with your favorite applications and services.</p>
            </div>

            <div>
                <div className="flex items-center justify-center w-12 h-12 mb-4 text-pink-600 bg-pink-100 rounded-full">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                </div>
                <h3 className="mb-2 text-base font-semibold leading-tight text-gray-900 lg:text-lg">Speed</h3>
                <p className="text-sm text-gray-500 lg:text-base">Our tools and services have been crafted for maximum speed and efficiency.</p>
            </div>

        </div>
    </div>
</section>

{/* <!-- Section 2 --> */}
<section className="relative w-full px-8 font-sans leading-6 bg-purple-900 border-0 border-gray-200 border-solid text-gray-50">
    <div className="flex flex-col items-center max-w-6xl px-8 py-20 mx-auto leading-6 border-solid md:items-stretch md:justify-center md:py-24">
        <h2 className="w-full m-0 font-sans text-4xl font-black tracking-wide text-center border-0 border-gray-200 sm:text-5xl text-gray-50">Award-Winning Features</h2>
        <p className="w-full max-w-3xl mx-0 mx-auto mt-4 mb-0 font-sans text-sm font-medium leading-relaxed text-center text-indigo-200 border-0 border-gray-200 lg:text-lg md:text-base">
            Check out some of our award-winning features. We have been trusted by over 250 large name brand companies. We strive to make a product that is revolutionary.
        </p>
        <div className="grid grid-cols-3 gap-5 mt-10 sm:grid-cols-8 lg:grid-cols-12">
            <div className="max-w-xs col-span-4 font-sans border-0 border-gray-200 text-gray-50">
                <div className="box-border flex flex-col items-center h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:items-start sm:text-left">
                    <span className="flex-shrink-0 p-5 font-sans border-0 border-gray-200 rounded-full bg-gray-50 text-gray-50">
                        <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                    </span>
                    <div className="mt-6 font-sans text-center border-0 border-gray-200 sm:text-left text-gray-50">
                        <span className="box-border text-xl font-bold leading-none tracking-wider border-solid text-gray-50">Secure</span>
                        <p className="box-border mx-0 mt-2 mb-0 font-normal leading-snug text-center text-gray-300 border-solid sm:text-left">We strictly only deal with vendors that provide top notch security infrastructure.</p>
                    </div>
                </div>
            </div>

            <div className="max-w-xs col-span-4 font-sans border-0 border-gray-200 text-gray-50">
                <div className="box-border flex flex-col items-center h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:items-start sm:text-left">
                    <span className="flex-shrink-0 p-5 font-sans border-0 border-gray-200 rounded-full bg-gray-50 text-gray-50">
                        <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"></path></svg>
                    </span>
                    <div className="mt-6 font-sans text-center border-0 border-gray-200 sm:text-left text-gray-50">
                        <span className="box-border text-xl font-bold leading-none tracking-wider text-center border-solid sm:text-left text-gray-50">Amazing Support</span>
                        <p className="box-border mx-0 mt-2 mb-0 font-normal leading-snug text-center text-gray-300 border-solid sm:text-left">We provide world-className support to help you integrate into your system.</p>
                    </div>
                </div>
            </div>

            <div className="max-w-xs col-span-4 font-sans border-0 border-gray-200 text-gray-50">
                <div className="box-border flex flex-col items-center h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:items-start sm:text-left">
                    <span className="flex-shrink-0 p-5 font-sans border-0 border-gray-200 rounded-full bg-gray-50 text-gray-50">
                        <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                    </span>
                    <div className="mt-6 font-sans text-center border-0 border-gray-200 sm:text-left text-gray-50">
                        <span className="box-border text-xl font-bold leading-none tracking-wider text-center border-solid sm:text-left text-gray-50">Configurations</span>
                        <p className="box-border mx-0 mt-2 mb-0 font-normal leading-snug text-center text-gray-300 border-solid sm:text-left">Fully configurable interface to fit into your application and website.</p>
                    </div>
                </div>
            </div>

            <div className="max-w-xs col-span-4 font-sans border-0 border-gray-200 text-gray-50">
                <div className="box-border flex flex-col items-center h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:items-start sm:text-left">
                    <span className="flex-shrink-0 p-5 font-sans border-0 border-gray-200 rounded-full bg-gray-50 text-gray-50">
                        <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                    </span>
                    <div className="mt-6 font-sans text-center border-0 border-gray-200 sm:text-left text-gray-50">
                        <span className="box-border text-xl font-bold leading-none tracking-wider text-center border-solid sm:text-left text-gray-50">Developer API</span>
                        <p className="box-border mx-0 mt-2 mb-0 font-normal leading-snug text-center text-gray-300 border-solid sm:text-left">The Developer API will allow you to leverage our tools and build quicker.</p>
                    </div>
                </div>
            </div>

            <div className="max-w-xs col-span-4 font-sans border-0 border-gray-200 text-gray-50">
                <div className="box-border flex flex-col items-center h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:items-start sm:text-left">
                    <span className="flex-shrink-0 p-5 font-sans border-0 border-gray-200 rounded-full bg-gray-50 text-gray-50">
                        <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </span>
                    <div className="mt-6 font-sans text-center border-0 border-gray-200 sm:text-left text-gray-50">
                        <span className="box-border text-xl font-bold leading-none tracking-wider text-center border-solid sm:text-left text-gray-50">Fast and Reliable</span>
                        <p className="box-border mx-0 mt-2 mb-0 font-normal leading-snug text-center text-gray-300 border-solid sm:text-left">Our system has a 99.9% uptime and is extremely fast and reliable.</p>
                    </div>
                </div>
            </div>

            <div className="max-w-xs col-span-4 font-sans border-0 border-gray-200 text-gray-50">
                <div className="box-border flex flex-col items-center h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:items-start sm:text-left">
                    <span className="flex-shrink-0 p-5 font-sans border-0 border-gray-200 rounded-full bg-gray-50 text-gray-50">
                        <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path></svg>
                    </span>
                    <div className="mt-6 font-sans text-center border-0 border-gray-200 sm:text-left text-gray-50">
                        <span className="box-border text-xl font-bold leading-none tracking-wider text-center border-solid sm:text-left text-gray-50">Open Source</span>
                        <p className="box-border mx-0 mt-2 mb-0 font-normal leading-snug text-center text-gray-300 border-solid sm:text-left">Free and open-source tools that will continue to grow.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

{/* <!-- Section 3 --> */}
<section className="relative w-full py-12 overflow-hidden bg-white md:py-20 xl:pt-32 xl:pb-40">
    <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0">
        <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">Features</h2>
        <p className="mb-12 text-lg text-gray-500">Here is a few of the awesome features we provide.</p>

        <div className="flex w-full h-full">

            <div className="w-full lg:w-2/3">

                {/* <!-- Feature blocks first column --> */}
                <div className="flex flex-col w-full mb-10 sm:flex-row">
                    <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                        <div className="relative h-full ml-0 mr-0 sm:mr-10">
                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                            <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                                <div className="flex items-center -mt-1">
                                    <svg className="w-8 h-8 text-indigo-500 fill-current" viewBox="0 0 20 20"><polygon points="18.198,7.95 3.168,7.95 3.168,8.634 9.317,9.727 9.317,19.564 12.05,19.564 12.05,9.727 18.198,8.634 "></polygon><path d="M2.485,10.057v-3.41H2.473l0.012-4.845h1.366c0.378,0,0.683-0.306,0.683-0.683c0-0.378-0.306-0.683-0.683-0.683H1.119c-0.378,0-0.683,0.306-0.683,0.683c0,0.378,0.306,0.683,0.683,0.683h0.683v4.845C1.406,6.788,1.119,7.163,1.119,7.609v2.733c0,0.566,0.459,1.025,1.025,1.025c0.053,0,0.105-0.008,0.157-0.016l-0.499,5.481l5.9,2.733h0.931C8.634,13.266,5.234,10.458,2.485,10.057z"></path><path d="M18.169,6.584c-0.303-3.896-3.202-6.149-7.486-6.149c-4.282,0-7.183,2.252-7.484,6.149H18.169z M15.463,3.187c0.024,0.351-0.103,0.709-0.394,0.977c-0.535,0.495-1.405,0.495-1.94,0c-0.29-0.268-0.418-0.626-0.394-0.977C13.513,3.827,14.683,3.827,15.463,3.187z"></path><path d="M18.887,10.056c-2.749,0.398-6.154,3.206-6.154,9.508h0.933l5.899-2.733L18.887,10.056z"></path></svg>
                                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Awesome Dashboard</h3>
                                </div>
                                <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">PREMIUM FEATURE</p>
                                <p className="mb-2 text-gray-600">You can get a quick snapshot of all your analytics on your beautiful dashboard.</p>
                            </div>

                        </div>
                    </div>

                    <div className="w-full sm:w-1/2">
                        <div className="relative h-full ml-0 md:mr-10">
                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
                            <div className="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                                <div className="flex items-center -mt-1">
                                    <svg className="w-8 h-8 text-purple-500 fill-current" viewBox="0 0 20 20"><path d="M19.629,9.655c-0.021-0.589-0.088-1.165-0.21-1.723h-3.907V7.244h1.378V6.555h-2.756V5.866h2.067V5.177h-0.689V4.488h-1.378V3.799h0.689V3.11h-1.378V2.421h0.689V1.731V1.294C12.88,0.697,11.482,0.353,10,0.353c-5.212,0-9.446,4.135-9.629,9.302H19.629z M6.555,2.421c1.522,0,2.756,1.234,2.756,2.756S8.077,7.933,6.555,7.933S3.799,6.699,3.799,5.177S5.033,2.421,6.555,2.421z"></path><path d="M12.067,18.958h-0.689v-0.689h2.067v-0.689h0.689V16.89h2.067v-0.689h0.689v-0.689h-1.378v-0.689h-2.067v-0.689h1.378v-0.689h2.756v-0.689h-1.378v-0.689h3.218c0.122-0.557,0.189-1.134,0.21-1.723H0.371c0.183,5.167,4.418,9.302,9.629,9.302c0.711,0,1.401-0.082,2.067-0.227V18.958z"></path></svg>
                                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Rad Tools</h3>
                                </div>
                                <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">NEW FEATURE</p>
                                <p className="mb-2 text-gray-600">We've got some pretty rad tools to help you take on the world.</p>
                            </div>

                        </div>
                    </div>
                </div>

                {/* <!-- Feature blocks second column --> */}
                <div className="flex flex-col w-full mb-5 sm:flex-row">
                    <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                        <div className="relative h-full ml-0 mr-0 sm:mr-10">
                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                            <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                                <div className="flex items-center -mt-1">
                                    <svg className="w-8 h-8 text-blue-400 fill-current" viewBox="0 0 20 20"><path d="M18.21,16.157v-8.21c0-0.756-0.613-1.368-1.368-1.368h-1.368v1.368v1.368v6.841l-1.368,3.421h5.473L18.21,16.157z"></path><path d="M4.527,9.316V7.948V6.579H3.159c-0.756,0-1.368,0.613-1.368,1.368v8.21l-1.368,3.421h5.473l-1.368-3.421V9.316z"></path><path d="M14.766,5.895h0.023V5.21c0-2.644-2.145-4.788-4.789-4.788S5.211,2.566,5.211,5.21v0.685h0.023H14.766zM12.737,3.843c0.378,0,0.684,0.307,0.684,0.684s-0.306,0.684-0.684,0.684c-0.378,0-0.684-0.307-0.684-0.684S12.358,3.843,12.737,3.843z M10,1.448c0.755,0,1.368,0.613,1.368,1.368S10.755,4.185,10,4.185c-0.756,0-1.368-0.613-1.368-1.368S9.244,1.448,10,1.448z"></path><path d="M14.789,6.579H5.211v9.578l1.368,1.368h6.841l1.368-1.368V6.579z M12.052,12.052H7.948c-0.378,0-0.684-0.306-0.684-0.684c0-0.378,0.306-0.684,0.684-0.684h4.105c0.378,0,0.684,0.306,0.684,0.684C12.737,11.746,12.431,12.052,12.052,12.052z M12.052,9.316H7.948c-0.378,0-0.684-0.307-0.684-0.684s0.306-0.684,0.684-0.684h4.105c0.378,0,0.684,0.307,0.684,0.684S12.431,9.316,12.052,9.316z"></path></svg>
                                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Easy Collaboration</h3>
                                </div>
                                <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">FREE FEATURE</p>
                                <p className="mb-2 text-gray-600">Collaborating with members of your team couldn't be easier.</p>
                            </div>

                        </div>
                    </div>

                    <div className="w-full sm:w-1/2">
                        <div className="relative h-full ml-0 md:mr-10">
                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
                            <div className="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                                <div className="flex items-center -mt-1">
                                    <svg className="w-8 h-8 text-green-500 fill-current" viewBox="0 0 20 20"><path d="M16.853,8.355V5.888c0-3.015-2.467-5.482-5.482-5.482H8.629c-3.015,0-5.482,2.467-5.482,5.482v2.467l-2.741,7.127c0,1.371,4.295,4.112,9.594,4.112s9.594-2.741,9.594-4.112L16.853,8.355z M5.888,17.367c-0.284,0-0.514-0.23-0.514-0.514c0-0.284,0.23-0.514,0.514-0.514c0.284,0,0.514,0.23,0.514,0.514C6.402,17.137,6.173,17.367,5.888,17.367z M5.203,10c0-0.377,0.19-0.928,0.423-1.225c0,0,0.651-0.831,1.976-0.831c0.672,0,1.141,0.309,1.141,0.309C9.057,8.46,9.315,8.938,9.315,9.315v1.028c0,0.188-0.308,0.343-0.685,0.343H5.888C5.511,10.685,5.203,10.377,5.203,10z M7.944,16.853H7.259v-1.371l0.685-0.685V16.853z M9.657,16.853H8.629v-2.741h1.028V16.853zM8.972,13.426v-1.028c0-0.568,0.46-1.028,1.028-1.028c0.568,0,1.028,0.46,1.028,1.028v1.028H8.972z M11.371,16.853h-1.028v-2.741h1.028V16.853z M12.741,16.853h-0.685v-2.056l0.685,0.685V16.853z M14.112,17.367c-0.284,0-0.514-0.23-0.514-0.514c0-0.284,0.23-0.514,0.514-0.514c0.284,0,0.514,0.23,0.514,0.514C14.626,17.137,14.396,17.367,14.112,17.367z M14.112,10.685h-2.741c-0.377,0-0.685-0.154-0.685-0.343V9.315c0-0.377,0.258-0.855,0.572-1.062c0,0,0.469-0.309,1.141-0.309c1.325,0,1.976,0.831,1.976,0.831c0.232,0.297,0.423,0.848,0.423,1.225S14.489,10.685,14.112,10.685z M18.347,15.801c-0.041,0.016-0.083,0.023-0.124,0.023c-0.137,0-0.267-0.083-0.319-0.218l-2.492-6.401c-0.659-1.647-1.474-2.289-2.905-2.289c-0.95,0-1.746,0.589-1.754,0.595c-0.422,0.317-1.084,0.316-1.507,0C9.239,7.505,8.435,6.916,7.492,6.916c-1.431,0-2.246,0.642-2.906,2.292l-2.491,6.398c-0.069,0.176-0.268,0.264-0.443,0.195c-0.176-0.068-0.264-0.267-0.195-0.444l2.492-6.401c0.765-1.911,1.824-2.726,3.543-2.726c1.176,0,2.125,0.702,2.165,0.731c0.179,0.135,0.506,0.135,0.685,0c0.04-0.029,0.99-0.731,2.165-0.731c1.719,0,2.779,0.814,3.542,2.723l2.493,6.404C18.611,15.534,18.524,15.733,18.347,15.801z"></path></svg>
                                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Automated Workflow</h3>
                                </div>
                                <p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">PREMIUM FEATURE</p>
                                <p className="mb-2 text-gray-600">Our automation tools will help you build and grow your marketing empire.</p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <div className="hidden w-1/3 lg:block">
                <div className="absolute w-full max-w-4xl pl-12 -mt-20 xl:-mt-32">
                    <div className="absolute top-0 left-0 w-full h-full mt-2 ml-10 bg-gray-900 rounded-2xl"></div>
                    <div className="relative overflow-hidden border-2 border-black rounded-2xl">
                        <img src="https://cdn.devdojo.com/images/february2021/task-dashboard.png" className="object-cover w-full h-full transform" />
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
    </>
  )
}

export default Features5
