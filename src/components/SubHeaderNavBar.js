import React from 'react';
import { Link } from 'react-router-dom';
import LINKS from '../fixtures/links';

const SubHeaderNavBar = () => (
  <ul>
    <li>
      <Link to={LINKS.POCKET_SCRAPBOOKING}>
        Pocket Scrapbooking
      </Link>
    </li>
    <li>
      <Link to={LINKS.INSPIRATION}>
        Inspiracje
      </Link>
    </li>
    <li>
      <Link to={LINKS.DIY}>
        DIY
      </Link>
    </li>
    <li>
      <Link to={LINKS.REVIEWS}>
        Recenzje
      </Link>
    </li>
    <li>
      <Link to={LINKS.COMMUNITY}>
        Społeczność
      </Link>
    </li>
  </ul>
);

export default SubHeaderNavBar;