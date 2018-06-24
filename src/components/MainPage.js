import React from 'react';
import Footer from './Footer';
import Header from './Header';
import MainPageContent from './MainPageContent';
import SubHeader from './SubHeader';

export const MainPage = () => (
  <div>
    <Header />
    <SubHeader />
    <MainPageContent />
    <Footer />
  </div>
);

export default MainPage;