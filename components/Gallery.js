import React from 'react'
import Image from "next/image";
export const Gallery = () => {
  return (
<div>
          <div className=" hidden align-center w-56 p-3 rounded-xl border bg-white bg-opacity-5 border-opacity-5 group sm:w-full ">
            
             <div className ="avatar">
<h2 className="  lg:w-7/12 m-auto  text-center font-bold text-3xl md:text-5xl text-white mt-8 mb-16 ">
        {" "}
        Student Co-Ordinator
      </h2>{" "} 
              
  <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://placeimg.com/192/192/people" />
  </div>
</div> 
            
          </div>
        </div>
  )
}
