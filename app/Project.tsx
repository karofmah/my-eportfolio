import React from "react";
import {useState,useEffect} from 'react'
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faJava, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Slide } from 'react-slideshow-image';

export default function Project(props:any){

  const images:string[]=props.images

  const [image,setImage]=useState<number>(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      if(image===2){
        setImage(0)
      }else{
        setImage(image+1)
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [image]);
   
  var icons: IconDefinition[]=props.icons
  const [isHovered, setIsHovered] = useState<boolean>(false);

    return(
      <div>


    <div className="bg-no-repeat bg-cover bg-center h-screen mt-16 duration-500" style={{backgroundImage: `url(${images[image]})`}}>
 <div
      className={`flex flex-col rounded-xl bg-white lg:w-96 md:w-96 absolute right-0 min-[480px]:h-40 overflow-hidden duration-200 mr-16 mt-12 bg-gradient-to-br from-blue-900 to-cyan-400 opacity-95 min-[480px]:w-64 w-32 h-96  ${
        isHovered ? 'hover:h-4/5' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >  
     <h3 className='m-4 text-xl xl:text-2xl 2xl:text-3xl'> {props.title} </h3>
     <div className="flex min-[480px]:flex-row flex-col">
      {icons.map((icon, index) => (
        <FontAwesomeIcon key={index} icon={icon} className="h-16 w-24 min-[480px]:mt-0 mt-8 self-center"/>
      ))}
    
    
       {props.mysql && (
    <img src="/mysql.png" alt="mysql" className="h-16 w-24 mt-8 min-[480px]:mt-0 mt-8 self-center" />
  )}
  </div>
  {!isHovered && <KeyboardArrowDownIcon className="self-center animate-bounce"/>}
      <Typography className="m-4 text-xs lg:text-md md:text-sm sm:text-sm xs:text-xs xl:text-lg 2xl:text-xl">{props.description}</Typography>
     </div>
    </div>
    </div>

  )
}
