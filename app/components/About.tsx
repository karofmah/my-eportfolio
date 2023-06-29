import Typography from "@mui/material/Typography";

export default function About(props:any){ 
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
        <div className="flex lg:w-xl lg:h-72 lg:mb-0 mb-8"> 
        <Typography className="text-xs lg:text-md md:text-sm sm:text-sm xs:text-xs xl:text-md 2xl:text-lg ">{props.description}</Typography>
        </div>
  
        <div className="bg-slate-100 text-black rounded-3xl opacity-60 w-3/4">
        <ul className="flex flex-col lg:mt-4 mt-10">
  
  {listItems.map((item, index) => (
      <li key={index} className='mb-6 ml-6 ' >
        <a href={item.link} className="flex">
          <img src={item.imgSrc} alt="" className={item.dimensions} />
          <Typography className='mt-1 ml-2 hvr-underline-from-left text-xs break-all'>{item.text}</Typography>
        </a>
      </li>
    ))}
  
  </ul>
        </div>
       
        </div>
        <div className="flex min-[481px]:flex-row min-[320px]:flex-col">
        <img src={props.imageURL} alt="Profile picture" className="opacity-80 hover:translate-x-1 hover:-translate-y-1 hover:shadow-2xl object-cover object-center max-w-md mx-8 mt-16 mr-16 rounded-full h-48 w-32 xs:h-32 sm:h-48 md:h-48 lg:h-3/5 lg:w-64 2xl:h-4/5 2xl:w-80 duration-200" />
  
  </div>
  
       
    </div>
     
  
  
    )
  }