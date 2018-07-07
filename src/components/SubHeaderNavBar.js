import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../fixtures/links';
import { FILTER_TYPE } from '../actions/types';
import { setPostsFilters } from '../actions/filters';

export class SubHeaderNavBar extends React.Component {

  onPocketScrapbookingClick = () => this.props.setCategoryPocketScrapbookingFilter();

  onInspirationClick = () => this.props.setCategoryInspirationFilter();

  onDiyClick = () => this.props.setCategoryDiyFilter();

  onReviewClick = () => this.props.setCategoryReviewsFilter();

  onCommunityClick = () => this.props.setCategoryCommunityFilter();

  render() {
    return (
      <ul>
        <li onClick={this.onPocketScrapbookingClick}>
          <Link to={CATEGORIES.POCKET_SCRAPBOOKING.link}>
            {CATEGORIES.POCKET_SCRAPBOOKING.name}
          </Link>
        </li>
        <li onClick={this.onInspirationClick}>
          <Link to={CATEGORIES.INSPIRATION.link}>
            {CATEGORIES.INSPIRATION.name}
          </Link>
        </li>
        <li onClick={this.onDiyClick}>
          <Link to={CATEGORIES.DIY.link}>
            {CATEGORIES.DIY.name}
          </Link>
        </li>
        <li onClick={this.onReviewClick}>
          <Link to={CATEGORIES.REVIEWS.link}>
            {CATEGORIES.REVIEWS.name}
          </Link>
        </li>
        <li onClick={this.onCommunityClick}>
          <Link to={CATEGORIES.COMMUNITY.link}>
            {CATEGORIES.COMMUNITY.name}
          </Link>
        </li>
      </ul>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  setCategoryPocketScrapbookingFilter: () => 
    dispatch(setPostsFilters(FILTER_TYPE.CATEGORY, CATEGORIES.POCKET_SCRAPBOOKING.name)),
  setCategoryInspirationFilter: () => 
    dispatch(setPostsFilters(FILTER_TYPE.CATEGORY, CATEGORIES.INSPIRATION.name)),
  setCategoryDiyFilter: () => 
    dispatch(setPostsFilters(FILTER_TYPE.CATEGORY, CATEGORIES.DIY.name)),
  setCategoryReviewsFilter: () => 
    dispatch(setPostsFilters(FILTER_TYPE.CATEGORY, CATEGORIES.REVIEWS.name)),
  setCategoryCommunityFilter: () => 
    dispatch(setPostsFilters(FILTER_TYPE.CATEGORY, CATEGORIES.COMMUNITY.name))
});

export default connect(undefined, mapDispatchToProps)(SubHeaderNavBar);