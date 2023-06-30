import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {useRef,useEffect, useState} from 'react'




export default function SideBar(props:any) {
  
  var [value, setValue] = React.useState(0);

  

  var refs:any []=props.tabRefs
  
  const tabStyle='hover:text-indigo-600 mb-16 bg-gradient-to-t hover:from-slate-300 duration-500'
    

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
    
      if(props.valueY<768){
        setValue(0)
      }
       
      else if(props.valueY<4151){
        setValue(1)
      }
       

      else if(props.valueY<4872){
        setValue(2)
      }
        

      else if(props.valueY<5361){
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
        
        <Tab label="About me" className='hover:text-indigo-600 mb-16 hover:bg-gradient-to-t hover:from-slate-300 duration-200 hover:animate-ping"' 
        onClick={()=>handleTabClick(refs[0])}

      
        />
        <Tab label="Course projects" className={tabStyle} 
        onClick={()=>handleTabClick(refs[1])}

        
        />
        <Tab label="My projects" className={tabStyle}     
        onClick={()=>handleTabClick(refs[2])}
        
        />
        <Tab label="Work experience" className={tabStyle}
       onClick={()=>handleTabClick(refs[3])}
        />
        <Tab label="Contact me" className={tabStyle}
        onClick={()=>handleTabClick(refs[4])}
        />

      </Tabs>
    

  );
}