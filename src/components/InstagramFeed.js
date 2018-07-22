import React from 'react';
import { connect } from 'react-redux';

export const InstagramFeed = ({ instagramData }) => (
  <div>
    <p>InstagramFeed content</p>
    {
      instagramData.map((singleImage, index) => {
        return (
          <div key={index}>
            <a href={singleImage.link} target="_blank">
              <img src={singleImage.images.low_resolution.url}/>
            </a>
          </div>
        )
      })
    }
  </div>
);

const mapStateToProps = (state, props) => ({
  instagramData: state.instagram
});

export default connect(mapStateToProps)(InstagramFeed);