import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { LINKS } from '../fixtures/links';
import selectAboutMePage from '../selectors/aboutMePage';

export const AboutMe = ({ aboutMePage }) => (
  <div>
    {
      aboutMePage === undefined ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h2>Kilka słów o mnie</h2>
          <Link to={LINKS.ABOUT_ME}>
            <img src={aboutMePage.image}/>
          </Link>
          <p>
            Mam na imię Aneta i od półtora roku jestem mamą. Wraz z mężem i synem mieszkamy w Tarnowskich Górach.
          </p>
          <Link to={LINKS.ABOUT_ME}>Czytaj więcej...</Link>
        </div>
      )
    }    
  </div>
);

const mapStateToProps = ({ pages } = state) => ({
  aboutMePage: selectAboutMePage(pages)
});

export default connect(mapStateToProps)(AboutMe);