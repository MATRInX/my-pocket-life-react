import React from 'react';
import LINKS from '../fixtures/links';

const SubHeaderNavBar = () => (
  <ul>
    <li>
      <a href={LINKS.POCKET_SCRAPBOOKING}>
        Pocket Scrapbooking
      </a>
    </li>
    <li>
      <a href={LINKS.INSPIRATION}>
        Inspiracje
      </a>
    </li>
    <li>
      <a href={LINKS.DIY}>
        DIY
      </a>
    </li>
    <li>
      <a href={LINKS.REVIEWS}>
        Recenzje
      </a>
    </li>
    <li>
      <a href={LINKS.COMMUNITY}>
        Społeczność
      </a>
    </li>
  </ul>
);

export default SubHeaderNavBar;