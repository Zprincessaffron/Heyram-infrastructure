import React from 'react'
import { TbPointFilled } from "react-icons/tb";

function Cards({ type,intro,intro2 }) {
  return (
    <div 
    class="h-[18em] w-[25rem] z-10 border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1em] flex justify-between  items-center flex-col gap-[0.75em] backdrop-blur-[12px]"
  >
    <div>
      <h1 class="text-[1.7em] font-[200] text-center uppercase" >{type}</h1>
      <p class="text-[0.85em] font-[200] tracking-wider flex flex-direction-row gap-[4px] mt-[10px] ">
      <TbPointFilled/> {intro}
      </p>
      <p class="text-[0.85em] font-[200] tracking-wider flex flex-direction-row gap-[4px] mt-[10px] ">
      <TbPointFilled/> {intro}
      </p>
    </div>
  
    <button 
      class="h-fit w-fit px-[1em] text-[0.7rem] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] z-20 duration-200 backdrop-blur-[12px]"
    >
      <p>Enquire Now</p>
      <svg
        class="w-6 h-6 group-hover:translate-x-[10%] duration-300"
        stroke="currentColor"
        stroke-width="1"
        viewBox="0 0 24 24"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          stroke-linejoin="round"
          stroke-linecap="round"
        ></path>
      </svg>
    </button>
  </div>
  

  )
}

export default Cards