import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import SEO from '../components/seo';
import Footer from '../components/footer';
import NavBar from '../components/navbar';
import SchoolIcon from '@material-ui/icons/School';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import WorkIcon from '@material-ui/icons/Work';

const BlogPage = () => {
  const resumeEmailURL = 'mailto:keith@kmddigital.com?subject=Resume%20Request&body=Hello%20Keith%2C%0A%0AI\'m%20contacting' + 
    '%20you%20to%20request%20a%20copy%20of%20your%20resume.';

  const workIconStyle = { background: '#357DED', color: '#fff'  };
  const schoolIconStyle = { background: '#9A0913', color: '#fff' };
  const projectIconStyle = { background: '#F3B700', color: '#fff' };

  return (
    <>
      <SEO title="About" description="My name is Keith and I'm a entrepreneur, software developer and student." />
      <NavBar active="about" />
      <div className=" section pb-0">
        <div className="container">
          <h1 className="title is-1">About Me</h1>
          <p className="mb-2">My name is Keith and I&apos;m an entrepreneur, software developer and student.</p>
          <p className="mb-2">I&apos;m currently studying computer science at Rose-Hulman Institute of Technology. In the little free time I 
            have, I enjoy video games, music, and making memories with friends.</p>
          <p className="mb-2">In addition to my studies, I&apos;ve created several startups and worked on various side projects. I will occasionally do work for my 
            company, <a href="https://kmddigital.com">KMD Digital</a>. Request my <a href={resumeEmailURL}>resume</a> for more information about 
            my skills and previous experience.</p>
          <h2 className="title is-2 mt-4 mb-4">My History</h2>
        </div>
      </div>
      <div className="section timeline">
        <div className="container">
          <VerticalTimeline className="kcr-vertical-timeline">
            <VerticalTimelineElement 
              intersectionObserverProps={{ triggerOnce: true }}
              className="vertical-timeline-element--work"
              date="June 2021 - August 2021"
              iconStyle={workIconStyle}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Amazon</h3>
              <h4 className="vertical-timeline-element-subtitle">Software Development Engineer Intern</h4>
              <div className="tags">
                <span className="tag tag-node is-small">Node.js</span>
                <span className="tag tag-react is-small">React</span>
                <span className="tag tag-java is-small">Java</span>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement 
              intersectionObserverProps={{ triggerOnce: true }}
              className="vertical-timeline-element--work"
              date="June 2020 - August 2020"
              iconStyle={workIconStyle}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Vibenomics</h3>
              <h4 className="vertical-timeline-element-subtitle">Software Developer Intern</h4>
              <div className="tags">
                <span className="tag tag-node is-small">Node.js</span>
                <span className="tag tag-react is-small">React</span>
              </div>
              <p>
                During the summer of 2020, I worked remotely at Vibenomics as a Software Developer Intern. At Vibenomics, I worked on the backend API in Node.js and their front-end web application written in React. I was the only team member consistently working on both pieces of the system at the same time, splitting my time between each. In addition, I also worked on automated testing, running Selenium tests (via WebdriverIO) for the web application.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              intersectionObserverProps={{ triggerOnce: true }}
              className="vertical-timeline-element--work"
              date="June 2019 - August 2019"
              iconStyle={workIconStyle}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Legislative Services Agency</h3>
              <h4 className="vertical-timeline-element-subtitle">Software Developer Intern</h4>
              <div className="tags">
                <span className="tag tag-python is-small">Python</span>
              </div>
              <p>
                During the summer of 2019, I worked for the Legislative Services Agency of the Indiana State Government as a Software Developer Intern. I worked on various bug fixes and improvements to their many Django web applications used by the Indiana General Assembly representatives and staff. 
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              intersectionObserverProps={{ triggerOnce: true }}
              className="vertical-timeline-element--education"
              date="August 2018 - May 2022"
              iconStyle={schoolIconStyle}
              icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">Rose-Hulman Institue of Technology</h3>
              <h4 className="vertical-timeline-element-subtitle">BS in Computer Science</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              intersectionObserverProps={{ triggerOnce: true }}
              className="vertical-timeline-element--project"
              date="June 2016 - August 2018"
              iconStyle={projectIconStyle}
              icon={<ImportantDevicesIcon />}
            >
              <h3 className="vertical-timeline-element-title">WaitMate</h3>
              <h4 className="vertical-timeline-element-subtitle">Founder</h4>
              <div className="tags">
                <span className="tag tag-node is-small">Node.js</span>
                <span className="tag tag-html is-small">HTML/CSS</span>
                <span className="tag is-small">iOS</span>
                <span className="tag is-small">Android</span>
              </div>
              <p>
                As a product of KMD Digital, I also founded and run WaitMate. I programmed the backend, website frontend, and mobile app, all with various frameworks using Javascript. In addition, I did basic branding and marketing tasks to help form WaitMate&apos;s identity.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              intersectionObserverProps={{ triggerOnce: true }}
              className="vertical-timeline-element--education"
              date="August 2014 - June 2018"
              iconStyle={schoolIconStyle}
              icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">Columbus Academy</h3>
              <h4 className="vertical-timeline-element-subtitle">High School</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              intersectionObserverProps={{ triggerOnce: true }}
              className="vertical-timeline-element--project"
              date="June 2014 - August 2016"
              iconStyle={projectIconStyle}
              icon={<ImportantDevicesIcon />}
            >
              <h3 className="vertical-timeline-element-title">Feedopoly</h3>
              <h4 className="vertical-timeline-element-subtitle">Founder</h4>
              <div className="tags">
                <span className="tag tag-wordpress is-small">WordPress</span>
              </div>
              <p>
                As my second side project, Feedopoly was a WordPress multisite that allowed users to sign up and create their own websites. I researched and installed popular plug-ins and themes, in addition to configuring the sitewide plugins that enabled the multisite.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              intersectionObserverProps={{ triggerOnce: true }}
              className="vertical-timeline-element--project"
              date="July 2013 - September 2014"
              iconStyle={projectIconStyle}
              icon={<ImportantDevicesIcon />}
            >
              <h3 className="vertical-timeline-element-title">Business Media</h3>
              <h4 className="vertical-timeline-element-subtitle">Founder</h4>
              <div className="tags">
                <span className="tag tag-html is-small">HTML/CSS</span>
              </div>
              <p>
                Business Media was my first side project. The goal was for it to be a social media platform for businesses to interact with customers. After purchasing the source code for a social media website template, I modified the frontend to suit my needs.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;