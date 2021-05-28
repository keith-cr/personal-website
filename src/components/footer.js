import React from 'react';
import { IconContext } from 'react-icons';
import { FaGithub, FaTwitter, FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa';

export default function footer() {
  return  (
    <footer className="footer">
      <div className="content has-text-centered">
        <div className="footer-icons">
          <IconContext.Provider value={{ size: '1.3em' }}>
            <a href='https://github.com/keith-cr' target='_blank' rel="noreferrer"><FaGithub /></a>
            <a href='https://twitter.com/keithc_r' target='_blank' rel="noreferrer"><FaTwitter style={{marginLeft: 12}} /></a>
            <a href='https://linkedin.com/in/keith-cr' target='_blank' rel="noreferrer"><FaLinkedinIn style={{marginLeft: 12}} /></a>
            <a href='mailto:keith@kmddigital.com'><FaRegEnvelope style={{marginLeft: 12}} /></a>
          </IconContext.Provider>
        </div>
        <p className="copyright">
          Copyright &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}