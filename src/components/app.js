import React, { Component } from 'react';
import { Table } from './table';
import Pagination from 'react-js-pagination';
import players from '../players.json';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      recordsPerPage: 10,
      filterName: '',
      filterRegion: ''
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(pageNumber) {
    this.setState({ activePage: pageNumber });
  }

  onInputChange(recordsPerPage) {
    if (recordsPerPage > 0) {
      this.setState({ recordsPerPage: Number(recordsPerPage) })
    } else {
      this.setState({ recordsPerPage: '' })
    }
  }

  onNameChange(filterName) {
    this.setState({ filterName: filterName.toLowerCase() });
  }

  onRegionChange(filterRegion) {
    this.setState({ filterRegion: filterRegion.toLowerCase() });
  }

  renderRecordsField() {
    return (
      <div className='input-group  mb-2'>
        <div className='input-group-prepend'>
          <span className='input-group-text'>Records Per Page</span>
        </div>
        <input
          type='text'
          className='form-control col-2'
          value={this.state.recordsPerPage}
          onChange={e => this.onInputChange(e.target.value)}/>
      </div>
    );
  }

  renderNameFilter() {
    return (
      <div className='input-group  mb-2'>
        <div className='input-group-prepend'>
          <span className='input-group-text'>Name</span>
        </div>
        <input
          type='text'
          className='form-control col-3'
          value={this.state.filterName}
          onChange={e => this.onNameChange(e.target.value)}/>
      </div>
    );
  }

  renderRegionFilter() {
    return (
      <div className='input-group  mb-2'>
        <div className='input-group-prepend'>
          <span className='input-group-text'>Region</span>
        </div>
        <input
          type='text'
          className='form-control col-3'
          value={this.state.filterRegion}
          onChange={e => this.onRegionChange(e.target.value)}/>
      </div>
    );
  }

  render() {
    const start = (this.state.activePage - 1) * this.state.recordsPerPage;
    const end = start + this.state.recordsPerPage;
    const displayedTable = players
      .filter(player => {
        return player.name.toLowerCase().includes(this.state.filterName);
      })
      .filter(player => {
        for (let region of player.regions) {
          if (region.includes(this.state.filterRegion)) return true;
        }
        return false;
      })
      .slice(start, end);


    return (
      <div>
        <h1>Player Data</h1>
        <Pagination
          activePage={this.state.activePage}
          totalItemsCount={players.length}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />
        {/* Redunduncy for the input fields, redux-form can be useful here */}
        <div>
          {this.renderRecordsField()}
          {this.renderNameFilter()}
          {this.renderRegionFilter()}
        </div>
        <Table players={displayedTable}/>
      </div>
    );
  }
}
