import React from 'react';
import { connect } from 'react-redux';
import { history } from '../routers/AppRouter';
import { setPostsFilters } from '../actions/filters';
import { FILTER_TYPE } from '../actions/types';

export class HeaderSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queryString: props.searchText ? props.searchText : ''
    };
  };

  onSubmit = e => {
    e.preventDefault();
    const queryString = this.state.queryString;
    this.props.setSearchFilter(queryString);
    this.setState(() => ({ queryString: '' }));   
    history.push(`/szukaj/${queryString}`);
  };

  onQueryStringChange = e => {
    const queryString = e.target.value;
    this.setState(() => ({ queryString }));
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input 
          type="search"
          value={this.state.queryString}
          onChange={this.onQueryStringChange}
          placeholder="Szukaj..."
        />
      </form>
    );
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  setSearchFilter: (searchText) => dispatch(setPostsFilters(FILTER_TYPE.SEARCH, searchText))
});

export default connect(undefined, mapDispatchToProps)(HeaderSearch);