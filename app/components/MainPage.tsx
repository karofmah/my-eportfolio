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

export default function MainPage (){ 
  const iconDimensions='h-16 w-24 mt-8 min-[480px]:mt-3 mt-10 self-center'
  
  const aboutRef = useRef<HTMLDivElement>(null);
  const courseRef = useRef<HTMLDivElement>(null);
  const myRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  var refs:any []=[aboutRef,courseRef, myRef,workRef,contactRef]

  const objectCB={
    title:"Commerce Bay",
    images:['CB1.png','CB2.png','CB3.png','CB4.png','CB5.png','CB6.png','CB7.png'],
    icons:[<FaVuejs className={iconDimensions}/>, <SiMysql className={iconDimensions}/>,<SiSpring className={iconDimensions}/>],
    description:"",
    repo:"https://github.com/karofmah/E-Commerce-Project"
    
  }

  const objectSM={
    title:"SmartMat",
    images:['SM1.png','SM2.png','SM3.png','SM4.png','SM5.png','SM6.png','SM7.png'],
    icons:[<FaVuejs className={iconDimensions}/>, <SiMysql className={iconDimensions}/>,<SiSpring className={iconDimensions}/>,<SiVuetify className={iconDimensions}/>],
    description:"",
    repo:""
    


  }
  
 
  const objectCalculator={
    title:"Calculator",
    images:['Calculator1.png','Calculator2.png','Calculator3.png'],
    icons:[<FaVuejs className={iconDimensions}/>, <SiMysql className={iconDimensions}/>,<SiSpring className={iconDimensions}/>],
    description:"",
    repo:"https://github.com/karofmah/IDATT2105-Full-Stack-Application-Development"


  }
  
  const objectTAS={
    title:"Tournament Administration System",
    images:['TAS1.png','TAS2.png','TAS3.png'],
    icons:[<FaJava className={iconDimensions}/>, <SiMysql className={iconDimensions}/>,<FaCss3Alt className={iconDimensions}/>],
    description:"I faget IDATT1002 ble det utdelt et gruppeprosjekt der oppgaven var å utvikle et verktøy for å administrere en turnering med flere lag. Min gruppe ble enige om å utføre prosjektet med NTNUI e-sport som kunde. Prosjektet bestod av flere deler, deriblant planlegging, utvikling av back-end og front-end, og integrering av database, i tillegg til en sluttrapport. I dette prosjektet bidro jeg hovedsakelig med å planlegge prosjektet, å fokusere på back-end av systemet og skrive sluttrapporten. Gjennom dette prosjektet i IDATT1002 har jeg lært meg å kunne jobbe effektivt og målrettet i et team mot et felles mål. For å gjøre dette har jeg brukt programmeringskompetanse i samspill med systemutviklingsmetoder.",
    repo:"https://github.com/karofmah/Tournament-Administration-System"
  }

  const objectWG={
    title:"War Games",
    images:['WG1.png','WG2.png','WG3.png'],
    icons:[<FaJava className={iconDimensions}/>, <FaCss3Alt className={iconDimensions}/>],
    description:"",
    repo:"https://github.com/karofmah/War-Games"
  }
  const objectPF={
    title:"E-portfolio",
    images:['PF1.png','PF2.png','PF3.png'],
    icons:[<FaReact className={iconDimensions}/>, <SiTypescript className={iconDimensions}/>,<SiMui className={iconDimensions}/>,<SiTailwindcss className={iconDimensions}/>,<SiVercel className={iconDimensions}/>],
    description:"",
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
    <div className='sticky top-0 h-screen w-4/5'
    
    >
      <SideBar 
      tabRefs={refs}
      valueY={scrollTop}
      />
    </div>
       
      <div ref={aboutRef}  className='bg-slate-800 flex flex-col' >
        <About 
        description="
        My name is Karo Faraidoun mahmoud and in this e-portfolio you will gain an overview of my competences and experiences. Currently I am studying BSc in Computer Science at Norwegian University of Science and Technology (NTNU), where I have acquired knowledge and skills necessary to develop effective data systems with the users in focus. Through examples of work I have completed during my education, in the 'Course Projects' section, you will gain insight into how the competencies I have acquired align with an employment-related perspective. In addition, you may learn more about my personal projects in the 'My Projects' section. I have also In the 'Work Experience' section, you will gain an understanding of the experiences I have obtained as a result of employment. If you have any inquiries or would like to discuss potential opportunities, I encourage you to reach out to me through the provided contact form. "
        imageURL="pb.png"
       />
        <div ref={courseRef} data-value={window.scrollY}>

        <Typography className="font-bold left-0 text-3xl font-bold lg:text-4xl 2xl:text-5xl my-4 ml-8 " >Course projects</Typography>
        <Project
          object={objectCB}
          height="lg:h-40"
          width="lg:w-80"
        />
        <Project
          object={objectSM}
          height="lg:h-60"
          width="lg:w-80"
        />
       <Project
          object={objectCalculator}
          height="lg:h-40"
          width="lg:w-80"
      />
     
     <Project
      
      object={objectTAS}
      height="lg:h-48"
      width="lg:w-80"
      />  

       <Project
      object={objectWG}
      height="lg:h-40"
      width="lg:w-80"
      />
   
      </div>
      <div ref={myRef}>


      <Typography className="font-bold left-0 text-3xl font-bold lg:text-4xl 2xl:text-5xl my-4 ml-8" >My projects</Typography>
      <Project
      time="Time"
      object={objectPF}
      height="lg:h-60"
      width="lg:w-80"
      />
      </div>


    <div ref={workRef}>

      <Typography className="font-bold left-0 text-3xl font-bold lg:text-4xl 2xl:text-5xl my-4 ml-8">Work experience</Typography>
    
     <Experience
      imageURL='/mentor.png'
      title="Mentor"
      descriptionOne="I august 2022 fikk jeg jobb som mentor i MentorNorge som er landets største privatundervisningstilbyder. Jobben har gitt meg muligheten til å hjelpe elever med lekser, fag og annet skolearbeid, samtidig som jeg skaper motivasjon og lærelyst. Grunnen til at jeg søkte på jobben er at jeg ønsket å gi elevene en mestringsfølelse, og dermed øke motivasjonen for skolearbeid."
      descriptionTwo="I jobben som mentor er jeg hovedsakelig åpen for undervisning i matematikk på grunnskolen, ungdomsskolen og videregående. Arbeidsoppgavene innebærer å planlegge undervisningstimer og tilpasse undervisningen til eleven. Undervisningen kan altså variere fra elev til elev, og avhenger av nivå i ulike temaer. I tillegg er utviklingen til eleven gjennom året viktig for hvordan undervisningen utvikler seg. Dette er slik en mentor må observere og tilpasse ut ifra."
      descriptionThree="Erfaringer jeg har tilegnet meg er at det er nødvendig å skape god kjemi med mennesker, og sørge for å bygge på et elev-til-elev konsept. Jeg har også lært noen formidlingsmetoder som kan være nyttig som et verktøy til å lære bort avanserte temaer til andre. Dette gjelder ikke bare i undervisningssammenheng, men også i forbindelse med prosjektarbeid."
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


  
