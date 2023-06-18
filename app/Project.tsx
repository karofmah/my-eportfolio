import React from "react";
import {useState,useEffect, useRef} from 'react'
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Project(props:any){

  const images:string[]=props.images

  const [image,setImage]=useState<number>(0)


  useEffect(() => {
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
{window.innerWidth>640 &&(
    <div className="bg-no-repeat bg-cover bg-center h-screen mt-16 duration-500 " style={{backgroundImage: `url(${images[image]})`}}>
 <div
      className='flex flex-col rounded-xl bg-white absolute right-0 mr-16 mt-12 overflow-hidden bg-gradient-to-br from-blue-900 to-cyan-400 opacity-95 h-40 hover:h-4/5 duration-200'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >  
     <h3 className='m-4 text-xl xl:text-2xl 2xl:text-3xl'> {props.title} </h3>
     <div className="flex flex-wrap w-fit h-fit">
      {icons.map((icon, index) => (
        <FontAwesomeIcon key={index} icon={icon} className="h-16 w-24 min-[480px]:mt-0 mt-8 self-center"/>
      ))}
   
       {props.mysql && (
    <img src="/mysql.png" alt="mysql" className="h-16 w-24 mt-8 min-[480px]:mt-0 mt-8 self-center" />
  )} 
  </div>
  {!isHovered && <KeyboardArrowDownIcon className="self-center animate-bounce"/>}
      {<Typography className='m-4 text-xs lg:text-md md:text-sm sm:text-sm xs:text-xs xl:text-lg 2xl:text-xl w-64 '>{props.description}</Typography>}
     </div>
     
    </div>
    )}
    {window.innerWidth<640 && (
      
      <div className="flex flex-col">
        <div className="duration-500">
        <img src={images[image]} alt="Project" />

        </div>
         <div className="flex ">
      {icons.map((icon, index) => (
        <FontAwesomeIcon key={index} icon={icon} className="h-16 w-24 min-[480px]:mt-0 mt-8 self-center"/>
      ))}
    
    
       {props.mysql && (
    <img src="/mysql.png" alt="mysql" className="h-16 w-24 mt-8 min-[480px]:mt-0 mt-8 self-center" />
  )}  
  </div>
  <Typography className='m-4 text-xs lg:text-md md:text-sm sm:text-sm xs:text-xs xl:text-lg 2xl:text-xl'>{props.description}</Typography>

      </div>
    )}

    </div>

  )
}
