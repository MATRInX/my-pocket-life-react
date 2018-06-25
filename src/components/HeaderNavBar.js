import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LINKS from '../fixtures/links';

const HeaderNavBar = () => (
  <nav>
    <ul>
      <li>
        <Link to={LINKS.HOME}>
          <FontAwesomeIcon icon="home" />
        </Link>
      </li>
      <li>
        <Link to={LINKS.ABOUT_ME}>O mnie</Link>
      </li>
      <li>
        <Link to={LINKS.CONTACT}>Kontakt</Link>
      </li>
      <li>
        <a href={LINKS.FACEBOOK} target="_blank">
          <FontAwesomeIcon icon={['fab', 'facebook-f']} />
        </a>
      </li>
      <li>
        <a href={LINKS.INSTAGRAM} target="_blank">
          <FontAwesomeIcon icon={['fab', 'instagram']} />
        </a>
      </li>
    </ul>
  </nav>
)

export default HeaderNavBar;  
