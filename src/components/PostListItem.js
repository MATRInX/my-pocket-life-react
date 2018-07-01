import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import LINKS, { CATEGORIES } from '../fixtures/links';

moment.locale('pl');

export const PostListItem = ({id, image, url, published, title, labels, content}) => {
  const publishedFromNow = moment(published).fromNow();
  const labelsJsx = labels.map((label, index) => {
    switch(label){
      case CATEGORIES.POCKET_SCRAPBOOKING:
        return (
          <span key={index}>
            <Link to={LINKS.POCKET_SCRAPBOOKING}>
              {CATEGORIES.POCKET_SCRAPBOOKING}
            </Link> {index<labels.length-1 ? ', ': ''}
          </span>
        );
      case CATEGORIES.DIY:
        return (
          <span key={index}>
            <Link to={LINKS.DIY}>
              {CATEGORIES.DIY}
            </Link> {index<labels.length-1 ? ', ': ''}
          </span>
        );
      case CATEGORIES.INSPIRATION:
        return (
          <span key={index}>
            <Link to={LINKS.INSPIRATION}>
              {CATEGORIES.INSPIRATION}
            </Link> {index<labels.length-1 ? ', ': ''}
          </span>
        )
      case CATEGORIES.REVIEWS:
        return (
          <span key={index}>
            <Link to={LINKS.REVIEWS}>
              {CATEGORIES.REVIEWS}
            </Link> {index<labels.length-1 ? ', ': ''}
          </span>
        )
      case CATEGORIES.COMMUNITY:
        return (
          <span key={index}>
            <Link to={LINKS.COMMUNITY}>
              {CATEGORIES.COMMUNITY}
            </Link> {index<labels.length-1 ? ', ': ''}
          </span>
          )
      case CATEGORIES.NEWS:
        return (
          <span key={index}>
            <Link to={LINKS.NEWS}>
              {CATEGORIES.NEWS}
            </Link> {index<labels.length-1 ? ', ': ''}
          </span>
        )
    };
  });
  return (
    <div>
      <h2>{title}</h2>
      <p>{publishedFromNow}</p>
      <img src={image} />
      <p>{content}</p>
      {labelsJsx}
    </div>
  )
};

export default PostListItem;