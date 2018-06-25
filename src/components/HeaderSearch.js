import React from 'react';
import { history } from '../routers/AppRouter';

class HeaderSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queryString: ''
    };
  };

  onSubmit = e => {
    e.preventDefault();
    const queryString = this.state.queryString;
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

export default HeaderSearch;