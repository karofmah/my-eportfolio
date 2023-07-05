import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {useEffect} from 'react'

export default function SideBar(props:any) {
  
  var [value, setValue] = React.useState(0);

  

  var refs:any []=props.tabRefs
  
  const tabStyle='hover:text-blue-500 mb-16 bg-gradient-to-t hover:from-slate-300 duration-200'
    

    const handleTabClick = (ref:React.RefObject<HTMLDivElement>) => {
      if(ref.current){
        ref.current?.scrollIntoView({behavior: 'smooth'});
      }
      
    };
  

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  
  useEffect(() => {
    if(window.scrollY + window.innerHeight > document.documentElement.scrollHeight-1) {
      setValue(4)
      } else if(refs[3].current!.getBoundingClientRect().top<=0){
        setValue(3)
      } else if(refs[2].current!.getBoundingClientRect().top<=0){
        setValue(2)
      } else if(refs[1].current!.getBoundingClientRect().top<=0){
        setValue(1)
      } else if(refs[0].current!.getBoundingClientRect().top<=0){
        setValue(0)
      }
        
  },[props.valueY])

  return (
    
      <Tabs
        className="br-1 pt-7"
        orientation="vertical"
        value={value}
        onChange={handleChange}
      >

        <Tab label="About me" className={tabStyle} 
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