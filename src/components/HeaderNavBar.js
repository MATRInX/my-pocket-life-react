import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LINKS from '../fixtures/links';
import { setPostsFilters } from '../actions/filters';

export class HeaderNavBar extends React.Component {
  onLinkClick = () => {
    this.props.clearFilters();
  };

  render() {
    return (
      <nav>
        <ul>
          <li onClick={this.onLinkClick}>
            <Link to={LINKS.HOME} >
              <FontAwesomeIcon icon="home" />
            </Link>
          </li>
          <li onClick={this.onLinkClick}>
            <Link to={LINKS.ABOUT_ME} >O mnie</Link>
          </li>
          <li onClick={this.onLinkClick}>
            <Link to={LINKS.CONTACT} >Kontakt</Link>
          </li>
          <li>
            <a href={LINKS.FACEBOOK} target="_blank">
              <FontAwesomeIcon icon={['fab', 'facebook-f']} />
            </a>
          </li>
          <li>
            <a href={LINKS.INSTAGRAM} target="_blank">
              <FontAwesomeIcon icon={['fab', 'instagram']} />
            </a>
          </li>
        </ul>
      </nav>
    );
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  clearFilters: () => dispatch(setPostsFilters('', ''))
});

export default connect(undefined, mapDispatchToProps)(HeaderNavBar);
