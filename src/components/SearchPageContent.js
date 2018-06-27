import React from 'react';

const SearchPageContent = (props) => (
  <div>
    SearchPageContent content... - query string: 
    <p>{props.match.params.queryString}</p>
  </div>
);

export default SearchPageContent;