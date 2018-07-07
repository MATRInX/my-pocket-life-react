import React from 'react';
import PostList from './PostsList';

const SearchPageContent = (props) => (
  <div>
    SearchPageContent content... - query string: 
    <p>{props.match.params.queryString}</p>
    <PostList />
  </div>
);

export default SearchPageContent;