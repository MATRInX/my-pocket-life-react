import React from 'react';
import Archive from './Archive';

const ArchivePageContent = ({ match }) => (
  <div>
    ArchivePageContent content...
    <Archive selectValue={match.params.month +'|'+match.params.year}/>
  </div>
);

export default ArchivePageContent;