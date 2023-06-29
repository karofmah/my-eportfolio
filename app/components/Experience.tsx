import React from 'react';
import Typography from '@mui/material/Typography';

export default function ExperienceOne(props:any){
    return(
      <div className="flex md:flex-row flex-col border-b w-11/12 border-white pb-5 mt-4 md:ml-8 ml-0">
        
          <div className="md:w-auto md:h-auto h-1/2 w-1/2 self-center ">
          <img src={props.imageURL} alt="picture" className="rounded-xl"/>
  
          </div>
          <div className="flex flex-col md:ml-16 m-4 w-auto">
          <h3 className="text-xl font-bold text-xl xl:text-3xl 2xl:text-4xl" > {props.title} </h3>
          <p className="my-3 italic text-xs lg:text-lg md:text-md sm:text-sm xs:text-xs xl:text-xl 2xl:text-2xl"> {props.time} </p>
          <Typography className="text-xs lg:text-md md:text-sm sm:text-sm xs:text-xs xl:text-lg 2xl:text-xl text-left">{props.descriptionOne}<br/><br/>{props.descriptionTwo}<br/><br/>{props.descriptionThree}</Typography>
          </div>
        
        </div>
    
    )
  } 