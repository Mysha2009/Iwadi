import React from "react"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';



function Pic_desc() {
  
    return (
      <div>
      
        <div class="flex min-h-screen items-center justify-center">
          <div class="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div class="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
              <img
                src="./assets/image.png"
                alt="image"
                class="h-full w-full object-cover"
              />
            </div>
            <div style={{textAlign: 'left'}} class="p-6">
              <h1 class="mb-2 block font-sans text-4xl font-semibold leading-snug tracking-normal text-black antialiased">
                Choisissez la filiere <br /> qui vous correspond
              </h1>
              <p class="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                Like so many organizations these days, Autodesk is a company in
                transition. It was until recently a traditional boxed software company
                selling licenses. Yet its own business model disruption is only part of
                the story
              </p>
              <a class="inline-block" href="#">
                <button
                  class="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-500 transition-all hover:bg-blue-500/10 active:bg-blue-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    class="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
          <link
            rel="stylesheet"
            href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
          />
        </div>
        <div class="flex items-center justify-center">
            <div class="text-sm text-gray-700 py-1">
                Made with <a class="text-gray-700 font-semibold" href="https://www.material-tailwind.com/docs/html/card?ref=tailwindcomponents" target="_blank">Material Tailwind</a> by <a href="https://www.creative-tim.com?ref=tailwindcomponents" class="text-gray-700 font-semibold" target="_blank"> Creative Tim</a>.
            </div>
        </div>
      </div>
  
    )
  }
  
  export default Pic_desc