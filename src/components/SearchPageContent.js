import React from 'react';

const SearchPageContent = (props) => (
  <div>
    SearchPageContent content... - query string: {props.match.params.queryString}
  </div>
);

export default SearchPageContent;