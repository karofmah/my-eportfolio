import React from "react";

export default function Project(props:any){
  
  return(
    <div className="bg-no-repeat bg-cover bg-center h-screen mt-16 " style={{backgroundImage: `url(${props.bgImage})`}}>
     <div className=" flex flex-col rounded-xl bg-white lg:w-96 md:w-96 w-64 absolute right-0 mr-16 mt-12">
     <h3 className='m-4 text-xl xl:text-2xl 2xl:text-3xl'> {props.title} </h3>
      <p className='m-4 italic text-xs lg:text-lg md:text-md sm:text-sm xs:text-xs xl:text-xl 2xl:text-2xl'> {props.time} </p>
      <p className='m-4 text-xs lg:text-lg md:text-md sm:text-sm xs:text-xs xl:text-xl 2xl:text-2xl'> {props.description} </p>
     </div>
     
   
    </div>
  )
}
