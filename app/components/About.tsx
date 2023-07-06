import Typography from "@mui/material/Typography";
import {SiGithub, SiLinkedin} from 'react-icons/si';
import {AiOutlineMail, AiOutlinePhone, AiOutlineFileText} from 'react-icons/ai';
import {BiMap} from "react-icons/bi";


export default function About(props:any){ 

  const iconStyle='w-8 h-8 hover:scale-125 duration-200'

    const listItems:any[] = [
      {
        link: 'https://github.com/karofmah',
        icon: <SiGithub  className={iconStyle}/>,
        text: 'Github',
      },
      {
        link: 'mailto:karo.f.mahmoud@gmail.com',
        icon: <AiOutlineMail className={iconStyle}/>,
        text: 'karo.f.mahmoud@gmail.com',
      },
      {
        link: 'MinCV.pdf',
        icon: <AiOutlineFileText className={iconStyle}/> ,
        text: 'CV',
      },
      {
        link: 'https://www.linkedin.com/in/karo-mahmoud-933875248/',
        icon: <SiLinkedin className={iconStyle}/>,
        text: 'Linkedin',  
      },
      {
        link: 'tel:+4746918226',
        icon: <AiOutlinePhone className={iconStyle}/>,
        text: '+47 469 18 226',
      },
      {
        link: 'https://goo.gl/maps/WCGDxMcvAadhjVfi9',
        icon: <BiMap className={iconStyle}/>,
        text: 'Norge, Trondheim Singsakerbakken 4F, 7030',
      }
    ];
   
    /*eslint-disable*/
    return(   
      <div className="flex flex-col lg:flex-row border-b w-11/12 border-white pb-12 ml-8">
  
        <div className="flex flex-col ">
          <Typography className="font-bold left-0 text-3xl font-bold lg:text-4xl 2xl:text-5xl my-4">About me</Typography>
        <div className="flex lg:w-xl lg:h-72 lg:mb-0 mb-8"> 
        <Typography className="text-xs lg:text-md md:text-sm sm:text-sm xs:text-xs xl:text-md 2xl:text-lg ">{props.description}</Typography>
        </div>
  
        <div className="bg-slate-100 text-black rounded-3xl w-3/4">
          <ul className="flex flex-col lg:mt-4 mt-10">
    
            {listItems.map((item, index) => (
                <li key={index} className='mb-6 ml-6 ' >
                  <a href={item.link} className="flex">
                  {item.icon}
                    <Typography className='mt-1 ml-2 hvr-underline-from-left text-xs break-all'>{item.text}</Typography>
                  </a>
                </li>
              ))}
          </ul>
      </div>
        </div>
        <img src={props.imageURL} alt="Profile picture" className="opacity-80 hover:translate-x-1 hover:-translate-y-1 hover:shadow-2xl object-cover object-center max-w-md mx-8 mt-16 mr-16 rounded-full h-48 w-32 xs:h-32 sm:h-48 md:h-48 lg:h-3/5 lg:w-64 2xl:h-4/5 2xl:w-80 duration-200" />
    </div>
     
    )
  }