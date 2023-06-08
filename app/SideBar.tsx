import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className='h-screen'
        sx={{ borderRight: 1, borderColor: 'divider', height:'screen'
    }}
      >
        <Tab label="About me" className='hover:text-indigo-600 mb-16'/>
        <Tab label="Course work" className='hover:text-indigo-600 mb-16' />
        <Tab label="Work experience" className='hover:text-indigo-600 mb-16'/>
        <Tab label="My projects" className='hover:text-indigo-600 mb-16' />
        <Tab label="Contact me" className='hover:text-indigo-600 mb-16' />

      </Tabs>
    

  );
}