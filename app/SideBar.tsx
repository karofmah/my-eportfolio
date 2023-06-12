import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}


export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider'
    }} 
   
      >
        <Tab label="About me" className='hover:text-indigo-600 mb-16'/>
        <Tab label="Course projects" className='hover:text-indigo-600 mb-16' />
        <Tab label="My projects" className='hover:text-indigo-600 mb-16'/>
        <Tab label="Work experience" className='hover:text-indigo-600 mb-16' />
        <Tab label="Contact me" className='hover:text-indigo-600 mb-16' />

      </Tabs>
    

  );
}