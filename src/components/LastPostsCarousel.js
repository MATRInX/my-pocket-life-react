import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

const LastPostsCarousel = () => (
  <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} emulateTouch={true} autoPlay={true} 
    interval={5000}>
    <div>
      <img src="https://picsum.photos/200?image=0" width="200" height="200"/>
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img src="https://picsum.photos/200?image=1" width="200" height="200"/>
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img src="https://picsum.photos/200?image=2" width="200" height="200"/>
      <p className="legend">Legend 1</p>
    </div>
  </Carousel>
);

export default LastPostsCarousel;