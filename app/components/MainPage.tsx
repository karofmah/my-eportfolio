'use client';
import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import About from './About'
import Project from './Project';
import '@fontsource/roboto/300.css'
import Experience from './Experience'
import 'hover.css/css/hover-min.css';
import {FaReact,FaVuejs,FaCss3Alt,FaJava} from'react-icons/fa';
import { SiMysql,SiVuetify,SiMui,SiTailwindcss,SiSpring, SiTypescript,SiVercel } from "react-icons/si";
import ContactForm from './ContactForm';
import SideBar from './SideBar'
import {useRef} from 'react'
import {TbBrandNextjs} from 'react-icons/tb'

export default function MainPage (){ 
  const iconDimensions='h-16 w-24 mt-8 min-[480px]:mt-3 mt-10 self-center'
  
  const aboutRef = useRef<HTMLDivElement>(null);
  const courseRef = useRef<HTMLDivElement>(null);
  const myRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  var refs:any []=[aboutRef,courseRef, myRef,workRef,contactRef]

  const experienceDescription=["In August 2022, I secured a job as a mentor at MentorNorge, which is the country's largest private tutoring provider. This position has provided me with the opportunity to assist students with homework, subjects, and other academic tasks while simultaneously fostering motivation and a desire to learn. The reason I applied for this job was to instill a sense of mastery in the students, thereby increasing their motivation for schoolwork.", 
  "As a mentor, my primary focus is on teaching mathematics at the primary, lower secondary, and upper secondary levels. My responsibilities include planning instructional sessions and tailoring the teaching approach to each individual student. Consequently, the instruction can vary from one student to another and depends on their proficiency in different topics. Additionally, monitoring the student's progress throughout the year is crucial in determining the trajectory of the instruction. This is something a mentor must observe and adjust accordingly.",
  "Through my experiences, I have learned that establishing a strong rapport with individuals is essential, as well as implementing a peer-to-peer approach. I have also acquired some effective communication methods that can be useful tools for teaching complex subjects to others. This not only applies to educational contexts but also in the context of project work."]

  const objectEC={
    title:"E-commerce",
    images:['EC1.png','EC2.png','EC3.png','EC4.png','EC5.png','EC6.png','EC7.png'],
    icons:[<FaVuejs className={iconDimensions}/>, <SiMysql className={iconDimensions}/>,<SiSpring className={iconDimensions}/>],
    description:<>In the subject <a href="https://www.ntnu.no/studier/emner/IDATT2105/2022#tab=omEmnet" className="hvr-underline-reveal">IDATT2105</a> I took part in a volunteer project with three other students.  The goal was to develop a full stack application designed for e-commerce purposes in the span of a week. Mainly I worked on tasks related to the back-end of the application. The project has improved my ability to be able to acquire new knowledge in a continuously evolving field.</>,
    repo:"https://github.com/karofmah/E-Commerce-Project"
    
  }

  const objectSM={
    title:"SmartMat",
    images:['SM1.png','SM2.png','SM3.png','SM4.png','SM5.png','SM6.png','SM7.png'],
    icons:[<FaVuejs className={iconDimensions}/>, <SiMysql className={iconDimensions}/>,<SiSpring className={iconDimensions}/>,<SiVuetify className={iconDimensions}/>],
    description:<>In the subject <a href='https://www.ntnu.no/studier/emner/IDATT2106/2022#tab=omEmnet' className="hvr-underline-reveal">IDATT2106</a> I contributed to a group-based agile project that needed to be completed within three weeks, with scrum as the applied project management framework. My group consisted of 7 students, and the purpose was to create a full-stack application that may decrease food waste in households. In this project I fulfilled my role as a scrum master, but I also worked on the back-end of the project as a developer. Therefore, I contributed to sprint ceremonies. I also helped my team by writing a part of the final report. This project enhanced my competence in being able to share and disseminate information and knowledge with team members and clients. I also gained more experience in evaluating other people’s work. </>,
    repo:""
    


  }
  
 
  const objectCalculator={
    title:"Calculator",
    images:['Calculator1.png','Calculator2.png','Calculator3.png'],
    icons:[<FaVuejs className={iconDimensions}/>, <SiMysql className={iconDimensions}/>,<SiSpring className={iconDimensions}/>],
    description:<>As a part of the subject <a href="https://www.ntnu.no/studier/emner/IDATT2105/2022#tab=omEmnet" className="hvr-underline-reveal">IDATT2105</a> I developed a full-stack application for a calculator. This involved creating both the front-end and back-end for the application. This project has improved my ability to be able to acquire new knowledge in a continuously evolving field.</>,
    repo:"https://github.com/karofmah/IDATT2105-Full-Stack-Application-Development"


  }
  
  const objectTAS={
    title:"Tournament Administration System",
    images:['TAS1.png','TAS2.png','TAS3.png'],
    icons:[<FaJava className={iconDimensions}/>, <SiMysql className={iconDimensions}/>,<FaCss3Alt className={iconDimensions}/>],
    description:<>In the course <a href="https://www.ntnu.no/studier/emner/IDATT1002/2021#tab=omEmnet" className="hvr-underline-reveal">IDATT1002</a>, a group project was assigned with the task of developing a tool for managing a multi-team tournament. My group agreed to execute the project with NTNUI e-sport as the client. The project consisted of several components, including planning, back-end and front-end development, database integration, as well as a final report. In this project, my main contributions involved project planning, focusing on the back-end of the system, and writing the final report. Through this project in IDATT1002, I have acquired the ability to work efficiently and purposefully in a team towards a common goal. To achieve this, I applied programming expertise in conjunction with system development methodologies.</>,
    repo:"https://github.com/karofmah/Tournament-Administration-System"
  }

  const objectWG={
    title:"War Games",
    images:['WG1.png','WG2.png','WG3.png'],
    icons:[<FaJava className={iconDimensions}/>, <FaCss3Alt className={iconDimensions}/>],
    description:<>In the project <a href="https://www.ntnu.no/studier/emner/IDATT2001/2021/1#tab=omEmnet" className="hvr-underline-reveal">IDATT2001</a> I created an application that could simulate a battle between two armies. My tasks included writing the code for back-end, as well as providing a front-end for the user, which was done with JavaFX and CSS. This project enhanced my skills in regard to being able to apply object-oriented thinking to analyze and solve problems, and to apply elements from functional programming.</>,
    repo:"https://github.com/karofmah/War-Games"
  }
  const objectPF={
    title:"E-portfolio",
    images:['PF1.png','PF2.png','PF3.png'],
    icons:[ <TbBrandNextjs className={iconDimensions}/>, <SiTypescript className={iconDimensions}/>,<SiMui className={iconDimensions}/>,<SiTailwindcss className={iconDimensions}/>,<SiVercel className={iconDimensions}/>],
    description:"I developed this e-portfolio because of my interest within technology. Since my experience mainly was connected to back-end development, I wanted to enhance my knowledge and skills in front-end development and UI-design.",
    repo:"https://github.com/karofmah/my-eportfolio"


  }

  const [scrollTop, setScrollTop] = useState<number>(0);

  useEffect(() => {
    const handleScroll = (event: any) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);

    };
  }, []);

  return(
    <div className='flex bg-slate-200'> 
    <div className='sticky top-0 h-screen w-4/5'>
      <SideBar 
      tabRefs={refs}
      valueY={scrollTop}
      />
    </div>
       
      <div ref={aboutRef}  className='bg-slate-800 flex flex-col' >
        <About 
        description="
        My name is Karo Faraidoun mahmoud and in this e-portfolio you will gain an overview of my competences and experiences. Currently I am studying BSc in Computer Science at Norwegian University of Science and Technology (NTNU), where I have acquired knowledge and skills necessary to develop effective data systems with the users in focus. Through examples of work I have completed during my education, in the 'Course Projects' section, you will gain insight into how the competencies I have acquired align with an employment-related perspective. In addition, you may learn more about my personal projects in the 'My Projects' section. In the 'Work Experience' section, you will gain an understanding of the experiences I have obtained as a result of employment. If you have any inquiries or would like to discuss potential opportunities, I encourage you to reach out to me through the provided contact form. "
        imageURL="pb.png"
       />
        <div ref={courseRef}>

        <Typography className="font-bold left-0 text-3xl font-bold lg:text-4xl 2xl:text-5xl my-4 ml-8 " >Course projects</Typography>
        <Project
          object={objectEC}
          height="lg:h-40 lg:hover:h-72"
          width="lg:w-80"
          isGroup={true}
        />
        <Project
          object={objectSM}
          height="lg:h-60 lg:hover:h-5/6"
          width="lg:w-80"
          isGroup={true}
        />
       <Project
          object={objectCalculator}
          height="lg:h-40 lg:hover:h-60"
          width="lg:w-80"
          isGroup={false}
      />
     
     <Project
      
      object={objectTAS}
      height="lg:h-48 lg:hover:h-4/5"
      width="lg:w-80"
      isGroup={true}
      />  

       <Project
      object={objectWG}
      height="lg:h-40 lg:hover:h-80"
      width="lg:w-80"
      isGroup={false}
      />
   
      </div>
      <div ref={myRef}>


      <Typography className="font-bold left-0 text-3xl font-bold lg:text-4xl 2xl:text-5xl my-4 ml-8" >My projects</Typography>
      <Project
      object={objectPF}
      height="lg:h-60 lg:hover:h-52"
      width="lg:w-80"
      isGroup={false}
      />
      </div>


    <div ref={workRef}>

      <Typography className="font-bold left-0 text-3xl font-bold lg:text-4xl 2xl:text-5xl my-4 ml-8">Work experience</Typography>
    
     <Experience
      imageURL='/mentor.png'
      title="Mentor"
      description={experienceDescription}
        />
        </div>
        
      
      <div ref={contactRef}>

      <Typography className="font-bold left-0 text-3xl font-bold lg:text-4xl 2xl:text-5xl my-4 ml-8" >Contact me</Typography>
     <ContactForm/>
     </div>

     </div>

     
    </div>
    )
}


  
