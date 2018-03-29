import React, { Component } from 'react';
import { Table } from './table';
import ReactPaginate from 'react-paginate';
import players from '../players.json';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  handlePageClick() {
    console.log('page clicked');
  }

  render() {
    return (
      <div>
        <Table players={players.slice(0,5)}/>
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={<a href=''>...</a>}
          pageCount={10}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'} />
      </div>
    );
  }
}
