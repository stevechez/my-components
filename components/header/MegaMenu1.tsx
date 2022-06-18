import React from 'react'
import type { NextPage } from 'next'

const MegaMenu1: NextPage = () => {
  return (
    <>
      <div className="container my-24 px-6 mx-auto">
        <section className="mb-12">
          <nav className="navbar navbar-expand-lg shadow-lg py-2 bg-white relative flex items-center w-full justify-between">
            <div className="px-6">
              <button
                className="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-300 ease-in-out"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContentX"
                aria-controls="navbarSupportedContentX"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  className="w-5"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                  ></path>
                </svg>
              </button>
              <div
                className="navbar-collapse collapse grow items-center"
                id="navbarSupportedContentX"
              >
                <ul className="navbar-nav mr-auto flex flex-row">
                  <li className="nav-item dropdown static">
                    <a
                      className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-300 ease-in-out dropdown-toggle flex items-center whitespace-nowrap"
                      href="#"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      type="button"
                      id="dropdownMenuButtonX"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Click me
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="caret-down"
                        className="w-2 ml-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                      >
                        <path
                          fill="currentColor"
                          d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                        ></path>
                      </svg>
                    </a>
                    <div
                      className="dropdown-menu w-full mt-0 hidden shadow-lg bg-white absolute left-0 top-full rounded-b-lg"
                      aria-labelledby="dropdownMenuButtonX"
                    >
                      <div className="grid lg:grid-cols-2 gap-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="px-6">
                            <h6 className="uppercase font-semibold text-gray-500 pt-12 mt-2 mb-6">
                              Useful links
                            </h6>
                            <ul className="lg:pb-12">
                              <li className="flex items-center mb-6">
                                <svg
                                  className="w-5 h-5 mr-3 text-gray-400"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z"
                                  ></path>
                                </svg>
                                <span className="font-medium text-gray-800">
                                  Projects
                                </span>
                              </li>
                              <li className="flex items-center mb-6">
                                <svg
                                  className="w-5 h-5 mr-3 text-gray-400"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 544 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z"
                                  ></path>
                                </svg>
                                <span className="font-medium text-gray-800">
                                  Analytics
                                </span>
                              </li>
                              <li className="flex items-center mb-6">
                                <svg
                                  className="w-5 h-5 mr-3 text-gray-400"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"
                                  ></path>
                                </svg>
                                <span className="font-medium text-gray-800">
                                  Support
                                </span>
                              </li>
                              <li className="flex items-center mb-6">
                                <svg
                                  className="w-5 h-5 mr-3 text-gray-400"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 384 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M320,32a32,32,0,0,0-64,0v96h64Zm48,128H16A16,16,0,0,0,0,176v32a16,16,0,0,0,16,16H32v32A160.07,160.07,0,0,0,160,412.8V512h64V412.8A160.07,160.07,0,0,0,352,256V224h16a16,16,0,0,0,16-16V176A16,16,0,0,0,368,160ZM128,32a32,32,0,0,0-64,0v96h64Z"
                                  />
                                </svg>
                                <span className="font-medium text-gray-800">
                                  Plugins
                                </span>
                              </li>
                              <li className="flex items-center mb-6">
                                <svg
                                  className="w-5 h-5 mr-3 text-gray-400"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"
                                  />
                                </svg>
                                <span className="font-medium text-gray-800">
                                  Tools
                                </span>
                              </li>
                              <li className="flex items-center">
                                <svg
                                  className="w-5 h-5 mr-3 text-gray-400"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 640 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"
                                  ></path>
                                </svg>
                                <span className="font-medium text-gray-800">
                                  Customers
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="px-6">
                            <h6 className="uppercase font-semibold text-gray-500 pt-12 mt-2 mb-6">
                              For media
                            </h6>
                            <ul className="lg:pb-12">
                              <li className="flex items-center mb-6">
                                <svg
                                  className="w-5 h-5 mr-3 text-gray-400"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 576 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"
                                  ></path>
                                </svg>
                                <span className="font-medium text-gray-800">
                                  Awards
                                </span>
                              </li>
                              <li className="flex items-center mb-6">
                                <svg
                                  className="w-5 h-5 mr-3 text-gray-400"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 576 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                  />
                                </svg>
                                <span className="font-medium text-gray-800">
                                  Mentions
                                </span>
                              </li>
                              <li className="flex items-center mb-6">
                                <svg
                                  className="w-5 h-5 mr-3 text-gray-400"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z"
                                  ></path>
                                </svg>
                                <span className="font-medium text-gray-800">
                                  Videos
                                </span>
                              </li>
                              <li className="flex items-center mb-6">
                                <svg
                                  className="w-5 h-5 mr-3 text-gray-400"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 576 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M576 240c0-23.63-12.95-44.04-32-55.12V32.01C544 23.26 537.02 0 512 0c-7.12 0-14.19 2.38-19.98 7.02l-85.03 68.03C364.28 109.19 310.66 128 256 128H64c-35.35 0-64 28.65-64 64v96c0 35.35 28.65 64 64 64h33.7c-1.39 10.48-2.18 21.14-2.18 32 0 39.77 9.26 77.35 25.56 110.94 5.19 10.69 16.52 17.06 28.4 17.06h74.28c26.05 0 41.69-29.84 25.9-50.56-16.4-21.52-26.15-48.36-26.15-77.44 0-11.11 1.62-21.79 4.41-32H256c54.66 0 108.28 18.81 150.98 52.95l85.03 68.03a32.023 32.023 0 0 0 19.98 7.02c24.92 0 32-22.78 32-32V295.13C563.05 284.04 576 263.63 576 240zm-96 141.42l-33.05-26.44C392.95 311.78 325.12 288 256 288v-96c69.12 0 136.95-23.78 190.95-66.98L480 98.58v282.84z"
                                  ></path>
                                </svg>
                                <span className="font-medium text-gray-800">
                                  Advertising
                                </span>
                              </li>
                              <li className="flex items-center mb-6">
                                <svg
                                  className="w-5 h-5 mr-3 text-gray-400"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                                  ></path>
                                </svg>
                                <span className="font-medium text-gray-800">
                                  Contact
                                </span>
                              </li>
                              <li className="flex items-center mb-6">
                                <svg
                                  className="w-5 h-5 mr-3 text-gray-400"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 496 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"
                                  ></path>
                                </svg>
                                <span className="font-medium text-gray-800">
                                  Network
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="px-6 lg:px-12 rounded-b-lg lg:rounded-bl-none lg:rounded-br-lg">
                          <h6 className="uppercase font-semibold text-gray-500 pt-12 mt-2 mb-6">
                            News
                          </h6>
                          <div className="flex items-center mb-6">
                            <div className="shrink-0">
                              <img
                                src="https://i.ibb.co/hX6pfms/img32.jpg"
                                className="rounded-lg mr-3"
                                alt="Generic placeholder image"
                              />
                            </div>
                            <div className="grow ml-3">
                              <p className="mb-1 font-medium text-gray-800">
                                Chasing the sun
                              </p>
                              <p className="text-gray-500 text-sm">
                                Amet consectetur adipisicing elit consectetur
                                dolorum placeat corporis quasi debitis hic
                                reprehenderit ullam.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center mb-6">
                            <div className="shrink-0">
                              <img
                                src="https://i.ibb.co/TcHPmw0/img33.jpg"
                                className="rounded-lg mr-3"
                                alt="Generic placeholder image"
                              />
                            </div>
                            <div className="grow ml-3">
                              <p className="mb-1 font-medium text-gray-800">
                                Stock market boom
                              </p>
                              <p className="text-gray-500 text-sm">
                                Maecenas auctor, quam eget tincidunt pretium,
                                felis diam semper turpis, sed scelerisque diam
                                libero facilisis libero. Quisque vitae semper
                                metus.
                              </p>
                            </div>
                          </div>
                          <div className="pb-12">
                            <a
                              className="inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out flex items-center"
                              href="#"
                              role="button"
                            >
                              Read more
                              <svg
                                className="w-3 ml-2"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
                                ></path>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </section>
      </div>
    </>
  )
}

export default MegaMenu1
