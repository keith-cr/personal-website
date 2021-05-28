import * as React from 'react';
import classNames from 'classnames';
import { Link } from 'gatsby';

import SEO from '../components/seo';
import Footer from '../components/footer';
import NavBar from '../components/navbar';
import useDarkMode from '../hooks/useDarkMode';

// markup
const NotFoundPage = () => {
  let darkMode = useDarkMode();
  
  return (
    <>
      <SEO title="Page Not Found" description="The content you were looking for could not be found." />
      <section className={classNames('hero', 'hero-pnf', 'is-fullheight', { 'is-white': !darkMode.value }, { 'is-black': darkMode.value })}>
        <div className="hero-head">
          <NavBar active="home" darkMode={darkMode} />
        </div>

        <div className="hero-body">
          <div className="container has-text-centered intro-container">
            <h1 className="title pnf-text">
              Page Not Found
            </h1>
            <div className="subtitle is-size-3">
              The content you were looking for could not be found.
            </div>
            <Link to="/" className="button is-large is-primary">Go Home</Link>
          </div>
        </div>

        <div className="hero-foot">
          <Footer />
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
