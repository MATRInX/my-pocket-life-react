import React from 'react';
import { Link } from 'react-router-dom';
import LINKS from '../fixtures/links';

const SubHeaderLogo = () => (
  <div>
    <Link to={LINKS.HOME}>
      <img src="/images/mypocketlifev2.png" />
    </Link>
  </div>
);

export default SubHeaderLogo;