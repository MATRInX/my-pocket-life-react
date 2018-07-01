import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../fixtures/links';

moment.locale('pl');

export const PostListItem = ({id, image, url, published, title, labels, content}) => {
  const publishedFromNow = moment(published).fromNow();
  const shortUrl = `/post${url.substr(url.lastIndexOf('/'))}`;
  const labelComponent = labels.map((label, index) => {
    for (const prop in CATEGORIES) {
      if(label === CATEGORIES[prop].name) {
        return (
          <span key={index}>
            <Link to={CATEGORIES[prop].link}>
              {CATEGORIES[prop].name}
            </Link>
            {index < labels.length-1 ? ', ': ''}
          </span>
        );
      };
    };
  });
  return (
    <div>
      <Link to={shortUrl}>
        <h2>{title}</h2>
      </Link>
      <p>{publishedFromNow}</p>
      <Link to={shortUrl}>
        <img src={image} />
      </Link>
      <p>{content}</p>
      {labelComponent}
    </div>
  )
};

export default PostListItem;