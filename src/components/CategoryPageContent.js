import React from 'react';

const CategoryPageContent = (props) => (
  <div>
    CategoryPageContent - category = {props.match.params.category}
  </div>
);

export default CategoryPageContent;