import React from 'react';
import Typography from '@mui/material/Typography';

export default function ExperienceOne(props:any){
    return(
      <div className="flex border-b w-11/12 border-white pb-5 mt-4 ml-8">
        
          <div className="w-screen h-16 lg:w-7/12 lg:h-32 lg:min-w-1/2 md:w-7/12 sm:w-11/12 sm:h-20 xs:w-11/12 xl:w-1/2 2xl:w-1/3 min-[320px]:w-screen min-[320px]:h-10 ">
          <img src={props.imageURL} alt="picture" className="rounded-xl min-w-full h-full"/>
  
          </div>
          <div className="flex flex-col ml-16 w-auto">
          <h3 className="text-xl font-bold text-xl xl:text-3xl 2xl:text-4xl" > {props.title} </h3>
          <p className="my-3 italic text-xs lg:text-lg md:text-md sm:text-sm xs:text-xs xl:text-xl 2xl:text-2xl"> {props.time} </p>
          <Typography className="text-xs lg:text-md md:text-sm sm:text-sm xs:text-xs xl:text-lg 2xl:text-xl">{props.description}</Typography>
          </div>
        
        </div>
    
    )
  } 