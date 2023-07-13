import React from "react";
import {useState,useEffect, useRef} from 'react'
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {GoRepo} from 'react-icons/go';
import { FaUserAlt, FaUsers } from "react-icons/fa";
import Carousel from 'react-material-ui-carousel'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import Project from "./Project";
//const [image,setImage]=useState<number>(0)


export default function MainProject(props:any){
  
  return(
    <>

    {innerWidth>=1024 ? 
    <Carousel duration={1000} navButtonsAlwaysVisible={innerWidth>=1024 ? true : false} navButtonsProps={{
      style: {
        backgroundColor:"unset"
    }
    }} 
    
    swipe={true} NextIcon={<ArrowCircleRightIcon color="action" fontSize="large"/>} PrevIcon={<ArrowCircleLeftIcon color="action" fontSize="large"/>}>
  
  {
    props.object.images.map( (image:string) => (
      
      <Project image={image} object={props.object}
      height={props.height}
      width={props.width}
      isGroup={props.isGroup}/>

    ))
    }
    </Carousel>
    : 
      <Project object={props.object}
      height={props.height}
      width={props.width}
      isGroup={props.isGroup}/>
  
  }
  </>
  
  )
 
}