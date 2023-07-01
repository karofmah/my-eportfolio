import React from "react";
import {useState,useEffect, useRef} from 'react'
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {GoRepo} from 'react-icons/go';
import 'hover.css/css/hover-min.css';


export default function Project(props:any){
  const [image,setImage]=useState<number>(0)
  const [isHovered, setIsHovered] = useState<boolean>(false);


  const images:string[]=props.object.images;
  const icons:any[]=props.object.icons

  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
  }

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

    <div className="bg-no-repeat bg-cover bg-center h-11/12 lg:h-screen mt-16 lg:duration-500 " style={innerWidth>1024 ? {backgroundImage: `url(${images[image]})`} : {}}>
 <div
      className={`flex flex-col lg:rounded-xl lg:absolute lg:right-0 lg:mr-16 lg:mt-12 bg-gradient-to-br from-blue-900 to-cyan-400 lg:overflow-hidden lg:opacity-95 hover:w-2/5  lg:hover:h-3/5 lg:${props.height} lg:${props.width} lg:duration-200 `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >  
      <div className="flex lg:self-auto self-center">
      <h3 className='m-4 text-xl xl:text-2xl 2xl:text-3xl'> {props.object.title} </h3>
      {((window.innerWidth>1024 && isHovered) || (window.innerWidth<1024)) && 
      <a href={props.object.repo}>
        <GoRepo className={`w-7 h-7 mt-5 hvr-float-shadow`}/>
        </a>}
      </div>
      {window.innerWidth<1024 && 
       <div className="bg-no-repeat bg-cover bg-center h-64 w-full md:w-3/5 duration-200 self-center" style={{backgroundImage: `url(${images[image]})`} }>

       </div>
        }
     
     {((window.innerWidth>1024 && !isHovered) || (window.innerWidth<1024)) &&
     <div className="flex flex-wrap w-fit h-fit lg:self-auto self-center">
      {icons.map((icon,index) => (
          <div key={index}>
          {icon}
          </div>
          ))}
  </div>
}
  {innerWidth>1024 && !isHovered && <KeyboardArrowDownIcon className="self-center animate-bounce"/>}
       <Typography className='m-4 text-xs lg:text-md md:text-sm sm:text-sm xs:text-xs xl:text-lg 2xl:text-xl'>{props.object.description}</Typography>
     </div>
     
    </div>
    

    </div>

  )
}
