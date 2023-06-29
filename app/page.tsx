'use client'
import React, { useState, useEffect } from 'react';
import MainPage from './components/MainPage';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="bg-slate-800">
        <Box className="h-screen flex items-center justify-center">
      <CircularProgress  />
    </Box>

        </div>
      ) : (
        <MainPage/>
      )}
    </div>
  );
}
