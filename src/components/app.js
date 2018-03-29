import React, { Component } from 'react';
import { Table } from './table';
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
      </div>
    );
  }
}
