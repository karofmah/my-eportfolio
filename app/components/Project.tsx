import { Typography } from "@mui/material";
import React, { useState } from "react";
import { FaUsers, FaUserAlt } from "react-icons/fa";
import { GoRepo } from "react-icons/go";
import Carousel from 'react-material-ui-carousel'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Project(props:any){
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const images:string[]=props.object.images;
    const icons:any[]=props.object.icons

   
      return(
        <div>              
                   
      <div className="h-1/2 lg:bg-no-repeat lg:bg-cover lg:bg-center lg:h-screen mt-16 lg:duration-500 " style={innerWidth>=1024 ? {backgroundImage: `url(${props.image})`} : {}}>
   <div
        className={`flex flex-col lg:rounded-xl lg:absolute lg:right-0 lg:mr-16 lg:mt-12 bg-gradient-to-br from-blue-900 to-cyan-400 lg:overflow-hidden lg:opacity-95 lg:hover:h-fit lg:hover:w-3/5 duration-200 ${props.height} ${props.width} 
        `}
        
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        
        >  

        <div className="flex lg:self-auto self-center">
        <h3 className='m-4 lg:ml-4 lg:my-4 text-xl xl:text-2xl 2xl:text-3xl'> {props.object.title} </h3>
        {((window.innerWidth >=1024 && !isHovered) || (window.innerWidth < 1024)) && (
    props.isGroup ? (
      <FaUsers className="w-8 h-8 mt-4 mr-5" />
    
    ) : (
      <a href={props.object.repo}>
        <FaUserAlt className="w-6 h-6 mt-5 mr-5" />
      </a>
    )
  )}
        {((window.innerWidth >= 1024 && isHovered) || (window.innerWidth < 1024)) && 
        <a href={props.object.repo}>
          <GoRepo className={`w-7 h-7 mt-5 lg:ml-auto ml-3 hvr-float-shadow`}/>
          </a>}
        </div>
        {window.innerWidth < 1024 && 
        
         <Carousel
         autoPlay={false}
         className="self-center  w-full md:w-3/5"
         duration={1000} navButtonsAlwaysVisible={true} navButtonsProps={{
          style: {
            backgroundColor:"unset"
        }
        }} swipe={true} NextIcon={<ArrowCircleRightIcon color="action" fontSize="large"/>} PrevIcon={<ArrowCircleLeftIcon color="action" fontSize="large"/>}
        >
  
          {
            images.map( (image, i) => (
            
            <div key={i} className="bg-no-repeat bg-cover bg-center h-64 duration-200" style={{backgroundImage: `url(${image})`}} >
              
            </div>
            ))
          }
          </Carousel>
   
          }
       
       {((window.innerWidth >= 1024 && !isHovered) || (window.innerWidth < 1024)) &&
       <div className="flex flex-wrap w-fit h-fit lg:self-auto self-center">
        {icons.map((icon,index) => (
            <div key={index}>
            {icon}
            </div>
            ))}
    </div>
  }
    {innerWidth >= 1024 && !isHovered && <KeyboardArrowDownIcon className="self-center animate-bounce"/>}
         <Typography className='m-4 text-xs lg:text-md md:text-sm sm:text-sm xs:text-xs xl:text-lg 2xl:text-xl '>{props.object.description}</Typography>
       </div>
       
      </div>
  
       
  
      </div>
  
    )
  }