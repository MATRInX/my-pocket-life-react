import React from 'react';
import FacebookProvider, { Page } from 'react-facebook';

const FacebookFanpage = () => (
  <div>
    <FacebookProvider appId={process.env.FB_APP_ID}>
      <Page href="https://www.facebook.com/MyPocketLife" tabs="timeline" />
    </FacebookProvider>
  </div>
);

export default FacebookFanpage;