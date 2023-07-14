import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {useEffect} from 'react'
import {CgProfile} from "react-icons/cg"
import {MdOutlineSchool, MdWork} from 'react-icons/md'
import {AiOutlineProject} from 'react-icons/ai'
import {BiMessageDots } from 'react-icons/bi'

export default function SideBar(props:any) {
  
  var [value, setValue] = React.useState(0);

  

  var refs:any []=props.tabRefs
  
  const tabStyle='hover:text-blue-500 mb-20 sm:mb-16 lg:mb-8 bg-gradient-to-t hover:from-slate-300 duration-200'
  const iconStyle='h-8 w-8 lg:h-6 lg:w-6'

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
      } else if(refs[3].current!.getBoundingClientRect().top<=2){
        setValue(3)
      } else if(refs[2].current!.getBoundingClientRect().top<=2){
        setValue(2)
      } else if(refs[1].current!.getBoundingClientRect().top<=2){
        setValue(1)
      } else if(refs[0].current!.getBoundingClientRect().top<=2){
        setValue(0)
      }
        
  },[props.valueY])

  return (
    
      <Tabs
        className="br-1 pt-7"
        orientation="vertical"
        value={value}
        onChange={handleChange}
        centered
      >

        <Tab label={innerWidth>=1024 ? "About me" : "" }  className={tabStyle} 
        onClick={()=>handleTabClick(refs[0])}
        icon= {<CgProfile className={iconStyle} /> }
        />

        <Tab label={innerWidth>=1024 ? "Course projects" : "" } className={tabStyle} 
        onClick={()=>handleTabClick(refs[1])}
        icon= {<MdOutlineSchool  className={iconStyle} /> }
        />

        <Tab label={innerWidth>=1024 ? "My projects" : "" } className={tabStyle}     
        onClick={()=>handleTabClick(refs[2])}
        icon= {<AiOutlineProject className={iconStyle} /> }
        />

        <Tab label={innerWidth>=1024 ? "Work experience" : "" } className={tabStyle}
       onClick={()=>handleTabClick(refs[3])}
       icon= {<MdWork className={iconStyle} /> }
       />

        <Tab label={innerWidth>=1024 ? "Contact me" : "" } className={tabStyle}
        onClick={()=>handleTabClick(refs[4])}
        icon= {<BiMessageDots className={iconStyle} /> }
        />
        
      </Tabs>
    

  );
}