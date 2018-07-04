import React from 'react';
import { connect } from 'react-redux';
import selectArchiveCategory from '../selectors/archiveCategory';

export const Archive = ({ archiveData }) => (
  <div>
    <p>Archive content</p>
    <select>
    {
      archiveData.map((archiveItem, index) => {
        return (
          <option key={index} value={archiveItem.month}>{archiveItem.text}</option>
        )
      })
    }
    </select>
  </div>
);

const mapStateToProps = ({ posts } = state) => ({
  archiveData: selectArchiveCategory(posts)
});

export default connect(mapStateToProps)(Archive);