'use client'
import React, { useState, useEffect } from 'react';
import CircularIndeterminate from './Progress';
import MainPage from './MainPage';

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
        <CircularIndeterminate />

        </div>
      ) : (
        <MainPage/>
      )}
    </div>
  );
}
