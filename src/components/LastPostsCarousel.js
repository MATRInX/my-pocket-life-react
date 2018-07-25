import React from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import selectLastPostsCarousel from '../selectors/lastPostsCarousel';

const temporaryStyle = {
  width: '400px'
};

const pStyle = {
  background: 'transparent',
  color: 'black',
  fontWeight: '700',
  textTransform: 'uppercase'
};

export const LastPostsCarousel = ({ carouselPosts } = props) => (
  <div style={temporaryStyle}>
    {
      carouselPosts.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <Carousel 
          autoPlay={true} 
          emulateTouch={true} 
          infiniteLoop={true} 
          interval={5000}
          showIndicators={false}
          showStatus={false} 
          showThumbs={false} 
        >
          {
            carouselPosts.map((singlePost, index) => (
              <div key={index}>
                <img src={singlePost.image} width="300" height="300"/>
                <p className="legend" style={pStyle}>{singlePost.title}</p>
              </div>
            ))
          }      
        </Carousel>
      )
    }    
  </div>
);

const mapStateToProps = ({ posts } = state) => ({
  carouselPosts: selectLastPostsCarousel(posts)
});

export default connect(mapStateToProps)(LastPostsCarousel);