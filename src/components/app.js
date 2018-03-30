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
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(pageNumber) {
    this.setState({ activePage: pageNumber });
    console.log(`active page is ${pageNumber}`);
  }

  onInputChange(recordsPerPage) {
    if (recordsPerPage > 0) {
      this.setState({ recordsPerPage: Number(recordsPerPage) })
    } else {
      this.setState({ recordsPerPage: '' })
    }
    console.log(`per page is now ${recordsPerPage}`);
  }

  renderInputField() {
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
    )
  }

  render() {
    const start = (this.state.activePage - 1) * this.state.recordsPerPage;
    const end = start + this.state.recordsPerPage;

    console.log(start,end);

    return (
      <div>
        <h1>Player Data</h1>
        <Pagination
          activePage={this.state.activePage}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />
        <h5>Current Page: {this.state.activePage}</h5>
        {this.renderInputField()}
        <Table players={players.slice(start, end)}/>
      </div>
    );
  }
}
