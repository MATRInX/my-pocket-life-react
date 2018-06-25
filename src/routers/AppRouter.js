import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AboutMePageContent from '../components/AboutMePageContent';
import ContactPageContent from '../components/ContactPageContent';
import CategoryPageContent from '../components/CategoryPageContent';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainPageContent from '../components/MainPageContent';
import SearchPageContent from '../components/SearchPageContent';
import SubHeader from '../components/SubHeader';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
    <Header />
    <SubHeader />
    <Switch>
      <Route path="/" component={MainPageContent} exact={true}/>
      <Route path="/o-mnie" component={AboutMePageContent} />
      <Route path="/kontakt" component={ContactPageContent} />
      <Route path="/szukaj/:queryString" component={SearchPageContent} />
      <Route path="/kategoria/:category" component={CategoryPageContent} />
    </Switch>
    <Footer />
    </div>
  </Router>
);

export default AppRouter;