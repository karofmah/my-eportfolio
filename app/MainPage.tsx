'use client';
import React from 'react';
import Background from '../public/Meteor.svg'
import SideBar from './SideBar'
import Typography from '@mui/material/Typography';
import CV from '../public/CV.svg';
import Project from './Project';
import '@fontsource/roboto/300.css'
import Experience from './Experience'
import 'hover.css/css/hover-min.css';
import { IconDefinition, faReact } from '@fortawesome/free-brands-svg-icons';
import { faJava, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import ContactForm from './ContactForm';


export default function MainPage (){ 

  var iconsOne:IconDefinition[]=[faJava, faCss3Alt]
  var iconsTwo:IconDefinition[]=[faJava, faCss3Alt]

  return(
    <div className='flex'> 
    <div className='bg-gradient-to-b from-slate-100 to-slate-400 opacity-60 sticky top-0 h-screen w-3/5'>
      <SideBar/>
    </div>
       
      <div className='bg-slate-800 flex flex-col'>
        <About 
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat mass a quis enim. Donec pede justo, fringilla vel, "
        imageURL="pb.png"/>
        
        <Typography className="font-bold left-0 text-3xl font-bold lg:text-4xl 2xl:text-5xl my-4 ml-8 ">Course projects</Typography>
      <Project
      title="Title"
      description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat mass a quis enim. Donec pede justo, fringilla vel, "
      bgImage="TAS1.png"
      icons={iconsOne}
      mysql={true}
      />

    
      <Typography className="font-bold left-0 text-3xl font-bold lg:text-4xl 2xl:text-5xl my-4 ml-8">My projects</Typography>
      <Project
      title="Title"
      time="Time"
      description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat mass a quis enim. Donec pede justo, fringilla vel, "
      bgImage="/TAS2.png"
      icons={iconsTwo}
      mysql={false}
      />

<Typography className="font-bold left-0 text-3xl font-bold lg:text-4xl 2xl:text-5xl my-4 ml-8">Work experience</Typography>
      
     <Experience
      imageURL='/mentor.png'
      description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat mass a quis enim. Donec pede justo, fringilla vel, "

        />
      <Typography className="font-bold left-0 text-3xl font-bold lg:text-4xl 2xl:text-5xl my-4 ml-8">Contact me</Typography>
     <ContactForm/>
     </div>
     
    </div>
    )
}


  


function About(props:any){ 
  const listItems = [
    {
      link: 'https://github.com/karofmah',
      imgSrc: 'github.png',
      text: 'Github',
      dimensions: 'w-10 h-10 hover:scale-125 duration-200'

    },
    {
      link: 'mailto:karo.f.mahmoud@gmail.com',
      imgSrc: '/Email.png',
      text: 'karo.f.mahmoud@gmail.com',
      dimensions: 'w-8 h-8 hover:scale-125 duration-200'


    },
    //Github instead of address
    {
      link: 'MinCV.pdf',
      imgSrc: 'CV.png' ,
      text: 'CV',
      dimensions: 'w-8 h-8 hover:scale-125 duration-200'

    },
    {
      link: 'https://www.linkedin.com/in/karo-mahmoud-933875248/',
      imgSrc: 'linkedin.png',
      text: 'Linkedin',
      dimensions: 'w-8 h-8 hover:scale-125 duration-200'

    },
    {
      link: 'tel:+4746918226',
      imgSrc: 'phone.png',
      text: '+47 469 18 226',
      dimensions: 'w-8 h-8 hover:scale-125 duration-200'

    },
    {
      link: 'https://goo.gl/maps/WCGDxMcvAadhjVfi9',
      imgSrc: 'Map.png',
      text: 'Norge, Trondheim Singsakerbakken 4F, 7030',
      dimensions: 'w-8 h-8 hover:scale-125 duration-200'

    }
  ];
 
  /*eslint-disable*/
  return(   
    <div className="flex flex-col lg:flex-row border-b w-11/12 border-white pb-12 ml-8">

      <div className="flex flex-col ">
        <Typography className="font-bold left-0 text-3xl font-bold lg:text-4xl 2xl:text-5xl my-4">About me</Typography>
      <div className="flex lg:w-xl lg:h-72  "> 
      <Typography className="text-xs lg:text-md md:text-sm sm:text-sm xs:text-xs xl:text-lg 2xl:text-xl">{props.description}</Typography>
      </div>

      <div className="bg-slate-100 text-black rounded-3xl opacity-60 w-3/4 ">
      <ul className="flex flex-col mt-4 ">

{listItems.map((item, index) => (
    <li key={index} className='mb-6 ml-6'>
      <a href={item.link} className="flex">
        <img src={item.imgSrc} alt="" className={item.dimensions} />
        <Typography className='mt-1 ml-2 hvr-underline-from-left '>{item.text}</Typography>
      </a>
    </li>
  ))}

</ul>
      </div>
     
      </div>
      <div className="flex min-[481px]:flex-row min-[320px]:flex-col">
      <img src={props.imageURL} alt="Profile picture" className="opacity-80 hover:translate-x-1 hover:-translate-y-1 hover:shadow-2xl object-cover object-center max-w-md mx-8 mt-16 mr-16 rounded-full h-48 w-32 xs:h-32 sm:h-48 md:h-48 lg:h-3/5 lg:w-64 2xl:h-4/5 2xl:w-80" />

</div>

     
  </div>
   


  )
}