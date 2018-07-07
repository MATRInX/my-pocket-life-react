import React from 'react';
import Archive from './Archive';
import PostList from './PostsList';

const ArchivePageContent = ({ match }) => (
  <div>
    ArchivePageContent content...
    <PostList />
    <Archive selectValue={match.params.month +'|'+match.params.year}/>
  </div>
);

export default ArchivePageContent;