import React from "react";
import Carousel from 'react-material-ui-carousel'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import Project from "./Project";

export default function MainProject(props:any){
  
  return(
    <>

    {innerWidth>=1024 ? 
    <Carousel duration={1000} navButtonsAlwaysVisible={true} navButtonsProps={{
      style: {
        backgroundColor:"unset"
    }
    }} 
    
    swipe={true} NextIcon={<ArrowCircleRightIcon color="action" fontSize="large"/>} PrevIcon={<ArrowCircleLeftIcon color="action" fontSize="large"/>}>
  
  {
    props.object.images.map( (image:string) => (
      <div key={image}>
      
      <Project image={image} object={props.object}
      height={props.height}
      width={props.width}
      isGroup={props.isGroup}/>

      </div>

    ))
    }
    </Carousel>
    : 
      <Project  object={props.object}
      height={props.height}
      width={props.width}
      isGroup={props.isGroup}/>
  }
  </>
  
  )
 
}