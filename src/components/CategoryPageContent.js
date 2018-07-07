import React from 'react';
import PostsList from './PostsList';

const CategoryPageContent = (props) => (
  <div>
    CategoryPageContent - category:
    <p>{props.match.params.category}</p>
    <PostsList />
  </div>
);

export default CategoryPageContent;