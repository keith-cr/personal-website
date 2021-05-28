import React, {useEffect, useState} from 'react';
import classNames from 'classnames';
import { Link } from 'gatsby';
import Toggle from 'react-toggle';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness2Icon from '@material-ui/icons/Brightness2';

import useDarkMode from '../hooks/useDarkMode';

export default function NavBar({ isTransparent, active, darkMode = useDarkMode() }) {
  const [isActive, setIsActive] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return  (
    <nav className={classNames('navbar is-spaced', { 'is-transparent': isTransparent }, { 'is-white': !darkMode.value }, { 'is-dark': darkMode.value })}>
      <div className="container">
        <div className="navbar-brand" id="brandKCR">
          <Link to="/" className="navbar-item">
            Keith Condray-Raderstorf
          </Link>
          <span className="navbar-burger" data-target="navbarMenuHeroC" onClick={() => { setIsActive(!isActive); }}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroC" className={classNames('navbar-menu', { 'is-active': isActive })}>
          <div className="navbar-start">
            <Link to="/" className={classNames('navbar-item', { 'is-active': active === 'home' })}>
              Home
            </Link>
            <Link to="/blog" className={classNames('navbar-item', { 'is-active': active === 'blog' })}>
              Blog
            </Link>
            <Link to="/about" className={classNames('navbar-item', { 'is-active': active === 'about' })}>
              About
            </Link>
          </div>
          
          <div className="navbar-end">
            <div className="navbar-item">
              { isClient && 
                <Toggle 
                  defaultChecked={!darkMode.value} 
                  icons={{
                    checked: <WbSunnyIcon />,
                    unchecked: <Brightness2Icon />,
                  }}
                  className='dark-mode-toggle'
                  onChange={ () => darkMode.toggle() }
                  aria-label={'Dark Mode Toggle'}
                  aria-required="true"
                />
              }
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}