import { useState, useEffect } from 'react';

function useDarkMode() {
  const [darkMode, setDarkMode] = useState(null);

  useEffect(() => {
    if (localStorage.getItem('darkMode')) {
      setDarkMode(JSON.parse(localStorage.getItem('darkMode')));
    } else {
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);


  useEffect(() => {
    if (darkMode !== null) {
      localStorage.setItem('darkMode', JSON.stringify(darkMode));
      if (window) {
        document.documentElement.style.overflow = 'hidden';
        document.documentElement.setAttribute(
          'data-color-scheme',
          !darkMode ? 'light' : 'dark'
        );
        document.documentElement.style.overflow = '';   
        if (darkMode) {
          document.body.classList.add('has-background-black');
          document.body.classList.add('has-text-white');
        } else {
          document.body.classList.remove('has-background-black');
          document.body.classList.remove('has-text-white');
        }
      }
    }
  }, [darkMode]);

  return {
    value: darkMode,
    toggle: () => { setDarkMode(!darkMode); },
    turnOn: () => { setDarkMode(true); },
    turnOff: () => { setDarkMode(false); }
  };
}

export default useDarkMode;