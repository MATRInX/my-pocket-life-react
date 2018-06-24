import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LINKS from '../fixtures/links';

const HeaderNavBar = () => (
  <nav>
    <ul>
      <li>
        <a href={LINKS.HOME}>
          <FontAwesomeIcon icon="home" />
        </a>
      </li>
      <li>
        <a href={LINKS.ABOUT_ME}>O mnie</a>
      </li>
      <li>
        <a href={LINKS.CONTACT}>Kontakt</a>
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
