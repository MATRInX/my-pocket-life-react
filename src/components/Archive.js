import React from 'react';
import { connect } from 'react-redux';
import selectArchiveCategory from '../selectors/archiveCategory';
import { setArchiveMonth, setArchiveYear } from '../actions/filters';
import { history } from '../routers/AppRouter';

export class Archive extends React.Component {
  state = {
    selectValue: this.props.selectValue ? this.props.selectValue : 
      this.props.filters.archiveMonth + '|' + this.props.filters.archiveYear
  };

  componentDidMount() {
    if (this.state.selectValue !== '0|0') {
      const filters = this.state.selectValue.split('|');
      this.props.setArchiveYear(Number(filters[1]));
      this.props.setArchiveMonth(Number(filters[0]));
    }
  }

  onSelectChange = e => {
    const selectValue = e.target.value;
    this.setState(() => ({ selectValue }));
    const filters = selectValue.split('|');
    this.props.setArchiveYear(Number(filters[1]));
    this.props.setArchiveMonth(Number(filters[0]));
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
  setArchiveYear: year => dispatch(setArchiveYear(year))
});

export default connect(mapStateToProps, mapDispatchToProps)(Archive);