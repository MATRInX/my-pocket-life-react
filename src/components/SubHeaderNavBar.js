import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../fixtures/links';

const SubHeaderNavBar = () => {
  const linksArray = [];
  let index = 0;
  for (const prop in CATEGORIES) {
    if (prop !== 'NEWS') {
      linksArray.push(
        <li key={index++}>
          <Link to={CATEGORIES[prop].link}>
            {CATEGORIES[prop].name}
          </Link>
        </li>
      )
    }
  };
  
  return (
    <ul>
      {linksArray}
    </ul>
  )
};

export default SubHeaderNavBar;