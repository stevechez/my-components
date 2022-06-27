import React from 'react'
import type { NextPage } from 'next'

const Features2: NextPage = () => {
  return (
    <>
      
{/* <!-- Section 1 --> */}
<section className="pt-12 pb-8 leading-7 text-gray-900 bg-white border-b border-solid md:pt-24 md:pb-12 box-border border-slate-100">
    <div className="relative px-12 mx-auto w-full max-w-7xl text-gray-900 box-border">
        <div className="flex flex-wrap -mx-5 mt-0 box-border">
            {/* <!-- Feature 1 --> */}
            <div className="relative flex-none px-5 mt-0 w-full max-w-full md:w-1/3 md:flex-none box-border">
                <div className="mb-3">
                    <img className="w-16 h-16 -ml-1" src="https://cdn.devdojo.com/images/march2022/code.png" />
                </div>
                <h3 className="mt-0 mb-2 text-xl tracking-normal box-border"> Developer Friendly </h3>
                <p className="mt-0 mb-8 md:mb-0 box-border text-slate-400"> Tails has been built with developers in mind. Each template and design are built to be configurable and customizable for any project </p>
            </div>
            {/* <!-- Feature 2 --> */}
            <div className="relative flex-none px-5 mt-0 w-full max-w-full md:w-1/3 md:flex-none box-border">
                <div className="mb-3">
                    <img className="w-16 h-16 -ml-1" src="https://cdn.devdojo.com/images/march2022/brush.png" />
                </div>
                <h3 className="mt-0 mb-2 text-xl tracking-normal box-border"> Easily Customizable </h3>
                <p className="mt-0 mb-8 md:mb-0 box-border text-gray-400"> You can change any aspect of these templates including colors, fonts, and more. You can make it fit perfectly into any website or application. </p>
            </div>
            {/* <!-- Feature 3 --> */}
            <div className="relative flex-none px-5 mt-0 w-full max-w-full md:w-1/3 md:flex-none box-border">
                <div className="mb-3">
                    <img className="w-16 h-16 -ml-1" src="https://cdn.devdojo.com/images/march2022/cloud.png" />
                </div>
                <h3 className="mt-0 mb-2 text-xl font-normal tracking-normal box-border"> Publish Pages </h3>
                <p className="my-0 box-border text-slate-400"> You can easily publish any pages and projects to a custom subdomain, or you can link up your domain after setting up the correct DNS. </p>
            </div>
        </div>
    </div>
    {/* <!-- Testimonials --> */}
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10  items-center justify-between mx-auto px-12 border-t border-gray-200 pt-10 mt-24 lg:justify-between max-w-7xl">
        <div className="box-border inline-flex items-center py-0 my-2 justify-center sm:justify-start text-gray-800">
            <svg className="w-auto h-7 flex-shrink-0 text-gray-400 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2500 676"><defs></defs><path fill-rule="nonzero" d="M343.757 632.09c-37.607 6.604-75.876 8.584-115.464 13.857L107.546 292.295v368.83C69.94 665.083 35.63 670.361 0 675.64V0h100.293l137.236 383.352V0h106.228v632.09zm207.84-384.663c40.91 0 103.591-1.98 141.198-1.98v105.566c-46.848 0-101.608 0-141.198 1.98V510.03c62.024-3.957 124.045-9.24 186.723-11.22v101.604L446.025 623.51V0H738.32v105.569H551.597v141.858zm579.306-141.856h-109.526v485.616c-35.63 0-71.26 0-105.564 1.315v-486.93H806.287V0h324.621l-.005 105.571zm171.548 134.6h144.5v105.566h-144.5V585.25h-103.596V0h294.941v105.569h-191.345V240.17zm362.893 252.703c60.044 1.315 120.742 5.942 179.468 9.235v104.25c-94.35-5.942-188.704-11.872-285.034-13.857V0h105.566v492.874zm268.54 120.744c33.65 1.983 69.28 3.963 103.59 7.915V0h-103.59v613.618zM2500 0l-133.943 321.326L2500 675.64c-39.592-5.279-79.18-12.537-118.77-19.136l-75.874-195.298-77.19 179.468c-38.276-6.604-75.224-8.584-113.486-13.862l135.918-309.449L2127.871 0h113.482l69.28 177.488L2384.532 0H2500z"></path></svg>
        </div>
        <div className="box-border inline-block px-5 py-0 my-2 flex justify-center lg:justify-start text-gray-800">
            <svg className="w-auto h-6 flex-shrink-0 text-gray-400 fill-current" viewBox="0 0 2500 494" xmlns="http://www.w3.org/2000/svg"><path d="M1262.684 438.349c0 8.684 0 10.658 5.855 15.987l32.797 32.368v1.382H1155.92v-62.172c-14.638 40.974-53.349 68.073-96.428 67.5-74.756 0-129.02-59.21-129.02-168.157 0-102.04 58.553-170.132 140.731-170.132 36.428-2.316 70.329 18.901 84.52 52.895V70.855a17.066 17.066 0 00-6.638-16.579l-31.23-30.394V22.5l144.828-17.171v433.02zm-106.763-19.737V213.94a54.224 54.224 0 00-43.335-20.527c-35.33 0-69.487 32.369-69.487 128.487 0 90 29.473 121.777 66.17 121.777a58.382 58.382 0 0046.645-25.066h.007zm203.19 69.474V211.77a18.671 18.671 0 00-5.854-16.58l-32.211-33.552v-1.381h145.421V440.52c0 8.684 0 10.658 5.855 15.987l32.014 30.394v1.382l-145.224-.197zm-5.269-428.882c0-32.697 26.217-59.204 58.553-59.204 32.335 0 58.559 26.513 58.559 59.21 0 32.698-26.217 59.211-58.553 59.211-32.335 0-58.559-26.513-58.559-59.21v-.007zm504.954 378.553c0 8.684 0 11.25 5.855 16.579l32.796 32.368v1.382H1751.25V417.23c-13.316 44.803-53.875 75.658-100.132 76.184-64.802 0-99.546-47.763-99.546-138.157 0-43.619 0-91.382 1.362-145.066a16.875 16.875 0 00-5.855-15.987l-32.204-32.566v-1.381h144.243v180.197c0 59.21 8.593 98.684 45.283 98.684a58.487 58.487 0 0047.237-29.802V211.967a18.671 18.671 0 00-5.855-16.579l-32.401-33.75v-1.381h145.414v277.5zm495.007 50.329c0-10.658 1.954-146.448 1.954-177.632 0-59.21-9.178-100.066-50.362-100.066a65.204 65.204 0 00-51.724 28.421 243.53 243.53 0 015.855 56.25c0 41.053-1.368 93.355-1.954 145.658a16.875 16.875 0 005.856 15.987l32.796 30.395v1.381H2149.44c0-9.868 1.947-146.447 1.947-177.631 0-60.198-9.17-100.066-49.77-100.066a58.46 58.46 0 00-48.407 29.21V441.31c0 8.684 0 10.658 5.855 15.987l32.013 30.395v1.381h-145.224V212.757a18.671 18.671 0 00-5.855-16.58l-32.21-34.539v-1.381h145.42v70.263c13.487-46.382 56.448-77.553 104.23-75.592 48.409 0 81.198 27.236 95.06 78.947 15.395-47.69 59.697-79.69 109.303-78.947 64.802 0 101.5 48.355 101.5 139.736 0 43.619-1.362 93.356-1.948 145.658a15.868 15.868 0 006.632 15.987L2500 486.704v1.382h-146.197zm-1826.79-43.027l43.138 41.645v1.382H351.342v-1.382l43.921-41.645a16.875 16.875 0 005.855-15.987v-266.25c0-11.25 0-26.447 1.948-39.473L255.5 493.42h-1.75l-152.836-340.46c-3.322-8.487-4.296-9.08-6.447-14.803v223.224a78.322 78.322 0 007.23 43.618l61.48 81.71v1.382H0v-1.381l61.487-81.908a78.526 78.526 0 007.217-43.421v-246.71a48.132 48.132 0 00-10.145-33.75l-43.526-57.04V22.5h156.151l130.777 288.355L417.125 22.5h152.829v1.382l-42.94 48.355a17.066 17.066 0 00-6.639 16.579v340.263a15.868 15.868 0 006.645 15.987l-.007-.007zm171.184-133.42v1.38c0 84.474 43.139 118.422 93.691 118.422 42.21 1.454 81.283-22.48 99.546-60.987h1.369c-17.566 83.487-68.71 122.96-145.224 122.96-82.566 0-160.447-50.328-160.447-166.973 0-122.566 78.079-171.513 164.348-171.513 69.494 0 143.467 33.158 143.467 139.736v16.974h-196.75zm0-16.975h96.23v-17.17c0-86.843-17.763-109.935-44.506-109.935-32.401 0-52.112 34.54-52.112 127.105h.388z" fill-rule="nonzero"></path></svg>
        </div>
        <div className="box-border inline-block px-5 py-0 my-2 flex justify-center sm:justify-end lg:justify-start text-gray-800">
            <svg className="w-auto h-7 flex-shrink-0 text-gray-400 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2500 611"><defs></defs><path fill-rule="nonzero" d="M763.838 245.713c28.613 0 51.807-23.203 51.807-51.821 0-28.623-23.194-51.822-51.807-51.822-28.613 0-51.807 23.199-51.807 51.822 0 28.618 23.194 51.82 51.807 51.82zm1709.766 177.056c-7.881-5.542-13.965-6.46-19.014 4.301-87.012 188.457-233.643 94.414-219.077 102.69 32.524-14.877 118.066-83.48 105.136-178.207-7.851-57.89-57.539-83.57-110.278-74.375-92.06 16.05-125.928 115.346-108.686 203.257 3.017 15.097 8.408 27.548 13.794 39.746-104.034 84.6-145.347-75.733-150.035-94.893-.185-1.025 80.327-68.135 102.72-228.052C2111.636 29.634 2058.17-.884 2003.496.068c-101.172 1.763-128.51 213.145-91.782 389.317-3.076.8-17.393 8.73-40.396 9.619-16.552-52.085-87.28-97.74-105.79-80.147-46.329 44.01 11.235 130.05 51.738 136.797-24.331 149.859-176.495 112.744-148.17-75.005 49.551-92.016 87.237-228.837 80.513-311.435-2.382-29.243-24.004-68.423-72.9-66.48-94.048 3.721-104.272 215.162-93.247 365.23-.547-3.696-5.781 18.232-44.321 29.136-9.117-50.601-90.591-101.392-109.77-76.973-35.904 45.703 26.317 127.192 55.79 132.876-24.33 149.853-176.49 112.74-148.164-75.01 49.55-92.012 87.232-228.833 80.508-311.43-2.383-29.249-24-68.428-72.9-66.49-94.048 3.726-104.273 215.166-93.248 365.235-.551-3.755-5.908 18.896-46.02 29.619-1.343-65.65-83.115-95.752-102.759-74.805-35.01 37.339 8.018 113.95 47.822 132.88-24.33 149.854-176.489 112.74-148.164-75.009 49.551-92.012 87.237-228.833 80.508-311.43-2.378-29.249-23.999-68.428-72.9-66.49C915.8 3.8 908.232 225.87 919.258 375.933c-30.977 132.72-134.859 298.462-121.362-33.555 1.333-23.291 2.788-32.134-8.824-40.855-8.7-6.777-28.486-3.515-39.301-3.247-13.145.528-16.44 8.218-19.346 19.844-6.768 30.02-7.984 59.121-8.95 98.828-.635 18.574-2.124 27.241-9.278 52.569-7.143 25.322-47.9 71.606-70.215 63.867-30.957-10.645-20.8-98.037-15-158.081 4.834-47.451-10.644-68.76-50.302-76.51-23.218-4.838-37.325-4.096-61.504-11.718-22.866-7.207-28.037-50.459-76.807-36.045-26.675 7.89-9.526 64.41-15.937 106.3-31.519 206.059-97.1 211.718-127.525 111.62C431.934 133.35 334.546 1.045 277.54 1.045c-59.375 0-127.246 40.898-98.506 302.578-13.974-4.077-18.271-6.274-33.57-6.274C58.946 297.349 0 367.29 0 453.569c0 86.28 58.95 156.226 145.469 156.226 51.074 0 86.933-23.228 114.092-59.16 17.72 25.376 39.296 59.55 78.754 58.012 117.613-4.58 151.817-245.835 155.855-259.292 12.573 1.939 24.468 5.606 36.079 7.544 19.346 2.906 20.752 10.562 20.313 30.02-5.127 164.082 25.15 221.533 93.833 221.533 38.266 0 72.373-37.598 95.869-64.482 17.548 36.22 45.512 63.374 83.027 64.477 90.903 2.261 125.708-142.627 122.534-123.56-2.49 14.962 29.492 122.745 123.076 123.135 115.923.489 137.471-126.992 140.04-148.344.322-4.248.463-3.809 0 0l-.088 1.294c36.801-6.846 55.79-26.577 55.79-26.577s29.551 175.61 139.014 173.632c113.672-2.06 135.108-117.295 137.92-139.765.371-5.332.591-4.707 0 0l-.044.659c43.716-15.903 55.215-31.865 55.215-31.865s23.486 172.119 139.014 173.623c102.949 1.347 141.103-104.077 141.328-148.203 17.363.185 49.482-10.303 48.73-10.899 0 0 37.71 150.488 143.018 158.218 49.443 3.628 86.533-27.822 107.676-42.168 49.687 40.24 215.141 91.636 319.614-85.488 14.746-25.42-16.958-55.45-22.524-59.37zM141.294 551.367c-50.479 0-82.847-46.675-82.847-97.002 0-50.322 29.712-96.997 80.19-96.997 22.716 0 35.352 2.5 53.043 17.886 3.208 12.642 12.3 41.802 16.723 55.044 5.928 17.72 12.979 32.803 20.088 49.219-10.156 42.104-43.452 71.85-87.197 71.85zm123.008-174.634c-2.1-3.344-1.66-1.289-4.009-4.448-9.253-25.17-27.085-81.352-29.15-145.166-2.334-72.187 9.697-156.802 45.166-156.802 24.033 0 49.575 171.485-12.012 306.416h.005zm710.747-75.214c-5.694-42.837-5.991-233.804 39.853-228.545 25.313 10.254-16.05 190.454-39.853 228.545zm334.76 0c-5.693-42.837-5.99-233.804 39.854-228.545 25.313 10.254-16.05 190.454-39.853 228.545zm332.105 2.66c-5.698-42.841-5.991-233.808 39.849-228.55 25.312 10.255-16.05 190.46-39.849 228.55zm366.64-242.382c41.915-4.346 40.186 178.691-43.945 294.248-10.85-41.768-27.485-279.907 43.946-294.253v.005zm176.173 393.857c-13.462-68.003 21.323-112.666 57.182-117.563 12.534-2.002 30.698 6.118 34.321 21.299 5.957 28.608-.864 71.045-81.123 124.887.118.46-7.378-13.476-10.376-28.623h-.004z"></path></svg>
        </div>
        <div className="box-border inline-block lg:px-5 py-0 my-2 flex justify-center sm:justify-start text-gray-800">
            <svg className="w-auto text-gray-400 flex-shrink-0 fill-current h-10" viewBox="0 0 2499 1037" xmlns="http://www.w3.org/2000/svg"><path d="M261.062 466.768c-53.833-19.912-83.335-35.399-83.335-59.735 0-20.652 16.963-32.45 47.201-32.45 55.31 0 112.09 21.388 151.178 40.559l22.124-136.427c-30.973-14.752-94.397-39.088-182.151-39.088-61.947 0-113.573 16.223-150.443 46.46-38.352 31.71-58.263 77.434-58.263 132.744 0 100.293 61.211 143.07 160.769 179.203 64.159 22.86 85.547 39.088 85.547 64.16 0 24.336-20.652 38.346-58.263 38.346-46.46 0-123.153-22.86-173.302-52.356L0 786.087c42.771 24.337 122.417 49.409 205.017 49.409 65.63 0 120.204-15.487 157.08-44.984 41.293-32.45 62.682-80.381 62.682-142.328 0-102.511-62.683-145.282-163.717-181.416zm523.877-80.387l22.124-135.692H690.265V85.966l-157.035 25.84-22.677 138.883-55.232 8.96-20.675 126.732h75.68v266.227c0 69.32 17.7 117.257 53.833 146.754 30.238 24.336 73.745 36.134 134.956 36.134 47.196 0 75.957-8.109 95.868-13.275V678.416c-11.062 2.953-36.133 8.114-53.097 8.114-36.134 0-51.62-18.435-51.62-60.47V386.38h94.673zm350.752-143.618c-51.62 0-92.92 27.102-109.142 75.775l-11.062-67.849H855.459v573.745h182.887V452.017c22.865-28.026 55.31-38.159 99.558-38.159 9.59 0 19.911 0 32.45 2.213V247.188c-12.539-2.948-23.6-4.425-34.663-4.425zm171.095-48.86c53.098 0 95.869-43.507 95.869-96.604 0-53.839-42.771-96.61-95.869-96.61-53.838 0-96.609 42.771-96.609 96.61 0 53.097 42.771 96.604 96.61 96.604zm-92.184 56.786h183.628v573.745h-183.628V250.689zm703.999 51.62c-32.45-42.035-77.434-62.682-134.956-62.682-53.097 0-99.558 22.124-143.07 68.584l-9.585-57.522h-160.769v786.134l182.893-30.232V822.22c28.02 8.85 56.78 13.275 82.594 13.275 45.725 0 112.096-11.798 163.717-67.843 49.408-53.839 74.485-137.168 74.485-247.052 0-97.345-18.44-171.09-55.31-218.291zm-151.92 353.983c-14.75 28.025-37.61 42.777-64.159 42.777-18.435 0-34.662-3.69-49.408-11.062V415.142c30.973-32.445 58.993-36.134 69.32-36.134 46.46 0 69.32 50.15 69.32 148.23 0 56.045-8.11 99.557-25.073 129.054zm731.566-123.894c0-91.443-19.912-163.717-59-214.602-39.822-51.62-99.557-78.169-175.514-78.169-155.608 0-252.212 115.044-252.212 299.408 0 103.247 25.808 180.68 76.692 230.089 45.725 44.248 111.361 66.372 196.168 66.372 78.169 0 150.442-18.435 196.167-48.673l-19.912-125.365c-44.989 24.336-97.345 37.61-156.344 37.61-35.398 0-59.734-7.378-77.434-22.864-19.175-16.223-30.237-42.771-33.921-80.382h303.097c.736-8.85 2.213-50.15 2.213-63.424zm-306.787-48.672c5.16-81.859 27.284-120.205 69.32-120.205 41.3 0 62.688 39.087 65.636 120.205H2191.46z" fill-rule="nonzero"></path></svg>
        </div>
        <div className="box-border inline-block px-5 py-0 my-2 flex justify-center lg:justify-start text-gray-800">
            <svg className="w-auto h-6 text-gray-400 flex-shrink-0 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2500 563"><defs></defs><path fill-rule="evenodd" d="M2035.464 169.177c9.556 16.487 12.683 35.246 13.715 56.334l1.357 28.108v196.55l1.386 28.138c2.772 45.952 36.661 79.93 82.967 82.82l27.99 1.386V253.62l1.387-28.108c1.15-20.853 4.247-39.965 13.95-56.57 20.125-34.664 57.205-55.968 97.287-55.895 40.082.073 77.084 21.512 97.081 56.249 9.557 16.487 12.536 35.6 13.686 56.216l1.386 28.02v196.638l1.386 28.138c2.89 46.188 36.514 80.166 82.968 82.82l27.99 1.386V225.511C2500 101.421 2399.431.813 2275.342.764a224.157 224.157 0 00-168.56 76.125A224.452 224.452 0 001938.221.735c-46.66 0-89.959 14.157-125.824 38.608C1790.513 14.92 1741.553.735 1713.445.735v561.778l28.108-1.386c47.014-3.097 80.991-36.16 82.82-82.82l1.504-28.138V253.62l1.386-28.108c1.18-21.206 4.13-39.847 13.715-56.452a112.55 112.55 0 0197.243-55.98c40.102.008 77.16 21.387 97.243 56.098zm-1923.12 391.98l28.108 1.356H561.78l-1.386-28.02c-3.805-46.187-36.514-79.929-82.85-82.937l-28.108-1.387H196.668l337.003-337.12-1.386-27.99c-2.183-46.66-36.279-80.372-82.85-82.938L421.327.853 0 .735l1.386 28.108c3.687 45.745 36.868 80.195 82.82 82.85l28.138 1.386h252.767L28.108 450.199l1.386 28.108c2.773 46.306 36.19 79.841 82.85 82.82v.03zM1603.165 82.965a280.875 280.875 0 010 397.26c-109.75 109.66-287.597 109.66-397.348 0-109.689-109.69-109.689-287.57 0-397.26A280.728 280.728 0 011404.314.705a280.934 280.934 0 01198.851 82.29v-.03zm-79.487 79.546c65.79 65.84 65.79 172.534 0 238.373-65.84 65.79-172.534 65.79-238.373 0-65.79-65.84-65.79-172.533 0-238.373 65.84-65.79 172.534-65.79 238.373 0zM814.781.705a280.727 280.727 0 01198.497 82.29c109.72 109.66 109.72 287.57 0 397.23-109.75 109.66-287.597 109.66-397.348 0-109.689-109.69-109.689-287.57 0-397.26A280.727 280.727 0 01814.427.705h.354zm119.01 161.747c65.81 65.843 65.81 172.56 0 238.403-65.84 65.79-172.534 65.79-238.373 0-65.79-65.84-65.79-172.534 0-238.373 65.84-65.79 172.534-65.79 238.373 0v-.03z"></path></svg>
        </div>
        <div className="box-border inline-block px-5 py-0 my-2 flex justify-center sm:justify-end lg:justify-start text-gray-800">
            <svg className="w-auto text-gray-400 flex-shrink-0 fill-current h-9" viewBox="0 0 2428 1004" xmlns="http://www.w3.org/2000/svg"><path d="M1221.47 109.639a73.59 73.59 0 0144.76 17.898c17.016 16.108 21.477 42.969 13.423 64.46-31.31 64.446-105.768 107.493-156.649 121.734-30.44 7.16-68.921 7.16-96.676-3.58-13.437 8.054-24.773 34.085-41.18 23.268-23.747-18.547-3.19-47.573-16.9-68.17-2.827-4.24-9.947-4.551-13.527-11.49-18.806-41.18 4.475-80.568 30.427-111.89 43.268-48.274 167.401-102.06 236.323-32.23zm-144.12 32.217c-24.175 4.474-51.476 14.993-66.236 32.23-14.773 17.223-24.163 34.02-15.214 51.917 31.335-23.267 46.549-55.497 81.464-75.185-.013-3.593 5.356-6.278-.013-8.962zm145.923 8.962c-61.775-5.383-108.323 41.179-152.187 85.924-2.685 7.16-18.793 15.214-6.264 23.268 59.09 5.37 115.483-11.62 158.451-51.023 12.542-11.634 21.465-26.847 15.227-42.969-2.685-6.251-9.001-12.516-15.227-15.2zm535.276 266.749c28.65 69.829 52.812 179.916 0 247.06-14.32 16.11-39.377 30.96-55.485 18.794-59.09-47.43-84.135-115.47-120.84-176.35-5.369-2.685-5.369 4.488-8.054 7.172-13.423 61.762 11.634 142.33-30.427 190.656-16.108 2.685-31.179-5.603-36.704-21.478-20.596-63.552.869-129.801 6.238-193.353 12.542-32.23 17.912-69.816 45.667-93.992 44.759 17.898 66.236 68.04 92.176 104.744 18.82 27.742 34.02 59.077 55.498 84.135 18.793-8.055 9.545-32.62 8.962-47.444-7.186-58.182-23.294-111.89-38.52-167.388-.87-14.318-8.924-38.494 6.264-47.443 40.336 17.911 57.313 59.972 75.225 94.887zm-270.33-21.491c0 13.437-10.738 30.22-19.713 32.23-85.925 13.424-181.707 5.37-262.262 32.217-2.685 9.844 8.95 11.634 15.214 14.318 68.908 10.74 141.435 13.424 208.58 30.44 35.498 9.014 48.35 51.036 51.035 85.938 1.648 27.522-8.936 60.867-35.81 79.673-66.223 42.074-167.374 40.271-234.531 1.803-25.668-14.396-50.129-37.586-51.918-66.237.155-22.748 9.857-40.66 25.965-49.233 64.46-25.965 144.12-11.62 199.63 21.478 3.554 17.911-15.822 16.939-25.096 23.28-61.775 35.81-108.31-40.257-165.598-12.54-8.054 5.369-13.877 20.349-4.474 25.07 70.71 31.335 149.49 8.949 219.305-10.74 8.055-2.684 17.912-10.738 18.794-18.792-2.685-28.65-34.902-34.902-55.498-42.956-60.867-15.214-127.999-15.214-193.353-21.478-12.529-2.685-28.495-11.414-32.217-21.478-7.16-21.478-7.16-51.023 8.949-68.921 83.24-73.41 209.449-67.132 315.075-47.444 7.172 2.633 15.226 5.318 17.924 13.372zm-391.167 34.02c8.054 85.924 12.528 165.61 10.739 256.01-1.79 11.62-15.214 14.318-24.163 18.793-14.319 2.685-32.827-.363-38.494-8.054-20.583-33.138-13.424-77.87-15.214-118.155 2.685-63.539 1.79-132.473 19.701-191.563 3.424-8.586 13.424-16.109 21.478-10.752 21.478 10.752 25.058 32.243 25.953 53.72zm994.521-12.53c4.306 7.238 8.807 18.418 0 23.269-40.284 17.898-94.874 9.844-141.435 15.213-12.529 10.74-22.386 28.637-17.924 44.759 4.5 2.685 8.508 6.77 13.45 6.251 28.624 1.803 71.605-13.423 90.425 13.424 4.59 7.99-.623 37.82-13.424 38.494-34.928 4.5-92.358-4.384-109.232 4.5-21.477 14.32-19.7 42.062-27.755 64.46 15.227 9.844 31.167-.233 49.22-2.697 33.151-5.37 69.856-15.214 102.954-8.055 6.265 11.634 15.227 24.176 8.95 38.495-56.432 44.758-129.218 90.632-206.764 58.182-29.105-13.047-42.074-57.287-32.217-94.86 6.251-26.861 33.993-52.814 17.003-81.464-2.685-12.542 4.488-23.268 15.227-25.952 29.532 0 23.254-36.705 38.48-53.721-17.003-18.793-59.958-17.898-55.484-55.498 20.596-10.739 45.667-7.159 68.909-10.739 52.812-10.752 111.89-17.016 165.636-10.752 10.7 2.153 25.032 23.268 33.981 36.692zM813.286 213.476c82.605 67.52 189.774 182.614 176.35 315.087-16.121 104.744-127.117 183.51-221.109 208.58-91.307 26.847-205.882 24.163-298.992 2.685-6.264 17.016-12.528 37.586-32.216 44.758-12.53 4.475-28.65 1.79-38.495-6.264-27.742-25.966-5.37-76.094-45.653-92.19-78.779-33.124-163.821-98.479-204.092-179.034-5.37-16.108.894-32.217 10.739-44.746 61.774-49.233 139.645-68.92 217.528-84.147 4.475 1.79 2.685-4.475 6.265-6.265 4.474-53.708 6.264-108.323 23.268-156.662 3.878-6.783 13.423-8.949 19.7-4.474 49.234 37.586 25.953 108.323 47.444 159.333 93.992 4.475 187.984 8.95 262.275 61.775 25.07 20.583 31.179 59.895 23.267 82.358-7.898 22.425-34.006 38.495-58.182 40.259-16.121 0-46.548 1.569-44.759-10.726 1.79-12.309 54.759-32.45 38.495-49.247-23.385-24.136-140.385-38.494-212.9-47.443-8.948-1.79-17.158.895-17.158 10.739-1.79 68.026-7.16 143.212 4.474 208.58.895 4.487 6.265 9.857 10.752 10.726 127.999 20.596 263.17 8.949 363.426-64.447 46.549-37.573 61.775-90.425 53.708-148.595-40.284-162.018-209.462-259.602-348.212-322.26-135.158-59.077-284.66-89.517-444.89-81.45-25.51 1.868-65.937 10.675-66.236 19.702-.298 9.026 45.797 6.186 40.271 23.267-5.512 17.068-52.359 6.94-66.236 2.685-13.878-4.254-12.529-24.176-8.95-36.704C38.084 7.593 135.513 2.599 179.519.433c243.469-6.277 478.91 86.444 633.768 213.042zM374.662 453.376c-61.775.895-127.117 7.16-184.404 28.638-11.634 4.474-25.966 17.003-17.017 32.23 23.268 31.321 56.548 57.04 87.728 75.185 31.179 18.119 72.514 41.18 110.113 46.562 8.95-58.196 8.95-115.483 8.054-175.455-3.592-1.79-.013-5.37-4.474-7.16zm1850.266-81.463c-2.684 77.87-75.211 126.222-75.211 204.092 2.684 2.685 4.5 6.265 8.054 4.501 58.208-63.565 115.483-153.977 200.525-180.824 22.412-1.79 42.658 17.677 51.036 32.23 29.546 59.077 22.412 142.33-18.78 196.037-42.502 52.722-116.39 105.626-200.5 96.664-34.901 85.938-59.116 176.35-72.54 270.342-7.159 18.793-24.149 1.79-34.888-1.79-72.5-57.287-12.97-208.943-8.054-228.294 4.915-19.299 24.318-64.823 38.507-102.94-34.02-60.855-12.542-134.277 15.2-190.67 21.479-37.599 51.05-75.198 85.951-103.835 4.436.013 8.016.908 10.7 4.487zm144.146 96.677c-10.739-1.79-15.226 12.542-24.162 15.226-41.166 46.549-82.358 93.097-102.954 148.595 27.768 3.58 51.023-14.319 75.211-24.163 41.166-25.965 67.132-68.908 64.447-118.154-1.803-8.08-8.962-14.345-12.542-21.504z" fill-rule="nonzero"></path></svg>
        </div>
    </div>
</section>

{/* <!-- Section 2 --> */}
<section className="w-full px-10 bg-gray-50 lg:px-0">
    <div className="max-w-4xl py-20 mx-auto">
        <h2 className="flex justify-start w-full text-4xl font-black text-left md:text-5xl md:text-center md:justify-center">
            <span>How We Can Help</span>
            <img src="https://cdn.devdojo.com/images/october2021/shooting-star.png" className="w-12 h-12 ml-4" />
        </h2>
        <div className="grid gap-10 pt-16 pb-10 md:grid-cols-2">
            <div className="relative p-10 space-y-2 border border-gray-200 rounded-lg">
                <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                <h3 className="text-2xl font-black">Easy to understand charts and graphs</h3>
                <p className="text-gray-700">Our application will help you make sense of all your data, we have a simple and easy to understand dashboard of charts and graphs.</p>
                <a href="#_" className="inline-block font-medium text-yellow-500 underline">Learn More</a>
            </div>
            <div className="relative p-10 space-y-2 border border-gray-200 rounded-lg">
                <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <h3 className="text-2xl font-black">Automatically bookmark your favorite settings</h3>
                <p className="text-gray-700">You can easily save your favorite settings and dashboards that you have built. You can also easily share them with others.</p>
                <a href="#_" className="inline-block font-medium text-yellow-500 underline">Learn More</a>
            </div>
            <div className="relative p-10 space-y-2 border border-gray-200 rounded-lg">
                <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                <h3 className="text-2xl font-black">Split-test your pages to see which ones convert</h3>
                <p className="text-gray-700">Our system will also allow you to pick different variations of your pages to test and configure for maximum conversion.</p>
                <a href="#_" className="inline-block font-medium text-yellow-500 underline">Learn More</a>
            </div>
            <div className="relative p-10 space-y-2 border border-gray-200 rounded-lg">
                <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                <h3 className="text-2xl font-black">Lightning fast statically generated webpages</h3>
                <p className="text-gray-700">Each of the pages in our system are statically generated at build time. This means a faster website and better experience.</p>
                <a href="#_" className="inline-block font-medium text-yellow-500 underline">Learn More</a>
            </div>
            <div className="relative p-10 space-y-2 border border-gray-200 rounded-lg">
                <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <h3 className="text-2xl font-black">Simple and flexible scheduling system</h3>
                <p className="text-gray-700">Schedule your tasks easily and intuitively with our simple scheduling system. Giving you more time to focus on your business.</p>
                <a href="#_" className="inline-block font-medium text-yellow-500 underline">Learn More</a>
            </div>
            <div className="relative p-10 space-y-2 border border-gray-200 rounded-lg">
                <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <h3 className="text-2xl font-black">Developer API to help you build the next great app</h3>
                <p className="text-gray-700">Our well documented developer API will allow you to build and extend functionality to take your app to the next level.</p>
                <a href="#_" className="inline-block font-medium text-yellow-500 underline">Learn More</a>
            </div>
        </div>
        <div className="w-full mt-10 mb-2 text-center">
            <a href="#_" className="mx-auto text-lg font-medium text-yellow-500 underline">View All our Features</a>
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

{/* <!-- Section 4 --> */}
<section className="w-full px-10 bg-gray-50 lg:px-0">
    <div className="max-w-4xl py-20 mx-auto">
        <h2 className="flex justify-start w-full text-4xl font-black text-left md:text-5xl md:text-center md:justify-center">
            <span>How We Can Help</span>
            <img src="https://cdn.devdojo.com/images/october2021/shooting-star.png" className="w-12 h-12 ml-4" />
        </h2>
        <div className="grid gap-10 pt-16 pb-10 md:grid-cols-2">
            <div className="relative p-10 space-y-2 border border-gray-200 rounded-lg">
                <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                <h3 className="text-2xl font-black">Easy to understand charts and graphs</h3>
                <p className="text-gray-700">Our application will help you make sense of all your data, we have a simple and easy to understand dashboard of charts and graphs.</p>
                <a href="#_" className="inline-block font-medium text-yellow-500 underline">Learn More</a>
            </div>
            <div className="relative p-10 space-y-2 border border-gray-200 rounded-lg">
                <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <h3 className="text-2xl font-black">Automatically bookmark your favorite settings</h3>
                <p className="text-gray-700">You can easily save your favorite settings and dashboards that you have built. You can also easily share them with others.</p>
                <a href="#_" className="inline-block font-medium text-yellow-500 underline">Learn More</a>
            </div>
            <div className="relative p-10 space-y-2 border border-gray-200 rounded-lg">
                <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                <h3 className="text-2xl font-black">Split-test your pages to see which ones convert</h3>
                <p className="text-gray-700">Our system will also allow you to pick different variations of your pages to test and configure for maximum conversion.</p>
                <a href="#_" className="inline-block font-medium text-yellow-500 underline">Learn More</a>
            </div>
            <div className="relative p-10 space-y-2 border border-gray-200 rounded-lg">
                <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                <h3 className="text-2xl font-black">Lightning fast statically generated webpages</h3>
                <p className="text-gray-700">Each of the pages in our system are statically generated at build time. This means a faster website and better experience.</p>
                <a href="#_" className="inline-block font-medium text-yellow-500 underline">Learn More</a>
            </div>
            <div className="relative p-10 space-y-2 border border-gray-200 rounded-lg">
                <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <h3 className="text-2xl font-black">Simple and flexible scheduling system</h3>
                <p className="text-gray-700">Schedule your tasks easily and intuitively with our simple scheduling system. Giving you more time to focus on your business.</p>
                <a href="#_" className="inline-block font-medium text-yellow-500 underline">Learn More</a>
            </div>
            <div className="relative p-10 space-y-2 border border-gray-200 rounded-lg">
                <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <h3 className="text-2xl font-black">Developer API to help you build the next great app</h3>
                <p className="text-gray-700">Our well documented developer API will allow you to build and extend functionality to take your app to the next level.</p>
                <a href="#_" className="inline-block font-medium text-yellow-500 underline">Learn More</a>
            </div>
        </div>
        <div className="w-full mt-10 mb-2 text-center">
            <a href="#_" className="mx-auto text-lg font-medium text-yellow-500 underline">View All our Features</a>
        </div>
    </div>
</section>

{/* <!-- Section 5 --> */}
<section className="pt-8 pb-16 sm:pt-10 sm:pb-20 md:pt-12 md:pb-24 bg-gray-50">
    <div className="px-5 mx-auto max-w-7xl md:px-8 lg:px-16">
        <svg className="w-40 h-40 sm:w-48 sm:h-48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 41"><defs></defs><defs><linearGradient x1="50%" x2="108.006%" y1="44.344%" y2="62.397%"><stop offset="0%" stop-color="#FDC530"></stop><stop offset="100%" stop-color="#FF42E9"></stop></linearGradient><linearGradient x1="50%" x2="108.006%" y1="48.828%" y2="52.569%"><stop offset="0%" stop-color="#FDC530"></stop><stop offset="100%" stop-color="#FF42E9"></stop></linearGradient><linearGradient x1="50%" x2="108.006%" y1="48.935%" y2="52.335%"><stop offset="0%" stop-color="#FDC530"></stop><stop offset="100%" stop-color="#FF42E9"></stop></linearGradient></defs><g fill="none" fill-rule="nonzero"><path fill="url(#a)" d="M42.82.11c11.81.69 23.5 6.44 30.55 16.05A480.23 480.23 0 012.31 23.9C8.54 8 26.24-1.12 42.82.11z"></path><path fill="url(#b)" d="M78.73 26.87c-13.7 1.8-27.46 3-41.23 4.1-12.44.65-24.87 1.42-37.33 1.33A33 33 0 01.71 29c11.86-.44 23.66-1.65 35.47-2.67C49.5 24.54 62.84 23 76 20.28"></path><path fill="url(#c)" d="M80 38.27C53.57 41.54 26.83 41.13.24 40.44 0 39.75.2 38.91 0 38.29v-2c26.56-.52 79.11-8.39 79.35-6.85"></path></g></svg>

        <div className="relative w-full">
            <h2 className="text-4xl font-bold text-transparent sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading bg-clip-text bg-gradient-to-br from-purple-500 via-purple-700 to-purple-400">
                Are you ready to take your skills to the next level?
            </h2>
            <p className="mt-3 text-base leading-6 text-gray-600 sm:text-lg md:text-xl">
                Use our software as a service starter kit to build your next great idea. Make it simple, but significant.
            </p>
        </div>
        <div className="grid mt-16 gap-y-10 sm:grid-cols-2 sm:gap-x-8 md:gap-x-12 lg:grid-cols-3 lg:gap-20">
            <div>
                <div className="relative w-16 h-16 p-4 overflow-hidden rounded-full bg-gradient-to-br from-purple-500 via-purple-700 to-purple-400">
                    <div className="absolute top-0 left-0 w-full h-full mt-10 transform scale-150 -rotate-45 translate-x-1/2 bg-black opacity-5"></div>
                    <svg className="w-full h-full text-white stroke-current" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                </div>
                <h3 className="mt-6 text-base font-black leading-6 text-gray-700">
                    Authentication
                </h3>
                <p className="mt-2 text-sm leading-5 text-gray-800">
                    Fully loaded authentication, email verification, and password reset. Authentication in a snap!
                </p>
            </div>
            <div>
                <div className="relative w-16 h-16 p-4 overflow-hidden rounded-full bg-gradient-to-br from-purple-500 via-purple-700 to-purple-400">
                    <div className="absolute top-0 left-0 w-full h-full mt-10 transform scale-150 -rotate-45 translate-x-1/2 bg-black opacity-5"></div>
                    <svg className="w-full h-full text-white stroke-current" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h3 className="mt-6 text-base font-black leading-6 text-gray-700">
                    User Profiles
                </h3>
                <p className="mt-2 text-sm leading-5 text-gray-800">
                    Customizable user profiles. Allow your users to enter data and easily customize their user profiles.
                </p>
            </div>
            <div>
                <div className="relative w-16 h-16 p-4 overflow-hidden rounded-full bg-gradient-to-br from-purple-500 via-purple-700 to-purple-400">
                    <div className="absolute top-0 left-0 w-full h-full mt-10 transform scale-150 -rotate-45 translate-x-1/2 bg-black opacity-5"></div>
                    <svg className="w-full h-full text-white stroke-current" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg>
                </div>
                <h3 className="mt-6 text-base font-black leading-6 text-gray-700">
                    User Roles
                </h3>
                <p className="mt-2 text-base leading-5 text-gray-800">
                    Grant user permissions based on roles, you can then assign a role to a specific plan.
                </p>
            </div>
            <div>
                <div className="relative w-16 h-16 p-4 overflow-hidden rounded-full bg-gradient-to-br from-purple-500 via-purple-700 to-purple-400">
                    <div className="absolute top-0 left-0 w-full h-full mt-10 transform scale-150 -rotate-45 translate-x-1/2 bg-black opacity-5"></div>
                    <svg className="w-full h-full text-white stroke-current" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                </div>
                <h3 className="mt-6 text-base font-black leading-6 text-gray-700">
                    Subscriptions
                </h3>
                <p className="mt-2 text-base leading-5 text-gray-800">
                    Allow users to pay for your service and signup for a subscription using Stripe or Braintree Payments.
                </p>
            </div>
            <div>
                <div className="relative w-16 h-16 p-4 overflow-hidden rounded-full bg-gradient-to-br from-purple-500 via-purple-700 to-purple-400">
                    <div className="absolute top-0 left-0 w-full h-full mt-10 transform scale-150 -rotate-45 translate-x-1/2 bg-black opacity-5"></div>
                    <svg className="w-full h-full text-white stroke-current" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                </div>
                <h3 className="mt-6 text-base font-black text-gray-700">
                    Notifications
                </h3>
                <p className="mt-2 text-sm leading-5 text-gray-800">
                    Ready-to-use Notification System which integrates with the default Laravel notification feature.
                </p>
            </div>

            <div>
                <div className="relative w-16 h-16 p-4 overflow-hidden rounded-full bg-gradient-to-br from-purple-500 via-purple-700 to-purple-400">
                    <div className="absolute top-0 left-0 w-full h-full mt-10 transform scale-150 -rotate-45 translate-x-1/2 bg-black opacity-5"></div>
                    <svg className="w-full h-full text-white stroke-current" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                </div>
                <h3 className="mt-6 text-base font-black leading-6 text-gray-700">
                    Fully Functional API
                </h3>
                <p className="mt-2 text-sm leading-5 text-gray-800">
                    Ready-to-consume API for your application. Create API tokens with role specific permissions.
                </p>
            </div>
        </div>
    </div>
</section>

    </>
  )
}

export default Features2
