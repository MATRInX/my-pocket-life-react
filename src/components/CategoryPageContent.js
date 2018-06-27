import React from 'react';

const CategoryPageContent = (props) => (
  <div>
    CategoryPageContent - category:
    <p>{props.match.params.category}</p>
  </div>
);

export default CategoryPageContent;