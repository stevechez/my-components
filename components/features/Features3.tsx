import React from 'react'
import type { NextPage } from 'next'

const Features3: NextPage = () => {
  return (
    <>

{/* <!-- Section 1 --> */}
<section className="bg-gray-100">
    <div className="relative">
        <div className="absolute inset-0 w-screen h-full pb-20 transform opacity-50">
            <img src="https://cdn.devdojo.com/images/march2021/bg-gradient.png" className="absolute left-0 object-cover w-full h-full" />
        </div>
        <div className="relative px-6 py-8 ml-auto mr-auto bg-top bg-cover sm:py-16 max-w-7xl md:px-24 lg:px-16 lg:py-20">

            <div className="relative grid gap-6 bg-top bg-cover sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col items-start justify-between p-6 space-y-4 overflow-hidden transition-shadow duration-200 bg-white bg-top bg-cover border border-gray-100 shadow-xl rounded-2xl group hover:shadow-2xl">
                    <div className="flex items-center justify-center w-10 h-10 text-center bg-top bg-cover rounded-full bg-indigo-50">
                        <p className="relative">
                            <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path></svg>
                        </p>
                    </div>
                    <p className="font-bold text-gray-700">User Manager</p>
                    <p className="text-sm leading-5 text-gray-500">Easily manage the users of your application. Allow access to specific areas and sections.</p>
                </div>
                <div className="flex flex-col items-start justify-between p-6 space-y-4 overflow-hidden transition-shadow duration-200 bg-white bg-top bg-cover border border-gray-100 shadow-xl rounded-2xl group hover:shadow-2xl">
                    <div className="flex items-center justify-center w-10 h-10 text-center bg-top bg-cover rounded-full bg-indigo-50">
                        <p className="relative">
                            <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>
                        </p>
                    </div>
                    <p className="font-bold text-gray-700">Projects</p>
                    <p className="text-sm leading-5 text-gray-500">Unlimted projects for you and your team. Easily create, modify, and duplicate your projects.</p>
                </div>
                <div className="flex flex-col items-start justify-between p-6 space-y-4 overflow-hidden transition-shadow duration-200 bg-white bg-top bg-cover border border-gray-100 shadow-xl rounded-2xl group hover:shadow-2xl">
                    <div className="flex items-center justify-center w-10 h-10 text-center bg-top bg-cover rounded-full bg-indigo-50">
                        <p className="relative">
                            <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
                        </p>
                    </div>
                    <p className="font-bold text-gray-700">Developer API</p>
                    <p className="text-sm leading-5 text-gray-500">Well documented developer API that allows you to build on top of our platform with ease.</p>
                </div>
                <div className="flex flex-col items-start justify-between p-6 space-y-4 overflow-hidden transition-shadow duration-200 bg-white bg-top bg-cover border border-gray-100 shadow-xl rounded-2xl group hover:shadow-2xl">
                    <div className="flex items-center justify-center w-10 h-10 text-center bg-top bg-cover rounded-full bg-indigo-50">
                        <p className="relative">
                            <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path></svg>
                        </p>
                    </div>
                    <p className="font-bold text-gray-700">Template Designs</p>
                    <p className="text-sm leading-5 text-gray-500">Templates and designs for your next project. You can easily drop these templates into any project.</p>
                </div>
                <div className="flex flex-col items-start justify-between p-6 space-y-4 overflow-hidden transition-shadow duration-200 bg-white bg-top bg-cover border border-gray-100 shadow-xl rounded-2xl group hover:shadow-2xl">
                    <div className="flex items-center justify-center w-10 h-10 text-center bg-top bg-cover rounded-full bg-indigo-50">
                        <p className="relative">
                            <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z" clip-rule="evenodd"></path></svg>
                        </p>
                    </div>
                    <p className="font-bold text-gray-700">Analytics</p>
                    <p className="text-sm leading-5 text-gray-500">User and customer analytics to help you understand which areas of your application are being used.</p>
                </div>
                <div className="flex flex-col items-start justify-between p-6 space-y-4 overflow-hidden transition-shadow duration-200 bg-white bg-top bg-cover border border-gray-100 shadow-xl rounded-2xl group hover:shadow-2xl">
                    <div className="flex items-center justify-center w-10 h-10 text-center bg-top bg-cover rounded-full bg-indigo-50">
                        <p className="relative">
                            <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd"></path></svg>
                        </p>
                    </div>
                    <p className="font-bold text-gray-700">Filters</p>
                    <p className="text-sm leading-5 text-gray-500">Filter your results by the criteria that is the most important and most vital to your business.</p>
                </div>
                <div className="flex flex-col items-start justify-between p-6 space-y-4 overflow-hidden transition-shadow duration-200 bg-white bg-top bg-cover border border-gray-100 shadow-xl rounded-2xl group hover:shadow-2xl">
                    <div className="flex items-center justify-center w-10 h-10 text-center bg-top bg-cover rounded-full bg-indigo-50">
                        <p className="relative">
                            <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>
                        </p>
                    </div>
                    <p className="font-bold text-gray-700">Customizations</p>
                    <p className="text-sm leading-5 text-gray-500">Customize every aspect of the user interface. You can also customize the internal functionality.</p>
                </div>
                <div className="flex flex-col items-start justify-between p-6 space-y-4 overflow-hidden transition-shadow duration-200 bg-white bg-top bg-cover border border-gray-100 shadow-xl rounded-2xl group hover:shadow-2xl">
                    <div className="flex items-center justify-center w-10 h-10 text-center bg-top bg-cover rounded-full bg-indigo-50">
                        <p className="relative">
                            <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"></path></svg>

                        </p>
                    </div>
                    <p className="font-bold text-gray-700">Integrations</p>
                    <p className="text-sm leading-5 text-gray-500">We have also built some amazing and powerful integrations to help you build quicker.</p>
                </div>
            </div>
        </div>
    </div>
</section>

{/* <!-- Section 2 --> */}
<section className="w-full px-8 py-12 md:py-16 bg-whitexl:px-0" x-data="{ section: 'design' }">
  <div className="flex flex-col max-w-6xl px-3 mx-auto md:px-0 lg:px-8 xl:px-0 md:flex-row">
    <div className="w-full pr-5 mb-6 space-y-1 md:mb-0 md:space-y-4 md:w-4/12 xl:pr-12">
        <h2 className="pb-2 text-5xl font-extrabold cursor-pointer lg:text-6xl">Design</h2>
        <h2 className="py-2 text-5xl font-extrabold cursor-pointer lg:text-6xl">Launch</h2>
        <h2 className="py-2 text-5xl font-extrabold cursor-pointer lg:text-6xl">Learn</h2>
    </div>

    <div className="relative w-full mt-6 overflow-hidden md:mt-1 md:w-9/12">
        {/* <div className="w-full space-y-6" x-show="section == 'design'" x-transition:enter="top-0 left-0 w-full h-full absolute transition ease-out duration-300" x-transition:enter-start="opacity-0 transform translate-y-full" x-transition:enter-end="opacity-100 transform translate-y-0" x-transition:leave="transition ease-out duration-300" x-transition:leave-start="opacity-100 transform translate-y-0" x-transition:leave-end="opacity-0 transform -translate-y-full">
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            <h3 className="text-2xl font-bold leading-7">Design the next great app</h3>
            <p className="text-base font-normal leading-none text-gray-700 md:text-lg">Starting every journey from the beginning is exciting. You can develop the next great idea that can change the way people work and make a real impact on the world.</p>
            <a href="#_" className="flex items-center justify-start mt-8 text-lg font-medium tracking-wide text-gray-900 underline uppercase">Learn More <svg className="w-5 h-5 ml-1 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></a>
        </div> */}

        {/* <div className="space-y-6" x-show="section == 'launch'" x-transition:enter="top-0 left-0 w-full h-full absolute transition ease-out duration-300" x-transition:enter-start="opacity-0 transform translate-y-full" x-transition:enter-end="opacity-100 transform translate-y-0" x-transition:leave="transition ease-out duration-300" x-transition:leave-start="opacity-100 transform translate-y-0" x-transition:leave-end="opacity-0 transform -translate-y-full">
            <svg className="w-12 h-12 text-blue-500 stroke-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z"></path><path d="M4 13a8 8 0 017 7 6 6 0 003-5 9 9 0 006-8 3 3 0 00-3-3 9 9 0 00-8 6 6 6 0 00-5 3"></path><path d="M7 14a6 6 0 00-3 6 6 6 0 006-3"></path><circle cx="15" cy="9" r="1"></circle></svg>
            <h3 className="text-2xl font-bold leading-7">Lauch your product</h3>
            <p className="text-base font-normal leading-none text-gray-700 md:text-lg">The quicker you launch, the quicker you can learn and grow from experience. Launching new products are one of the most enjoyable parts of the wole process.</p>
            <a href="#_" className="flex items-center justify-start mt-8 text-lg font-medium tracking-wide text-gray-900 underline uppercase">Learn More <svg className="w-5 h-5 ml-1 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></a>
        </div> */}

        {/* <div className="space-y-6" x-show="section == 'learn'" x-transition:enter="top-0 left-0 w-full h-full absolute transition ease-out duration-300" x-transition:enter-start="opacity-0 transform translate-y-full" x-transition:enter-end="opacity-100 transform translate-y-0" x-transition:leave="transition ease-out duration-300" x-transition:leave-start="opacity-100 transform translate-y-0" x-transition:leave-end="opacity-0 transform -translate-y-full">
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
            <h3 className="text-2xl font-bold leading-7">Learn from experience</h3>
            <p className="text-base font-normal leading-none text-gray-700 md:text-lg">Every step on your journey is getting you closer to your end goal, and the quickest way to get closer to that goal is by learning from your past experiences.</p>
            <a href="#_" className="flex items-center justify-start mt-8 text-lg font-medium tracking-wide text-gray-900 underline uppercase">Learn More <svg className="w-5 h-5 ml-1 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></a>
        </div> */}
    </div>
  </div>
</section>

{/* <!-- Section 3 --> */}
<section className="pt-20 pb-32 bg-white">
    <div className="max-w-4xl px-20 mx-auto">
        <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">We're revolutionizing the way people design websites. Take a look at our awesome set of features below.</h2>
        <div className="grid grid-cols-1 mt-16 sm:grid-cols-2 md:grid-cols-3 gap-x-10 lg:gap-x-16 gap-y-20">
            <div>
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
                <h3 className="mt-4 mb-2 text-base font-semibold leading-tight text-gray-900 lg:text-lg">Customizable</h3>
                <p className="text-sm text-gray-500 lg:text-base">Each template and component is 100% customizable. You can easily add your own style.</p>
            </div>

            <div>
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <h3 className="mt-4 mb-2 text-base font-semibold leading-tight text-gray-900 lg:text-lg">Clean Code</h3>
                <p className="text-sm text-gray-500 lg:text-base">Each section has been crafted with clean and efficient code. Helping you out with UX and SEO.</p>
            </div>

            <div>
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <h3 className="mt-4 mb-2 text-base font-semibold leading-tight text-gray-900 lg:text-lg">Weekly Updates</h3>
                <p className="text-sm text-gray-500 lg:text-base">Each week we'll be releasing new blocks. Allowing you to craft your site with ease.</p>
            </div>

        </div>
    </div>
</section>

{/* <!-- Section 4 --> */}
<section className="box-border relative block py-24 overflow-hidden leading-6 text-left bg-white">
    <div className="max-w-6xl px-4 px-16 mx-auto leading-6 text-left xl:px-12">
        <div className="box-border flex flex-col flex-wrap items-start mx-0 text-indigo-900">
            <div className="pb-4 text-sm font-bold text-left text-gray-700 uppercase">
                Powerful Features
            </div>
            <h3 className="relative w-full px-0 pb-2 m-0 font-sans text-4xl font-bold text-left xl:flex-grow-0 xl:flex-shrink-0 md:flex-grow-0 md:flex-shrink-0 lg:flex-grow-0 lg:flex-shrink-0">
                Powerful and Simple Features for your Application
            </h3>
        </div>
        <div className="grid grid-cols-3 gap-5 text-indigo-900 md:grid-cols-6">
            <div className="relative w-full col-span-3 px-4 leading-6 text-left">
                <div className="box-border flex items-center justify-start pt-12 text-indigo-900">
                    <img src="https://cdn.devdojo.com/tails/icons/telephone.png" className="leading-6 text-left align-middle border-none w-14 h-14" />
                    <div className="pl-8 leading-6 text-left">
                        <div className="box-border pb-1 text-xl font-medium text-indigo-900">
                            100% Responsive
                        </div>
                        <div className="box-border text-base leading-normal text-gray-700">
                            Responsive and mobile ready templates
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative w-full col-span-3 px-4 leading-6 text-left">
                <div className="box-border flex items-center justify-start pt-12 text-indigo-900">
                    <img src="https://cdn.devdojo.com/tails/icons/tips.png" className="leading-6 text-left align-middle border-none w-14 h-14" />
                    <div className="pl-8 leading-6 text-left">
                        <div className="box-border pb-1 text-xl font-medium text-indigo-900">
                            Insights &amp; Tips
                        </div>
                        <div className="box-border text-base leading-normal text-gray-700">
                            Insights and tips for productivity
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative w-full col-span-3 px-4 leading-6 text-left">
                <div className="box-border flex items-center justify-start pt-12 text-indigo-900">
                    <img src="https://cdn.devdojo.com/tails/icons/mail-inbox-app.png" className="leading-6 text-left align-middle border-none w-14 h-14" />
                    <div className="pl-8 leading-6 text-left">
                        <div className="box-border pb-1 text-xl font-medium text-indigo-900">
                            Automated Emails
                        </div>
                        <div className="box-border text-base leading-normal text-gray-700">
                            Easily send out automated emails
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative w-full col-span-3 px-4 leading-6 text-left">
                <div className="box-border flex items-center justify-start pt-12 text-indigo-900">
                    <img src="https://cdn.devdojo.com/tails/icons/clock.png" className="leading-6 text-left align-middle border-none w-14 h-14" />
                    <div className="pl-8 leading-6 text-left">
                        <div className="box-border pb-1 text-xl font-medium text-indigo-900">
                            Queued Jobs
                        </div>
                        <div className="box-border text-base leading-normal text-gray-700">
                            Set it and forget it with jobs
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative w-full col-span-3 px-4 leading-6 text-left">
                <div className="box-border flex items-center justify-start pt-12 text-indigo-900">
                    <img src="https://cdn.devdojo.com/tails/icons/calendar.png" className="leading-6 text-left align-middle border-none w-14 h-14" />
                    <div className="pl-8 leading-6 text-left">
                        <div className="box-border pb-1 text-xl font-medium text-indigo-900">
                            Schedulers
                        </div>
                        <div className="box-border text-base leading-normal text-gray-700">
                            Schedule your automations and jobs
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative w-full col-span-3 px-4 leading-6 text-left">
                <div className="box-border flex items-center justify-start pt-12 text-indigo-900">
                    <img src="https://cdn.devdojo.com/tails/icons/bank.png" className="leading-6 text-left align-middle border-none w-14 h-14" />
                    <div className="pl-8 leading-6 text-left">
                        <div className="box-border pb-1 text-xl font-medium text-indigo-900">
                            Simple Billing
                        </div>
                        <div className="box-border text-base leading-normal text-gray-700">
                            Simple and easy billing system
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
</section>

{/* <!-- Section 5 --> */}
<section className="relative leading-7 text-gray-900 bg-white border-solid">
  <div className="box-border mx-auto border-solid lg:pl-8 max-w-7xl">
    <div className="flex flex-col items-center leading-7 text-gray-900 border-0 border-gray-200 lg:flex-row">
      <div className="box-border flex flex-col justify-center w-full h-full p-8 text-gray-900 border-solid lg:w-1/2 md:p-16 lg:p-0 lg:pl-10 lg:pr-20">
        <h2 className="m-0 text-3xl font-medium leading-tight tracking-tight text-left text-black sm:text-4xl md:text-5xl">Why Choose Us</h2>
        <p className="mt-2 text-xl text-left border-0 border-gray-200 sm:text-2xl">We offer the best features in the industry.</p>
        <div className="grid gap-4 mt-8 leading-7 border-0 border-gray-200 sm:mt-10 sm:gap-6 lg:mt-12 lg:gap-8">
          <div className="box-border flex items-start text-gray-900 border-solid">
            <div className="flex items-center justify-center w-12 h-12 leading-7 bg-blue-600 border-0 border-gray-200 rounded-full">
              <p className="box-border m-0 text-xl text-white border-solid">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
              </p>
            </div>
            <div className="flex-1 ml-6 leading-7 border-0 border-gray-200">
              <h3 className="box-border m-0 text-lg font-semibold leading-tight tracking-tight text-black border-solid sm:text-xl md:text-2xl">Automated Tasks</h3>
              <p className="box-border mt-2 text-base leading-normal text-gray-900 border-solid">No more wasting time on manual tasks, you can leverage our automated tasks to make your life easier.</p>
            </div>
          </div>
          <div className="box-border flex items-start text-gray-900 border-solid">
            <div className="flex items-center justify-center w-12 h-12 leading-7 bg-blue-600 border-0 border-gray-200 rounded-full">
              <p className="box-border m-0 text-xl text-white border-solid">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path></svg>
              </p>
            </div>
            <div className="flex-1 ml-6 leading-7 border-0 border-gray-200">
              <h3 className="box-border m-0 text-lg font-semibold leading-tight tracking-tight text-black border-solid sm:text-xl md:text-2xl">Email Campaigns</h3>
              <p className="box-border mt-2 text-base leading-normal text-gray-900 border-solid">Utilize our email campaigns to send your users up-to-date information about your product and services.</p>
            </div>
          </div>
          <div className="box-border flex items-start text-gray-900 border-solid">
            <div className="flex items-center justify-center w-12 h-12 leading-7 bg-blue-600 border-0 border-gray-200 rounded-full">
              <p className="box-border m-0 text-xl text-white border-solid">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              </p>
            </div>
            <div className="flex-1 ml-6 leading-7 border-0 border-gray-200">
              <h3 className="box-border m-0 text-lg font-semibold leading-tight tracking-tight text-black border-solid sm:text-xl md:text-2xl">Great Support</h3>
              <p className="box-border mt-2 text-base leading-normal text-gray-900 border-solid">We offer some of the best support available. Contact us anytime of the day and we'll help you out ASAP.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full overflow-hidden leading-7 text-gray-900 border-0 border-gray-200 lg:w-1/2">
        <img src="https://images.unsplash.com/photo-1553484771-047a44eee27a?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1234&amp;h=1600&amp;q=80" className="object-cover w-full h-full" />
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Features3
