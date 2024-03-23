import React, { useEffect } from 'react';
import './ScreenDimmer.css'; // Assume your CSS is in this file
import SearchBar from '../SearchBar/SearchBar';

const ScreenDimmer: React.FC = () => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.ctrlKey && event.key === 'f'|| event.ctrlKey && event.key === 'F' || event.ctrlKey && event.key === 'כ') {
        event.preventDefault();
        document.getElementById('overlay')!.style.display = 'block';
      }
      if (event.key === 'Escape') {
        document.getElementById('overlay')!.style.display = 'none';
      }
    };

    // Add event listener
    document.addEventListener('keydown', handleKeyDown);

    // Clean up
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
    <SearchBar />
    <div className="overlay" id="overlay"></div>
    </>
  );
};

export default ScreenDimmer;
