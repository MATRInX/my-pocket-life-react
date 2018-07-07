import React from 'react';
import { connect } from 'react-redux';
import selectArchiveCategory from '../selectors/archiveCategory';
import { setArchiveMonth, setArchiveYear, setPostsFilters } from '../actions/filters';
import { FILTER_TYPE } from '../actions/types';
import { history } from '../routers/AppRouter';

export class Archive extends React.Component {
  state = {
    selectValue: this.props.selectValue ? this.props.selectValue : '0|0'
  };

  componentDidMount() {
    if (this.state.selectValue !== '0|0' && this.state.selectValue !== this.props.filters.filterValue) {
      this.props.setPostsFilter(this.state.selectValue);
    }
  }

  onSelectChange = e => {
    const selectValue = e.target.value;
    this.setState(() => ({ selectValue }));
    this.props.setPostsFilter(selectValue);
    const filters = selectValue.split('|');
    history.push(`/archiwum/${filters[1]}/${filters[0]}`);
  }

  render() {
    return (
      <div>
        <p>Archive content: {this.state.selectValue}</p>
        <select 
          value={this.state.selectValue}
          onChange={this.onSelectChange}
        >
          <option value="0|0">Wybierz miesiąc...</option>
          {
            this.props.archiveData.map((archiveItem, index) => {
              return (
                <option 
                  key={index} 
                  value={archiveItem.month+'|'+archiveItem.year}
                >
                  {archiveItem.text}  
                </option>
              )
            })
          }
        </select>
      </div>
    );
  }
};

const mapStateToProps = ({ posts, filters } = state) => ({
  archiveData: selectArchiveCategory(posts),
  filters
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setArchiveMonth: month => dispatch(setArchiveMonth(month)),
  setArchiveYear: year => dispatch(setArchiveYear(year)),
  setPostsFilter: filterValue => dispatch(setPostsFilters(FILTER_TYPE.ARCHIVE, filterValue))
});

export default connect(mapStateToProps, mapDispatchToProps)(Archive);