import React, { useEffect } from 'react';
import { init } from 'ityped';
import classNames from 'classnames';

import SEO from '../components/seo';
import Footer from '../components/footer';
import NavBar from '../components/navbar';
import useDarkMode from '../hooks/useDarkMode';

const IndexPage = () => {
  useEffect(() => {
    const typeIn1 = document.querySelector('.type-in-1');
    typeIn1.innerHTML = '';
    const typeIn2 = document.querySelector('.type-in-2');
    typeIn2.innerHTML = '';
    const typeIn3 = document.querySelector('.type-in-3');
    typeIn3.innerHTML = '';
    const typeIn4 = document.querySelector('.type-in-4');
    typeIn4.innerHTML = '';
    let init4 = () => {
      init(typeIn4, { showCursor: false, strings: [', Pro Athlete', ' '], disableBackTyping: true, startDelay: 0, backDelay:  2000, backSpeed:  75 });
    };
    let init3 = () => {
      init(typeIn3, { showCursor: false, strings: ['Student, Software Developer, Entrepreneur'], disableBackTyping: true, startDelay: 1000, onFinished: init4 });
    };
    let init2 = () => {
      init(typeIn2, { showCursor: false, strings: [', I\'m Keith'], disableBackTyping: true, startDelay: 2000, onFinished: init3 });
    };
    init(typeIn1, { showCursor: false, strings: ['Hi'], disableBackTyping: true, onFinished: init2 });
  }, []);

  let darkMode = useDarkMode();

  return (
    <>
      <SEO
        title="Home"
        keywords={['blog', 'developer', 'keith', 'condray', 'raderstorf']}
        description="The personal website and blog of Keith Condray-Raderstorf."
      />
      <section className={classNames('hero', 'is-fullheight', { 'is-white': !darkMode.value }, { 'is-black': darkMode.value })}>
        <div className="hero-head">
          <NavBar active="home" darkMode={darkMode} />
        </div>

        <div className="hero-body">
          <div className="container has-text-centered intro-container">
            <h1 className="title intro-text">
              <span className="type-in-1"></span><span className="hand"><span className="wave">👋</span></span><span className="type-in-2"></span>
            </h1>
            <div className="subtitle is-size-3">
              <span className="type-in-3"></span>
              <div className="type-in-4 strikethrough"></div>
            </div>
          </div>
        </div>

        <div className="hero-foot">
          <Footer />
        </div>
      </section>
    </>
  );
};
export default IndexPage;
