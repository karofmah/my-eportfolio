import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {useRef,useEffect, useState} from 'react'




export default function SideBar(props:any) {
  
  var [value, setValue] = React.useState(0);

  

  var refs:any []=props.tabRefs
  
    

    const handleTabClick = (ref:React.RefObject<HTMLDivElement>) => {
      if(ref.current){
        ref.current?.scrollIntoView({behavior: 'smooth'});
      }
      
    };
  

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    
    setValue(newValue);
    console.log(newValue)
  };

  
  useEffect(() => {
    
      if(props.valueY<775){
        setValue(0)
      }
       
      else if(props.valueY<1920){
        setValue(1)
      }
       

      else if(props.valueY<2500){
        setValue(2)
      }
        

      else if(props.valueY<2650){
        setValue(3)
      }
        

      else{
        setValue(4)
      }


    
  },[props.valueY])

  return (
    
    
      <Tabs
        className="mt-12 br-1 "
        orientation="vertical"
        value={value}
        onChange={handleChange}
        
   
      >
        <Tab label="About me" className='hover:text-indigo-600 mb-16' 
        onClick={()=>handleTabClick(refs[0])}

      
        />
        <Tab label="Course projects" className='hover:text-indigo-600 mb-16' 
        onClick={()=>handleTabClick(refs[1])}

        
        />
        <Tab label="My projects" className='hover:text-indigo-600 mb-16'          
        onClick={()=>handleTabClick(refs[2])}
        
        />
        <Tab label="Work experience" className='hover:text-indigo-600 mb-16 ' 
       onClick={()=>handleTabClick(refs[3])}
        />
        <Tab label="Contact me" className='hover:text-indigo-600 mb-16' 
        onClick={()=>handleTabClick(refs[4])}
        />

      </Tabs>
    

  );
}