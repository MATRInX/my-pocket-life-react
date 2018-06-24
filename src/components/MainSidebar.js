import React from 'react';
import AboutMe from './AboutMe';
import Archive from './Archive';
import FavouritePosts from './FavouritePosts';
import FacebookFanpage from './FacebookFanpage';
import InstagramFeed from './InstagramFeed';

const MainSidebar = () => (
  <aside>
    <AboutMe />
    <InstagramFeed />
    <FavouritePosts />
    <FacebookFanpage />
    <Archive />
  </aside>
);

export default MainSidebar;