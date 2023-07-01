import React from "react";
import {useState,useEffect, useRef} from 'react'
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {SiGithub} from 'react-icons/si';

export default function Project(props:any){
  const [image,setImage]=useState<number>(0)
  const [isHovered, setIsHovered] = useState<boolean>(false);


  const images:string[]=props.object.images;
  const icons:any[]=props.object.icons

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
   
  
    return(
      <div>
{window.innerWidth>640 &&(
    <div className="bg-no-repeat bg-cover bg-center h-screen mt-16 duration-500 " style={{backgroundImage: `url(${images[image]})`}}>
 <div
      className={`flex flex-col rounded-xl bg-white absolute right-0 mr-16 mt-12 bg-gradient-to-br from-blue-900 to-cyan-400 overflow-hidden opacity-95 hover:h-3/5 hover:w-2/5 ${props.height} ${props.width} duration-200 `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >  
      <div className="flex">
      <h3 className='m-4 text-xl xl:text-2xl 2xl:text-3xl'> {props.object.title} </h3>
      {isHovered && 
      <a href={props.link}>
        <SiGithub className='w-8 h-8 mt-4 hover:scale-125 duration-200'/>
        </a>}
      </div>

     {!isHovered &&
     <div className="flex flex-wrap w-fit h-fit">
      
      {icons.map((icon) => icon)}

  </div>
}
  {!isHovered && <KeyboardArrowDownIcon className="self-center animate-bounce"/>}
       <Typography className='m-4 text-xs lg:text-md md:text-sm sm:text-sm xs:text-xs xl:text-lg 2xl:text-xl'>{props.object.description}</Typography>
     </div>
     
    </div>
    )}
    {window.innerWidth<640 && (
      
      <div className="flex flex-col">
        <div className="">
        <img src={props.object.images[image]} alt="Project" />

        </div>
         <div className="flex mt-8 ">
         {icons.map((icon) => icon)}

     
  </div>
  <Typography className='m-4 text-xs lg:text-md md:text-sm sm:text-sm xs:text-xs xl:text-lg 2xl:text-xl'>{props.object.description}</Typography>

      </div>
    )}

    </div>

  )
}
